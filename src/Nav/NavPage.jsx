import { useNavigate } from "react-router-dom";
import { useChangePageContext } from "../Context/useChangePageContext";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './NavPage.css'

const NavPage = () => {
    const { setChangePage } = useChangePageContext();
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (page) => {
        if (location.pathname !== page) {
            setChangePage(true);

            setTimeout(() => {
                navigate(page);
            }, 400);
        }
    };

    return (
        <nav>
            <a onClick={() => handleClick("/")}>ABOUT</a>
            <a onClick={() => handleClick("/portfolio")}>PORTFOLIO</a>
            <a onClick={() => handleClick("/skills")}>SKILLS</a>
            <a onClick={() => handleClick("/experience")}>EXPERIENCE</a>
            <a onClick={() => handleClick("/links")}>LINKS</a>
            <a onClick={() => handleClick("/contact")}>CONTACT</a>
        </nav>)
}

export default NavPage;