import { useNavigate } from "react-router-dom";
import { useChangePageContext } from "../Context/useChangePageContext";
import { useEffect, useState } from "react";
import './LinksPage.css'

const LinksPage = () => {
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
        <div className={!exit ? "linksPage" : "linksPage exit"}>
            <div className="linksPage__space top"></div>
            <div className="linksPage__content">
                <button className="linksPage__button" onClick={() => handleClick("/experience")}>PREV</button>
                <p>LINKS</p>
                <button className="linksPage__button" onClick={() => handleClick("/contact")}>NEXT</button>
            </div>
            <div className="linksPage__space bottom"></div>
        </div>)

}

export default LinksPage;