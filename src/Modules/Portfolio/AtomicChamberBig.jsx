import { Link } from "react-router-dom";
import atomicChamberPortalImg from "../../assets/images/AtomicChamber_Basic.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";

const AtomicChamberBig = () => {
    return (
        <>
            <div className="portfolioPage__textSection--Big">
                <h2 className="portfolioPage__tittle--Big">ATOMIC CHAMBER</h2>
                <h3 className="portfolioPage__subtittle--Big">Videojuego para moviles Android</h3>
                <p className="portfolioPage__text--Big">
                    <b>Mi primer proyecto completo e independiente como desarrollador de videojuegos</b>. Se trata de un juego para movil gratuito con anuncios,
                    cuya mecanica es detonar las particulas dentro de la camara de reacción.
                </p>
                <p className="portfolioPage__text--Big">
                    Según la cantidad que hagan reacción podrás proguesar al siguiente nivel, además conseguirás mas puntos para invertir en <b>mejoras</b> para cada 
                    tipo de particula, como a la capacidad de toque para iniciar las reacciones.
                </p>
                <p className="portfolioPage__text--Big">
                    Consta de 40 niveles desbloqueables de manera natural con el progreso del juego, así como un <b>modo infinito</b> desbloqueable al completarlo con 
                    la maxima puntuación en cada nivel. En el podrás elegir que cantidad de particulas de cada tipo quieres que aparezcan, asi como variar parametros
                    del juego.
                </p>
                <p className="portfolioPage__text--Big">
                    El juego cuenta con un sistema de <b>logros</b> integrando los servicios de <b>Google Play</b>, cambio de idiomas y opciones para seleccionar que pista de audio 
                    quieres utilizar o si quieres que haga un ciclo aleatorio, o reiniciar los datos guardados. Todo el arte gráfico del juego esta realizado por mi mismo,
                    salvo tipografia.
                </p>
                <p className="portfolioPage__text--Big"><b>Unity 3D - C# - Admob - Logros de Google Play</b></p>
            </div>
            <div className="portfolioPage__media--Big">
                <img className="portfolioPage__webpagePhoto--Big" src={atomicChamberPortalImg} alt="Gamer Rest Webpage Frontpage"></img>
                <div className="portfolioPage__linkWrap--Big">
                    <Link to="https://play.google.com/store/apps/details?id=com.com.WildCatta.Atomas.AtomicChamber&hl=es" className="portfolioPage__link--Big" target="_blank" rel="noopener noreferrer">
                        GooglePlay <FontAwesomeIcon icon={faMobileScreen} className="portfolioPage__icon" />
                    </Link>
                </div>
            </div>
        </>)
}

export default AtomicChamberBig;