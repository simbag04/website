import '../styles/HeaderLinks.css'
import { useScrollPosition } from './useScrollPosition'

const HeaderLinks = ({headerHeight, aboutStart, projectsStart, contactStart}) => {
    const scrollY = useScrollPosition()
    const about = aboutStart - headerHeight - (window.innerHeight * 0.5);
    const projects = projectsStart - headerHeight - (window.innerHeight * 0.5);
    const contact = contactStart - headerHeight - 1 - (window.innerHeight * 0.5);

    const clickHandler = (e) => {
        if (e.target.id === "home") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        } else if (e.target.id === "about-me") {
            window.scrollTo({
                top: aboutStart - headerHeight,
                behavior: "smooth"
            });
        } else if (e.target.id === "projects") {
            window.scrollTo({
                top: projectsStart - headerHeight,
                behavior: "smooth"
            });
        } else if (e.target.id === "contact") {
            window.scrollTo({
                top: contactStart - headerHeight,
                behavior: "smooth"
            });
        }

        /*
        if (!e.target.classList.contains('active')) {
            e.target.classList.add('active')
        }
        */
    }
   
    return (
        <>
            <ul>
                <li id="home" 
                    className={about > scrollY ? "active" : ""} 
                    onClick={clickHandler}>
                    Home
                </li>
                <li id="about-me" 
                    className={projects > scrollY && about <= scrollY ? "active" : ""}
                    onClick={clickHandler}>
                    About me
                </li>
                <li id="projects" 
                    className={contact > scrollY && projects <= scrollY ? "active" : ""}
                    onClick={clickHandler}>
                    Projects
                </li>
                <li id="contact"
                    className={contact <= scrollY ? "active" : ""}
                    onClick={clickHandler}>
                    Contact
                </li>
            </ul>
        </>
    )
}

export default HeaderLinks