import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addMovie, removeMovie} from "../store/actions/movies";

export const Movie = ({movie}) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites)

    return (
        <div className="movie-item">
            <div>
                <img className="rounded mx-auto d-block mt-5"
                     src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="movie_poster"/>
            </div>
            <div className="movie-excerpt">
                <h4 className="mt-2 mb-2 text-center">{movie.title}</h4>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <Link to={`/movie/${movie.id}`} className=" btn btn-primary">Detalhes</Link>
                    {favorites.movies.find((m) => m.id === movie.id)
                        ? <Link onClick={() => dispatch(removeMovie(movie))} className=" btn btn-danger">Remover dos
                            favoritos</Link> :
                        <Link onClick={() => dispatch(addMovie(movie))} className=" btn btn-warning">Adicionar aos
                            favoritos</Link>}

                </div>

            </div>
        </div>
    )
}
