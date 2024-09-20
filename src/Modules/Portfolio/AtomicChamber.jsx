import { Link } from "react-router-dom";
import atomicChamberPortalImg from "../../assets/images/AtomicChamber_Basic.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";

const AtomicChamber = () => {

    return (
        <>
            <div className="portfolioPage__textSection">
                <h2 className="portfolioPage__tittle">Atomic Chamber</h2>
                <p>Juego movil para android gratuito con anuncios de logica y puzzles.</p>
                <p>Unity 3D - C# - Admob - Logros de Google Play</p>
            </div>
            <div className="portfolioPage__media">
                <img className="portfolioPage__webpagePhoto" src={atomicChamberPortalImg} alt="Gamer Rest Webpage Frontpage"></img>
                <div className="portfolioPage__linkWrap">
                    <Link to="https://play.google.com/store/apps/details?id=com.com.WildCatta.Atomas.AtomicChamber&hl=es" className="portfolioPage__link" target="_blank" rel="noopener noreferrer">
                        GooglePlay <FontAwesomeIcon icon={faMobileScreen} className="portfolioPage__icon" />
                    </Link>
                </div>
            </div>
        </>)
}

export default AtomicChamber;