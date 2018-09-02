import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
    renderAuth = () => {
        const isAuthenticated = localStorage.getItem("token");

        if (isAuthenticated) {
            return <button onClick={()=> {
            localStorage.clear()
            window.location.reload()
            }
            }>

            Logout

        </button>


        } else {
            return <NavLink
                className='nav-item'
                to='/login'
            >

                Login

            </NavLink>

        }
    };
    render() {
        return (
            <nav
                className="navbar navbar-expand-lg navbar-light bg-light"
            >
                <a
                    className="navbar-brand"
                    href="#"
                >
                    Navbar
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span
                        className="navbar-toggler-icon"
                    />
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >
                    <ul
                        className="navbar-nav"
                    >
                        <NavLink
                            className="nav-item active"
                            to='/home'
                        >
                            Home

                                <span
                                    className="sr-only"
                                >
                                    (current)
                                </span>

                        </NavLink>
                        {this.renderAuth()}
                    </ul>
                </div>
            </nav>
        )
    }
}


export default Navbar