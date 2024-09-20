import { Link } from "react-router-dom";
import CoinsPortalImg from "../../assets/images/Coins_Basic.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ReactCoin = () => {

    return (
        <>
            <div className="portfolioPage__textSection">
                <h2 className="portfolioPage__tittle">ReactCoin</h2>
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
        </>)
}

export default ReactCoin;