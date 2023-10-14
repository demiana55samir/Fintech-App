import React from "react";
import Img1 from "./blue-return-button-png-0.png";
import "./home.css";
import NavOut from "../navs/navs";

const JoinUs = () => {
  return (
    <section className="loJoin">
    <NavOut/>
      <div className="containerJ">
        <a href="/">
          <img id="img1" src={Img1} alt="button" />
        </a>
        <div className="app-wrapperJ">
          <div className="headingJ">
            <h1 className="titleJ"> Join Us </h1>
          </div>

          <div>
            <button
              className="submit"
              id="submit"
              type="button"
              onClick={() => {
                window.location.href = "signup0";
              }}
            >
              Sign UP
            </button>
          </div>
          <div>
            <button
              className="submit"
              id="submit"
              type="button"
              onClick={() => {
                window.location.href = "login";
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
