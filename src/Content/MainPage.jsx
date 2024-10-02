import { useNavigate } from "react-router-dom";
import { useChangePageContext } from "../Context/useChangePageContext";
import { useEffect, useState } from "react";
import photo from "../assets/images/Photo-hires_small.png"
import './MainPage.css'

const MainPage = () => {
    const { changePage, setChangePage } = useChangePageContext();
    const { setActualPage } = useChangePageContext();
    const navigate = useNavigate();
    const [exit, setExit] = useState(false);
    const [cont, setCont] = useState(0);
    const [photoBig, setPhotoBig] = useState(false);

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
        setActualPage(page);

        setTimeout(() => {
            navigate(page);
        }, 400);
    };

    const handleImageClick = () => {
        const actualState = photoBig;
        setPhotoBig(!actualState)
    };

    return (
        <main className={!exit ? "mainPage" : "mainPage exit"}>
            <div className="mainPage__space top"></div>
            <article className="mainPage__content">
                <section className="mainPage__text">
                    <h2 className="mainPage__mainTittle">¡BIENVENID@!</h2>
                    <h3 className="mainPage__subTittle">Te encuentras en mi pagina de referencia. Aquí podras saber un poco más de mi y mis proyectos.</h3>
                    <h4 className="mainPage__tittleClosure">Piensa en ello como un CV interactivo. ¿Mola, a que si?</h4>
                    <p className="mainPage__paraQuestion">¿Quién soy?</p>
                    <p className="mainPage__paraContent short">
                        Eso es sencillo, soy <span className="mainPage__paraContent__italic">Adrián Giner Giménez</span>, una ser de mente inquieta, que siempre tiene algo que decir si la situación lo requiere y gran capacidad para aportar ideas.
                        ¡Mi capacidad de concentración cuando estoy con mis proyectos puede hacerme perder la noción del tiempo!
                    </p>
                    <p className="mainPage__paraQuestion">¿Qué hago?</p>
                    <p className="mainPage__paraContent short">
                        ¡Programar! Es lo que más me gusta desde que empecé por mi cuenta a aprender <span className="mainPage__paraContent__bold">Java</span>. Una vez descubierta mi pasión le quise dar un enfoque profesional,
                        y junté mi pasión por los videojuegos y la <span className="mainPage__paraContent__bold">programación</span> estudiando varios cursos centrados en <span className="mainPage__paraContent__bold">Unity 3D y C#</span>.
                        Como no puedo frenar mi sed de conocimientos, di otro pequeño giro hacia la programación web, realizando un intenso bootcamp como <span className="mainPage__paraContent__bold">full stack web developer</span>,
                        que fui complementando por mi cuenta.
                    </p>
                    <p className="mainPage__paraQuestion">¿Pero me gustarán más cosas en la vida, no?</p>
                    <p className="mainPage__paraContent">
                        Para esto necesitaría un buen rato, pero seré breve… Juego a videojuegos <span className="mainPage__paraContent__italic">(RPG, puzles, aventura, metroidvania, etc)</span>,
                        me gusta leer <span className="mainPage__paraContent__italic">(ciencia ficción, fantasía, misterio, terror, etc)</span>, aprender sobre tecnología y ciencia espacial <span className="mainPage__paraContent__italic">(Go Space X! 🚀)</span>,
                        dibujar, y disfrutar de la naturaleza y visitar algún zoo de vez en cuando.
                    </p>
                    <p className="mainPage__paraQuestion">Vale, pero estas buscando alguien para tu empresa ¿Qué puedo aportar?</p>
                    <p className="mainPage__paraContent">
                        Nos ponemos técnicos: <span className="mainPage__paraContent__bold">Conocimientos demostrables y aplicados</span> a proyectos reales como programador en Unity 3D, tanto para juegos en 2D, 3D y VR/AR, con C#.
                        Pero mi punto fuerte es el de diseñador web full stack certificado, usando <span className="mainPage__paraContent__bold">JavaScript, React.js, Node.js, Express.js, HTML, CSS, BBDD
                            (Relacionales con PostgreSQL o no relacionales con MongoDB), control de versiones con GIT/Github</span>. <span className="mainPage__paraContent__bold">No me cierro a especializarme en Front o Back</span>,
                        ahora mismo disfruto a ambos lados del campo de batalla.
                    </p>
                    <p className="mainPage__paraContent">¡Ah! No puse freno a aprender más <span className="mainPage__paraContent__italic">(Angular, lo digo por ti)</span>. Así que no olvides pasarte por aquí de vez en cuando a ver que más ha cambiado.</p>
                    <p className="mainPage__paraContent">
                        A nivel personal soy una persona <span className="mainPage__paraContent__bold">entusiasta, respetuosa, con gran capacidad de resolución de problemas, ingenioso, flexible y cooperativo</span>.
                        Tengo gran facilidad para hacer reir diciendo la cosa oportuna en el momento oportuno.
                    </p>
                </section>
                <section className="mainPage__buttonWrap">
                    <button className="mainPage__button" onClick={() => handleClick("/contact")}>CONTACTO</button>
                    <p>¡Echale un vistazo al resto para saber más!</p>
                    <button className="mainPage__button" onClick={() => handleClick("/portfolio")}>PORTFOLIO</button>
                </section>
                <img className={!exit ? "mainPage__photo" : "mainPage__photo exit"} src={photo} alt="CV Photo" onClick={() => handleImageClick()} />
            </article>
            {photoBig &&
                <div className="mainPage__photoBigWrap">
                    <img className="mainPage__photoBig" src={photo} alt="CV Photo Big" onClick={() => handleImageClick()}/>
                </div>
            }
            <div className="mainPage__space bottom"></div>
        </main >)

}

export default MainPage;