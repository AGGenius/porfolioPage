import { useState } from "react";
import i18n from "../i18n/i18n";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {

    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const chooseLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setSelectedLanguage(lang);
        localStorage.setItem("lang", lang);
    };

    //language
    const { t } = useTranslation();

    return (
        <>
            {selectedLanguage === "en" ?
                <p className="nav__language" onClick={() => chooseLanguage("es")}>{t("nav.language")}</p> :
                <p className="nav__language" onClick={() => chooseLanguage("en")}>{t("nav.language")}</p>
            }        
        </>
    )
};

export default LanguageSelector;