import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './MainPage.css'

const MainPage = () => {
    const navigate = useNavigate();
    const [exit, setExit] = useState(false);

    const handleClick = (page) => {
        setExit(true);

        setTimeout(() => {
            navigate(page);
        }, 800);
    };

    return (
        <div className={!exit ? "mainPage" : "mainPage exit"}>
            <div className="mainPage__space top"></div>
            <div className="mainPage__content">
                <p>ABOUT ME</p>
                <button className="mainPage__button" onClick={() => handleClick("/portfolio")}>NEXT</button>
            </div>
            <div className="mainPage__space bottom"></div>
        </div>)

}

export default MainPage;