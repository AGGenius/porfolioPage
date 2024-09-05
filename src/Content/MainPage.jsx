import { useNavigate } from "react-router-dom";
import { useChangePageContext } from "../Context/useChangePageContext";
import { useEffect, useState } from "react";
import './MainPage.css'

const MainPage = () => {
    const { changePage, setChangePage } = useChangePageContext();
    const navigate = useNavigate();
    const [exit, setExit] = useState(false);
    const [cont, setCont] = useState(0);

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

    return (
        <div className={!exit ? "mainPage" : "mainPage exit"}>
            <div className="mainPage__space top"></div>
            <div className="mainPage__content">
                <button className="mainPage__button" onClick={() => handleClick("/contact")}>PREV</button>
                <p>ABOUT ME</p>
                <button className="mainPage__button" onClick={() => handleClick("/portfolio")}>NEXT</button>
            </div>
            <div className="mainPage__space bottom"></div>
        </div>)

}

export default MainPage;