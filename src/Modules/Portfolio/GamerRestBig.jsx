import { Link } from "react-router-dom";
import gamerRestPortalImg from "../../assets/images/GamerRestFront_Basic.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslation, Trans } from "react-i18next";

const GamerRestBig = () => {
    //language
    const { t } = useTranslation();

    return (
        <>
            <div className="portfolioPage__textSection--Big">
                <h2 className="portfolioPage__tittle--Big">
                    {t("portfolio.gamerRest.tittle")}
                </h2>
                <h3 className="portfolioPage__subtittle--Big">
                    {t("portfolio.gamerRest.subTittle")}
                </h3>
                <p className="portfolioPage__text--Big">
                        <Trans
                            i18nKey="portfolio.gamerRest.paragraph1"
                            components={{b: <b />}}
                        />
                </p>
                <p className="portfolioPage__text--Big">
                        <Trans
                            i18nKey="portfolio.gamerRest.paragraph2"
                            components={{b: <b />}}
                        />
                </p>
                <p className="portfolioPage__text--Big">
                        <Trans
                            i18nKey="portfolio.gamerRest.paragraph3"
                            components={{b: <b />}}
                        />
                </p>
                <p className="portfolioPage__text--Big tech"><b>
                    {t("portfolio.gamerRest.techBig")}
                </b></p>
            </div>
            <div className="portfolioPage__media--Big">
                <img className="portfolioPage__webpagePhoto--Big" src={gamerRestPortalImg} alt="Gamer Rest Webpage Frontpage"></img>
                <div className="portfolioPage__linkWrap--Big">
                    <Link to="https://gamefeed-front.onrender.com/" className="portfolioPage__link--Big" target="_blank" rel="noopener noreferrer">
                        Home <FontAwesomeIcon icon={faHouse} className="portfolioPage__icon--Big" />
                    </Link>
                    <Link to="https://github.com/AGGenius/GameFeed-Front/tree/main" className="portfolioPage__link--Big" target="_blank" rel="noopener noreferrer">
                        Front <FontAwesomeIcon icon={faGithub} className="portfolioPage__icon--Big" />
                    </Link>
                    <Link to="https://github.com/AGGenius/GameFeed-Back" className="portfolioPage__link--Big" target="_blank" rel="noopener noreferrer">
                        Back <FontAwesomeIcon icon={faGithub} className="portfolioPage__icon--Big" />
                    </Link>
                </div>
            </div>
        </>)
}

export default GamerRestBig;