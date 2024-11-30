import "./navbar-comp.css";
import NavbarButtonsComp from "./navbar-buttons-comp/navbar-buttons-comp";
import sunLogo from "../assets/navbar-assets/navbar-sun.png";
import moonLogo from "../assets/navbar-assets/navbar-moon.png";
function NavbarComp() {
    function getLight() {
        document.body.style.backgroundColor = "white";
        document.body.style.transition = "1.5s all ease";
    }

    function getDark() {
        document.body.style.backgroundColor = "#282828";
        document.body.style.transition = "1.5s all ease";
    }
    return (
        <div className="navbar-section">
            <div className="navbar-left-button navbar-g-button">
                <img onClick={getLight} className="navbar-switch-button" src={sunLogo} alt="Button light mode" />
            </div>

            <div className="navbar-default">
                <NavbarButtonsComp />
            </div>

            <div className="navbar-right-button navbar-g-button">
                <img onClick={getDark} className="navbar-switch-button" src={moonLogo} alt="Button dark mode" />
            </div>
        </div>
    )
}

export default NavbarComp;