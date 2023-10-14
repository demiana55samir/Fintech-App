import React ,{useEffect, useState} from "react";
import "./header.css";
const HeaderPro = () => {

  return (
    <div className="hhhh00">
      <div className="content">
        <h1 className="headerH1555" > Hello </h1>
        <p className="para555" >
          ENJOY OUR SERVICES
        </p>
        <button className="button55" onClick={()=>{window.location.href='/'}}>
         LOG OUT
         </button>
      </div>
      <div>
      <button className="button1" onClick={()=>{window.location.href='/Trans'}}>
         Transaction
         </button>
         <button className="button2" onClick={()=>{window.location.href='/TransHistory'}}>
         Transaction History
         </button>
         <button className="button3" onClick={()=>{window.location.href='/Freeze'}}>
         Stop Card
         </button>
         <button className="button4" onClick={()=>{window.location.href='/RequestVisa'}}>
         Request New Visa
         </button>
         <button className="button5" onClick={()=>{window.location.href='/MyAccount'}}>
         Account Balance
         </button>
      </div>
      </div>

  );
};
export default HeaderPro;
