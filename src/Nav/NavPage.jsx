import { useNavigate } from "react-router-dom";
import { useChangePageContext } from "../Context/useChangePageContext";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import './NavPage.css'

const NavPage = () => {
    const { setChangePage } = useChangePageContext();
    const { actualPage, setActualPage } = useChangePageContext();
    const navigate = useNavigate();
    const location = useLocation();

    //menu
    const [colapsedMenu, setColapsedMenu] = useState(false);

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

    const navLinks = () => {
        return (
            <>
                <a className={actualPage === "/" ? "nav__link selected" : "nav__link"} onClick={() => handleClick("/")}>SOBRE MI</a>
                <a className={actualPage === "/portfolio" ? "nav__link selected" : "nav__link"} onClick={() => handleClick("/portfolio")}>PORTFOLIO</a>
                <a className={actualPage === "/skills" ? "nav__link selected" : "nav__link"} onClick={() => handleClick("/skills")}>SKILLS</a>
                <a className={actualPage === "/experience" ? "nav__link selected" : "nav__link"} onClick={() => handleClick("/experience")}>EXPERIENCIA</a>
                <a className={actualPage === "/links" ? "nav__link selected" : "nav__link"} onClick={() => handleClick("/links")}>ENLACES</a>
                <a className={actualPage === "/contact" ? "nav__link selected" : "nav__link"} onClick={() => handleClick("/contact")}>CONTACTO</a>
            </>)
    }

    const baseNav = () => {
        return (
            <div className="nav__base">
                {navLinks()}
            </div>)
    }

    return (
        <nav className={colapsedMenu && "colapsed"}>
            <div className="nav__colapsedMenuButton" onClick={() => { setColapsedMenu(!colapsedMenu) }}>
                <div className="nav__colapsedMenuButton--row"></div>
                <div className="nav__colapsedMenuButton--row"></div>
                <div className="nav__colapsedMenuButton--row"></div>
            </div>
            {!colapsedMenu && baseNav()}
            {colapsedMenu && navLinks()}
        </nav>
    )
}

export default NavPage;