import logo from "../../assets/logo.png";
import './style.css'

const Header = ({setButton}) => {
    return (
        <div className="header-container">
            <h1 className="logo-kenzie">Nu <span className="rest-logo-kenzie">Kenzie</span></h1>
            <button className="logo-button" onClick={() => setButton(false)}>Início</button>
        </div>
    )
}
export default Header