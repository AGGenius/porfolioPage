import { Link } from "react-router-dom";
import dashboardPortalImg from "../../assets/images/Dashboard_Basic.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslation, Trans } from "react-i18next";

const DashboardBig = () => {
    //language
    const { t } = useTranslation();

    return (
        <>
            <div className="portfolioPage__textSection--Big">
                <h2 className="portfolioPage__tittle--Big">
                    {t("portfolio.dashboard.tittle")}
                </h2>
                <h3 className="portfolioPage__subtittle--Big">
                    {t("portfolio.dashboard.subTittle")}
                </h3>
                <p className="portfolioPage__text--Big">
                    {t("portfolio.dashboard.paragraph1")}
                </p>
                <ul className="portfolioPage__list--Big">
                    <li className="portfolioPage__listEntry--Big">
                        {t("portfolio.dashboard.listItem1")}
                    </li>
                    <li className="portfolioPage__listEntry--Big">
                        {t("portfolio.dashboard.listItem2")}
                    </li>
                    <li className="portfolioPage__listEntry--Big">
                        {t("portfolio.dashboard.listItem3")}
                    </li>
                    <li className="portfolioPage__listEntry--Big">
                        {t("portfolio.dashboard.listItem4")}
                    </li>
                    <li className="portfolioPage__listEntry--Big">
                        {t("portfolio.dashboard.listItem5")}
                    </li>
                    <li className="portfolioPage__listEntry--Big">
                        {t("portfolio.dashboard.listItem6")}
                    </li>
                </ul>
                <p className="portfolioPage__text--Big">
                    {t("portfolio.dashboard.paragraph2")}
                </p>
                <p className="portfolioPage__text--Big  tech"><b>
                    {t("portfolio.dashboard.techBig")}
                </b></p>
            </div>
            <div className="portfolioPage__media--Big">
                <img className="portfolioPage__webpagePhoto--Big" src={dashboardPortalImg} alt="Gamer Rest Webpage Frontpage"></img>
                <div className="portfolioPage__linkWrap--Big">
                    <Link to="https://aggenius.github.io/project-break-dashboard/html/index.html" className="portfolioPage__link--Big" target="_blank" rel="noopener noreferrer">
                        Home <FontAwesomeIcon icon={faHouse} className="portfolioPage__icon" />
                    </Link>
                    <Link to="https://github.com/AGGenius/project-break-dashboard" className="portfolioPage__link--Big" target="_blank" rel="noopener noreferrer">
                        Back <FontAwesomeIcon icon={faGithub} className="portfolioPage__icon" />
                    </Link>
                </div>
            </div>
        </>)
}

export default DashboardBig;