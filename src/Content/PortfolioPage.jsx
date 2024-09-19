import { Link, useNavigate } from "react-router-dom";
import { useChangePageContext } from "../Context/useChangePageContext";
import { useEffect, useState } from "react";
import gamerRestPortalImg from "../assets/images/GamerRestFront_Basic.jpg"
import dashboardPortalImg from "../assets/images/Dashboard_Basic.jpg"
import gitSearchPortalImg from "../assets/images/GitSearch_Basic.jpg"
import CoinsPortalImg from "../assets/images/Coins_Basic.jpg"
import FlagsPortalImg from "../assets/images/Banderas_Basic.jpg"
import atomicChamberPortalImg from "../assets/images/AtomicChamber_Basic.jpg"
import './PortfolioPage.css'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const PortfolioPage = () => {
    const { changePage, setChangePage } = useChangePageContext();
    const navigate = useNavigate();
    const [exit, setExit] = useState(false);
    const [cont, setCont] = useState(0);

    useEffect(() => {
        setChangePage(false);
        setCont(1)

        if (changePage && cont > 0) {
            setChangePage(false);
            setExit(true);
        }

    }, [changePage]);

    const handleClick = (page) => {
        setExit(true);
        setChangePage(false);

        setTimeout(() => {
            navigate(page);
        }, 400);
    };

    return (
        <div className={!exit ? "portfolioPage" : "portfolioPage exit"}>
            <div className="portfolioPage__space top"></div>
            <article className="portfolioPage__content">
                <section className="portfolioPage__cardWrap">
                    <ul className="portfolioPage__list">
                        <li className="portfolioPage__card">
                            <div className="portfolioPage__textSection">
                                <p className="portfolioPage__tittle">Gamer Rest</p>
                                <p>Web de para crear entradas sobre videojuegos y generar contenido sobre los mismos.</p>
                                <p>Front - Back - DDBB</p>
                                <p>JavaScript - HTML5 - CSS3 - PostgreSQL - Reajct.js - Node.js - Expres.js</p>
                            </div>
                            <div className="portfolioPage__media">
                                <img className="portfolioPage__webpagePhoto" src={gamerRestPortalImg} alt="Gamer Rest Webpage Frontpage"></img>
                                <div className="portfolioPage__linkWrap">
                                    <Link to="https://gamefeed-front.onrender.com/" className="portfolioPage__link" target="_blank" rel="noopener noreferrer">
                                        Home <FontAwesomeIcon icon={faHouse} className="portfolioPage__icon" />
                                    </Link>
                                    <Link to="https://github.com/AGGenius/GameFeed-Front/tree/main" className="portfolioPage__link" target="_blank" rel="noopener noreferrer">
                                        Front <FontAwesomeIcon icon={faGithub} className="portfolioPage__icon" />
                                    </Link>
                                    <Link to="https://github.com/AGGenius/GameFeed-Back" className="portfolioPage__link" target="_blank" rel="noopener noreferrer">
                                        Back <FontAwesomeIcon icon={faGithub} className="portfolioPage__icon" />
                                    </Link>
                                </div>
                            </div>
                        </li>
                        <li className="portfolioPage__card">
                            <div className="portfolioPage__textSection">
                                <p className="portfolioPage__tittle">ReactCoin</p>
                                <p>Web de seguimiento de criptomonedas con funciones para tener un listado de favoritas.</p>
                                <p>Front</p>
                                <p>JavaScript - HTML5 - CSS3 - Node.js - Axios.js - react-router-dom</p>
                            </div>
                            <div className="portfolioPage__media">
                                <img className="portfolioPage__webpagePhoto" src={CoinsPortalImg} alt="Gamer Rest Webpage Frontpage"></img>
                                <div className="portfolioPage__linkWrap">
                                    <Link to="https://github.com/AGGenius/react-coin" className="portfolioPage__link" target="_blank" rel="noopener noreferrer">
                                        Front <FontAwesomeIcon icon={faGithub} className="portfolioPage__icon" />
                                    </Link>
                                </div>
                            </div>
                        </li>
                        <li className="portfolioPage__card">
                            <div className="portfolioPage__textSection">
                                <p className="portfolioPage__tittle">Dashboard</p>
                                <p>Web con multiples funciones para usar como pagina principal de navegador.</p>
                                <p>Back</p>
                                <p>JavaScript - HTML5 - CSS3</p>
                            </div>
                            <div className="portfolioPage__media">
                                <img className="portfolioPage__webpagePhoto" src={dashboardPortalImg} alt="Gamer Rest Webpage Frontpage"></img>
                                <div className="portfolioPage__linkWrap">
                                    <Link to="https://aggenius.github.io/project-break-dashboard/html/index.html" className="portfolioPage__link" target="_blank" rel="noopener noreferrer">
                                        Home <FontAwesomeIcon icon={faHouse} className="portfolioPage__icon" />
                                    </Link>
                                    <Link to="https://github.com/AGGenius/project-break-dashboard" className="portfolioPage__link" target="_blank" rel="noopener noreferrer">
                                        Back <FontAwesomeIcon icon={faGithub} className="portfolioPage__icon" />
                                    </Link>
                                </div>
                            </div>
                        </li>
                        <li className="portfolioPage__card">
                            <div className="portfolioPage__textSection">
                                <p className="portfolioPage__tittle">Diversión con banderas</p>
                                <p>Web con todas las banderas de los paises del mundo con función para poder ver datos de interes de cada pais.</p>
                                <p>Front</p>
                                <p>JavaScript - HTML5 - CSS3</p>
                            </div>
                            <div className="portfolioPage__media">
                                <img className="portfolioPage__webpagePhoto" src={FlagsPortalImg} alt="Gamer Rest Webpage Frontpage"></img>
                                <div className="portfolioPage__linkWrap">
                                    <Link to="https://github.com/AGGenius/diversion-con-banderas" className="portfolioPage__link" target="_blank" rel="noopener noreferrer">
                                        Front <FontAwesomeIcon icon={faGithub} className="portfolioPage__icon" />
                                    </Link>
                                </div>
                            </div>
                        </li>
                        <li className="portfolioPage__card">
                            <div className="portfolioPage__textSection">
                                <p className="portfolioPage__tittle">Atomic Chamber</p>
                                <p>Juego movil para android gratuito con anuncios de logica y puzzles.</p>
                                <p>Unity 3D - C# - Admob - Logros de Google Play</p>
                            </div>
                            <div className="portfolioPage__media">
                                <img className="portfolioPage__webpagePhoto" src={atomicChamberPortalImg} alt="Gamer Rest Webpage Frontpage"></img>
                                <div className="portfolioPage__linkWrap">
                                    <Link to="https://play.google.com/store/apps/details?id=com.com.WildCatta.Atomas.AtomicChamber&hl=es" className="portfolioPage__link" target="_blank" rel="noopener noreferrer">
                                        GooglePlay <FontAwesomeIcon icon={faHouse} className="portfolioPage__icon" />
                                    </Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
                <section className="portfolioPage__buttonWrap">
                    <button className="portfolioPage__button" onClick={() => handleClick("/")}>PREV</button>
                    <p>PORTFOLIO</p>
                    <button className="portfolioPage__button" onClick={() => handleClick("/skills")}>NEXT</button>
                </section>
            </article>
            <div className="portfolioPage__space bottom"></div>
        </div>)
}

export default PortfolioPage;