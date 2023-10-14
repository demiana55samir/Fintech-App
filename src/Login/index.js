import React from 'react'
import {
  Form
} from "react-bootstrap";
import NavOut from '../component/navs/navs';


const Sign3UpForm = () => {



 return (
      <section className="loSign">
      <div className="containers1">
      <NavOut/>
      <div className="logins">
      <Form className="forms" >
      <h1 className="titles" >Login</h1><br/>
      <div className="username">
            <label htmlFor='username' className='label'> username</label>
            <input name="email" className='input' id='username' />
        <div  id="err">
          </div>
        </div>
      <div className="username">
            <label htmlFor='password' className='label'> password</label>
            <input  type="password"name="password" className='input' id='password' />
        <div id="err" >
          </div>
        </div>

        <div id="err">
        <button
            id='submit'
            className='submit'
           
             type='submit'
            >
           Submit
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