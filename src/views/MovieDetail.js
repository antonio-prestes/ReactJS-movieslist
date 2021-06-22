import {useEffect, useState} from "react";
import {MoviesService} from "../api/MoviesService";

export const MovieDetail = (props) => {
    const [movie, setMovie] = useState({})

    const getMovie = async () => {
        const {data} = await MoviesService.getMoviesDetail(props.match.params.id)
        setMovie(data)
    }
    useEffect(() => {
        getMovie()
    }, [])

    return (
    <section className="movie-detail">
        <div className="container">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-4">
                        <img className="rounded mx-auto d-block" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt=""/>
                    </div>
                    <div className="col-lg-6">
                        <h1>Titulo: {movie.title}</h1>
                        <h3>{movie.tagline}</h3>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="yellow"
                             className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                            {movie.vote_average}
                        </p>
                        <p><strong>Descrição:</strong>  {movie.overview}</p>
                    </div>
                </div>
                <div className="col-12"></div>
            </div>
        </div>
    </section>
)}
