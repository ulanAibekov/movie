import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API/api";
import MovieCard from "../MovieCard/movieCard";
import {LanguageContext} from "../../Contexxt/contex";

const Popular = () => {
    const [popular,setPopular] = useState([])
    const {language} = useContext(LanguageContext)
    const [red,setRed] = useState(1)
    const {dark} = useContext(LanguageContext)
    const {setDark} = useContext(LanguageContext)

    const getPopular = (key) => {
        window.scroll(0,0)
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${red}`)
            .then((res) => setPopular(res.data.results))
    }
    useEffect(() => {
        getPopular(API_KEY)
    },[red,language])
    console.log(popular)
    return (
        <section id="popular" style={{
            background: dark ? "white": "none",

        }}>
            <div className="container">
                <div className="popular">
                    {
                        popular.map(el => <MovieCard key={el.id} el={el}/>)
                    }
                    <button onClick={() => setRed(red === 1 ? red : red -1)}>Last</button>
                    <h3>{red}</h3>
                    <button onClick={() => setRed(red + 1)}>Next</button>
                </div>
            </div>
        </section>
    );
};

export default Popular;