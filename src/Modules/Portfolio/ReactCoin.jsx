import { Link } from "react-router-dom";
import CoinsPortalImg from "../../assets/images/Coins_Basic.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslation, Trans } from "react-i18next";

const ReactCoin = () => {
    //language
    const { t } = useTranslation();

    return (
        <>
            <div className="portfolioPage__textSection">
                <h2 className="portfolioPage__tittle">
                    {t("portfolio.reactCoin.tittle")}
                </h2>
                <p>
                    {t("portfolio.reactCoin.text")}
                </p>
                <p><b>
                    {t("portfolio.reactCoin.type")}
                </b></p>
                <p><b>
                    {t("portfolio.reactCoin.tech")}
                </b></p>
            </div>
            <div className="portfolioPage__media">
                <img className="portfolioPage__webpagePhoto" src={CoinsPortalImg} alt="Gamer Rest Webpage Frontpage"></img>
                <div className="portfolioPage__linkWrap">
                    <Link to="https://github.com/AGGenius/react-coin" className="portfolioPage__link" target="_blank" rel="noopener noreferrer">
                        Front <FontAwesomeIcon icon={faGithub} className="portfolioPage__icon" />
                    </Link>
                </div>
            </div>
        </>)
}

export default ReactCoin;