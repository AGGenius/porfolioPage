import { Link } from "react-router-dom";
import gamerRestPortalImg from "../../assets/images/GamerRestFront_Basic.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const GamerRestBig = () => {
    return (
        <>
            <div className="portfolioPage__textSection--Big">
                <h2 className="portfolioPage__tittle--Big">GAMER REST</h2>
                <h3 className="portfolioPage__subtittle--Big">Full Stack Web</h3>
                <p className="portfolioPage__text--Big">
                    Se trata de la primera web que desarrollo para porfolio usando todo lo aprendido en mi formación
                    como <b>Full Stack Web Developer</b>. El Front End hace uso de <b>React.js</b> para la navegación, junto <b>react-router-dom</b>.
                    El <b>Back End</b> gestiona las peticiones del front para el login/logout de usuarios, así como del registro. También
                    maneja las peticiones para la creación y edición de todo el contenido de la web, sean usuarios, juegos o entradas para los mismos.
                    Todas las comunicaciones que manipulen datos se comunican con la base de datos para realizar comprobaciones, crear, editar, o eliminar
                    contenido. La <b>DDBB usa PostgreSQL</b> como base de datos relacional.
                </p>
                <p className="portfolioPage__text--Big">
                    Con el tiempo se ha convertido en una web completamente funcional que puede <b>visualizarse desde</b> todos los dipositivos de uso
                    comun, como <b>navegador web, smartphone y tablet</b>.
                </p>
                <p className="portfolioPage__text--Big">
                    Su <b>despliegue</b> esta realizado completamente en los servicios de <b>Render</b>.
                </p>
                <p className="portfolioPage__text--Big"><b>JavaScript - HTML5 - CSS3 - API REST - PostgreSQL - Reajct.js - Node.js - Expres.js - react-router-dom - Context - Visual Studio Code - Git - Render</b></p>
            </div>
            <div className="portfolioPage__media--Big">
                <img className="portfolioPage__webpagePhoto--Big" src={gamerRestPortalImg} alt="Gamer Rest Webpage Frontpage"></img>
                <div className="portfolioPage__linkWrap--Big">
                    <Link to="https://gamefeed-front.onrender.com/" className="portfolioPage__link--Big" target="_blank" rel="noopener noreferrer">
                        Home <FontAwesomeIcon icon={faHouse} className="portfolioPage__icon--Big" />
                    </Link>
                    <Link to="https://github.com/AGGenius/GameFeed-Front/tree/main" className="portfolioPage__link--Big" target="_blank" rel="noopener noreferrer">
                        Front <FontAwesomeIcon icon={faGithub} className="portfolioPage__icon--Big" />
                    </Link>
                    <Link to="https://github.com/AGGenius/GameFeed-Back" className="portfolioPage__link--Big" target="_blank" rel="noopener noreferrer">
                        Back <FontAwesomeIcon icon={faGithub} className="portfolioPage__icon--Big" />
                    </Link>
                </div>
            </div>
        </>)
}

export default GamerRestBig;