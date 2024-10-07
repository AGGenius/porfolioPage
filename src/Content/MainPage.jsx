import { useNavigate } from "react-router-dom";
import { useChangePageContext } from "../Context/useChangePageContext";
import { useEffect, useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import photo from "../assets/images/Photo-hires_small.png"
import './MainPage.css'

const MainPage = () => {
    const { changePage, setChangePage } = useChangePageContext();
    const { setActualPage } = useChangePageContext();
    const navigate = useNavigate();
    const [exit, setExit] = useState(false);
    const [cont, setCont] = useState(0);
    const [photoBig, setPhotoBig] = useState(false);

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

    const handleImageClick = () => {
        const actualState = photoBig;
        setPhotoBig(!actualState)
    };

    return (
        <main className={!exit ? "mainPage" : "mainPage exit"}>
            <div className="mainPage__space top"></div>
            <article className="mainPage__content">
                <section className="mainPage__photoWrap">
                    <img className={!exit ? "mainPage__photo" : "mainPage__photo exit"} src={photo} alt="CV Photo" onClick={() => handleImageClick()} />
                </section>
                <section className="mainPage__text">
                    <h2 className="mainPage__mainTittle">
                        {t("mainPage.tittle")}
                    </h2>
                    <h3 className="mainPage__subTittle">
                        {t("mainPage.subTittle")}
                    </h3>
                    <h4 className="mainPage__tittleClosure">
                        {t("mainPage.tittleClosure")}
                    </h4>
                    <p className="mainPage__paraQuestion">
                        {t("mainPage.paragraphQuestion1")}
                    </p>
                    <p className="mainPage__paraContent short">
                        <Trans
                            i18nKey="mainPage.paragraph1"
                            components={{ i: <i /> }}
                        />
                    </p>
                    <p className="mainPage__paraQuestion">
                        {t("mainPage.paragraphQuestion2")}
                    </p>
                    <p className="mainPage__paraContent short">
                        <Trans
                            i18nKey="mainPage.paragraph2"
                            components={{ b: <b /> }}
                        />
                    </p>
                    <p className="mainPage__paraQuestion">
                        {t("mainPage.paragraphQuestion3")}
                    </p>
                    <p className="mainPage__paraContent">
                        <Trans
                            i18nKey="mainPage.paragraph3"
                            components={{ i: <i /> }}
                        />
                    </p>
                    <p className="mainPage__paraQuestion">
                        {t("mainPage.paragraphQuestion4")}
                    </p>
                    <p className="mainPage__paraContent">
                        <Trans
                            i18nKey="mainPage.paragraph4"
                            components={{ b: <b /> }}
                        />
                    </p>
                    <p className="mainPage__paraContent">
                        <Trans
                            i18nKey="mainPage.paragraph5"
                            components={{ i: <i /> }}
                        />
                    </p>
                    <p className="mainPage__paraContent">
                        <Trans
                            i18nKey="mainPage.paragraph6"
                            components={{ b: <b /> }}
                        />
                    </p>
                </section>
                <section className="mainPage__buttonWrap">
                    <button className="mainPage__button" onClick={() => handleClick("/contact")}>
                        {t("mainPage.nextButton")}
                    </button>
                    <p>
                        {t("mainPage.buttonText")}
                    </p>
                    <button className="mainPage__button" onClick={() => handleClick("/portfolio")}>
                        {t("mainPage.prevButton")}
                    </button>
                </section>
            </article>
            {photoBig &&
                <div className="mainPage__photoBigWrap">
                    <img className="mainPage__photoBig" src={photo} alt="CV Photo Big" onClick={() => handleImageClick()} />
                </div>
            }
            <div className="mainPage__space bottom"></div>
        </main >)

}

export default MainPage;