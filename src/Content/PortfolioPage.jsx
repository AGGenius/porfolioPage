import { useNavigate } from "react-router-dom";
import { useChangePageContext } from "../Context/useChangePageContext";
import { useEffect, useState } from "react";
import './PortfolioPage.css'

const PortfolioPage = () => {
    const { changePage, setChangePage } = useChangePageContext();
    const navigate = useNavigate();
    const [exit, setExit] = useState(false);
    const [cont, setCont] = useState(0);

    useEffect(() => {
        setChangePage(false);
        setCont(1)

        if(changePage && cont > 0) {
            setChangePage(false);
            setExit(true);
        }

    }, [changePage]);

    const handleClick = (page) => {
        setExit(true);
        setChangePage(false);

        setTimeout(() => {
            navigate(page);
        }, 400);
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