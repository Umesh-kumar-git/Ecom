import React, { useState } from "react";
import { State } from "country-state-city";
import "./ShippingInfo.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

function ShippingInfo() {
  const [name, setname] = useState("");
  const [Landmark, setLandmark] = useState("");
  const [City, setCity] = useState("");
  const [state, setstate] = useState("");
  const [PhoneNo, setPhoneNo] = useState("");
  const [PinCode, setPinCode] = useState("");

  const navigate = useNavigate();

  const { isAuthenticated } = useAuth0();

  const Submithandler =(e) => {
    e.preventDefault();

    navigate("/orderconfirm");

    localStorage.setItem("address",JSON.stringify({name,Landmark,City,state,PhoneNo,PinCode}))

  };

  return (
    <>
      {isAuthenticated && (
        <div className="Shipping-Section">

          <form  onSubmit={Submithandler}>

            <label>Name</label>
            <input type="text"  value={name}  onChange={(e) => { setname(e.target.value) }}
           required />

            <label>Landmark</label>
            <input  type="text"   value={Landmark}   onChange={(e) => {setLandmark(e.target.value);
            }}   required
            />

          

            {
              <div className="state">
                <label>State</label>

                <select  value={state}  onChange={(e) => {setstate(e.target.value) }} > {State &&
                    State.getStatesOfCountry("IN").map((i) => ( <option value={i.isoCode}  key={i.isoCode}  >{i.name} 
                     </option> ))}  </select>
              </div>
            }

            <label>City</label>
            <input  type="text"  value={City}   required onChange={(e) => {setCity(e.target.value)}} />

            <label>Pin Code</label>
            <input type="number"    value={PinCode} required onChange={(e) => {setPinCode(e.target.value)}} />

            <label>Phone No.</label>
            <input type="number" value={PhoneNo} required onChange={(e) => {setPhoneNo(e.target.value)}} />

            <button type="submit" >  Confirm Order </button>
          </form>
        </div>
      )}
    </>
  );
}

export default ShippingInfo;
