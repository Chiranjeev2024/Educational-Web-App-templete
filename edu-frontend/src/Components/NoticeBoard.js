import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function NoticeBoard() {
    console.log(process.env.REACT_APP_API_URL);
    const dummyNotices = [
        {
            date: "Jul 23, 2024",
            type: "Notice - Dummy",
            name: "Regarding Admit Card of Exams",
        },
        {
            date: "Jul 20, 2024",
            type: "Notice - Dummy",
            name: "Summer Vacations",
            highlight: true,
        },
        {
            date: "Jul 15, 2024",
            type: "Result - Dummy",
            name: "Results of Term1 Examinations",
        },
        {
            date: "Jul 10, 2024",
            name: "Applications invited for the post of Teachers for the session 2023-24",
        },
    ];
    let [notices, setNotices] = useState(dummyNotices);
    useEffect(() => {
        let fun = async () => {
            try {
                let response = await fetch(
                    process.env.REACT_APP_API_URL + "/api/recent-notice-list"
                );
                console.log(response);
                let data = await response.json();
                console.log(data);
                if (Array.isArray(data)) setNotices(data);
            } catch (err) {
                console.log(err);
                console.log("API call to fetch notice failed");
            }
        };
        fun();
    }, []);

    return (
        <div className="container-fluid mt-sm-4 mb-2 p-0">
            <h2>Latest News / Updates</h2>
            <div className="list-group">
                {notices.length === 0 ? (
                    <>{"No Notices are there currently"}</>
                ) : (
                    notices.map((notice, index) => (
                        // eslint-disable-next-line react/jsx-no-target-blank
                        <a
                            target="_blank"
                            key={index}
                            href={
                                notice.link ||
                                `${process.env.REACT_APP_API_URL + notice.path}`
                            }
                            className={`list-group-item list-group-item-action ${
                                notice.highlight ? "active" : ""
                            }`}
                        >
                            <div className="d-flex w-100 justify-content-between">
                                <small className="text-muted">
                                    {new Date(
                                        notice.date
                                    ).toLocaleDateString() +
                                        " " +
                                        new Date(
                                            notice.date
                                        ).toLocaleTimeString()}
                                </small>
                                {notice.type && (
                                    <span className="badge bg-primary rounded-pill">
                                        {notice.type}
                                    </span>
                                )}
                            </div>
                            <p className="mb-1 text-decoration-underline">
                                {notice.name}
                            </p>
                        </a>
                    ))
                )}
            </div>
        </div>
    );
}

export default NoticeBoard;
