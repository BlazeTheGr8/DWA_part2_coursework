import logo from "../src/resources/react-logo.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} className="nav--icon" />
            <h3 className="nav--logo--text">React Facts</h3>
            <h4 className="nav--title">React Course - Project</h4>
        </nav>
    )
}