import Project from "./Project"
import Waldo from '../images/wheres-waldo.png'
import Library from '../images/library.png'
import '../styles/Project.css'
import { useRef, useEffect } from 'react'

const Projects = (props) => {
    const ref = useRef();
   
    useEffect(() => {
        if (ref.current) {
            props.setProjectsStart(ref.current.offsetTop);
            console.log(ref.current.offsetTop);
        }
    }, [props, props.setProjectsStart])

    return (
        <div className="projects section" ref={ref}>
            <div className="title">Projects</div>
            <ul>
                <li><Project title="Where's Waldo" 
                            img={Waldo} 
                            description="A photo tagging app inspired by the game 'Where's Waldo'. Features a leaderboard as well."
                            technologies="React.js, HTML, CSS, Firebase"
                            site="https://simbag04.github.io/wheres-waldo"
                            repo="https://github.com/simbag04/wheres-waldo">
                    </Project></li>
                <li><Project title="Library" 
                            img={Library}
                            description="An app where users can track books - users can add and remove books from their library, change the 'read' status, and also save their information by logging in"
                            technologies="HTML, CSS, JavaScript, Firebase"
                            site="https://simbag04.github.io/library"
                            repo="https://github.com/simbag04/library">
                    </Project></li>
            </ul>
        </div>
    )
}

export default Projects