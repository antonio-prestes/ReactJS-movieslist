import {Route} from "react-router";
import {Home} from "./views/Home";
import {MovieDetail} from "./views/MovieDetail";
import {Favorites} from "./views/Favorites";

export const AppRoutes = () => (
    <>
        <Route exact path="/" component={Home}/>
        <Route exact path="/movie/:id" component={MovieDetail}/>
        <Route exact path="/favorites" component={Favorites}/>
    </>

)
