import { useNavigate } from "react-router-dom";
import { useChangePageContext } from "../Context/useChangePageContext";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import './ExperiencePage.css'

const ExperiencePage = () => {
    const { changePage, setChangePage } = useChangePageContext();
    const { setActualPage } = useChangePageContext();
    const navigate = useNavigate();
    const [exit, setExit] = useState(false);
    const [cont, setCont] = useState(0);

    //language
    const { t } = useTranslation();

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
                    <p className="experiencePage__time--year">
                        {t("experience.date")}
                    </p>
                    <p className="experiencePage__time--year">2018</p>
                </section>
                <section className="experiencePage__text">
                    <ul className="experiencePage__list">
                        <li className="experiencePage__listItem">
                            <h2 className="experiencePage__list-tittle">
                                {t("experience.item1.tittle")}
                            </h2>
                            <h3 className="experiencePage__list--subtittle">
                                {t("experience.item1.subTittle")}
                            </h3>
                            <p className="experiencePage__list--time">
                                {t("experience.item1.timeline")}
                            </p>
                            <p className="experiencePage__list--position">
                                {t("experience.item1.type")}
                            </p>
                            <p className="experiencePage__list--content">
                                {t("experience.item1.item1")}
                            </p>
                            <p className="experiencePage__list--content">
                                {t("experience.item1.item2")}
                            </p>
                            <p className="experiencePage__list--content">
                                {t("experience.item1.item3")}
                            </p>
                            <p className="experiencePage__list--content">
                                {t("experience.item1.item4")}
                            </p>
                            <p className="experiencePage__list--content">
                                {t("experience.item1.item5")}
                            </p>
                            <p className="experiencePage__list--content">
                                {t("experience.item1.item6")}
                            </p>
                            <p className="experiencePage__list--content">
                                {t("experience.item1.item7")}
                            </p>
                            <p className="experiencePage__list--content">
                                {t("experience.item1.item8")}
                            </p>
                            <p className="experiencePage__list--content tech"><b>
                                {t("experience.item1.tech")}
                            </b></p>
                        </li>
                        <li className="experiencePage__listItem">
                            <h2 className="experiencePage__list-tittle">
                                {t("experience.item2.tittle")}
                            </h2>
                            <h3 className="experiencePage__list--subtittle">
                                {t("experience.item2.subTittle")}
                            </h3>
                            <p className="experiencePage__list--time">
                                {t("experience.item2.timeline")}
                            </p>
                            <p className="experiencePage__list--position">
                                {t("experience.item2.type")}
                            </p>
                            <p className="experiencePage__list--content">
                                {t("experience.item2.item1")}
                            </p>
                            <p className="experiencePage__list--content">
                                {t("experience.item2.item2")}
                            </p>
                            <p className="experiencePage__list--content">
                                {t("experience.item2.item3")}
                            </p>
                            <p className="experiencePage__list--content">
                                {t("experience.item2.item4")}
                            </p>
                            <p className="experiencePage__list--content tech"><b>
                                {t("experience.item2.tech")}
                            </b></p>
                        </li>
                        <li className="experiencePage__listItem">
                            <h2 className="experiencePage__list-tittle">
                                {t("experience.item3.tittle")}
                            </h2>
                            <h3 className="experiencePage__list--subtittle">
                                {t("experience.item3.subTittle")}
                            </h3>
                            <p className="experiencePage__list--time">
                                {t("experience.item3.timeline")}
                            </p>
                            <p className="experiencePage__list--position">
                                {t("experience.item3.type")}
                            </p>
                            <p className="experiencePage__list--content">
                                {t("experience.item3.item1")}
                            </p>
                            <p className="experiencePage__list--content">
                                {t("experience.item3.item2")}
                            </p>
                            <p className="experiencePage__list--content">
                                {t("experience.item3.item3")}
                            </p>
                            <p className="experiencePage__list--content">
                                {t("experience.item3.item4")}
                            </p>
                            <p className="experiencePage__list--content">
                                {t("experience.item3.item5")}
                            </p>
                            <p className="experiencePage__list--content">
                                {t("experience.item3.item6")}
                            </p>
                            <p className="experiencePage__list--content">
                                {t("experience.item3.item7")}
                            </p>
                            <p className="experiencePage__list--content tech"><b>
                                {t("experience.item3.tech")}
                            </b></p>
                        </li>
                        <li className="experiencePage__listItem">
                            <h2 className="experiencePage__list-tittle">
                                {t("experience.item4.tittle")}
                            </h2>
                            <h3 className="experiencePage__list--subtittle">
                                {t("experience.item4.subTittle")}
                            </h3>
                            <p className="experiencePage__list--time">
                                {t("experience.item4.timeline")}
                            </p>
                            <p className="experiencePage__list--position">
                                {t("experience.item4.type")}
                            </p>
                            <p className="experiencePage__list--content">
                                {t("experience.item4.item1")}
                            </p>
                            <p className="experiencePage__list--content">
                                {t("experience.item4.item2")}
                            </p>
                            <p className="experiencePage__list--content">
                                {t("experience.item4.item3")}
                            </p>
                            <p className="experiencePage__list--content">
                                {t("experience.item4.item4")}
                            </p>
                            <p className="experiencePage__list--content">
                                {t("experience.item4.item5")}
                            </p>
                            <p className="experiencePage__list--content">
                                {t("experience.item4.item6")}
                            </p>
                            <p className="experiencePage__list--content">
                                {t("experience.item4.item7")}
                            </p>
                            <p className="experiencePage__list--content tech"><b>
                                {t("experience.item4.tech")}
                            </b></p>
                        </li>
                    </ul>
                </section>
                <section className="experiencePage__buttonWrap">
                    <button className="experiencePage__button" onClick={() => handleClick("/skills")}>
                        {t("experience.prevButton")}
                    </button>
                    <p>
                        {t("experience.buttonText")}
                    </p>
                    <button className="experiencePage__button" onClick={() => handleClick("/links")}>
                        {t("experience.nextButton")}
                    </button>
                </section>
            </article>
            <div className="experiencePage__space bottom"></div>
        </div>)

}

export default ExperiencePage;