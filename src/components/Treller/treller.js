import React, { useEffect, useState } from 'react';
import axios from "axios";
import { API_KEY } from "../../API/api";

const Treller = ({ id }) => {
    const [treller, setTreller] = useState([]);

    const getTreller = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
            .then((res) => setTreller(res.data.results));
    }

    useEffect(() => {
        getTreller(API_KEY);
    }, []);

    const selectedTreller = treller.slice(0, 30);

    return (
        <div className="video">
            {selectedTreller.map(el => (
                <iframe className="iframe"
                    key={el.id}
                    width="300"
                    height="218"
                    src={`https://www.youtube.com/embed/${el.key}`}
                    title={el.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            ))}
        </div>
    );
};

export default Treller;

