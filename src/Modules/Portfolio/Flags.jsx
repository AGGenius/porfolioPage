import { Link } from "react-router-dom";
import FlagsPortalImg from "../../assets/images/Banderas_Basic.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslation, Trans } from "react-i18next";

const Flags = () => {
    //language
    const { t } = useTranslation();

    return (
        <>
            <div className="portfolioPage__textSection">
                <h2 className="portfolioPage__tittle">
                    {t("portfolio.funWithFlags.tittle")}
                </h2>
                <p>
                    {t("portfolio.funWithFlags.text")}
                </p>
                <p><b>
                    {t("portfolio.funWithFlags.type")}
                </b></p>
                <p><b>
                    {t("portfolio.funWithFlags.tech")}
                </b></p>
            </div>
            <div className="portfolioPage__media">
                <img className="portfolioPage__webpagePhoto" src={FlagsPortalImg} alt="Gamer Rest Webpage Frontpage"></img>
                <div className="portfolioPage__linkWrap">
                    <Link to="https://github.com/AGGenius/diversion-con-banderas" className="portfolioPage__link" target="_blank" rel="noopener noreferrer">
                        Front <FontAwesomeIcon icon={faGithub} className="portfolioPage__icon" />
                    </Link>
                </div>
            </div>
        </>)
}

export default Flags;