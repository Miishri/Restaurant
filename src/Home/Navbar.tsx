import      "./Home.css"
import Menu from "./Menu";

function Navbar() {

    return (
        <div className="Navbar">
            <button className="Menu option" id="Menu">
                Menu
            </button>
            <div className="menu">
                <Menu/>
            </div>
            <button className="Recipe option" id="Recipe">
                Recipe
            </button>
            <button className="About option" id="About">
                About
            </button>
        </div>  
    );
}

export default Navbar;