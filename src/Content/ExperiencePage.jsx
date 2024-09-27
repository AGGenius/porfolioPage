import { useNavigate } from "react-router-dom";
import { useChangePageContext } from "../Context/useChangePageContext";
import { useEffect, useState } from "react";
import './ExperiencePage.css'

const ExperiencePage = () => {
    const { changePage, setChangePage } = useChangePageContext();
    const { setActualPage } = useChangePageContext();
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
        setActualPage(page);

        setTimeout(() => {
            navigate(page);
        }, 400);
    };
    
    return (
        <div className={!exit ? "experiencePage" : "experiencePage exit"}>
            <div className="experiencePage__space top"></div>
            <div className="experiencePage__content">
                <button className="experiencePage__button" onClick={() => handleClick("/skills")}>PREV</button>
                <p>EXPERIENCE</p>
                <button className="experiencePage__button" onClick={() => handleClick("/links")}>NEXT</button>
            </div>
            <div className="experiencePage__space bottom"></div>
        </div>)

}

export default ExperiencePage;