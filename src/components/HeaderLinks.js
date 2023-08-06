import '../styles/HeaderLinks.css'

const HeaderLinks = ({highlight, headerClickHandler}) => {

    const clickHandler = (e) => {
        headerClickHandler(e.target.id)
    }
   
    return (
        <>
            <ul>
                <li id="home" 
                    className={highlight === "home" ? "active" : ""} 
                    onClick={clickHandler}>
                    Home
                </li>
                <li id="about-me" 
                    className={highlight === "about" ? "active" : ""}
                    onClick={clickHandler}>
                    About me
                </li>
                <li id="projects" 
                    className={highlight === "projects" ? "active" : ""}
                    onClick={clickHandler}>
                    Projects
                </li>
                <li id="skills" 
                    className={highlight === "skills" ? "active" : ""}
                    onClick={clickHandler}>
                    Skills
                </li>
                <li id="contact"
                    className={highlight === "contact" ? "active" : ""}
                    onClick={clickHandler}>
                    Contact
                </li>
            </ul>
        </>
    )
}

export default HeaderLinks