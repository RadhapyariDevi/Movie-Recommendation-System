const BASE_URL = 'http://127.0.0.1:8000'

export async function fetchHome(category = "popular"){
    const res = await fetch(
        `${BASE_URL}/home?category=${category}`
    )
    if(!res.ok){
        throw new Error("Failed to fetch movies")
    }
    return res.json()
}


export async function searchMovie(query){
    const res = await fetch(
        `${BASE_URL}/movie/search?query=${query}`
    )
    if(!res.ok){
        throw new Error("Failed to search movies")
    }
    return res.json()
}
