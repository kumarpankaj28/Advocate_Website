import React from "react";
import './App.css';
import Home from './views/LandingPage/LandingPage';
// import About from './views/AboutUsPage/AboutUsPage';
// import Blog from './views/Blog/Blog';
// import Contact from './views/ContactUsPage/ContactUsPage';
// import Service from './views/Feature/Feature';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (

      <div className="App">

      {/* <Route path="/" exact={true}><Home/></Route>
      <Route path="/home"><Home/></Route>
      <Route path="/about"><About/> </Route>
      <Route path="/services"><Service/></Route>
      <Route path="/blog"><Blog/></Route>
      <Route path="/contact"><Contact/></Route> */}
      <Home/>
    </div>

  );
}

export default App;
