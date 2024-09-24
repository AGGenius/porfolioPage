import { Link, useNavigate } from "react-router-dom";
import { useChangePageContext } from "../Context/useChangePageContext";
import { useEffect, useState } from "react";
import './PortfolioPage.css'

import GamerRest from "../Modules/Portfolio/GamerRest";
import GamerRestBig from "../Modules/Portfolio/GamerRestBig";
import ReactCoin from "../Modules/Portfolio/ReactCoin";
import ReactCoinBig from "../Modules/Portfolio/ReactCoinBig";
import Dashboard from "../Modules/Portfolio/Dashboard";
import DashboardBig from "../Modules/Portfolio/DashboardBig";
import Flags from "../Modules/Portfolio/Flags";
import FlagsBig from "../Modules/Portfolio/FlagsBig";
import AtomicChamber from "../Modules/Portfolio/AtomicChamber";
import AtomicChamberBig from "../Modules/Portfolio/AtomicChamberBig";

const PortfolioPage = () => {
    const { changePage, setChangePage } = useChangePageContext();
    const navigate = useNavigate();
    const [exit, setExit] = useState(false);
    const [cont, setCont] = useState(0);

    const [bigCard, setBigCard] = useState("");
    const [changeCard, setChangeCard] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setChangePage(false);
        setCont(1)

        if (changePage && cont > 0) {
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

    const handleBigCard = (portfolioCard) => {
        const actualState = portfolioCard;
        const actualChange = changeCard;
        setLoaded(true);

        setChangeCard(!actualChange);

        setTimeout(() => {
            setBigCard(actualState);
        }, 300);
    }

    return (
        <div className={!exit ? "portfolioPage" : "portfolioPage exit"}>
            <div className="portfolioPage__space top"></div>
            <article className="portfolioPage__content">
                <section className={!loaded ? "portfolioPage__static" : changeCard ? "portfolioPage__cardWrap enter" : "portfolioPage__cardWrap exit"} >
                    {bigCard === "" &&
                        <ul className="portfolioPage__list">
                            <li className="portfolioPage__card" onClick={() => handleBigCard("GamerRest")}>
                                {<GamerRest />}
                            </li>
                            <li className="portfolioPage__card" onClick={() => handleBigCard("ReactCoin")}>
                                {<ReactCoin />}
                            </li>
                            <li className="portfolioPage__card" onClick={() => handleBigCard("Dashboard")}>
                                {<Dashboard />}
                            </li>
                            <li className="portfolioPage__card" onClick={() => handleBigCard("Flags")}>
                                {<Flags />}
                            </li>
                            <li className="portfolioPage__card" onClick={() => handleBigCard("AtomicChamber")}>
                                {<AtomicChamber />}
                            </li>
                        </ul>
                    }
                    {bigCard !== "" &&
                        <div className="portfolioPage__bigCard" onClick={() => handleBigCard("")}>
                            {bigCard === "GamerRest" && <GamerRestBig />}
                            {bigCard === "ReactCoin" && <ReactCoinBig />}
                            {bigCard === "Dashboard" && <DashboardBig />}
                            {bigCard === "Flags" && <FlagsBig />}
                            {bigCard === "AtomicChamber" && <AtomicChamberBig />}
                        </div>
                    }
                </section>
                <section className="portfolioPage__buttonWrap">
                    <button className="portfolioPage__button" onClick={() => handleClick("/")}>PREV</button>
                    <h1>Aquí tienes ejemplos de mi desarrollo como programador</h1>
                    <button className="portfolioPage__button" onClick={() => handleClick("/skills")}>NEXT</button>
                </section>
            </article>
            <div className="portfolioPage__space bottom"></div>
        </div>)
}

export default PortfolioPage;