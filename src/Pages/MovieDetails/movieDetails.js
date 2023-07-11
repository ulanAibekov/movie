import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../API/api";
import {CgMenuGridR} from "react-icons/cg";
import {FcLike} from "react-icons/fc";
import {AiFillStar} from "react-icons/ai";
import {BsBookmarkFill} from "react-icons/bs";
import Actor from "../../components/Actor/actor";
import Treller from "../../components/Treller/treller";
import {LanguageContext} from "../../Contexxt/contex";
const MovieDetails = () => {
    const {movieId} = useParams()
    console.log(movieId)
    const [details, SetDetails] = useState({})
    const {language} = useContext(LanguageContext)

    const [click, setClick] = useState(false)
    const [click1, setClick1] = useState(false)
    const [click2, setClick2] = useState(false)
    const [click3, setClick3] = useState(false)
    const [progressValue,setProgressValue] = useState(0)
    const {title, poster_path, backdrop_path, overview,vote_average, release_date, tagline, runtime, genres} = details
    const progressEndValue = Math.round(vote_average * 10)

    useEffect(() => {
        let progressStartValue = 0
        let progress = setInterval(() => {
            progressStartValue++;
            setProgressValue(progressStartValue)
            if(progressStartValue === progressEndValue){
                clearInterval(progress)
            }
        }, 20)
        return(() => {
            clearInterval(progress)

        })
    } ,[progressEndValue])
    const res = {
        background: `conic-gradient(#17c18f ${progressValue * 3.6}deg, #0f1b16 0deg)`

}

    const getDetails = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=${language}`)
            .then(res => SetDetails(res.data))
    }
    useEffect(() => {
        getDetails(API_KEY)
    }, [language])
    console.log(details)
    return (
        <>
            <div style={{
                objectFit: 'cover',
                background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces//${backdrop_path}") no-repeat center/cover`
            }}>
                <div id="details">
                    <div className="container">
                        <div className="details">
                            <div className="details--title">
                                <img className="img"
                                     src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`} alt=""
                                     width="300px" height="500px"/>
                                <div className="details--title__text">
                                    <h1>{title}</h1>
                                    <div className="details--title__text--h1">
                                        <h3>{release_date}</h3>
                                        <div className="genres">{genres?.map(el => <p>{el.name}</p>)}</div>
                                        <h4>{Math.floor(runtime / 60)} h {Math.round(runtime % 60)}m</h4>
                                    </div>
                                    <div className="icons">
                                        <div className="icons--krug"><h3 className="icons--h3" style={res}>{progressValue}%</h3></div>
                                        <h4>Рейтинг</h4>
                                        <div className="icon1" onClick={() => setClick(!click)} style={{
                                            color: click ? "red" : ""
                                        }}><CgMenuGridR/></div>
                                        <div className="icon3" onClick={() => setClick1(!click1)} style={{
                                            color: click1 ? "red" : ""
                                        }}><BsBookmarkFill/></div>
                                        <div className="icon2" onClick={() => setClick2(!click2)} style={{
                                            color: click2 ? "yellow" : ""
                                        }}><FcLike/></div>
                                        <div className="icon3" onClick={() => setClick3(!click3)} style={{
                                            color: click3 ? "red" : ""
                                        }}><AiFillStar/></div>
                                    </div>
                                    <i><h6>"{tagline}"</h6></i>
                                    <h2>{overview}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Actor id={movieId}/>
            <Treller id={movieId}/>

            {/*<AllPages/>*/}

        </>
    );
};
export default MovieDetails;