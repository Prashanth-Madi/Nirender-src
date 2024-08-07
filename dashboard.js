import { NavLink } from "react-router-dom";

export default function
    () {
    return (
        <nav className='nav'>
            <NavLink to='/user' className="nav-bar">Create</NavLink>
            <NavLink to="/showprojects" >Show Projects</NavLink>
            <NavLink to="/update">Update</NavLink>
            <NavLink to="/delete">Delete</NavLink>
        </nav>
    )
}