import ExampleImg from "../../assets/SkillsImg/two-developers.png"
import { useTranslation, Trans } from "react-i18next";

const SoftSkills = () => {

    //language
    const { t } = useTranslation();

    return (
        <>
            <div className="skillsPage__cardWrap">
                <h2 className="skillsPage__tittle">
                    {t("skills.softSkills.tittle")}
                </h2>
                <div className="skillsPage__contentWrap">
                    <div className="skillsPage__listWrap--row">
                        <ul className="skillsPage__list--row">
                            <li>
                                <p className="skillsPage__textSoft">
                                    {t("skills.softSkills.item1")}
                                </p>
                            </li>
                            <li>
                                <p className="skillsPage__textSoft">
                                    {t("skills.softSkills.item2")}
                                </p>
                            </li>
                            <li>
                                <p className="skillsPage__textSoft">
                                    {t("skills.softSkills.item3")}
                                </p>
                            </li>
                            <li>
                                <p className="skillsPage__textSoft">
                                    {t("skills.softSkills.item4")}
                                </p>
                            </li>
                            <li>
                                <p className="skillsPage__textSoft">
                                    {t("skills.softSkills.item5")}
                                </p>
                            </li>
                            <li>
                                <p className="skillsPage__textSoft">
                                    {t("skills.softSkills.item6")}
                                </p>
                            </li>
                            <li>
                                <p className="skillsPage__textSoft">
                                    {t("skills.softSkills.item7")}
                                </p>
                            </li>
                            <li>
                                <p className="skillsPage__textSoft">
                                    {t("skills.softSkills.item8")}
                                </p>
                            </li>
                            <li>
                                <p className="skillsPage__textSoft">
                                    {t("skills.softSkills.item9")}
                                </p>
                            </li>
                            <li>
                                <p className="skillsPage__textSoft">
                                    {t("skills.softSkills.item10")}
                                </p>
                            </li>
                            <li>
                                <p className="skillsPage__textSoft">
                                    {t("skills.softSkills.item11")}
                                </p>
                            </li>
                            <li>
                                <p className="skillsPage__textSoft">
                                    {t("skills.softSkills.item12")}
                                </p>
                            </li>
                        </ul>
                        <div className="skillsPage__textSoftTexWrap">
                            <p className="skillsPage__text">
                                {t("skills.softSkills.paragraph1")}
                            </p>
                            <p className="skillsPage__text">
                                {t("skills.softSkills.paragraph2")}
                            </p>
                            <p className="skillsPage__text">
                                {t("skills.softSkills.paragraph3")}
                            </p>
                            <p className="skillsPage__text">
                                {t("skills.softSkills.paragraph4")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export default SoftSkills;