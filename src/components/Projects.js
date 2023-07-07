import Project from "./Project"

const Projects = () => {
    return (
        <div>
            <div className="title">Projects</div>
            <ul>
                <li><Project title="Where's Waldo"></Project></li>
                <li><Project title="Library"></Project></li>
            </ul>
        </div>
    )
}

export default Projects