import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = (props) => {
    let { name } = props;
    return (
        <div className="container-fluid mt-[50px] position-fixed top-50">
            <div className="row">
                {/* Header Section */}
                <div className="col-md-7 bg-primary mb-5 ">
                    <div
                        className="d-flex flex-column align-items-center justify-content-center"
                        style={{ minHeight: "400px" }}
                    >
                        <h3 className="display-3 font-weight-bold text-white">
                            {name}
                        </h3>
                        <div className="d-inline-flex text-white">
                            <p className="m-0">
                                <a className="text-white" href="">
                                    Home
                                </a>
                            </p>
                            <p className="m-0 px-2">/</p>
                            <p className="m-0">{name}</p>
                        </div>
                    </div>
                </div>
                {/* 
           
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header">
                            <h4>Latest News / Updates</h4>
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <span className="badge badge-warning">
                                        Notice
                                    </span>
                                    <span>
                                        Regarding Advertisement Startup cell
                                    </span>
                                    <span className="text-muted float-right">
                                        Jul 10, 2024
                                    </span>
                                </li>
                                <li className="list-group-item">
                                    <span className="badge badge-warning">
                                        Notice
                                    </span>
                                    <span>
                                        Regarding Online Exam form B.Tech/M.Tech
                                        1st semester 2023(2023 Batch) & B.Tech
                                        3rd Semester 2023(2022 Batch)
                                    </span>
                                    <span className="text-muted float-right">
                                        Jul 04, 2024
                                    </span>
                                </li>
                                <li className="list-group-item">
                                    <span className="badge badge-warning">
                                        Notice
                                    </span>
                                    <span>
                                        Regarding M.Tech 1st sem Mid -Term Exam
                                        Program
                                    </span>
                                    <span className="text-muted float-right">
                                        Jul 04, 2024
                                    </span>
                                </li>
                                <li className="list-group-item">
                                    <span className="badge badge-warning">
                                        Notice
                                    </span>
                                    <span>
                                        Regarding revised Hostel & Mess fee
                                    </span>
                                    <span className="text-muted float-right">
                                        Jul 03, 2024
                                    </span>
                                </li>
                                <li className="list-group-item">
                                    <span className="badge badge-warning">
                                        Notice
                                    </span>
                                    <span>B.Tech Mid Term Exam Program</span>
                                    <span className="text-muted float-right">
                                        Jul 03, 2024
                                    </span>
                                </li>
                                <li className="list-group-item">
                                    <span className="badge badge-warning">
                                        Notice
                                    </span>
                                    <span>Regarding hostel & Mess closed</span>
                                    <span className="text-muted float-right">
                                        Jun 15, 2024
                                    </span>
                                </li>
                                <li className="list-group-item">
                                    <span className="badge badge-warning">
                                        Notice
                                    </span>
                                    <span>
                                        Revised B.Tech 5th Sem Viva-Voce Program
                                    </span>
                                    <span className="text-muted float-right">
                                        Jun 14, 2024
                                    </span>
                                </li>
                                <li className="list-group-item">
                                    <span className="badge badge-warning">
                                        Notice
                                    </span>
                                    <span>
                                        Regarding update Wanting grade
                                        card(2K19-23 Batch, not received final
                                        Certificate)
                                    </span>
                                    <span className="text-muted float-right">
                                        Jun 06, 2024
                                    </span>
                                </li>
                                <li className="list-group-item">
                                    <span className="badge badge-warning">
                                        Notice
                                    </span>
                                    <span>
                                        Important Notices Regarding Hostel
                                    </span>
                                    <span className="text-muted float-right">
                                        Jun 03, 2024
                                    </span>
                                </li>
                                <li className="list-group-item">
                                    <span className="badge badge-warning">
                                        Notice
                                    </span>
                                    <span>
                                        M.Tech Mid Sem Program1st semester 2023
                                    </span>
                                    <span className="text-muted float-right">
                                        May 25, 2024
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Header;
