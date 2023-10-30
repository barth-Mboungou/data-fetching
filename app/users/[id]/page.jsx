//dynamic data

import getUser from "@/app/libs/getUser"
import getUserPosts from "@/app/libs/getUserPosts"
import { Suspense } from "react"
import UserPosts from "@/app/components/UserPosts"

export default async function UserPage({params: {id}}){
            // const userData = await getUser(id)
            // initiate both request in parallel
        
        const userData = getUser(id)
        const userPosts = getUserPosts(id)

        // // await for both request to complete 
        // const [user, posts] = await Promise.all([userData, userPosts])

        const user = await userData

    return (
        <div className="text-center mt-20">
            <h1 className="text-5xl font-bold">User Information</h1>
            <p className="text-3xl mt-3">{user.name}</p>
            {/* {posts.map(post =>{
                return(
                    <p key={post.id} className="text-3xl mt-3">
                        {post.title}
                    </p>
                )
            })} */}

            <Suspense fallback={<p className="text-center text-5xl">Loading ....</p>}>
            <UserPosts promise={userPosts}/>
            </Suspense>
        </div>
    )
}