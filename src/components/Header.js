import HeaderLinks from "./HeaderLinks"
import '../styles/Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="title">Simran Bagaria</div>
            <HeaderLinks></HeaderLinks>
        </div>
    )
}

export default Header