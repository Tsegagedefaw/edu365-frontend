import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import Home from "./pages/home";
import Home2 from "./pages/home2";
import About from "./pages/About";
import BlogCategory from "./pages/BlogCategory"
import BlogSingle from "./pages/BlogSingle"
import Gallery from "./pages/Gallery";
import Gallery2 from "./pages/Gallery2";
import Error from "./pages/error";
import Course from "./pages/Course";
import CourseSingle from "./pages/courseSingle";
import Service from "./pages/Service"
import Teacher from "./pages/Teacher"
import TeacherSingle from "./pages/TeacherSingle";
import Event from "./pages/Event";
import EventSingle from "./pages/EventSingle";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { faBridgeCircleXmark } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/home2" element={<Home2/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog_category" element={<BlogCategory/>}/>
        <Route path="/blog_single" element={<BlogSingle/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/gallery2" element={<Gallery2/>}/>
        <Route path="/course" element={<Course/>}/>
        <Route path="/course_single" element={<CourseSingle/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/teacher" element={<Teacher/>}/>
        <Route path="/teacher_single" element={<TeacherSingle/>}/>
        <Route path="/event" element={<Event/>}/>
        <Route path="/event_single" element={<EventSingle/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/contact_us" element={<ContactUs/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;