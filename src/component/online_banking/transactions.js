import React from 'react'
import {Form} from "react-bootstrap";
import "./transaction.css";
import NavPro from '../../UserProfile/navsPro/navsPro';
import * as yup from "yup";
import Swal from "sweetalert2";


const Sign1UpForm = () => {
     
       
 const validationSchema=yup.object({

  from: yup.number().required("required"),
  to: yup.number().required("required"),


amount: yup.number()
.required("required")
.moreThan(9,"at least 10 EGP "),
//dropdown42: yup.number().required("required"),

 }
 );


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
      <section className="loSign">
      <div className="containers1">
      <div className="logins">
      <NavPro/>
      <Form className="forms" >
      <h1 className="titles">Transaction</h1><br/>
      <div className='username500' style={{marginTop:"50px"}}>
        <label className='label' htmlFor='visaPassword'> Transaction From </label>
        <input name="to" className='input500' id='to'
         />

    </div>
   <div className='username500' style={{marginTop:"50px"}}>
        <label className='label' htmlFor='visaPassword'> Transaction To </label>
        <input name="to" className='input500' id='to'
         />

    </div>


    <div className='username500'>
        <label className='label' htmlFor='Visa'> Money </label>
        <input name="amount" className='input500' id='amount'/>

    </div>
    <div>
    <button
        id='submit500'
        className='submit500'
      
         type='submit'
        >
       Next
      </button>
      <button
        className='submit500'
        onClick={()=>window.location.href='/UserProfile'}
        >
       Exit
      </button>

    </div>
     
    </Form>
    </div>
    </div>
    </section>
  
   );
};
export default Sign1UpForm;