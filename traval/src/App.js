import React from "react";
import "./App.css";
import Navbar from "./Component/Navabar/Navbar";
import Main from './Component/Main/Main';
import Home from "./Component/Home/Home";
// import Footer from "./Component/Footer/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Main />
    {/* <Footer/>  */}
    </>
  );
};

export default App;
