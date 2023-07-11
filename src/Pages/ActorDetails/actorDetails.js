import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios"
import {API_KEY} from "../../API/api";
import MovieActor from "../../components/MovieActor/movieActor";
import {LanguageContext} from "../../Contexxt/contex";

const ActorDetails = () => {
    const {actorId} = useParams()
    const [actorDetails, setActorDetails] = useState({})
    const {language} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    const {setDark} = useContext(LanguageContext)
    const [expanded, setExpanded] = useState(false);
    const [modal, setModal] = useState(false);
    const getActorDetails = (key) => {
        axios(`https://api.themoviedb.org/3/person/${actorId}?api_key=${key}&language=${language}`)
            .then(res => setActorDetails(res.data))
    }
    useEffect(() => {
        getActorDetails(API_KEY)
    }, [language,setDark])
    console.log(actorDetails)
    const {profile_path, name, biography, birthday, place_of_birth, also_known_as} = actorDetails
    const handleExpand = () => {
        setExpanded(!expanded)
    };
    return (
        <section id="actorDetails" style={{
            background: dark ? "darkred": "none",

        }}>
            <div className="container">
                <div className="actorDetails">
                    <div className="actorDetails--img">
                        <img style={{
                        width: "300px",
                        height: "400px",
                    }} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${profile_path}`} alt=""
                    onClick={() => setModal(true)}/>
                        <div className="actorDetails--img__modal" style={{
                            display:modal ? "block" : "none",
                            zIndex:modal ? "20" : ""
                        }}>

                            <button onClick={() => setModal(false)
                            }>x</button>
                            <img style={{
                                width: "300px",
                                height: "400px",
                            }} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${profile_path}`} alt=""
                                 onClick={() => setModal(true)}/>
                        </div>
                        <div className="actorDetails--img__blur" style={{
                            background:modal ? "rgba(9,5,5,0.75)" : "",
                            zIndex:modal ? "10" : ""
                        }}>
                        </div>
                    </div>

                    <div className="actorDetails--title">
                        <h1>{name}</h1>
                        <h3>Biography</h3>
                        <p>
                            {expanded ? biography : biography?.slice(0, 300)}
                            {!expanded && biography?.length > 300 && (
                                <button onClick={handleExpand} className="expand-button">
                                    more
                                </button>
                            )}
                        </p>
                        <div className="actorDetails--title__biography">
                            <div className="actorDetails--title__biography--block1">
                                <h3>Also known as:</h3>
                                <div>{also_known_as?.map((el) => <li key={el}>{el}</li>)}</div>
                            </div>
                            <div className="actorDetails--title__biography--block1">
                                <h3>Birthday</h3>
                                <p>{birthday ? birthday : "-"}</p>
                            </div>
                            <div className="actorDetails--title__biography--block1">
                                <h3>Place of birth:</h3>
                                <p>{place_of_birth}</p>
                            </div>
                        </div>
                        <MovieActor id={actorId}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ActorDetails;