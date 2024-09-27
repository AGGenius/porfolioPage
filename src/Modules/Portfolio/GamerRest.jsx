import { Link } from "react-router-dom";
import gamerRestPortalImg from "../../assets/images/GamerRestFront_Basic.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const GamerRest = () => {

    return (
        <>
            <div className="portfolioPage__textSection">
                <h2 className="portfolioPage__tittle">Gamer Rest</h2>
                <p>Web de para crear entradas sobre videojuegos y generar contenido sobre los mismos.</p>
                <p><b>Front - Back - DDBB</b></p>
                <p><b>JavaScript - HTML5 - CSS3 - PostgreSQL - Reajct.js - Node.js - Expres.js</b></p>
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
        </>)
}

export default GamerRest;