import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './NavPage.css'

const NavPage = () => { 
    const navigate = useNavigate();
    const handleClick = (page) => {

    setTimeout(() => {
        navigate(page);
    }, 800);
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