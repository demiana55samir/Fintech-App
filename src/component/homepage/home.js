import React, { Fragment } from "react";
import "./homeOut.css";
import Secimg from "./sec1.jpg";
import sec2img from "./sec2.png";
import NavOut from "../navs/navs";
import HeaderOut from "./header";
import FooterOut from "./footer";

const home = () => {
  return (
    <div>
      <Fragment>
        <HeaderOut />
        <FooterOut />
        <NavOut />
      </Fragment>
      <div className="sec11">
     
        <h3 className="secHead">Hassle-free and secure</h3>
        <h3 className="secHeader">payments anywhere.</h3>
        <pre id="secp">
          Effortlessly make payments, pay, and get paid from any<br></br>{" "}
          COL_PRO userwhile keeping track of your spending.<br></br> All done
          securely and simply
        </pre>
        <img src={Secimg} alt="logo" id="imagesec11" />
        <div className="sec22">
            <h2 className="h211" style={{ color: "#00425a" }}>
          
              Shop around the world.</h2>
            <pre id="secp22">
            
              You will need to book an airline ticket to shop around<br></br>{" "}
              the world. When you open a COL_PRO account,<br></br> you can shop
              at thousands of stores around <br></br>the world with just a few
              simple clicks, <br></br>and your card details are never shared
              with sellers.
              <br></br> Currency conversion fees may apply.
            </pre>
            <img src={sec2img} alt="img" id="imagesec2" />
          
        </div>
      </div>
    </div>
  );
};
export default home;
