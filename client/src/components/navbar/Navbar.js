import { NavLink } from "react-router-dom";



function Navbar() {

    return(
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/view-employees">View Employees</NavLink>
        </div>
    )
}

export default Navbar;