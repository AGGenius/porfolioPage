import { useNavigate, Link } from "react-router-dom";
import { useChangePageContext } from "../Context/useChangePageContext";
import { useEffect, useState } from "react";
import './LinksPage.css'

import LinkedinImg from "../assets/LinksImg/Linkedin.jpg";
import GithubImg from "../assets/LinksImg/Github.jpg";
import WildcattaImg from "../assets/LinksImg/WildCatta.png";
import GamerrestImg from "../assets/LinksImg/GamerRest.jpg";

const LinksPage = () => {
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
        <div className={!exit ? "linksPage" : "linksPage exit"}>
            <div className="linksPage__space top"></div>
            <article className="linksPage__content">
                <section className="linksPage__linksWrap">
                    <ul className="linksPage__list">
                        <Link to="https://www.linkedin.com/in/aginergimenez/" className="linksPage__link" target="_blank" rel="noopener noreferrer">
                            <li className="linksPage__listItem">
                                <h1 className="linksPage__linkText">LinkedIn</h1>
                                <h2 className="linksPage__linkSubtext">Mi red social para el sector profesional</h2>
                                <img className="linksPage__linkImg" src={LinkedinImg} alt="linkedin image" />
                            </li>
                        </Link>
                        <Link to="https://github.com/AGGenius" className="linksPage__link" target="_blank" rel="noopener noreferrer">
                            <li className="linksPage__listItem">
                                <h1 className="linksPage__linkText">Github</h1>
                                <h2 className="linksPage__linkSubtext">Todos mis repositorios para que puedas echar un ojo a mis skills de programación</h2>
                                <img className="linksPage__linkImg" src={GithubImg} alt="linkedin image" />
                            </li>
                        </Link>
                        <Link to="https://play.google.com/store/apps/developer?id=Wild+Catta&hl=es" className="linksPage__link" target="_blank" rel="noopener noreferrer">
                            <li className="linksPage__listItem">
                                <h1 className="linksPage__linkText">Google Play</h1>
                                <h2 className="linksPage__linkSubtext">Mi perfil de desarrollador para Android</h2>
                                <img className="linksPage__linkImg" src={WildcattaImg} alt="linkedin image" />
                            </li>
                        </Link>
                        <Link to="https://gamefeed-front.onrender.com/" className="linksPage__link" target="_blank" rel="noopener noreferrer">
                            <li className="linksPage__listItem">
                                <h1 className="linksPage__linkText">Gamer Rest</h1>
                                <h2 className="linksPage__linkSubtext">Mi web y proyecto personal como Full Stack Web Developer</h2>
                                <img className="linksPage__linkImg" src={GamerrestImg} alt="linkedin image" />
                            </li>

                        </Link>
                    </ul>
                </section>
                <section className="linksPage__buttonWrap">
                    <button className="linksPage__button" onClick={() => handleClick("/experience")}>PREV</button>
                    <p>¡No todo puede contenerse en una unica web!</p>
                    <button className="linksPage__button" onClick={() => handleClick("/contact")}>NEXT</button>
                </section>
            </article>
            <div className="linksPage__space bottom"></div>
        </div>)

}

export default LinksPage;