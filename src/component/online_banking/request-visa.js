import React from "react";
import "./request-visa.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import {Form} from "react-bootstrap";
import * as yup from "yup";
import Swal from "sweetalert2";
import NavPro from "../../UserProfile/navsPro/navsPro";

const OnClick=(e)=>{
  e.preventDefault();
}
const RequestVisa = () => {
 
  const validationSchema=yup.object({

    accountNumber: yup
    .number()
    .required('Required').nullable(false),

    cardType: yup
  .string()
  .required('Required'),
  cardActivation: yup
  .string()
  .required('Required'),
  cardName: yup
  .string()
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
        <Form className="forms300">
        <label className='title300'> Request New Visa </label>
        <div className='username'>
        <DropdownButton id="dropdown42" title=" please choose your account"
     
      >
     
        </DropdownButton>
        <h4 id="h511"> Which type of cards you need ?</h4>
        <DropdownButton id="dropdown43" title="type of cards "
            
        >
   
        </DropdownButton>
      </div>
      <div >
      <h5 id="h52">Date Of Activation :</h5>
          <input name="cardActivation"     id="ip51"/>

      </div>
      <div >
      <h5 id="h53">Your Name In Card : </h5>
          <input name="cardName"   id="ip51" />

      </div>
      <div>
      <button
          id='submit300'
          className='submit300'
     

           type='submit'
          >
         Submit
        </button>
        <button
          className='submit300'
          onClick={()=>window.location.href='/userProfile'}
          >
         Exit
        </button>

      </div>
    
      </Form>
      </div>
  );
};
export default RequestVisa;
