import { useNavigate } from "react-router-dom";
import { useChangePageContext } from "../Context/useChangePageContext";
import { useEffect, useState } from "react";
import './SkillsPage.css'

const SkillsPage = () => {
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
        <div className={!exit ? "skillsPage" : "skillsPage exit"}>
            <div className="skillsPage__space top"></div>
            <div className="skillsPage__content">
                <button className="skillsPage__button" onClick={() => handleClick("/portfolio")}>PREV</button>
                <p>SKILLS</p>
                <button className="skillsPage__button" onClick={() => handleClick("/experience")}>NEXT</button>
            </div>
            <div className="skillsPage__space bottom"></div>
        </div>)

}

export default SkillsPage;