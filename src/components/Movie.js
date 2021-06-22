import {Link} from "react-router-dom";

export const Movie = ({movie})=>(
    <div className="movie-item">
        <div>
            <img className="rounded mx-auto d-block mt-5" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="movie_poster"/>
        </div>
        <div className="movie-excerpt">
            <h4 className="mt-2 mb-2 text-center">{movie.title}</h4>
            <div className="d-grid gap-2 col-6 mx-auto">
                <Link to={`/movie/${movie.id}`} className=" btn btn-primary">Detalhes</Link>
            </div>

        </div>
    </div>
)
