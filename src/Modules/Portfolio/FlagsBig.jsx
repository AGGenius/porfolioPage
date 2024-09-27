import { Link } from "react-router-dom";
import FlagsPortalImg from "../../assets/images/Banderas_Basic.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const FlagsBig = () => {
    return (
        <>
            <div className="portfolioPage__textSection--Big">
                <h2 className="portfolioPage__tittle--Big">DIVERSION CON BANDERAS</h2>
                <h3 className="portfolioPage__subtittle--Big">Web basica de Scraping API</h3>
                <p className="portfolioPage__text--Big">
                    Una de mis primeras webs de prueba que trae los datos de la API Rest Countries, de la cual se obtienen todos los paises para mostrar
                    una tarjeta identificadora con la bandera y nombre internacional del pais.
                </p>
                <p className="portfolioPage__text--Big">
                    Cuando interactuamos con una de las tarjetas nos muestra en la misma ventana una nueva tarjeta con información ampliada sobre dicho pais,
                    con la cual podemos interactuar para cerrarlo y volver a ver el listado completo.
                </p>
                <p className="portfolioPage__text--Big">
                    Aunque de inicio se trata de una web basica, es también uno de los primeros ejemplos que integra todas las bases de la programación web,
                    como es <b>HTML, CSS, y JavaScript</b>
                </p>
                <p className="portfolioPage__text--Big"><b>JavaScript - HTML5 - CSS3 - API Scraping - LocalStorage - Visual Studio Code - Git</b></p>
            </div>
            <div className="portfolioPage__media--Big">
            <img className="portfolioPage__webpagePhoto--Big" src={FlagsPortalImg} alt="Gamer Rest Webpage Frontpage"></img>
                <div className="portfolioPage__linkWrap--Big">
                    <Link to="https://github.com/AGGenius/diversion-con-banderas" className="portfolioPage__link--Big" target="_blank" rel="noopener noreferrer">
                        Front <FontAwesomeIcon icon={faGithub} className="portfolioPage__icon" />
                    </Link>
                </div>
            </div>
        </>)
}

export default FlagsBig;