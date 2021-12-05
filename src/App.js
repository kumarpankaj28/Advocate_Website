import React from "react";
import './App.css';
import Home from "./views/Home/Home"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from "./views/About/About";
import Services from "./views/Services/Services";
import Blog from "./views/Blog/Blog";
import Contact from "./views/Contact/Contact";
import Error from "./views/Error/Error";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LoginPage from "./components/LoginPage/LoginPage";
import SignUp from "./components/LoginPage/SignUp";


function App() {
  return (
      <Router>
          <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/signIn" element={<LoginPage/>} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
          <Footer/>
      </Router>

  );
}

export default App;
