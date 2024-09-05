import { useNavigate } from "react-router-dom";
import { useChangePageContext } from "../Context/useChangePageContext";
import { useEffect, useState } from "react";
import './ContactPage.css'

const ContactPage = () => {
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
        <div className={!exit ? "contactPage" : "contactPage exit"}>
            <div className="contactPage__space top"></div>
            <div className="contactPage__content">
                <button className="contactPage__button" onClick={() => handleClick("/links")}>PREV</button>
                <p>CONTACT</p>
                <button className="contactPage__button" onClick={() => handleClick("/")}>NEXT</button>
            </div>
            <div className="contactPage__space bottom"></div>
        </div>)
}

export default ContactPage;