import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            background: "#03035a",
            margin:"50px 0 ",
            padding:"90px 0"
        }} id="footer">
            <div className="container">
                <div className="footer">
                    <div className="footer--block">
                        <img style={{
                            marginRight: "400px",
                        }}
                            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                            alt=""/>
                    </div>
                    <div className="footer--block1" style={{
                        marginTop:"-10px",
                    }}>
                        <h1 style={{
                            color: "white",
                            margin:"20px 0 ",
                            fontSize: "36px",

                            fontWeight:"700"
                        }}>ГЛАВНОЕ</h1>
                        <p style={{
                            color: "white",
                            lineHeight:"30px",
                            fontSize :"18px",
                        }}>О TMDB
                            <br/>Связаться с нами
                            <br/>Форумы поддержки
                            <br/>API
                            <br/>Статус системы</p>
                    </div>
                    <div className="footer--block2" style={{
                        marginTop:"-70px",
                    }}>
                        <h1 style={{
                            fontSize: "36px",
                            color: "white",
                            margin:"20px 0 ",
                            fontWeight:"700"

                        }}>УЧАСТВУЙТЕ</h1>
                        <p style={{
                            lineHeight:"30px",
                            color: "white",
                            fontSize :"18px",
                        }}>Библия редакторов
                            <br/> Добавить новый фильм
                            <br/> Добавить новый сериал</p>
                    </div>
                    <div className="footer--block3" style={{
                        marginTop:"-40px",
                    }}>
                        <h1 style={{
                            fontSize: "36px",
                            color: "white",
                            margin:"20px 0 ",
                            fontWeight:"700"

                        }}>СООБЩЕСТВО</h1>
                        <p style={{
                            lineHeight:"30px",
                            color: "white",
                            fontSize :"18px",
                        }}>Руководства
                            <br/> Обсуждения
                            <br/> Доска почёта
                            <br/> Twitter</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;