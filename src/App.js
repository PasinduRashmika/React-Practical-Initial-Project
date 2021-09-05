import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import List from "./components/List";
import Footer from "./components/Footer";
import Card from "./components/Card";
import CardImg from './images/img1.jpg';
import Submit from './components/Submit';
function App() {
  return (
    <div className="App">
      <div className="nav-content">
        <Navbar />
      </div>
      <div className="body-content">
        <List />
        <Card name="Pasindu Rashmika 1" url={CardImg} tel="+94715722313" email="rashmikaofficial98@gmail.com" /> 
        <Card name="Pasindu Rashmika 2" url={CardImg} tel="+94761405188" email="rashmikaofficial2@gmail.com" />
        <Card name="Pasindu Rashmika 3" url={CardImg} tel="+94761405188" email="rashmikaofficialedu@gmail.com" />
      </div>
      <div className="footer-content">
        <Submit />
        <Footer />
      </div>
    </div>
  );
}

export default App;
