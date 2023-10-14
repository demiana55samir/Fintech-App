import React, { useState } from "react";
import "./profile.css";
import "react-credit-cards/es/styles-compiled.css";
import Cards from "react-credit-cards";

export default function Pro() {
  const [number, setNumber] = useState("");

  const [name, setName] = useState("");

  const [expiry, setExpiry] = useState("");

  const [cvc, setCvc] = useState("");

  const [focus, setFocus] = useState("");

  return (
    <section className="gggg">
      <div className="visa">
        <Cards
          cvc={cvc}
          expiry={expiry}
          focused={focus}
          name={name}
          number={number}
        />
        <form className="carddetails">
          <input
            required
            type="tel"
            maxLength={16}
            name="number"
            val={number}
            placeholder={"Enter Number"}
            onChange={(e) => setNumber(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <br></br>

          {/* <label>Enter Name</label> */}
          <input
            type="tel"
            required
            name="name"
            val={name}
            placeholder={"Enter Name"}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <br></br>
          {/* <label>expiration date</label> */}
          <input
            className="expiry"
            type="tel"
            name="expiry"
            required
            maxLength={4}
            val={expiry}
            placeholder={" expiration date "}
            onChange={(e) => setExpiry(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <br></br>
          {/* <label>Enter Cvv number</label> */}
          <input
            className="cvv"
            type="tel"
            name="cvc"
            maxLength={3}
            required
            val={cvc}
            placeholder={"Enter Cvv"}
            onChange={(e) => setCvc(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <br></br>
          <div className="btn">
            <button className="submit00">submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}
