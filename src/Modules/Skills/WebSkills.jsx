import ExampleImg from "../../assets/SkillsImg/two-developers.png"
import { useTranslation, Trans } from "react-i18next";

const WebSkills = () => {

    //language
    const { t } = useTranslation();

    return (
        <>
            <div className="skillsPage__cardWrap">
                <h2 className="skillsPage__tittle">
                    {t("skills.web.tittle")}
                </h2>
                <div className="skillsPage__contentWrap">
                    <div className="skillsPage__textWrap">
                        <p className="skillsPage__text">
                            <Trans
                                i18nKey="skills.web.paragraph1"
                                components={{ b: <b /> }}
                            />
                        </p>
                        <p className="skillsPage__text">
                            <Trans
                                i18nKey="skills.web.paragraph2"
                                components={{ b: <b /> }}
                            />
                        </p>
                        <p className="skillsPage__text">
                            <Trans
                                i18nKey="skills.web.paragraph3"
                                components={{ b: <b /> }}
                            />
                        </p>
                    </div>
                    <div className="skillsPage__imgWrap">
                        <img className="skillsPage__img" src={ExampleImg} alt="full stack web development" />
                        <p className="skillsPage__imgCreator">
                            <a className="skillsPage__imgCreator--link" href="https://www.freepik.com/free-vector/two-developers-working-with-big-data-technology-big-data-management-storage-database-analytics-design-data-software-engineering-concept-vector-isolated-illustration_11668623.htm#fromView=search&page=1&position=13&uuid=dbd92fdc-0615-4836-b5bc-5bc2c6c1f10f">
                                {t("skills.web.imageText")}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>)
}

export default WebSkills;