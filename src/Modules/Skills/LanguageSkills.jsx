import EnglishFlag from "../../assets/SkillsImg/english-flag.png"
import SpanishFlag from "../../assets/SkillsImg/spanish-flag.png"
import ValencianFlag from "../../assets/SkillsImg/valencian-flag.png"
import { useTranslation, Trans } from "react-i18next";

const LanguageSkills = () => {

    //language
    const { t } = useTranslation();

    return (
        <>
            <div className="skillsPage__cardWrap">
                <h2 className="skillsPage__tittle">
                    {t("skills.languages.tittle")}
                </h2>
                <div className="skillsPage__contentWrap">
                    <div className="skillsPage__listWrap">
                        <ul className="skillsPage__list">
                            <li className="skillsPage__tittleWrap skillsPage__list--item">
                                <h3 className="skillsPage__listTittle">
                                    {t("skills.languages.language1.lang")}
                                </h3>
                                <img className="skillsPage__flagIcon" src={SpanishFlag} />
                            </li>
                            <li className="skillsPage__list--item">
                                <p className="skillsPage__text">
                                    <Trans
                                        i18nKey="skills.languages.language1.item1"
                                        components={{ b: <b /> }}
                                    />
                                </p>
                            </li>
                            <li className="skillsPage__list--item">
                                <p className="skillsPage__text">
                                    <Trans
                                        i18nKey="skills.languages.language1.item2"
                                        components={{ b: <b /> }}
                                    />
                                </p>
                            </li>
                            <li className="skillsPage__list--item">
                                <p className="skillsPage__text">
                                    <Trans
                                        i18nKey="skills.languages.language1.item3"
                                        components={{ b: <b /> }}
                                    /></p>
                            </li>
                            <li className="skillsPage__list--item">
                                <p className="skillsPage__text--small">
                                    <Trans
                                        i18nKey="skills.languages.language1.item4"
                                        components={{ b: <b /> }}
                                    />
                                </p>
                            </li>
                        </ul>
                        <ul className="skillsPage__list">
                            <li className="skillsPage__tittleWrap skillsPage__list--item">
                                <h3 className="skillsPage__listTittle">
                                    {t("skills.languages.language2.lang")}
                                </h3>
                                <img className="skillsPage__flagIcon" src={EnglishFlag} />
                            </li>
                            <li className="skillsPage__list--item">
                                <p className="skillsPage__text">
                                    <Trans
                                        i18nKey="skills.languages.language2.item1"
                                        components={{ b: <b /> }}
                                    />
                                </p>
                            </li>
                            <li className="skillsPage__list--item">
                                <p className="skillsPage__text">
                                    <Trans
                                        i18nKey="skills.languages.language2.item2"
                                        components={{ b: <b /> }}
                                    />
                                </p>
                            </li>
                            <li className="skillsPage__list--item">
                                <p className="skillsPage__text">
                                    <Trans
                                        i18nKey="skills.languages.language2.item3"
                                        components={{ b: <b /> }}
                                    />
                                </p>
                            </li>
                            <li className="skillsPage__list--item">
                                <p className="skillsPage__text--small">
                                    <Trans
                                        i18nKey="skills.languages.language2.item4"
                                        components={{ b: <b /> }}
                                    />
                                </p>
                            </li>
                        </ul>
                        <ul className="skillsPage__list">
                            <li className="skillsPage__tittleWrap skillsPage__list--item">
                                <h3 className="skillsPage__listTittle">
                                    {t("skills.languages.language3.lang")}
                                </h3>
                                <img className="skillsPage__flagIcon" src={ValencianFlag} />
                            </li>
                            <li className="skillsPage__list--item">
                                <p className="skillsPage__text">
                                    <Trans
                                        i18nKey="skills.languages.language3.item1"
                                        components={{ b: <b /> }}
                                    />
                                </p>
                            </li>
                            <li className="skillsPage__list--item">
                                <p className="skillsPage__text">
                                    <Trans
                                        i18nKey="skills.languages.language3.item2"
                                        components={{ b: <b /> }}
                                    />
                                </p>
                            </li>
                            <li className="skillsPage__list--item">
                                <p className="skillsPage__text">
                                    <Trans
                                        i18nKey="skills.languages.language3.item3"
                                        components={{ b: <b /> }}
                                    />
                                </p>
                            </li>
                            <li className="skillsPage__list--item">
                                <p className="skillsPage__text--small">
                                    <Trans
                                        i18nKey="skills.languages.language3.item4"
                                        components={{ b: <b /> }}
                                    />
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>)
}

export default LanguageSkills;