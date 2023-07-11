import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY } from '../../API/api';
import Slider from "react-slick";
import img from "../../img/ттфф.jpg";
import {Link} from "react-router-dom";


const Actor = ({id}) => {
    const [actors, setActors] = useState([]);

    const getActors = (key) => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}`)
            .then((res) => setActors(res.data.cast))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getActors(API_KEY);
    }, []);

    console.log(actors);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <section id="actor">
            <div className="container">
                <Slider className="actor" {...settings}>
                    {
                            actors.map(el => (
                                <div className="actor--card">
                                    <Link to={`/movie/details/actor/${el.id}`}>
                                    {
                                        el.profile_path ?
                                            <img style={{ width:"150px",height:"200px",}} src={`https://www.themoviedb.org/t/p/w276_and_h350_face/${el.profile_path}`} alt=""/>
                                            :
                                            <img width={150} height={200} src={img} alt=""/>
                                    }
                                    <h3  style={{
                                        fontSize: "15px ",
                                        margin: "10px 0 "
                                    }} className="actor--card__h5">{el.name}</h3>
                                    </Link>
                                </div>
                            ))
                        }
                </Slider>
            </div>
        </section>
    );
};

export default Actor;
