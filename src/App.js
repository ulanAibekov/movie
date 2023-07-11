import './App.scss';
import Header from "./components/Header/header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/home";
import Popular from "./components/Popular/popular";
import TopRated from "./components/TopRated/toprated";
import MovieDetails from "./Pages/MovieDetails/movieDetails";
import ActorDetails from "./Pages/ActorDetails/actorDetails";
import Search from "./Pages/Search/search";
import Footer from "./components/Footer/footer";

function App() {
    return (
        <div className="">
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/popular"} element={<Popular/>}/>
                <Route path={"/topRated"} element={<TopRated/>}/>
                <Route path={"/movie/details/:movieId"} element={<MovieDetails/>}/>
                <Route path={"/movie/details/actor/:actorId"} element={<ActorDetails/>}/>
                <Route path={"/movie/search/:movieName"} element={<Search/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
