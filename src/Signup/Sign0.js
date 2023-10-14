import './Signup.css';
import React from 'react'
import {Form} from "react-bootstrap";
import * as yup from "yup";
import NavOut from '../component/navs/navs';


const Sign0UpForm = () => {





 const validationSchema=yup.object({
/*
    nationalId: yup
    .string()
    .required()
    .matches(
      /^([1-9]{1})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})[0-9]{3}([0-9]{1})[0-9]{1}$/,
      'Is not in correct format'
    ),*/
  //4539628347117863
  visaNumber: yup
    .string()
    .required()
    .matches(/^4[0-9]{12}(?:[0-9]{3})?$/, 'Is not in correct format'),
  //10/05/2020
  visaEnd: yup
    .string()
    .required()
    .matches(
        /^[0-9]{4}(-|\/)[0-9]{2}(-|\/)[0-9]{2}$/,
        'Is not in correct format'
      ),
  //4539628347117863
  visaPassword: yup
    .string()
    .required('No password provided.')
    .max(4, 'Password is too short .'),

 });
    return (
    <section className="loSign">
          <div className="containers1">
          <NavOut/>
          <div className="logins">
          <Form className="formss" >
          <h1 className="titles">Registration</h1><br/>
          <div className='username'>
            <label className='label' htmlFor='nationalId'> National Id</label>
            <input className='input'  name="nationalId"  id='nationalId'/>
        </div>
        <div className='username'>
            <label className='label' htmlFor='visaPassword'> Password </label>
            <input name="visaPassword" className='input' type="password" id='visaPassword'/>

        </div>
        <div className='username'>
            <label className='label' htmlFor='Visa'> visaNumber </label>
            <input name="visaNumber" className='input' id='visa'/>

        </div>
        <div className='username'>
            <label className='label' htmlFor='End Visa'> End Visa </label>
            <input name="visaEnd" className='input'  id='End Visa' />

        </div>
        <div>
        <button
        
            id='submit'
            className='submit'
            onClick={()=>window.location.href='/signup2'}


           
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
export default Sign0UpForm;