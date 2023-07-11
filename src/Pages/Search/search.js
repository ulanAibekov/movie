import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API/api";
import {useParams} from "react-router-dom";
import MovieCard from "../../components/MovieCard/movieCard";
import {LanguageContext} from "../../Contexxt/contex";

const Search = () => {
    const {movieName} = useParams()
    const [ser,setSer] = useState([])
    const {language} = useContext(LanguageContext)

    const getSet = (key) => {
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=${language}&query=${movieName}`)
            .then(res => setSer(res.data.results))
    }
    useEffect(() => {
        getSet(API_KEY)

    },[ser,language])
    console.log(ser)
    return (
        <section id="popular">
            <div className="container">
                <div className="popular">

                    {
                        ser.map(el => <MovieCard key={el.id} el={el}/>)
                    }

                </div>
            </div>
        </section>
    );
};

export default Search;
// https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}
