import ExampleImg from "../../assets/SkillsImg/Game-Code.png"
import { useTranslation, Trans } from "react-i18next";

const DatabaseSkills = () => {

    //language
    const { t } = useTranslation();

    return (
        <>
            <div className="skillsPage__cardWrap">
                <h2 className="skillsPage__tittle">
                    {t("skills.games.tittle")}
                </h2>
                <div className="skillsPage__contentWrap">
                    <div className="skillsPage__textWrap">
                        <p className="skillsPage__text">
                            <Trans
                                i18nKey="skills.games.paragraph1"
                                components={{ b: <b /> }}
                            />
                        </p>
                        <p className="skillsPage__text">
                            <Trans
                                i18nKey="skills.games.paragraph2"
                                components={{ b: <b /> }}
                            />
                        </p>
                        <p className="skillsPage__text">
                            <Trans
                                i18nKey="skills.games.paragraph3"
                                components={{ b: <b /> }}
                            />
                        </p>
                    </div>
                    <div className="skillsPage__imgWrap">
                        <img className="skillsPage__img roundend" src={ExampleImg} alt="video game development" />
                        <p className="skillsPage__imgCreator">
                            <p className="skillsPage__imgCreator--text">
                                {t("skills.games.imageText")}
                            </p>
                        </p>
                    </div>
                </div>
            </div>
        </>)
}

export default DatabaseSkills;