import { useNavigate } from "react-router-dom";
import { useChangePageContext } from "../Context/useChangePageContext";
import { useEffect, useState } from "react";
import './ExperiencePage.css'

const ExperiencePage = () => {
    const { changePage, setChangePage } = useChangePageContext();
    const { setActualPage } = useChangePageContext();
    const navigate = useNavigate();
    const [exit, setExit] = useState(false);
    const [cont, setCont] = useState(0);

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

    return (
        <div className={!exit ? "experiencePage" : "experiencePage exit"}>
            <div className="experiencePage__space top"></div>
            <article className="experiencePage__content">
                <section className="experiencePage__time">
                <p className="experiencePage__time--year">HOY</p>
                    <p className="experiencePage__time--year">2018</p>
                </section>
                <section className="experiencePage__text">
                    <ul className="experiencePage__list">
                        <li className="experiencePage__listItem">
                            <h2 className="experiencePage__list-tittle">
                                Programador multidisciplinar
                            </h2>
                            <h3 className="experiencePage__list--subtittle">
                                Freelance
                            </h3>
                            <p className="experiencePage__list--time">
                                09/2023 - Actual
                            </p>
                            <p className="experiencePage__list--position">
                                Remoto
                            </p>
                            <p className="experiencePage__list--content">
                                - Desarrollo de videojuegos para plataformas android.
                            </p>
                            <p className="experiencePage__list--content">
                                - Desarrollo de servicios de Front y Back.

                            </p>
                            <p className="experiencePage__list--content">
                                - Creación y gestión de bases de datos relacionales y no relacionales.
                            </p>
                            <p className="experiencePage__list--content">
                                - Despliegue de servicios.
                            </p>
                            <p className="experiencePage__list--content">
                                - Trabajo con repositorios de GitHub.
                            </p>
                            <p className="experiencePage__list--content">
                                - Documentación de código.
                            </p>
                            <p className="experiencePage__list--content">
                                - Testing manual.
                            </p>
                            <p className="experiencePage__list--content">
                                - Desarrollo de tests programaticos.
                            </p>
                            <p className="experiencePage__list--content">
                                <b>Visual Studio - Unity 3D - C# - JavaScript - HTML - CSS - SQL - MongoDB - GIT - React.js</b>
                            </p>
                        </li>
                        <li className="experiencePage__listItem">
                            <h2 className="experiencePage__list-tittle">
                                Junior Programmer Unity 3D/C#
                            </h2>
                            <h3 className="experiencePage__list--subtittle">
                                Digital Monster Collective
                            </h3>
                            <p className="experiencePage__list--time">
                                06/2023 - 09/2023
                            </p>
                            <p className="experiencePage__list--position">
                                Remoto
                            </p>
                            <p className="experiencePage__list--content">
                                - Desarrollo de videojuegos 2D con Unity 3D.
                            </p>
                            <p className="experiencePage__list--content">
                                - Test e informes de los proyectos internos.
                            </p>
                            <p className="experiencePage__list--content">
                                - Análisis del código implementado.
                            </p>
                            <p className="experiencePage__list--content">
                                - Refactorización de código.
                            </p>
                            <p className="experiencePage__list--content">
                                <b>Visual Studio - Unity 3D - C# - Plastic SCM.</b>
                            </p>
                        </li>
                        <li className="experiencePage__listItem">
                            <h2 className="experiencePage__list-tittle">
                                Gestión de expedientes en baja tensión
                            </h2>
                            <h3 className="experiencePage__list--subtittle">
                                SEYP INGENIERIA SL
                            </h3>
                            <p className="experiencePage__list--time">
                                06/2020 - 02/2022
                            </p>
                            <p className="experiencePage__list--position">
                                Hibrido
                            </p>
                            <p className="experiencePage__list--content">
                                - Analizar la viabilidad de nuevas peticiones de terceros en las redes de Distribución BT de Iberdrola.
                            </p>
                            <p className="experiencePage__list--content">
                                - Informar las condiciones técnico-económicas de las peticiones de terceros.
                            </p>
                            <p className="experiencePage__list--content">
                                - Coordinar los trabajos adjudicados con el contratista de Iberdrola.
                            </p>
                            <p className="experiencePage__list--content">
                                - Certificar y aprobar las mediciones del contratista de obra.
                            </p>
                            <p className="experiencePage__list--content">
                                - Inventariar en la cartografía interna de los sistemas de Iberdrola las nuevas
                                instalaciones de peticiones aceptadas por terceros.
                            </p>
                            <p className="experiencePage__list--content">
                                - Cierre técnico-económico, con acta de puesta en marcha de obras aceptadas
                                por terceros.
                            </p>
                            <p className="experiencePage__list--content">
                                - Registrar hoja instalaciones de enlace en las peticiones aceptadas por
                                terceros.
                            </p>
                            <p className="experiencePage__list--content">
                                <b>Suite Ofimática Windows Office, SAP, herramientas internas.</b>
                            </p>
                        </li>
                        <li className="experiencePage__listItem">
                            <h2 className="experiencePage__list-tittle">
                                Gestor de expedientes electricos
                            </h2>
                            <h3 className="experiencePage__list--subtittle">
                                IDEA INGENIERÍA
                            </h3>
                            <p className="experiencePage__list--time">
                                10/2018 - 02/2020
                            </p>
                            <p className="experiencePage__list--position">
                                Presencial
                            </p>
                            <p className="experiencePage__list--content">
                                - Analizar la viabilidad de nuevas peticiones de terceros en las redes de Distribución BT de Iberdrola.
                            </p>
                            <p className="experiencePage__list--content">
                                - Informar las condiciones técnico-económicas de las peticiones de terceros.
                            </p>
                            <p className="experiencePage__list--content">
                                - Coordinar los trabajos adjudicados con el contratista de Iberdrola.
                            </p>
                            <p className="experiencePage__list--content">
                                - Certificar y aprobar las mediciones del contratista de obra.
                            </p>
                            <p className="experiencePage__list--content">
                                - Inventariar en la cartografía interna de los sistemas de Iberdrola las nuevas
                                instalaciones de peticiones aceptadas por terceros.
                            </p>
                            <p className="experiencePage__list--content">
                                - Cierre técnico-económico, con acta de puesta en marcha de obras aceptadas
                                por terceros.
                            </p>
                            <p className="experiencePage__list--content">
                                - Registrar hoja instalaciones de enlace en las peticiones aceptadas por
                                terceros.
                            </p>
                            <p className="experiencePage__list--content">
                                <b>Suite Ofimática Windows Office, SAP, herramientas internas.</b>
                            </p>
                        </li>
                    </ul>
                </section>
                <section className="experiencePage__buttonWrap">
                    <button className="experiencePage__button" onClick={() => handleClick("/skills")}>SKILLS</button>
                    <p>Una coleccion de experiencias profesionales</p>
                    <button className="experiencePage__button" onClick={() => handleClick("/links")}>ENLACES</button>
                </section>
            </article>
            <div className="experiencePage__space bottom"></div>
        </div>)

}

export default ExperiencePage;