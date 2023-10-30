// import Image from "next/image";

import Link from "next/link";

// async function getDogs(){

//   const response = await fetch('https://dog.ceo/api/breeds/image/random', {
//     cache: 'no-cache'
//   })
//   const data = await response.json()

//   return data
// }

export default async function Home() {
  // const dogs = await getDogs()
  // console.log(dogs);
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mt-20"> Home</h1>
      {/* <Image src={dogs.message} width={500} height={500} alt="dogs" priority/> */}
      <Link href="/users">Go to Users</Link>
    </div>
  )
}
