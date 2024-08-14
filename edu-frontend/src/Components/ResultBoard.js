import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ResultBoard() {
    console.log(process.env.REACT_APP_API_URL);
    const dummyresults = [];
    let [results, setresults] = useState(dummyresults);
    useEffect(() => {
        let fun = async () => {
            try {
                let response = await fetch(
                    process.env.REACT_APP_API_URL + "/api/view-results"
                );
                console.log(response);
                let data = await response.json();
                console.log(data);
                if (Array.isArray(data)) setresults(data);
            } catch (err) {
                console.log(err);
                console.log("API call to fetch results failed");
            }
        };
        fun();
    }, []);

    return (
        <div className="container-fluid mt-sm-4 m-2 p-2">
            <h2>Exam Results</h2>
            <div className="list-group">
                {results.length === 0 ? (
                    <>{"No results are there currently"}</>
                ) : (
                    results.map((result, index) => (
                        // eslint-disable-next-line react/jsx-no-target-blank
                        <a
                            target="_blank"
                            key={index}
                            href={
                                result.link ||
                                `${
                                    process.env.REACT_APP_API_URL +
                                    "/view-results"
                                }`
                            }
                            className={`list-group-item list-group-item-action ${
                                result.highlight ? "active" : ""
                            }`}
                        >
                            {/* <div className="d-flex w-100 justify-content-between">
                                <small className="text-muted">
                                    {new Date(
                                        result.date
                                    ).toLocaleDateString() +
                                        " " +
                                        new Date(
                                            result.date
                                        ).toLocaleTimeString()}
                                </small>
                                {result.type && (
                                    <span className="badge bg-primary rounded-pill">
                                        {result.type}
                                    </span>
                                )}
                            </div> */}
                            <p className="mb-1 text-decoration-underline">
                                {result.className + " - " + result.examName}
                            </p>
                        </a>
                    ))
                )}
            </div>
        </div>
    );
}

export default ResultBoard;
