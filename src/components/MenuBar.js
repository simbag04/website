import '../styles/MenuBar.css'

const MenuBar = ({highlight, headerClickHandler}) => {
    const clickHandler = (e) => {
        let menubar = document.querySelector(".menu-bar")
        menubar.classList.remove('active')
        headerClickHandler(e.target.id);
    }
    return (
        <div className="menu-bar">
            <div id="home"
                 className={highlight === "home" ? "active" : ""}
                 onClick={clickHandler}>
                    Home
            </div>
            <div id="about-me"
                 className={highlight === "about" ? "active" : ""}
                 onClick={clickHandler}>
                    About
            </div>
            <div id="projects"
                 className={highlight === "projects" ? "active" : ""}
                 onClick={clickHandler}>
                    Projects
            </div>
            <div id="contact"
                 className={highlight === "contact" ? "active" : ""}
                 onClick={clickHandler}>
                    Contact
            </div>
        </div>
    )
}

export default MenuBar