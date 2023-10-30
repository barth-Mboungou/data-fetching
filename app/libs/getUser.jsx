// recuperation d'un seul user

export default async function getUser(id){
    const res = await fetch (`https://jsonplaceholder.typicode.com/users/${id}`)

    if(!res.ok){
        throw new Error ('failed to fetch user')
    }

    return res.json()
}