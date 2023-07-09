import '../styles/Contact.css'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'

const Contact = (props) => {
    return (
        <div className="contact section"
            style={{height: `calc(100vh - ${props.headerHeight}px)`}}>
            <div className="title">Contact</div>
            <div className='contact-info'>
                I am currently looking for SWE Internships for the 2023-2024 recruiting season. Please feel free to reach me at sbagaria@uw.edu for any opportunities, questions, or just to chat!
            </div>
            <ul className='contact-icons'>
                <li>
                    <a href='https://github.com/simbag04'><img src={github} alt=""></img></a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/simran-bagaria-12bb79246/'>
                        <img src={linkedin} alt=""></img>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Contact