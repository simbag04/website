import HeaderLinks from "./HeaderLinks"
import '../styles/Header.css'
import {useLayoutEffect, useRef } from "react"
import menu from '../images/menu.svg'
import MenuBar from "./MenuBar"
import { useScrollPosition } from "./useScrollPosition"

const Header = ({width, height, headerHeight, setHeaderHeight, aboutStart, skillsStart, projectsStart, contactStart}) => {
    const ref = useRef();
   
    useLayoutEffect(() => {
        if (ref.current) {
            setHeaderHeight(ref.current.clientHeight);
        }
    }, [setHeaderHeight])

    const scrollY = useScrollPosition()
    const about = aboutStart - headerHeight - (height * 0.5);
    const projects = projectsStart - headerHeight - (height * 0.5);
    const skills = skillsStart - headerHeight - (height * 0.5);
    const contact = contactStart - headerHeight - 1 - (height * 0.5);

    const getCurrentSection = () => {
        if (about > scrollY) {
            return "home"
        } else if (projects > scrollY && about <= scrollY) {
            return "about"
        } else if (skills > scrollY && projects <= scrollY) {
            return "projects"
        } else if (contact > scrollY && skills <= scrollY) {
            return "skills"
        } else {
            return "contact"
        }
    }

    const headerSectionClickHandler = (section) => {
        if (section === "home") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        } else if (section === "about-me") {
            window.scrollTo({
                top: aboutStart - headerHeight,
                behavior: "smooth"
            });
        } else if (section === "projects") {
            window.scrollTo({
                top: projectsStart - headerHeight,
                behavior: "smooth"
            });
        } else if (section === "skills") {
            window.scrollTo({
                top: skillsStart - headerHeight,
                behavior: "smooth"
            });
        } else if (section === "contact") {
            window.scrollTo({
                top: contactStart - headerHeight,
                behavior: "smooth"
            });
        }
    }

    const clickHandler = () => {
        let menubar = document.querySelector(".menu-bar")
        menubar.classList.toggle('active');
        menubar.style.top = (headerHeight - 1)+ "px"
    }
    

    return (
        <>
            <div className="header" ref={ref}>
                <div className="main-title">Simran Bagaria</div>
                <HeaderLinks highlight={getCurrentSection()}
                             headerClickHandler={headerSectionClickHandler}></HeaderLinks>
                <img src={menu} alt="" onClick={clickHandler}></img>
            </div>
            {width < 600 ? <MenuBar highlight={getCurrentSection()}
                     headerClickHandler={headerSectionClickHandler}></MenuBar> : null}
        </>
    )
}

export default Header