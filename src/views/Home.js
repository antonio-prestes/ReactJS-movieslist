import {useEffect, useState} from "react";
import {Movie} from "../components/Movie";
import {MoviesService} from "../api/MoviesService";

export const Home = () => {
    const [movies, setMovies] = useState([])

    const getMovies = async () => {
        const {data: {results}} = await MoviesService.getMovies()
        setMovies(results)
    }
    useEffect(() => {
        getMovies()
    })

    return (
        <div className="container">
            <div className="row">
                {movies.map((movie) => (
                    <div key={movie.id} className="col-lg-4">
                        <Movie movie={movie}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
