import { Link } from "react-router-dom";
import dashboardPortalImg from "../../assets/images/Dashboard_Basic.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Dashboard = () => {

    return (
        <>
            <div className="portfolioPage__textSection">
                <h2 className="portfolioPage__tittle">Dashboard</h2>
                <p>Web con multiples funciones para usar como pagina principal de navegador.</p>
                <p><b>Front</b></p>
                <p><b>JavaScript - HTML5 - CSS3</b></p>
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