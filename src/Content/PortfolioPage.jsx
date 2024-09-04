import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './PortfolioPage.css'

const PortfolioPage = () => {
    const navigate = useNavigate();
    const [exit, setExit] = useState(false);

    const handleClick = (page) => {
        setExit(true);

        setTimeout(() => {
            navigate(page);
        }, 800);
    };
    
    return (
        <div className={!exit ? "portfolioPage" : "portfolioPage exit"}>
            <div className="portfolioPage__space top"></div>
            <div className="portfolioPage__content">
                <button className="portfolioPage__button" onClick={() => handleClick("/")}>PREV</button>
                <p>PORTFOLIO</p>
                <button className="portfolioPage__button" onClick={() => handleClick("/skills")}>NEXT</button>
            </div>
            <div className="portfolioPage__space bottom"></div>
        </div>)

}

export default PortfolioPage;