import axios from "axios";

const API_KEY = 'b8670d2d5fd61b26e1a9f5024e5acd38'
const BASE_URL = 'https://api.themoviedb.org/3/'
const withBaseUrl = (path) =>   `${BASE_URL}${path}?api_key=${API_KEY}`

export class MoviesService {
    static  getMovies(){
    return axios(withBaseUrl('movie/popular'))
}
static getMoviesDetail(id){
        return axios(withBaseUrl(`movie/${id}`))
}
}
