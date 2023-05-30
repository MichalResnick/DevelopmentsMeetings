import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<NavLink to="/home">Home</NavLink>
            <span> | </span>
			<NavLink to="/developments-group-list">Developmets Groups</NavLink>
            <span> | </span>
			<NavLink to="/add-new-meeting">Add New Meeting</NavLink>
        </div>
    );
}

export default Menu;
