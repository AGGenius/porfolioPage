import ExampleImg from "../../assets/SkillsImg/Game-Code.png"

const DatabaseSkills = () => {

    return (
        <>
            <div className="skillsPage__cardWrap">
                <h2 className="skillsPage__tittle">DESARROLLO DE VIDEOJUEGOS</h2>
                <div className="skillsPage__contentWrap">
                    <div className="skillsPage__textWrap">
                        <p className="skillsPage__text">
                            Gran conominiento de programación de videojuegos en <b>Unity 3D</b> con <b>C#</b>.
                        </p>
                        <p className="skillsPage__text">
                            Programación de videojuegos <b>2D - 3D - VR - AR</b>, testing de los mismos y publicación de proyectos
                            en <b>Google Play Store</b>, incluyendo el uso y manejo de anuncios así como el sistema de logros de <b>Google Play</b>.
                            Creación e implementanción de assets. <b>Control de sonido 3D</b>. Manejo de <b>Agent Navigation y Pathfinding</b>.
                        </p>
                        <p className="skillsPage__text">
                            Experiencia de más de dos años de programando en <b>C#</b>, con el cual me certifiqué tras iniciarme en la programación
                            de forma autodidacta con <b>Java</b>, y previo a dar mi salto como <b>Full Stack Web Developer</b>
                        </p>
                    </div>
                    <div className="skillsPage__imgWrap">
                        <img className="skillsPage__img roundend" src={ExampleImg} alt="video game development" />
                        <p className="skillsPage__imgCreator">
                            <p className="skillsPage__imgCreator--text">
                                Image by me
                            </p>
                        </p>
                    </div>
                </div>
            </div>
        </>)
}

export default DatabaseSkills;