import { Link } from "react-router-dom";
import atomicChamberPortalImg from "../../assets/images/AtomicChamber_Basic.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const AtomicChamber = () => {
    //language
    const { t } = useTranslation();

    return (
        <>
            <div className="portfolioPage__textSection">
                <h2 className="portfolioPage__tittle">
                {t("portfolio.atomicChamber.tittle")}
                </h2>
                <p className="portfolioPage__smallText">
                {t("portfolio.atomicChamber.text")}
                </p>
                <p className="portfolioPage__smallText"><b>                    
                {t("portfolio.atomicChamber.tech")}
                </b></p>
            </div>
            <div className="portfolioPage__media">
                <img className="portfolioPage__webpagePhoto" src={atomicChamberPortalImg} alt="Gamer Rest Webpage Frontpage"></img>
                <div className="portfolioPage__linkWrap">
                    <Link to="https://play.google.com/store/apps/details?id=com.com.WildCatta.Atomas.AtomicChamber&hl=es" className="portfolioPage__link" target="_blank" rel="noopener noreferrer">
                        GooglePlay <FontAwesomeIcon icon={faMobileScreen} className="portfolioPage__icon" />
                    </Link>
                </div>
            </div>
        </>)
}

export default AtomicChamber;