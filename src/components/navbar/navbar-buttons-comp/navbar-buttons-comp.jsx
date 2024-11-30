import "./navbar-buttons-comp.css";
function NavbarButtonsComp() {
    return (

        <div className="navbar-buttons-comp">
            <div className="navbar-buttons-left navbar-ctn-flex">
                <button className="navbar-button navbar-button-left" type="button">About Me</button>
                <button className="navbar-button navbar-button-left" type="button">About my project</button>
            </div>
            <div className="navbar-buttons-center navbar-ctn-flex">
                <button className="navbar-button navbar-button-center" type="button">EXPLORE!</button>
            </div>
            <div className="navbar-buttons-right navbar-ctn-flex">
                <button className="navbar-button navbar-button-right" type="button">Updates</button>
                <button className="navbar-button navbar-button-right" type="button">Contact</button>
            </div>
        </div>
    )
}

export default NavbarButtonsComp;