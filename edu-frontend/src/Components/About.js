import React from "react";

const About = () => {
    return (
        <div>
            {/* About Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <img
                                className="img-fluid rounded mb-5 mb-lg-0"
                                src="templateAssets\img\blog-1.jpg"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-7">
                            <p className="section-title pr-5">
                                <span className="pr-2">Learn About Us</span>
                            </p>
                            <h1 className="mb-4">Best School For Your Kids</h1>
                            <p className="text-justify">
                                We are a school that is dedicated to providing a
                                high-quality education for all of our students.
                                Our school has a strong focus on academics, and
                                we offer a variety of programs to help our
                                students reach their full potential. We also
                                have a strong commitment to the arts, and we
                                offer a variety of programs to help our students
                                develop their creativity.
                            </p>
                            <div className="row pt-2 pb-4">
                                <div className="col-6 col-md-4">
                                    <img
                                        className="img-fluid rounded"
                                        src="templateAssets\img\blog-3.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="col-6 col-md-8">
                                    <ul className="list-inline m-0">
                                        <li className="py-2 border-top border-bottom">
                                            <i className="fa fa-check text-primary mr-3"></i>
                                            Character development
                                        </li>
                                        <li className="py-2 border-bottom">
                                            <i className="fa fa-check text-primary mr-3"></i>
                                            Extra-Curriculars
                                        </li>
                                        <li className="py-2 border-bottom">
                                            <i className="fa fa-check text-primary mr-3"></i>
                                            Foundation Learnings
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <a
                                href="#"
                                className="btn btn-primary mt-2 py-2 px-4"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
        </div>
    );
};

export default About;
