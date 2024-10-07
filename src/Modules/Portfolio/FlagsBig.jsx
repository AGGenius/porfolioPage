import { Link } from "react-router-dom";
import FlagsPortalImg from "../../assets/images/Banderas_Basic.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslation, Trans } from "react-i18next";

const FlagsBig = () => {
    //language
    const { t } = useTranslation();

    return (
        <>
            <div className="portfolioPage__textSection--Big">
                <h2 className="portfolioPage__tittle--Big">
                {t("portfolio.funWithFlags.tittle")}
                </h2>
                <h3 className="portfolioPage__subtittle--Big">
                {t("portfolio.funWithFlags.subTittle")}
                </h3>
                <p className="portfolioPage__text--Big">
                {t("portfolio.funWithFlags.paragraph1")}
                </p>
                <p className="portfolioPage__text--Big">
                {t("portfolio.funWithFlags.paragraph2")}
                </p>
                <p className="portfolioPage__text--Big">
                        <Trans
                            i18nKey="portfolio.funWithFlags.paragraph3"
                            components={{b: <b />}}
                        />
                </p>
                <p className="portfolioPage__text--Big tech"><b>
                {t("portfolio.funWithFlags.techBig")}
                </b></p>
            </div>
            <div className="portfolioPage__media--Big">
            <img className="portfolioPage__webpagePhoto--Big" src={FlagsPortalImg} alt="Gamer Rest Webpage Frontpage"></img>
                <div className="portfolioPage__linkWrap--Big">
                    <Link to="https://github.com/AGGenius/diversion-con-banderas" className="portfolioPage__link--Big" target="_blank" rel="noopener noreferrer">
                        Front <FontAwesomeIcon icon={faGithub} className="portfolioPage__icon" />
                    </Link>
                </div>
            </div>
        </>)
}

export default FlagsBig;