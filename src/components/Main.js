import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import Projects from "./Projects"
import { Skills } from "./Skills"

const Main = (props) => {
    return (
        <div className="main">
            <Home headerHeight={props.headerHeight}></Home>
            <About headerHeight={props.headerHeight} setAboutStart={props.setAboutStart}></About>
            <Projects setProjectsStart={props.setProjectsStart}></Projects>
            <Skills headerHeight={props.headerHeight} setSkillsStart={props.setSkillsStart}/>
            <Contact headerHeight={props.headerHeight} setContactStart={props.setContactStart}></Contact>
        </div>
    )
}

export default Main