import React from 'react'
import Swal from "sweetalert2";

import {
  Form

} from "react-bootstrap";
import * as yup from "yup";
import NavOut from '../component/navs/navs';


const Sign3UpForm = () => {




const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
 const validationSchema=yup.object({
  password: yup
    .string()
    .matches(passwordRules, { message: 'Please create a stronger password' })
    .required('Required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
    

 });

const showAlert = (x) => {
  Swal.fire({
    
    text: x,
    icon: "success",
    confirmButtonText: "OK",
  });
  Window.location.href="/UserProfile"
}
    return (
      <section className="loSign">
      <div className="containers1">
      <NavOut/>
      <div className="logins">
      <Form className="forms" >
      <h1 className="titles">Registration</h1><br/><br/>
      <div className="username">
            <label htmlFor='password' className='label'> password</label>
            <input type="password"name="password" className='input' id='password'/>
        </div>
        <div className='username'>
            <label htmlFor='confirmPassword'className='label' > confirmPassword</label>
            <input   type="password" name="confirmPassword" className='input' id='confirmPassword'/>
        </div>
        <div>
        <button
            id='submit'
            className='submit'
           onClick={() => {
              
              window.location.href = '/';
            
             }}
             type='submit'
            >
           Next
          </button>
          <button
            className='submit'
            onClick={()=>window.location.href='/'}
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
export default Sign3UpForm;