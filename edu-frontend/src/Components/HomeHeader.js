import React, { useState } from "react";
import NoticeBoard from "./NoticeBoard";
import { Button } from "react-bootstrap";
const HomeHeader = () => {
    const [showFullMessage, setShowFullMessage] = useState({
        director: true,
        principal: true,
    });

    const toggleMessage = (person) => {
        setShowFullMessage({
            ...showFullMessage,
            [person]: !showFullMessage[person],
        });
    };

    return (
        <div className="container-fluid">
            <div className="row mt-2">
                <div className="col-md-8 order-md-1 order-2">
                    {/* First Header (Green Background) */}
                    <div className="container-fluid bg-success px-0 px-md-5 mb-2 pt-5 pb-1">
                        <div className="row align-items-center px-3">
                            <div className="col-lg-3 text-start text-lg-right">
                                <div
                                    className="overflow-hidden"
                                    style={{ borderRadius: "100%" }}
                                >
                                    <img
                                        className="img-fluid w-100 w-sm-50"
                                        src="templateAssets/dummy-man-570x570-1.png"
                                        alt=""
                                    />
                                </div>
                                <div className="text-white text-center mb-4 mt-5 mt-lg-0">
                                    <p className="mb-0">Dr. Sean Paul</p>
                                    <p>Director</p>
                                </div>
                            </div>

                            <div className="col-lg-9 text-start text-lg-left">
                                <h4 className="text-white mb-4 mt-lg-0">
                                    Message from the Director
                                </h4>
                                <h1 className="font-weight-bold text-white">
                                    New Approach to Kids Education
                                </h1>
                                <p className="text-white text-justify">
                                    {showFullMessage.director ? (
                                        `True education releases capacities, develops
                                    analytical abilities, confidence, will, and
                                    goal-setting competencies, and instills the
                                    vision serving the best interests of the
                                    community...!!`
                                    ) : (
                                        <>
                                            {" "}
                                            True education releases capacities,
                                            develops analytical abilities,
                                            confidence, will, and goal-setting
                                            competencies, and instills the
                                            vision serving the best interests of
                                            the community...!!
                                            <br />
                                            It's my pleasure and privilege to
                                            serve as the Director of
                                            Shakespeare's English School...not
                                            only because it's my passion but
                                            also because I enjoy the company of
                                            my dearly loved students and
                                            talented and zealous teachers who
                                            keep me energized all the time.
                                            <br />
                                            SES is not just ONE More school in
                                            the already long list of educational
                                            institutions in the "Fortified
                                            City", but it is ONE school which
                                            has made a great difference in its
                                            Qualitative journey. Our children
                                            represent our hopes and dreams. As a
                                            parent, you certainly want the best
                                            for your child and we are indeed
                                            happy to be working with you to
                                            ensure that they are given the right
                                            knowledge to face future challenges
                                            with the only weapon of education as
                                            we believe that "Education is
                                            Power..".
                                        </>
                                    )}
                                </p>
                                <Button
                                    variant="outline-light"
                                    size="sm"
                                    onClick={() => toggleMessage("director")}
                                >
                                    {showFullMessage.director
                                        ? "Read More"
                                        : "Read Less"}
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Second Header (Blue Background) */}
                    <div className="container-fluid bg-primary px-0 px-md-5 pt-4">
                        <div className="row align-items-center px-3">
                            <div className="col-lg-3 text-start text-lg-right">
                                <div
                                    className="overflow-hidden br-5"
                                    style={{ borderRadius: "100%" }}
                                >
                                    <img
                                        className="img-fluid w-100"
                                        src="templateAssets/dummy-man-570x570-1.png"
                                        alt=""
                                    />
                                </div>
                                <div className="text-white text-center mb-4 mt-5 mt-lg-0">
                                    <p className="mb-0">Dr. Head Jospeh</p>
                                    <p>Principal</p>
                                </div>
                            </div>

                            <div className="col-lg-9 text-start text-lg-left">
                                <h4 className="text-white mb-4 mt-lg-0">
                                    Message from the Principal
                                </h4>
                                <h1 className="font-weight-bold text-white">
                                    Preparing the Leaders of Tomorrow
                                </h1>
                                <p className="text-white text-justify">
                                    {showFullMessage.principal ? (
                                        `  If a plant is carefully nurtured by
                                            a gardener, it will become good, and
                                            produce better fruit. Therefore,
                                            children must be given a good
                                            training from their earliest
                                            childhood.`
                                    ) : (
                                        <>
                                            {" "}
                                            If a plant is carefully nurtured by
                                            a gardener, it will become good, and
                                            produce better fruit. Therefore,
                                            children must be given a good
                                            training from their earliest
                                            childhood."
                                            <br />
                                            Modern education is all about
                                            helping the child to realize and
                                            explore his potentialities and
                                            latent talents. Our children
                                            represent our hopes and dreams. As a
                                            parent, you want the best for your
                                            child and we are proud to be working
                                            with you to ensure that they are
                                            given the right knowledge to face
                                            future challenges.
                                            <br />
                                            Parents, students, and the school
                                            authorities are a team and
                                            complement each other's efforts.
                                            Education is not just a process of
                                            giving knowledge for a future job
                                            but a lifelong process which creates
                                            an understanding of moral and
                                            ethical values to guide one's life
                                            and make our students the future
                                            hope of the country.
                                        </>
                                    )}
                                </p>
                                <Button
                                    variant="outline-light"
                                    size="sm"
                                    onClick={() => toggleMessage("principal")}
                                >
                                    {showFullMessage.principal
                                        ? "Read More"
                                        : "Read Less"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 order-md-2 order-1">
                    <NoticeBoard />
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;
