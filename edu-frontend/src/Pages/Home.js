import React from "react";
import Facilities from "../Components/Facilities";
import ClassInfo from "../Components/ClassInfo";
import SeatBook from "../Components/SeatBook";
import TeacherDetails from "../Components/TeacherDetails";
import Testimonials from "../Components/Testimonials";
import About from "../Components/About";
import Blogs from "../Components/Blogs";
import HomeHeader from "../Components/HomeHeader";
import ResultBoard from "../Components/ResultBoard";

const Home = () => {
    return (
        <div>
            {/* <h1>Hello</h1> */}
            <HomeHeader />
            <ResultBoard />
            <Facilities />
            <About />
            <ClassInfo />
            <SeatBook />
            <TeacherDetails />

            <Blogs />
        </div>
    );
};

export default Home;
