
const Project = (props) => {
    return (
        <div className="project">
            <div className='info'>
                <div className="project-title">{props.title}</div>
                <div className="subsection">
                    <div className="subtitle">Description</div>
                    <div>{props.description}</div>
                </div>
                <div className="subsection">
                    <div className="subtitle">Technologies</div>
                    <div>{props.technologies}</div>
                </div>
                <div className="site-links">
                    <a href={props.site} target="_blank" rel="noreferrer">
                        Live Site
                    </a>
                    <a href={props.repo} target="_blank" rel="noreferrer">
                        Code
                    </a>
                </div>
            </div>
            <div className='image'>
                <img src={props.img} alt="Project Screenshot"></img>
            </div>
        </div>
    )
}

export default Project