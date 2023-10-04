import React, { useState } from "react";
import TransHistory from "./component/profilepage/trans-history";
import Home from "./component/homepage/home";
import Pro from "./component/profilepage/profile";
import MyAccount from "./component/profilepage/profile-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trans from "./component/online_banking/transactions";
import JoinUs from "./component/JoinUs/JoinUs";
import Login from "./Login";
import SignUpForm from "./Signup/Signup";
import Sign0UpForm from "./Signup/Sign0";
import Sign3UpForm from "./Signup/Sign3";
import Sign2UpForm from "./Signup/Sign2";
import UserProfile from "./UserProfile/UserProfile";
import LocalLocation from "./component/user-location/user-location";
import Freeze from "./component/online_banking/Freeze";
import RequestVisa from "./component/online_banking/request-visa";

function App() {

 
  
  return (
    <BrowserRouter>
      <Routes>
     
        
        <Route element={<Home />} path="/" />
        <Route path="/JoinUs" element={<JoinUs />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUpForm />} />
        <Route path="signup0" element={<Sign0UpForm />} />
        <Route path="signup2" element={<Sign2UpForm />} />
        <Route path="signup3" element={<Sign3UpForm />} />
        <Route element={<LocalLocation />} path="/Locations" />
        <Route path="userProfile" element={<UserProfile />} />
        <Route element={<MyAccount />} path="/MyAccount" />
        <Route element={<Trans />} path="/Trans" />
        <Route element={<TransHistory />} path="/TransHistory" />
        <Route element={<Freeze />} path="/Freeze" />
        <Route element={<RequestVisa />} path="/RequestVisa" />
       
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;