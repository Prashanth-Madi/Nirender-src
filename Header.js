import { NavLink, useNavigate } from "react-router-dom";
import { isUserLoggedIn, logout } from "./services/AuthService";

const HeaderComponent = () => {

    const isAuth = isUserLoggedIn();

    const navigator = useNavigate();

    function handleLogout() {
        logout();
        navigator('/login')
    }
    return (
        <div>
            <header>
                <nav className='navbar navbar-expand navbar-dark bg-primary'>
                    <div className='container-fluid justify-content-center'>
                        <a href=
                            'http://localhost:3000' className='navbar-brand'>
                            Project Management Tool
                        </a>
                    </div>
                    <div className='collapse navbar-collapse'>
                        <ul className='navbar-nav'>
                            {
                                isAuth &&
                                <li className='nav-item'>
                                    <NavLink to="/dashboard" className="nav-link">Projects</NavLink>
                                </li>
                            }

                        </ul>

                    </div>
                    <ul className='navbar-nav'>
                        {
                            !isAuth &&
                            <li className='nav-item'>
                                <NavLink to="/register" className="nav-link">Register</NavLink>
                            </li>
                        }

                        {
                            !isAuth &&
                            <li className='nav-item'>
                                <NavLink to="/login" className="nav-link">Login</NavLink>
                            </li>
                        }
                        {
                            isAuth &&
                            <li className='nav-item'>
                                <NavLink to="/login" className="nav-link" onClick={handleLogout}>Logout</NavLink>
                            </li>
                        }

                    </ul>
                </nav>
            </header>

        </div>
    )
}

export default HeaderComponent