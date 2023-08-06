import '../styles/About.css'
import { useRef, useEffect } from 'react'
import Simran from '../images/simran-pic.jpg'

const About = (props) => {
    const ref = useRef();
   
    useEffect(() => {
        if (ref.current) {
            props.setAboutStart(ref.current.offsetTop);
            console.log(ref.current.offsetTop);
        }
    }, [props, props.setAboutStart])

    return (
        <div className="about section" ref={ref}
            style={{minHeight: `calc(100vh - ${props.headerHeight}px + 5px)`}}>
            <div className="title">About</div>
            <div className="about-info">Hi there, my name is Simran Bagaria! I am a rising junior at the University of Washington in Seattle, majoring in Computer Science. I am very passionate about technology and its ability to have a positive impact on our world. As an avid self-learner, I am always eager to dive deeper into the Computer Science field, as well as apply my knowledge to solve real-world problems!</div>
            <img src={Simran} alt=""></img>
        </div>
    )
}

export default About