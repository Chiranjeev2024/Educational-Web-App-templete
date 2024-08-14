import React from "react";

const TeacherDetails = () => {
    return (
        <div>
            {/* <!-- Team Start --> */}
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="text-center pb-2">
                        <p className="section-title px-5">
                            <span className="px-2">Our Teachers</span>
                        </p>
                        <h1 className="mb-4">Meet Our Teachers</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3 text-center team mb-5">
                            <div
                                className="position-relative overflow-hidden mb-4"
                                style={{ borderRadius: "100%" }}
                            >
                                <img
                                    className="img-fluid w-100"
                                    src="templateAssets\img\team-4.jpg"
                                    alt=""
                                />
                            </div>
                            <h4>Jhon Dow</h4>
                            <i>Qualification - B.Ed - Work Exp. 8 Years</i>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center team mb-5">
                            <div
                                className="position-relative overflow-hidden mb-4"
                                style={{ borderRadius: "50%" }}
                            >
                                <img
                                    className="img-fluid w-100"
                                    src="templateAssets\img\team-3.jpg"
                                    alt=""
                                />
                            </div>
                            <h4>Shaily Hoffman</h4>
                            <i>Qualification - B.Ed - Work Exp. 5 Years</i>
                        </div>

                        <div className="col-md-6 col-lg-3 text-center team mb-5">
                            <div
                                className="position-relative overflow-hidden mb-4"
                                style={{ borderRadius: "100%" }}
                            >
                                <img
                                    className="img-fluid w-100"
                                    src="templateAssets\img\team-1.jpg"
                                    alt=""
                                />
                            </div>
                            <h4>Emily Wiseman</h4>
                            <i>Post Graduate - Work Exp. 5 Years</i>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center team mb-5">
                            <div
                                className="position-relative overflow-hidden mb-4"
                                style={{ borderRadius: "100%" }}
                            >
                                <img
                                    className="img-fluid w-100"
                                    src="templateAssets\img\team-2.jpg"
                                    alt=""
                                />
                            </div>
                            <h4>David N</h4>
                            <i>Qualification - B.Ed - Work Exp. 5 Years</i>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Team End --> */}
        </div>
    );
};

export default TeacherDetails;
