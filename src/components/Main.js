import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import Projects from "./Projects"

const Main = (props) => {
    return (
        <div className="main">
            <Home headerHeight={props.headerHeight}></Home>
            <About headerHeight={props.headerHeight}></About>
            <Projects></Projects>
            <Contact headerHeight={props.headerHeight}></Contact>
        </div>
    )
}

export default Main