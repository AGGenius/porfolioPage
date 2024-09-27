import ExampleImg from "../../assets/SkillsImg/two-developers.png"

const WebSkills = () => {

    return (
        <>
            <div className="skillsPage__cardWrap">
                <h2 className="skillsPage__tittle">FULL STACK WEB DEVELOPMENT</h2>
                <div className="skillsPage__contentWrap">
                    <div className="skillsPage__textWrap">
                        <p className="skillsPage__text">
                            Creación, despliege y control de servicios de <b>Back End y Front End</b> completos.
                        </p>
                        <p className="skillsPage__text">
                            Proeficiente en la programación de paginas web haciendo uso de <b>HTML - CSS - JavaScript </b>
                            para crear contenidos interesantes y dinamicos al aplicar <b>Node.js, React.js, y Expres.js</b>, incrementando
                            la capacidad y funcionalidades del servicio. 
                        </p>
                        <p className="skillsPage__text">
                            Conocimientos y control de <b>AUTH0, JWT</b> para el manejo de usuarios.<br/>
                            Manejo de <b>Fetch y Axios</b>, así como <b>HTTP</b> para las peticiones de Front a Back y de este mismo al resto de servicios, así como
                            uso de <b>REST API</b>.
                        </p>
                    </div>
                    <div className="skillsPage__imgWrap">
                        <img className="skillsPage__img" src={ExampleImg} alt="full stack web development" />
                        <p className="skillsPage__imgCreator">
                            <a className="skillsPage__imgCreator--link" href="https://www.freepik.com/free-vector/two-developers-working-with-big-data-technology-big-data-management-storage-database-analytics-design-data-software-engineering-concept-vector-isolated-illustration_11668623.htm#fromView=search&page=1&position=13&uuid=dbd92fdc-0615-4836-b5bc-5bc2c6c1f10f">Image by vectorjuice on Freepik</a>
                        </p>
                    </div>
                </div>
            </div>
        </>)
}

export default WebSkills;