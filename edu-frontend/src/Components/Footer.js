import React from "react";
import logoWithText from "../Logos/logo-demo.png";
const Footer = () => {
    return (
        <div>
            {/* <!-- Footer Start --> */}
            <div className="container-fluid bg-secondary text-white mt-5 py-5 px-sm-3 px-md-5">
                <div className="row pt-5">
                    <div className="col-lg-3 col-md-6 mb-5">
                        <a
                            href="#"
                            className="navbar-brand font-weight-bold text-primary m-0 mb-4 p-0"
                            style={{ fontSize: "40px", lineHeight: "40px" }}
                        >
                            {/* <i className="flaticon-043-teddy-bear"></i>
                            <span className="text-white">KidKinder</span> */}
                            <img
                                src={logoWithText}
                                alt="logo"
                                style={{ width: "100%", height: "30%" }}
                            />
                        </a>
                        <p className="text-justify">
                            We are a school that is dedicated to providing a
                            high-quality education for all of our students. Our
                            school has a strong focus on academics, and we offer
                            a variety of programs to help our students reach
                            their full potential.
                        </p>
                        <div className="d-flex justify-content-start mt-4">
                            <a
                                className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                                style={{ width: "38px", height: "38px" }}
                                href="#"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                                style={{ width: "38px", height: "38px" }}
                                href="#"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                                style={{ width: "38px", height: "38px" }}
                                href="#"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a
                                className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                                style={{ width: "38px", height: "38px" }}
                                href="#"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h3 className="text-primary mb-4">Get In Touch</h3>
                        <div className="d-flex">
                            <h4 className="fa fa-map-marker-alt text-primary"></h4>
                            <div className="pl-3">
                                <h5 className="text-white">Address</h5>

                                <p>Address Description</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="pl-3">
                                <h5 className="text-white">Email</h5>
                                <p>
                                    <a href="xyz@gmail.com">xyz@gmail.com</a>
                                </p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="pl-3">
                                <h5 className="text-white">Phone</h5>
                                <p>
                                    <a href="tel:0000000">0000000</a>,
                                    <a href="tel:11111111111">11111111111</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h3 className="text-primary mb-4">Quick Links</h3>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-white mb-2" href="#">
                                <i className="fa fa-angle-right mr-2"></i>Home
                            </a>
                            <a className="text-white mb-2" href="#">
                                <i className="fa fa-angle-right mr-2"></i>About
                                Us
                            </a>
                            <a className="text-white mb-2" href="#">
                                <i className="fa fa-angle-right mr-2"></i>Our
                                Classes
                            </a>
                            <a className="text-white mb-2" href="#">
                                <i className="fa fa-angle-right mr-2"></i>Our
                                Teachers
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h3 className="text-primary mb-4">Contact Us</h3>
                        <form action="">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control border-0 py-4"
                                    placeholder="Your Name"
                                    required="required"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control border-0 py-4"
                                    placeholder="Your Email"
                                    required="required"
                                />
                            </div>
                            <div>
                                <button
                                    className="btn btn-primary btn-block border-0 py-3"
                                    type="submit"
                                >
                                    Submit Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div
                    className="container-fluid pt-5"
                    style={{ borderTop: "1px solid rgba(23, 162, 184, 0.2)" }}
                >
                    <p className="m-0 text-center text-white">
                        &copy;
                        <a className="text-primary font-weight-bold" href="#">
                            xyz Educations Pvt.Ltd.
                        </a>
                        . All Rights Reserved. Designed by
                        <a
                            className="text-primary font-weight-bold"
                            href="mailto:xyz@gmail.com"
                        >
                            {" "}
                            xyz
                        </a>
                    </p>
                </div>
            </div>
            {/* <!-- Footer End --> */}

            {/* <!-- Back to Top --> */}
            <a href="#" className="btn btn-primary p-3 back-to-top">
                <i className="fa fa-angle-double-up"></i>
            </a>
        </div>
    );
};

export default Footer;
