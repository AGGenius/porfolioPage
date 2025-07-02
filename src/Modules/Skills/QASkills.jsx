import ExampleImg from "../../assets/SkillsImg/bug-fixing-71.png"
import { useTranslation, Trans } from "react-i18next";

const QASkills = () => {

    //language
    const { t } = useTranslation();

    return (
        <>
            <div className="skillsPage__cardWrap">
                <h2 className="skillsPage__tittle">
                    {t("skills.QA.tittle")}
                </h2>
                <div className="skillsPage__contentWrap">
                    <div className="skillsPage__textWrap">
                        <p className="skillsPage__text">
                            <Trans
                                i18nKey="skills.QA.paragraph1"
                                components={{ b: <b /> }}
                            />
                        </p>
                        <p className="skillsPage__text">
                            <Trans
                                i18nKey="skills.QA.paragraph2"
                                components={{ b: <b /> }}
                            />
                        </p>
                        <p className="skillsPage__text">
                            <Trans
                                i18nKey="skills.QA.paragraph3"
                                components={{ b: <b /> }}
                            />
                        </p>
                        <p className="skillsPage__text">
                            <Trans
                                i18nKey="skills.QA.paragraph4"
                                components={{ b: <b /> }}
                            />
                        </p>
                    </div>
                    <div className="skillsPage__imgWrap">
                        <img className="skillsPage__img" src={ExampleImg} alt="QA web testing" />
                        <p className="skillsPage__imgCreator">
                            <a className="skillsPage__imgCreator--link" href="https://www.manypixels.co/">
                                {t("skills.QA.imageText")}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>)
}

export default QASkills;