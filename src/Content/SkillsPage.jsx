import { useNavigate } from "react-router-dom";
import { useChangePageContext } from "../Context/useChangePageContext";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import './SkillsPage.css'

//Icons
import csharpIcon from "../assets/Icons/csharp.png";
import cssIcon from "../assets/Icons/css.png";
import devIcon from "../assets/Icons/dev.png";
import githubIcon from "../assets/Icons/github.png";
import htmlIcon from "../assets/Icons/html.png";
import httpIcon from "../assets/Icons/http.png";
import javascriptIcon from "../assets/Icons/javascript.png";
import mongodbIcon from "../assets/Icons/mongodb.png";
import mysqlIcon from "../assets/Icons/mysql.png";
import nodeIcon from "../assets/Icons/node.png";
import postgresIcon from "../assets/Icons/postgres.png";
import reactIcon from "../assets/Icons/react.png";
import unityIcon from "../assets/Icons/unity.png";
import visualIcon from "../assets/Icons/visual.png";

//Modules
import WebSkillsPage from "../Modules/Skills/WebSkills.jsx";
import DatabaseSkillsPage from "../Modules/Skills/DatabaseSkills.jsx";
import VideogameSkillsPage from "../Modules/Skills/VideogameSkills.jsx";
import LanguageSkillsPage from "../Modules/Skills/LanguageSkills.jsx";
import SoftSkillsPage from "../Modules/Skills/SoftSkills.jsx";


