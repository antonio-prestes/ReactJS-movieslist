import {Link} from "react-router-dom";

export const Header = () => (
    <div className="container">
        <header
            className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <Link to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <h4>Movies List API</h4>
            </Link>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
                <li><Link to="/favorites" className="nav-link px-2 link-secondary">Favoritos</Link></li>
                <li><a href="https://developers.themoviedb.org/" className="nav-link px-2 link-secondary">The Movie
                    DB</a></li>
                <li><a href="https://github.com/antonio-prestes" className="nav-link px-2 link-dark">About</a></li>
            </ul>
        </header>
    </div>
)
