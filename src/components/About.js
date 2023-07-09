import '../styles/About.css'

const About = (props) => {
    return (
        <div className="about section" 
            style={{height: `calc(100vh - ${props.headerHeight}px)`}}>
            <div className="title">About</div>
            <div className="about-info">My name is Simran Bagaria. I am a rising sophomore at the University of Washington in Seattle, majoring in Computer Science. I love anything related to technology and education. In addition to being a full time student, I am also a tutor for high school math, from Algebra up till Calculus.</div>
        </div>
    )
}

export default About