const SkillsPage = () => {
    const { changePage, setChangePage } = useChangePageContext();
    const { setActualPage } = useChangePageContext();
    const navigate = useNavigate();
    const [exit, setExit] = useState(false);
    const [cont, setCont] = useState(0);

    const [skillPage, setSkillPage] = useState("");
    const [skillPageSelector, setSkillPageSelector] = useState("web");
    const [changeCard, setChangeCard] = useState(false);
    const [marqueePlay, setMarqueePlay] = useState(false);

    useEffect(() => {
        setChangePage(false);
        setCont(1)

        if (changePage && cont > 0) {
            setChangePage(false);
            setExit(true);
        }

        setTimeout(() => {
            setMarqueePlay(true);
        }, 300);

    }, [changePage]);

    const handleClick = (page) => {
        setExit(true);
        setChangePage(false);
        setActualPage(page);

        setTimeout(() => {
            navigate(page);
        }, 400);
    };

    const handleSkillsPage = (newSkillPage) => {
        if (newSkillPage === skillPage) {
            return;
        }

        const newPage = newSkillPage;

        setChangeCard(true);
        setSkillPageSelector(newPage);

        setTimeout(() => {
            setChangeCard(false);
            setSkillPage(newPage);
        }, 500);
    }


    return (
        <div className={!exit ? "skillsPage" : "skillsPage exit"}>
            <div className="skillsPage__space top"></div>
            <article className="skillsPage__content">
                <section className="skillsPage__topContent">
                    <Marquee pauseOnHover={true} play={marqueePlay} autoFill={true} gradient={true} gradientColor="rgba(163, 174, 223, 0.8)" className="skillsPage__marquee">
                        <div className="skillsPage__marquee--imgWrap">
                            <img src={devIcon} alt="web developer icon" className="skillsPage__marquee--img" />
                        </div>
                        <div className="skillsPage__marquee--imgWrap">
                            <img src={javascriptIcon} alt="javaScript icon" className="skillsPage__marquee--img" />
                        </div>
                        <div className="skillsPage__marquee--imgWrap">
                            <img src={htmlIcon} alt="html icon" className="skillsPage__marquee--img" />
                        </div>
                        <div className="skillsPage__marquee--imgWrap">
                            <img src={cssIcon} alt="css icon" className="skillsPage__marquee--img" />
                        </div>
                        <div className="skillsPage__marquee--imgWrap">
                            <img src={httpIcon} alt="http icon" className="skillsPage__marquee--img" />
                        </div>
                        <div className="skillsPage__marquee--imgWrap">
                            <img src={csharpIcon} alt="charp icon" className="skillsPage__marquee--img" />
                        </div>
                        <div className="skillsPage__marquee--imgWrap">
                            <img src={reactIcon} alt="reactjs icon" className="skillsPage__marquee--img" />
                        </div>
                        <div className="skillsPage__marquee--imgWrap">
                            <img src={nodeIcon} alt="nodejs icon" className="skillsPage__marquee--img" />
                        </div>
                        <div className="skillsPage__marquee--imgWrap">
                            <img src={mysqlIcon} alt="mysql icon" className="skillsPage__marquee--img" />
                        </div>
                        <div className="skillsPage__marquee--imgWrap">
                            <img src={postgresIcon} alt="postgresql icon" className="skillsPage__marquee--img" />
                        </div>
                        <div className="skillsPage__marquee--imgWrap">
                            <img src={mongodbIcon} alt="mongodb icon" className="skillsPage__marquee--img" />
                        </div>
                        <div className="skillsPage__marquee--imgWrap">
                            <img src={unityIcon} alt="unity 3d icon" className="skillsPage__marquee--img" />
                        </div>
                        <div className="skillsPage__marquee--imgWrap">
                            <img src={visualIcon} alt="visual studio code icon" className="skillsPage__marquee--img" />
                        </div>
                        <div className="skillsPage__marquee--imgWrap">
                            <img src={githubIcon} alt="github icon" className="skillsPage__marquee--img" />
                        </div>
                    </Marquee>
                </section>
                <section className="skillsPage__mainTextWrap">
                    <ul className="skillsPage__mainTextWrap--list">
                        <li className={skillPageSelector === "web" ? "skillsPage__mainTextWrap--item selected" : "skillsPage__mainTextWrap--item"} onClick={() => handleSkillsPage("web")}>
                            <p>WEB</p>
                        </li>
                        <li className={skillPageSelector === "ddbb" ? "skillsPage__mainTextWrap--item selected" : "skillsPage__mainTextWrap--item"} onClick={() => handleSkillsPage("ddbb")}>
                            <p>DDBB</p>
                        </li>
                        <li className={skillPageSelector === "videogames" ? "skillsPage__mainTextWrap--item selected" : "skillsPage__mainTextWrap--item"} onClick={() => handleSkillsPage("videogames")}>
                            <p>VIDEOJUEGOS</p>
                        </li>
                        <li className={skillPageSelector === "language" ? "skillsPage__mainTextWrap--item selected" : "skillsPage__mainTextWrap--item"} onClick={() => handleSkillsPage("language")}>
                            <p>IDIOMAS</p>
                        </li>
                        <li className={skillPageSelector === "softSkills" ? "skillsPage__mainTextWrap--item selected" : "skillsPage__mainTextWrap--item"} onClick={() => handleSkillsPage("softSkills")}>
                            <p>SOFT SKILLS</p>
                        </li>
                    </ul>
                    <div className={changeCard ? "skillsPage__mainTex--content exit" : "skillsPage__mainTex--content"}>
                        {skillPage === "" && <WebSkillsPage />}
                        {skillPage === "web" && <WebSkillsPage />}
                        {skillPage === "ddbb" && <DatabaseSkillsPage />}
                        {skillPage === "videogames" && <VideogameSkillsPage />}
                        {skillPage === "language" && <LanguageSkillsPage />}
                        {skillPage === "softSkills" && <SoftSkillsPage />}
                    </div>
                </section>
                <section className="skillsPage__buttonWrap">
                    <button className="skillsPage__button" onClick={() => handleClick("/portfolio")}>PORTFOLIO</button>
                    <p>Todo un repertorio de habilidades</p>
                    <button className="skillsPage__button" onClick={() => handleClick("/experience")}>EXPERIENCIA</button>
                </section>
            </article>
            <div className="skillsPage__space bottom"></div>
        </div>)

}

export default SkillsPage;