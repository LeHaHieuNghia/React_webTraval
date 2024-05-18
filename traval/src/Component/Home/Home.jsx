import React from "react";
import video from "../../asset/video.mp4";
import "./homee.scss";
import { FaLocationDot } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import { TbApps } from "react-icons/tb";

const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeConten container">
        <div className="textDiv">
          <span className="spand smallText">Our packeges</span>
          <h1 className="homeTitle">search your holiday</h1>
        </div>
        <div className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination:</label>

            <div className="input flex">
              <input type="text" placeholder="enter name..."></input>
              <FaLocationDot className="icon" />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">Select your date:</label>

            <div className="input flex">
              <input type="date"></input>
            </div>
          </div>

          <div className="priceInput">
            <div className="lable_total flex">
              <label htmlFor="city">Max price:</label>
              <h3 className="total">$6000</h3>
            </div>
            <div className=" input flex">
              <input type="range" max={6000} min={1000}></input>
            </div>
          </div>

          <div className="searchOptions flex">
            <FaFilter className="icon" />
            <span>More Filter</span>
          </div>
        </div>
        <div className="homeFootericons flex">
          <div className="rightIcons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaGithub className="icon" />
          </div>
          <div className="leftIcons">
            <CiViewList className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
