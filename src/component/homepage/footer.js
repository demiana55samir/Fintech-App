import React from "react";
import "./footerOut.css";

function FooterOut() {
  return (
    <div className="main-footer00">
      <div className="container00">
        <div className="row">
          <div className="col0">
            <h1 className="list-unstyled0">
              <h4 className="head4">PRIVACY</h4>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>.</li>
            </h1>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterOut;

