import ExampleImg from "../../assets/SkillsImg/database-schema.png"

const DatabaseSkills = () => {

    return (
        <>
            <div className="skillsPage__cardWrap">
                <h2 className="skillsPage__tittle">DESARROLLO DE BASES DE DATOS</h2>
                <div className="skillsPage__contentWrap">
                    <div className="skillsPage__textWrap">
                        <p className="skillsPage__text">
                            Manejo y creación de bases de datos relacionales y no relacionales.
                        </p>
                        <p className="skillsPage__text">
                            Conocimiento de la creación de bases de datos con <b>MongoDB y PostgreSQL</b>, su gestión y como trabajar con ellas
                            para crear, editar, ordenar y eliminar entradas mediante peticiones desde el servidor.
                        </p>
                        <p className="skillsPage__text">
                            Despliegue de bases de datos para su uso posterior en peticiones de servidor así como su administración.
                        </p>
                    </div>
                    <div className="skillsPage__imgWrap">
                        <img className="skillsPage__img" src={ExampleImg} alt="data base development" />
                        <p className="skillsPage__imgCreator">
                            <p className="skillsPage__imgCreator--text">
                                Image by&nbsp;
                                <a className="skillsPage__imgCreator--link" href="https://pixabay.com/users/mcmurryjulie-2375405/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1895779">
                                     mcmurryjulie&nbsp;
                                </a>
                                from &nbsp;
                                <a className="skillsPage__imgCreator--link" href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1895779">
                                    Pixabay
                                </a>
                            </p>
                        </p>
                    </div>
                </div>
            </div>
        </>)
}

export default DatabaseSkills;