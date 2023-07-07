
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
            </div>
            <div className='image'>
                <img src={props.img} alt="" sizes="100vw"></img>
            </div>
        </div>
    )
}

export default Project