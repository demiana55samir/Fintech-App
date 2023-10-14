import React from "react";
import "./headerOut.css";

const HeaderOut = () => {
  return (
    <div className="headerOut" >
      <div className="content">
        <h1 className="headerH1">The Future</h1>
        <h1 id="nextHeader" className="headerH1"> You Choose.</h1><br/><br/>
        <p className="para">Master what’s yours, and take control of your ﬁnances.</p>
        <button className="button0" onClick={()=>{window.location.href='JoinUs'}}>
         JOIN OUR COMPANY
         </button>
      </div>
    </div>
  );
};
export default HeaderOut;
