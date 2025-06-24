import React from "react";
import Header from "../components/About Components/Header";
import Footer from "../components/Footer";
import coursesBanner from "/Images/shooting/courses/course-banner.webp";
import Courses from "../components/Shooting Components/Courses";

const CoursesPage = () => {
  return (
    <>
      <Header title="Courses" banner={coursesBanner} />
      <Courses />
      <Footer />
    </>
  );
};

export default CoursesPage;
