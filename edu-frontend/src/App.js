import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TeachersPage from "./Pages/TeachersPage";
import React, { useEffect } from "react";
import About from "./Components/About";

// export default ExternalScripts;

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Navbar />,
            children: [
                { index: true, element: <Home /> },
                {
                    path: "/gallery",
                    element: <Gallery />,
                },
                {
                    path: "/contact",
                    element: <Contact />,
                },
                {
                    path: "/teachers",
                    element: <TeachersPage />,
                },
                {
                    path: "/about",
                    element: <About />,
                },
            ],
        },
    ]);
    return (
        <div className="App">
            {/* <header className="App-header">Hello</header> */}
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
