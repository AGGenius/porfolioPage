import { Link } from "react-router-dom";
import CoinsPortalImg from "../../assets/images/Coins_Basic.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ReactCoinBig = () => {
    return (
        <>
            <div className="portfolioPage__textSection--Big">
                <h2 className="portfolioPage__tittle--Big">REACT COIN</h2>
                <h3 className="portfolioPage__subtittle--Big">React Web</h3>
                <p className="portfolioPage__text--Big">
                    Desarrollo funcional de una web con el uso de <b>React.js</b> para llevar un control visual del mercado de Cryptomonedas. 
                    Se puede consultar el valor completo al clicar la tarjeta de la moneda en que nos interese, así como la funcionalidad para 
                    poder <b>guardar un listado</b> de monedas favoritas y así llevar un seguimiento mas directo de las mismas. Estos datos, por su simpleza
                    se guardanen el <b>Local Storage</b> del navegador.
                </p>
                <p className="portfolioPage__text--Big">
                    Se trata de un ejemplo de uso funcional de una web creada de cero enfocada en el uso de <b>React</b>, mostrando gran parte de sus funcionalidades.
                </p>
                <p className="portfolioPage__text--Big"><b>JavaScript - HTML5 - CSS3 - API Scraping - Reajct.js - Node.js - Expres.js - React-Router-Dom - LocalStorage - Visual Studio Code - Git </b></p>
            </div>
            <div className="portfolioPage__media--Big">
                <img className="portfolioPage__webpagePhoto--Big" src={CoinsPortalImg} alt="Gamer Rest Webpage Frontpage"></img>
                <div className="portfolioPage__linkWrap--Big">
                    <Link to="https://github.com/AGGenius/react-coin" className="portfolioPage__link--Big" target="_blank" rel="noopener noreferrer">
                        Front <FontAwesomeIcon icon={faGithub} className="portfolioPage__icon" />
                    </Link>
                </div>
            </div>
        </>)
}

export default ReactCoinBig;