import { Link } from "react-router-dom";
import dashboardPortalImg from "../../assets/images/Dashboard_Basic.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const DashboardBig = () => {
    return (
        <>
            <div className="portfolioPage__textSection--Big">
                <h2 className="portfolioPage__tittle--Big">DASHBOARD</h2>
                <h3 className="portfolioPage__subtittle--Big">Simple Web</h3>
                <p className="portfolioPage__text--Big">
                    Ejemplo de desarrollo frontend basico con el objetivo de crear una web para usar como Home de navegador. 
                    Sus distintas funcionalidades son:
                </p>
                <ul className="portfolioPage__list--Big"> 
                    <li className="portfolioPage__listEntry--Big">
                        Reloj que muestra la hora y fecha actual con mensajes personalizados al usuario.
                    </li>
                    <li className="portfolioPage__listEntry--Big">
                        Agregador de enlaces a otras webs con funcionalidad de comprobación de enlace valido.
                    </li>
                    <li className="portfolioPage__listEntry--Big">
                        Generador de contraseñas seguras (entre 12 y 50 caracteres. Minimo una letra mayuscula y una minuscula, un numero y un
                        caracter especial). El generador comprueba que genera una contraseña valida haciendo uso de tests.
                    </li>
                    <li className="portfolioPage__listEntry--Big">
                        Buscador integrado de Google.
                    </li>
                    <li className="portfolioPage__listEntry--Big">
                        Modulo con la previsión climatologica. Esta puede ser personalizada por el usuario para mostrar la de la zona que desee.
                    </li>
                    <li className="portfolioPage__listEntry--Big">
                        Fondo que cambia de manera aleatoria según selección propia del usuario. Esta habilitado a mostrar al creador original
                        en caso de ser una imagen con derechos, así como ofrecer un enlace directo al repertorio de dicho creador.
                    </li>
                </ul>
                <p className="portfolioPage__text--Big">
                    Cada uno de estos modulos puede ser usado a su vez de manera independiente en su sección propia, agregando funcionalidades
                    extra, como en el modulo de clima donde se pueden agregar varias zonas para visualizar y elegir cual se mostrará en la pagina
                    principal.
                </p>
                <p className="portfolioPage__text--Big"><b>JavaScript - HTML5 - CSS3 - API Scraping - LocalStorage - Promise - Deployment - Visual Studio Code - Git </b></p>
            </div>
            <div className="portfolioPage__media--Big">
                <img className="portfolioPage__webpagePhoto--Big" src={dashboardPortalImg} alt="Gamer Rest Webpage Frontpage"></img>
                <div className="portfolioPage__linkWrap--Big">
                    <Link to="https://aggenius.github.io/project-break-dashboard/html/index.html" className="portfolioPage__link--Big" target="_blank" rel="noopener noreferrer">
                        Home <FontAwesomeIcon icon={faHouse} className="portfolioPage__icon" />
                    </Link>
                    <Link to="https://github.com/AGGenius/project-break-dashboard" className="portfolioPage__link--Big" target="_blank" rel="noopener noreferrer">
                        Back <FontAwesomeIcon icon={faGithub} className="portfolioPage__icon" />
                    </Link>
                </div>
            </div>
        </>)
}

export default DashboardBig;