import {useDispatch, useSelector} from "react-redux";
import {addMovie, removeMovie} from "../store/actions/movies";
import {Link} from "react-router-dom";

export const Favorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites)
    return (
        <div className="container">
            <h3>Meus filmes favoritos</h3>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Titulo</th>
                    <th scope="col">Lançamento</th>
                    <th scope="col">Classificação</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {favorites.movies.map(movie => <tr>
                    <td className="mx-1">{movie.title}</td>
                    <td className="mx-1">{movie.release_date}</td>
                    <td className="mx-1">{movie.vote_average}</td>
                    <td>
                        <Link to={`/movie/${movie.id}`} className="btn btn-primary btn-sm">Detalhes</Link>
                        <Link onClick={() => dispatch(removeMovie(movie))} className="btn btn-danger btn-sm mx-1">Remover</Link>
                    </td>
                </tr>)}
                </tbody>
            </table>
        </div>
    );
};
