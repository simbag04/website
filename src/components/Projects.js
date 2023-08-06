import Project from "./Project"
import Waldo from '../images/wheres-waldo.png'
import Blog from '../images/blog.png'
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
                <li><Project title="Blog" 
                            img={Blog} 
                            description="A full-stack Blog application which allows users to view and comment on blog posts, as well as create, edit, and delete their own posts"
                            technologies="MongoDB, Express.js, React.js, Node.js, REST API"
                            site="https://simbag04.github.io/blog-client/"
                            repo="https://github.com/simbag04/blog-client">
                    </Project></li>
                <li><Project title="Where's Waldo" 
                            img={Waldo} 
                            description="A front-end photo tagging app inspired by the game 'Where's Waldo'. Features a leaderboard that keeps track of different high scores."
                            technologies="React.js, HTML, CSS, Firebase"
                            site="https://simbag04.github.io/wheres-waldo"
                            repo="https://github.com/simbag04/wheres-waldo">
                    </Project></li>
            </ul>
        </div>
    )
}

export default Projects