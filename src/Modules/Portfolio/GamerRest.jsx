import { Link } from "react-router-dom";
import gamerRestPortalImg from "../../assets/images/GamerRestFront_Basic.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

const GamerRest = () => {
    //language
    const { t } = useTranslation();

    return (
        <>
            <div className="portfolioPage__textSection">
                <h2 className="portfolioPage__tittle"><b>
                    {t("portfolio.gamerRest.tittle")}
                </b></h2>
                <p className="portfolioPage__smallText">
                    {t("portfolio.gamerRest.text")}
                </p>
                <p className="portfolioPage__smallText"><b>
                    {t("portfolio.gamerRest.type")}
                </b></p>
                <p className="portfolioPage__smallText"><b>
                    {t("portfolio.gamerRest.tech")}  
                </b></p>
            </div>
            <div className="portfolioPage__media">
                <img className="portfolioPage__webpagePhoto" src={gamerRestPortalImg} alt="Gamer Rest Webpage Frontpage"></img>
                <div className="portfolioPage__linkWrap">
                    <Link to="https://gamefeed-front.onrender.com/" className="portfolioPage__link" target="_blank" rel="noopener noreferrer">
                        Home <FontAwesomeIcon icon={faHouse} className="portfolioPage__icon" />
                    </Link>
                    <Link to="https://github.com/AGGenius/GameFeed-Front/tree/main" className="portfolioPage__link" target="_blank" rel="noopener noreferrer">
                        Front <FontAwesomeIcon icon={faGithub} className="portfolioPage__icon" />
                    </Link>
                    <Link to="https://github.com/AGGenius/GameFeed-Back" className="portfolioPage__link" target="_blank" rel="noopener noreferrer">
                        Back <FontAwesomeIcon icon={faGithub} className="portfolioPage__icon" />
                    </Link>
                </div>
            </div>
        </>)
}

export default GamerRest;