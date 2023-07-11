import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API/api";
import {Link} from "react-router-dom";

const MovieActor = ({id}) => {
    const [movieActor,setMovieActor] = useState([])
    const getMovieActor =(key) => {
        axios (`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=en-US`)
            .then(res => setMovieActor(res.data.cast))
    }
    useEffect(() => {
getMovieActor(API_KEY)
    },[])
    console.log(movieActor)

    return (
        <div id="movieactor">
            <div className="movieactor">
                {
                    movieActor.map(el => (
                        <div className="movieactor--card">
                            <Link to={`/movie/details/${el.id}`}>
                                {
                                    el.poster_path ?
                                    <img src={`https://image.tmdb.org/t/p/w440_and_h660_face/${el.poster_path}`} alt="" width="100px" height="200px"/>
                                        : <img width={180} src="https://purepng.com/public/uploads/large/dwayne-johnson-rampage-celebrity-film-actor-cqt.png" alt=""/>
                                }
                            </Link>
                            <h4>{el.title}</h4>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
export default MovieActor;