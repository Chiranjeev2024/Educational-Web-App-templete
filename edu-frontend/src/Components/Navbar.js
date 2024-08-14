import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import logoWithText from "../Logos/logo-demo.png";

const Navbar = () => {
    return (
        <div className="container-fluid bg-light position-relative shadow">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0  ">
                <div className="navbar-brand d-flex align-items-center">
                    <Link
                        to="/"
                        className="font-weight-bold text-secondary"
                        style={{ fontSize: "50px" }}
                    >
                        <img
                            src={logoWithText}
                            alt="logo"
                            style={{ height: "150px", marginRight: "10px" }}
                        />
                        {/* <span className="text-primary">Your Site Name</span> */}
                    </Link>
                </div>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav mr-auto">
                        <Link to="/" className="nav-item nav-link">
                            Home
                        </Link>
                        <Link to="/about" className="nav-item nav-link">
                            About
                        </Link>
                        {/* <Link to="/classes" className="nav-item nav-link">
                            Classes
                        </Link> */}
                        <Link to="/teachers" className="nav-item nav-link">
                            Teachers
                        </Link>
                        <Link to="/gallery" className="nav-item nav-link">
                            Gallery
                        </Link>

                        <div className="nav-item dropdown">
                            <Link
                                to="#"
                                className="nav-link dropdown-toggle"
                                data-toggle="dropdown"
                            >
                                Pages
                            </Link>
                            <div className="dropdown-menu rounded-0 m-0">
                                <a
                                    target="_blank"
                                    href={`${process.env.REACT_APP_API_URL}/admin`}
                                >
                                    Admin Login
                                </a>
                            </div>
                        </div>

                        <Link to="/contact" className="nav-item nav-link">
                            Contact
                        </Link>
                    </div>

                    <a href="#" className="btn btn-primary ml-2 ml-lg-0">
                        Join Class
                    </a>
                </div>
            </nav>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Navbar;
