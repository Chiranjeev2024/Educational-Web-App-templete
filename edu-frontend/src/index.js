import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import $ from "jquery";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import App from "./App";

import "./index-custom-bootstrap.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

// const ExternalScripts = () => {
//     useEffect(() => {
//         const loadScript = (path) => {
//             return new Promise((resolve, reject) => {
//                 const script = document.createElement("script");
//                 script.src = path;
//                 script.async = true;

//                 script.onload = () => resolve(path);
//                 script.onerror = () =>
//                     reject(new Error(`Script load failed: ${path}`));

//                 document.body.appendChild(script);
//             });
//         };

//         const scripts = [
//             `https://code.jquery.com/jquery-3.4.1.min.js`, // jQuery (Step 1)
//             `templateAssets/lib/owlcarousel/owl.carousel.min.js`, // Owl Carousel (Step 2)
//             `templateAssets/lib/isotope/isotope.pkgd.min.js`, // Isotope (Step 3)
//             `templateAssets/js/main.js`, // Your main script (Step 4)
//             `https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js`, // Bootstrap (Step 5)
//             `templateAssets/lib/easing/easing.min.js`, // Easing (Step 6)
//             `templateAssets/lib/lightbox/js/lightbox.min.js`, // Lightbox (Step 7)
//             `templateAssets/mail/jqBootstrapValidation.min.js`, // Validation (Step 8)
//             `templateAssets/mail/contact.js`, // Contact (Step 9)
//         ];

//         // Step 1: Load jQuery
//         loadScript(scripts[0])
//             .then(() => {
//                 // Step 2: Load Owl Carousel after jQuery
//                 return loadScript(scripts[1]);
//             })
//             .then(() => {
//                 // Step 3: Load Isotope after jQuery and Owl Carousel
//                 return loadScript(scripts[2]);
//             })
//             .then(() => {
//                 // Step 4: Load main.js after jQuery, Owl Carousel, and Isotope
//                 return loadScript(scripts[3]);
//             })
//             .then(() => {
//                 // Step 5-9: Load remaining scripts in parallel
//                 return Promise.all(scripts.slice(4).map(loadScript));
//             })
//             .catch((error) => {
//                 console.error("Error loading scripts:", error);
//             });
//     }, []);

//     return <div></div>;
// };

const ExternalScripts = () => {
    useEffect(() => {
        const loadScript = (path) => {
            return new Promise((resolve, reject) => {
                const script = document.createElement("script");
                script.src = path;
                script.async = true;

                script.onload = () => resolve(path);
                script.onerror = () =>
                    reject(new Error(`Script load failed: ${path}`));

                document.body.appendChild(script);
            });
        };

        const scripts = [
            `https://code.jquery.com/jquery-3.4.1.min.js`, // jQuery (Step 1)
            `templateAssets/lib/owlcarousel/owl.carousel.min.js`, // Owl Carousel (Step 2)
            `templateAssets/lib/isotope/isotope.pkgd.min.js`, // Isotope (Step 3)
            `templateAssets/js/main.js`, // Your main script (Step 4)
            `https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js`, // Bootstrap (Step 5)
            `templateAssets/lib/easing/easing.min.js`, // Easing (Step 6)
            `templateAssets/lib/lightbox/js/lightbox.min.js`, // Lightbox (Step 7)
            `templateAssets/mail/jqBootstrapValidation.min.js`, // Validation (Step 8)
            `templateAssets/mail/contact.js`, // Contact (Step 9)
        ];

        // Step 1: Load jQuery
        loadScript(scripts[0])
            .then(() => {
                // Step 2: Load Owl Carousel after jQuery
                return loadScript(scripts[1]);
            })
            .then(() => {
                // Step 3: Load Isotope after jQuery and Owl Carousel
                return loadScript(scripts[2]);
            })
            .then(() => {
                // Step 4: Load main.js after jQuery, Owl Carousel, and Isotope
                return loadScript(scripts[3]);
            })
            .then(() => {
                // Step 5: Load Bootstrap after jQuery
                return loadScript(scripts[4]);
            })
            .then(() => {
                // Step 6: Load easing after Bootstrap
                return loadScript(scripts[5]);
            })
            .then(() => {
                // Step 7: Load lightbox after Bootstrap
                return loadScript(scripts[6]);
            })
            .then(() => {
                // Step 8: Load jqBootstrapValidation after jQuery
                return loadScript(scripts[7]);
            })
            .then(() => {
                // Step 9: Load contact.js after jqBootstrapValidation
                return loadScript(scripts[8]);
            })
            .catch((error) => {
                console.error("Error loading scripts:", error);
            });
    }, []);

    return <div></div>;
};

root.render(
    <>
        <React.StrictMode>
            <App />
        </React.StrictMode>
        <ExternalScripts />
    </>
);
