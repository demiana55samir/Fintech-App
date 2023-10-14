import React from "react";
import "./trans-history.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import NavPro from "../../UserProfile/navsPro/navsPro";

function TransHistory() {
  
  return (
<>
<div className="Trans-history">
<NavPro/>
      { <div id="h3333" >
        <h3 className="h26">
<div>
        <DropdownButton
          id="dropdown-item-button"
          align={{ lg: "end" }}
          title="choose your account"
       
       >
        
       </DropdownButton></div>
       <br/>
          <h5 id="h55">
            this the your
            <br></br>
            last 5 transactions
          </h5>
        </h3><br/><br/>
       <a href="./UserProfile">
          <button className="btn6">Back To Home Page</button>
        </a>
       
      </div> }

      <>
      <div className="first-history">
        <h4 className="h41">to account:</h4>
        <h4 className="h41">amount: </h4>
        <h4 className="h41">date:</h4>
      </div>
      </>
    </div>
    </>
  );
}

export default TransHistory;
