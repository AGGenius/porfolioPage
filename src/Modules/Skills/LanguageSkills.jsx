import EnglishFlag from "../../assets/SkillsImg/english-flag.png"
import SpanishFlag from "../../assets/SkillsImg/spanish-flag.png"
import ValencianFlag from "../../assets/SkillsImg/valencian-flag.png"

const LanguageSkills = () => {

    return (
        <>
            <div className="skillsPage__cardWrap">
                <h2 className="skillsPage__tittle">MIS IDIOMAS</h2>
                <div className="skillsPage__contentWrap">
                    <div className="skillsPage__listWrap">
                        <ul className="skillsPage__list">
                            <li className="skillsPage__tittleWrap">
                                <h3 className="skillsPage__listTittle">ESPAÑOL</h3>
                                <img className="skillsPage__flagIcon" src={SpanishFlag} />
                            </li>
                            <li>
                                <p className="skillsPage__text"><b>Lectura:</b> Nativo</p>
                            </li>
                            <li>
                                <p className="skillsPage__text"><b>Escritura:</b> Nativo</p>
                            </li>
                            <li>
                                <p className="skillsPage__text"><b>Conversación:</b> Nativo</p>
                            </li>
                            <li>
                                <p className="skillsPage__text--small">Se trata del lenguaje oficial de mi pais y con el que comencé a desenvolverme. </p>
                            </li>
                        </ul>
                        <ul className="skillsPage__list">
                            <li className="skillsPage__tittleWrap">
                                <h3 className="skillsPage__listTittle">INGLES</h3>
                                <img className="skillsPage__flagIcon" src={EnglishFlag} />
                            </li>
                            <li>
                                <p className="skillsPage__text"><b>Lectura:</b> Alto</p>
                            </li>
                            <li>
                                <p className="skillsPage__text"><b>Escritura:</b> Alto</p>
                            </li>
                            <li>
                                <p className="skillsPage__text"><b>Conversación:</b> Intermedio</p>
                            </li>
                            <li>
                                <p className="skillsPage__text--small">En el camino a la certificación por una escuela oficial, sin miedo a ver series o peliculas inglesas
                                    en su idioma original, leer libros o buscar información relevante.
                                </p>
                            </li>
                        </ul>
                        <ul className="skillsPage__list">
                            <li className="skillsPage__tittleWrap">
                                <h3 className="skillsPage__listTittle">VALENCIANO</h3>
                                <img className="skillsPage__flagIcon" src={ValencianFlag} />
                            </li>
                            <li>
                                <p className="skillsPage__text"><b>Lectura:</b> Alto</p>
                            </li>
                            <li>
                                <p className="skillsPage__text"><b>Escritura:</b> Alto</p>
                            </li>
                            <li>
                                <p className="skillsPage__text"><b>Conversación:</b> Alto</p>
                            </li>
                            <li>
                                <p className="skillsPage__text--small">Otro de los idiomas de mi tierra, mas concretamente de la región donde nací.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>)
}

export default LanguageSkills;