import React, { Component } from 'react';
class Header extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                    <div className='container'>


                        <a className="navbar-brand" href="#">
                            Navbar
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">
                                        Home <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Features
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Pricing
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link disabled"
                                        href="#"
                                        tabIndex={-1}
                                        aria-disabled="true"
                                    >
                                        Disabled
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </>

        );
    }
}
export default Header;