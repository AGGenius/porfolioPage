import { useNavigate } from "react-router-dom";
import { useChangePageContext } from "../Context/useChangePageContext";
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector.jsx";
import './NavPage.css'

const NavPage = () => {
    const { setChangePage } = useChangePageContext();
    const { actualPage, setActualPage } = useChangePageContext();
    const navigate = useNavigate();
    const location = useLocation();

    //menu
    const [colapsedMenu, setColapsedMenu] = useState(false);
    const newRef = useRef(null);

    //language
    const { t } = useTranslation();

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        setActualPage(window.location.pathname);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    const handleOutsideClick = (e) => {
        if (newRef.current && !newRef.current.contains(e.target)) {
            setColapsedMenu(false);
        }
    };

    const handleClick = (page) => {
        if (location.pathname !== page) {
            const nextPage = page;

            setChangePage(true);
            setActualPage(nextPage);
            setColapsedMenu(false);

            setTimeout(() => {
                navigate(nextPage);
            }, 400);
        };
    };

    const navLinks = () => {
        return (
            <>
                <a className={actualPage === "/" ? "nav__link selected" : "nav__link"} onClick={() => handleClick("/")}>
                    {t("nav.about")}
                </a>
                <a className={actualPage === "/portfolio" ? "nav__link selected" : "nav__link"} onClick={() => handleClick("/portfolio")}>
                    {t("nav.porfolio")}
                </a>
                <a className={actualPage === "/skills" ? "nav__link selected" : "nav__link"} onClick={() => handleClick("/skills")}>
                    {t("nav.skills")}
                </a>
                <a className={actualPage === "/experience" ? "nav__link selected" : "nav__link"} onClick={() => handleClick("/experience")}>
                    {t("nav.experience")}
                </a>
                <a className={actualPage === "/links" ? "nav__link selected" : "nav__link"} onClick={() => handleClick("/links")}>
                    {t("nav.links")}
                </a>
                <a className={actualPage === "/contact" ? "nav__link selected" : "nav__link"} onClick={() => handleClick("/contact")}>
                    {t("nav.contact")}
                </a>
                {<LanguageSelector />}
            </>
        );
    };

    const baseNav = () => {
        return (
            <div className="nav__base">
                {navLinks()}
            </div>
        );
    };

    return (
        <nav className={colapsedMenu ? "colapsed" : ""} ref={newRef}>
            <div className="nav__colapsedMenuButton" onClick={() => { setColapsedMenu(!colapsedMenu) }}>
                <div className="nav__colapsedMenuButton--row"></div>
                <div className="nav__colapsedMenuButton--row"></div>
                <div className="nav__colapsedMenuButton--row"></div>
            </div>
            {!colapsedMenu && baseNav()}
            {colapsedMenu && navLinks()}
        </nav>
    );
};

export default NavPage;