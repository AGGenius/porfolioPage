import { useNavigate } from "react-router-dom";
import { useChangePageContext } from "../Context/useChangePageContext";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import './ContactPage.css'

const ContactPage = () => {
    const { changePage, setChangePage } = useChangePageContext();
    const { setActualPage } = useChangePageContext();
    const navigate = useNavigate();
    const [exit, setExit] = useState(false);
    const [cont, setCont] = useState(0);

    //email
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);


    useEffect(() => {
        setChangePage(false);
        setCont(1)

        if (changePage && cont > 0) {
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

    const sendEmail = (event) => {
        event.persist();
        event.preventDefault();
        setIsSubmitting(true);

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAIL_SERVIDE_ID,
                import.meta.env.VITE_EMAIL_TEMPLATE_ID,
                event.target,
                import.meta.env.VITE_EMAIL_PUBLIC_ID
            )
            .then(
                (output) => {
                    setStateMessage("Correo enviado correctamente.");
                    setIsSubmitting(false);

                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000)
                },
                (error) => {
                    setStateMessage("Fallo al tratar de enviar el correo.");
                    setIsSubmitting(false);

                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000)
                },
            );

        event.target.reset();
    };

    return (
        <div className={!exit ? "contactPage" : "contactPage exit"}>
            <div className="contactPage__space top"></div>
            <article className="contactPage__content">
                <section className="contactPage__formWrap">
                    <form className="contactPage__form" onSubmit={sendEmail}>
                        <h2 className="contactPage__form--tittle">Puedes usar el siguiente formulario para enviarme un correo</h2>
                        <div className="contactPage__form--field">
                            <label className="contactPage__form--label" htmlFor="contactName">Nombre</label>
                            <input required className="contactPage__form--input" id="contactName" type="text" name="user_name" />
                        </div>
                        <div className="contactPage__form--field">
                            <label className="contactPage__form--label" htmlFor="contactEmail">Email</label>
                            <input required className="contactPage__form--input" id="contactEmail" type="email" name="user_email" />
                        </div>
                        <div className="contactPage__form--field">
                            <label className="contactPage__form--label" htmlFor="contactSubject">Asunto</label>
                            <input required className="contactPage__form--input" id="contactSubject" type="text" name="subject" />
                        </div>
                        <div className="contactPage__form--field">
                            <label className="contactPage__form--label" htmlFor="contactMessage">Mensaje</label>
                            <textarea required className="contactPage__form--textArea" id="contactMessage" name="message" />
                        </div>
                        <input className="contactPage__form--button" type="submit" value="Enviar" disabled={isSubmitting} />
                        {stateMessage ? <p className="contactPage__form--message">{stateMessage}</p> : <p className="contactPage__form--message"></p>}
                    </form>
                </section>
                <section className="contactPage__contactData">
                    <p className="contactPage__contactData--text"><b>Telefono:</b> 661 34 86 16</p>
                    <p className="contactPage__contactData--text"><b>Correo:</b> adrianginergimenez@gmail.com</p>
                </section>
                <section className="contactPage__buttonWrap">
                    <button className="contactPage__button" onClick={() => handleClick("/links")}>ENLACES</button>
                    <p>¿Quieres comentarme algo?</p>
                    <button className="contactPage__button" onClick={() => handleClick("/")}>SOBRE MI</button>
                </section>
            </article>
            <div className="contactPage__space bottom"></div>
        </div>)
}

export default ContactPage;