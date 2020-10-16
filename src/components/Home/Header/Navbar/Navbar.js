import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import logo from '../../../../images/logos/logo.png';

const Navbar = () => {
    const [loggedInUser, serLoggedInUser] = useContext(UserContext);
    const handleClick = () => {
        serLoggedInUser({})
    }
    return (
        <nav className="container navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/">
                <img style={{ height: 47 }} src={logo} className="img-fluid" alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item ml-2 px-2 active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item ml-2 px-2">
                        <a className="nav-link" href="#portfolio">Our Portfolio</a>
                    </li>
                    <li className="nav-item ml-2 px-2">
                        <a className="nav-link" href="#team">Our Team</a>
                    </li>
                    <li className="nav-item ml-2 px-2">
                        <a className="nav-link" href="#team">Contact Us</a>
                    </li>
                    {loggedInUser.email ? <li className="nav-item ml-2 px-2">
                        <button onClick={handleClick} className="btn btn-dark px-5 py-2">Log out</button>
                    </li>
                        : <li className="nav-item ml-2 px-2">
                            <Link to="/dashboard/1" className="btn btn-dark px-5 py-2">Login</Link>
                        </li>}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;