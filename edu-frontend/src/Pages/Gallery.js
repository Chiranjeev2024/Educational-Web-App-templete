import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./GalleryStyles.css"; // Make sure you have styles to handle the active class and other styling.

const Gallery = () => {
    const isotope = useRef();
    const [filter, setFilter] = useState("*");
    const [refresh, setRefresh] = useState(true);
    const items = [
        { id: 1, category: "first", src: "templateAssets/img/portfolio-1.jpg" },
        {
            id: 2,
            category: "second",
            src: "templateAssets/img/portfolio-2.jpg",
        },
        { id: 3, category: "third", src: "templateAssets/img/portfolio-3.jpg" },
        { id: 4, category: "first", src: "templateAssets/img/portfolio-4.jpg" },
        {
            id: 5,
            category: "second",
            src: "templateAssets/img/portfolio-5.jpg",
        },
        { id: 6, category: "third", src: "templateAssets/img/portfolio-6.jpg" },
    ];
    // window.location.reload();
    useEffect(() => {
        setRefresh(false);
        isotope.current = new Isotope(".portfolio-container", {
            itemSelector: ".portfolio-item",
            layoutMode: "fitRows",
        });
    }, []);

    useEffect(() => {
        if (filter === "*") {
            isotope.current.arrange({ filter: "*" });
        } else {
            isotope.current.arrange({ filter: `.${filter}` });
        }
    }, [filter]);

    return (
        <div>
            <div className="container-fluid pt-5 pb-3 mt-5 p-4">
                <div className="container">
                    <div className="text-center pb-2">
                        <p className="section-title px-5">
                            <span className="px-2">Our Gallery</span>
                        </p>
                        <h1 className="mb-4">Our Kids School Gallery</h1>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center mb-2">
                            <ul
                                className="list-inline mb-4"
                                id="portfolio-filters"
                            >
                                <li
                                    className={`btn btn-outline-primary m-1 ${
                                        filter === "*" ? "active" : ""
                                    }`}
                                    onClick={() => setFilter("*")}
                                >
                                    All
                                </li>
                                <li
                                    className={`btn btn-outline-primary m-1 ${
                                        filter === "first" ? "active" : ""
                                    }`}
                                    onClick={() => setFilter("first")}
                                >
                                    Playing
                                </li>
                                <li
                                    className={`btn btn-outline-primary m-1 ${
                                        filter === "second" ? "active" : ""
                                    }`}
                                    onClick={() => setFilter("second")}
                                >
                                    Drawing
                                </li>
                                <li
                                    className={`btn btn-outline-primary m-1 ${
                                        filter === "third" ? "active" : ""
                                    }`}
                                    onClick={() => setFilter("third")}
                                >
                                    Reading
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row portfolio-container">
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className={`col-lg-4 col-md-6 mb-4 portfolio-item ${item.category}`}
                            >
                                <div className="position-relative overflow-hidden mb-2">
                                    <img
                                        className="img-fluid w-100"
                                        src={item.src}
                                        alt=""
                                    />
                                    <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                                        <a
                                            href={item.src}
                                            data-lightbox="portfolio"
                                        >
                                            <i
                                                className="fa fa-plus text-white"
                                                style={{ fontSize: "60px" }}
                                            ></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
