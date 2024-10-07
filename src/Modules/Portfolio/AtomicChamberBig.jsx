import { Link } from "react-router-dom";
import atomicChamberPortalImg from "../../assets/images/AtomicChamber_Basic.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { useTranslation, Trans } from "react-i18next";

const AtomicChamberBig = () => {
    //language
    const { t } = useTranslation();

    return (
        <>
            <div className="portfolioPage__textSection--Big">
                <h2 className="portfolioPage__tittle--Big">
                    {t("portfolio.atomicChamber.tittle")}
                </h2>
                <h3 className="portfolioPage__subtittle--Big">
                    {t("portfolio.atomicChamber.subTittle")}
                </h3>
                <p className="portfolioPage__text--Big">
                    <Trans
                        i18nKey="portfolio.atomicChamber.paragraph1"
                        components={{ b: <b /> }}
                    />
                </p>
                <p className="portfolioPage__text--Big">
                    <Trans
                        i18nKey="portfolio.atomicChamber.paragraph2"
                        components={{ b: <b /> }}
                    />
                </p>
                <p className="portfolioPage__text--Big">
                    <Trans
                        i18nKey="portfolio.atomicChamber.paragraph3"
                        components={{ b: <b /> }}
                    />
                </p>
                <p className="portfolioPage__text--Big">
                    <Trans
                        i18nKey="portfolio.atomicChamber.paragraph4"
                        components={{ b: <b /> }}
                    />
                </p>
                <p className="portfolioPage__text--Big tech"><b>
                    {t("portfolio.atomicChamber.techBig")}
                </b></p>
            </div>
            <div className="portfolioPage__media--Big">
                <img className="portfolioPage__webpagePhoto--Big" src={atomicChamberPortalImg} alt="Gamer Rest Webpage Frontpage"></img>
                <div className="portfolioPage__linkWrap--Big">
                    <Link to="https://play.google.com/store/apps/details?id=com.com.WildCatta.Atomas.AtomicChamber&hl=es" className="portfolioPage__link--Big" target="_blank" rel="noopener noreferrer">
                        GooglePlay <FontAwesomeIcon icon={faMobileScreen} className="portfolioPage__icon" />
                    </Link>
                </div>
            </div>
        </>)
}

export default AtomicChamberBig;