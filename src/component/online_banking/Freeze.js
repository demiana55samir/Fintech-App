import React from "react";import "./Freeze.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import NavPro from "../../UserProfile/navsPro/navsPro";
import * as yup from "yup";
import Swal from "sweetalert2";

const Freeze = () => {
  
  const validationSchema=yup.object({

    typeOfCard: yup
    .string()
    .required('Required'),
    cardNumber: yup
    .number()
    .required('Required'),
   }); 

   const showAlert = (x) => {
    Swal.fire({
      
      text: x,
      icon: "success",
      confirmButtonText: "OK",
    }).then(function () {
      window.location.href = "../../UserProfile";
    });
  }
  return (
    <div className="loTrans">
     <NavPro/>
      <div id="sss" >
        <h4 id="h442" style={{marginTop:'80px'}}> Stop Your Card</h4>
        <hr></hr>
        <DropdownButton id="dropdown42" title=" please choose your Card Type">
        
      
      
        </DropdownButton><br/>

        
       
          <DropdownButton id="dropdown42" title=" please choose your Card">
       
        </DropdownButton>
        <button id="btn41"
        
        >Stop Card </button>
        
      
      
        <a href="/userProfile">
          <Button id="btn42" >return home</Button>
        </a>
      </div>
    </div>
  );
};
export default Freeze;
