import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {LanguageContext} from "../../Contexxt/contex";

const MovieCard = ({el}) => {
    const {dark} = useContext(LanguageContext)
    const {setDark} = useContext(LanguageContext)
    return (
        <div id="movieCard">
            <div className="movieCard" style={{
                color:dark ? "black" : "white",
                border:dark ? "2px black" : "2px black",


            }}>
                <Link to={`/movie/details/${el.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w440_and_h660_face/${el.poster_path}`} alt=""/>
                </Link>
                <h2>{el.title}</h2>
                <h4>{el.release_date}</h4>
            </div>
        </div>
    );
};

export default MovieCard;