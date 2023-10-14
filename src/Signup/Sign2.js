import React from 'react'
import {
  Form
} from "react-bootstrap";
import * as yup from "yup";
import NavOut from '../component/navs/navs';

const Sign2UpForm = () => {
  

 const validationSchema=yup.object({
  username: yup
  .string()
  .required()
  .matches(/^[A-Za-z0-9]{3,16}$/, 'Is not in correct format'),
    

 });

 
    return (
      <section className="loSign">
      <div className="containers1">
      <NavOut/>
      <div className="logins">
      <Form className="forms" >
      <h1 className="titles">Registration</h1><br/><br/>
      <div className="username">
            <label htmlFor='username' className='label'> username</label>
             <input   className='input' id='username' />
        </div>
        <div>
        <button
            id='submit'
            className='submit'
           onClick={() => {
            window.location.href = '/signup3';
             }}
           
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

export default Sign2UpForm;