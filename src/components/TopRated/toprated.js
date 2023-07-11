import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API/api";
import MovieCard from "../MovieCard/movieCard";
import {LanguageContext} from "../../Contexxt/contex";

const TopRated = () => {
    const [topRated,setTopRated] = useState([])
    const {language} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    const {setDark} = useContext(LanguageContext)
    const getTopRated = (key) => {
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${language}&page=1`)
            .then(res => setTopRated(res.data.results))
    }
    useEffect(() =>{
getTopRated(API_KEY)
    },[language])
    console.log(topRated)
    return (
        <section id="popular" style={{
            background: dark ? "white": "none",

        }}>
            <div className="container">
                <div className="popular">
                    {
                        topRated.map(el => <MovieCard key={el.id} el={el}/>)
                    }
                </div>
            </div>
        </section>

    );
};

export default TopRated;