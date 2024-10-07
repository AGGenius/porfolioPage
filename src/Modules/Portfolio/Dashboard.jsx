import { Link } from "react-router-dom";
import dashboardPortalImg from "../../assets/images/Dashboard_Basic.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslation, Trans } from "react-i18next";

const Dashboard = () => {
    //language
    const { t } = useTranslation();

    return (
        <>
            <div className="portfolioPage__textSection">
                <h2 className="portfolioPage__tittle">
                    {t("portfolio.dashboard.tittle")}
                </h2>
                <p>
                    {t("portfolio.dashboard.text")}
                </p>
                <p><b>
                    {t("portfolio.dashboard.type")}
                </b></p>
                <p><b>
                    {t("portfolio.dashboard.tech")}
                </b></p>
            </div>
            <div className="portfolioPage__media">
                <img className="portfolioPage__webpagePhoto" src={dashboardPortalImg} alt="Gamer Rest Webpage Frontpage"></img>
                <div className="portfolioPage__linkWrap">
                    <Link to="https://aggenius.github.io/project-break-dashboard/html/index.html" className="portfolioPage__link" target="_blank" rel="noopener noreferrer">
                        Home <FontAwesomeIcon icon={faHouse} className="portfolioPage__icon" />
                    </Link>
                    <Link to="https://github.com/AGGenius/project-break-dashboard" className="portfolioPage__link" target="_blank" rel="noopener noreferrer">
                        Front <FontAwesomeIcon icon={faGithub} className="portfolioPage__icon" />
                    </Link>
                </div>
            </div>
        </>)
}

export default Dashboard;