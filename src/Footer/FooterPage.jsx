import { useTranslation } from "react-i18next";
import './FooterPage.css'

const FooterPage = () => {

    //language
    const { t } = useTranslation();

    return (
        <footer>
            <p className="footer--sign">
                {t("footer.text")}
            </p>
        </footer>)

}

export default FooterPage;