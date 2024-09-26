import { useNavigate } from "react-router-dom";
import { useChangePageContext } from "../Context/useChangePageContext";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './NavPage.css'

const NavPage = () => {
    const { setChangePage } = useChangePageContext();
    const { actualPage, setActualPage } = useChangePageContext();
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (page) => {
        if (location.pathname !== page) {
            const nextPage = page;

            setChangePage(true);
            setActualPage(nextPage);

            setTimeout(() => {
                navigate(nextPage);
            }, 400);
        }
    };

    return (
        <nav>
            <a className={actualPage === "/" ? "nav__link selected" : "nav__link"} onClick={() => handleClick("/")}>ABOUT</a>
            <a className={actualPage === "/portfolio" ? "nav__link selected" : "nav__link"} onClick={() => handleClick("/portfolio")}>PORTFOLIO</a>
            <a className={actualPage === "/skills" ? "nav__link selected" : "nav__link"} onClick={() => handleClick("/skills")}>SKILLS</a>
            <a className={actualPage === "/experience" ? "nav__link selected" : "nav__link"} onClick={() => handleClick("/experience")}>EXPERIENCE</a>
            <a className={actualPage === "/links" ? "nav__link selected" : "nav__link"} onClick={() => handleClick("/links")}>LINKS</a>
            <a className={actualPage === "/contact" ? "nav__link selected" : "nav__link"} onClick={() => handleClick("/contact")}>CONTACT</a>
        </nav>)
}

export default NavPage;