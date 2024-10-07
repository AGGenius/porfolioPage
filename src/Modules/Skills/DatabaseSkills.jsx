import ExampleImg from "../../assets/SkillsImg/database-schema.png"
import { useTranslation, Trans } from "react-i18next";

const DatabaseSkills = () => {

    //language
    const { t } = useTranslation();

    return (
        <>
            <div className="skillsPage__cardWrap">
                <h2 className="skillsPage__tittle">
                    {t("skills.ddbb.tittle")}
                </h2>
                <div className="skillsPage__contentWrap">
                    <div className="skillsPage__textWrap">
                        <p className="skillsPage__text">
                            {t("skills.ddbb.paragraph1")}
                        </p>
                        <p className="skillsPage__text">
                            <Trans
                                i18nKey="skills.ddbb.paragraph2"
                                components={{ b: <b /> }}
                            />
                        </p>
                        <p className="skillsPage__text">
                            {t("skills.ddbb.paragraph3")}
                        </p>
                    </div>
                    <div className="skillsPage__imgWrap">
                        <img className="skillsPage__img" src={ExampleImg} alt="data base development" />
                        <div className="skillsPage__imgCreator">
                            <p className="skillsPage__imgCreator--text">
                                {t("skills.ddbb.imageText1")}
                                <a className="skillsPage__imgCreator--link" href="https://pixabay.com/users/mcmurryjulie-2375405/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1895779">
                                    mcmurryjulie&nbsp;
                                </a>
                                {t("skills.ddbb.imageText2")}
                                <a className="skillsPage__imgCreator--link" href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1895779">
                                    Pixabay
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export default DatabaseSkills;