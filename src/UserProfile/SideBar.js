import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Slide.css'

const SideBar=()=> {

  return (
    <Menu >
    <div style={{fontSize:'30px' , color:'white', fontWeight:'bolder'}}>Our Services</div>
        <hr style={{color:"bisque" , fontWeight:'bolder',fontSize:'10px'}}></hr>
      <a className="menu-item" href="/Trans">
        Transaction
      </a>

      <a className="menu-item" href="/TransHistory">
      Transaction History
      </a>

      <a className="menu-item" href="/Freeze">
        Stop My card
      </a>

      <a className="menu-item" href="/RequestVisa">
      Request New Visa
      </a>

      <a className="menu-item" href="/MyAccount">
      Account Balance
      </a>

      <a className="menu-item" href="/Locations">
      My Locations
      </a>
      <br/><br/><br/><br/><br/>
      <a className="menu-item00" href="/" style={{color:'red'}}>
        LOG Out
      </a>
    </Menu>
  );
};
export default SideBar;