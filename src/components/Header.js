import HeaderLinks from "./HeaderLinks"
import '../styles/Header.css'

const Header = () => {
    return (
        <div className="header section">
            <div className="title">Simran Bagaria</div>
            <HeaderLinks></HeaderLinks>
        </div>
    )
}

export default Header