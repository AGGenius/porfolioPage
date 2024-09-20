import { Link } from "react-router-dom";
import FlagsPortalImg from "../../assets/images/Banderas_Basic.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Flags = () => {

    return (
        <>
            <div className="portfolioPage__textSection">
                <h2 className="portfolioPage__tittle">Diversión con banderas</h2>
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
        </>)
}

export default Flags;