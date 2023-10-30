export default async function getUsers(){
    // aller chercher
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    // if response is not ok 

    // throw = lancer

    if (!response.ok){
        throw new Error('failed to fetch users')
    }

    return await response.json()
}
