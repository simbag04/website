import Project from "./Project"
import Waldo from '../images/wheres-waldo.png'
import Library from '../images/library.png'
import '../styles/Project.css'

const Projects = () => {
    return (
        <div className="projects">
            <div className="title">Projects</div>
            <ul>
                <li><Project title="Where's Waldo" 
                            img={Waldo} 
                            description="A photo tagging app inspired by the game 'Where's Waldo'. Features a leaderboard as well."
                            technologies="React.js, HTML, CSS, Firebase">
                    </Project></li>
                <li><Project title="Library" 
                            img={Library}
                            description="An app where users can track books - users can add and remove books from their library, change the 'read' status, and also save their information by logging in"
                            technologies="HTML, CSS, JavaScript, Firebase"></Project></li>
            </ul>
        </div>
    )
}

export default Projects