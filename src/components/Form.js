import { React, useState } from "react";

const Form = ({ formClass }) => {
  const [companyName, setCompanyName] = useState("");
  const [yourName, setYourName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCompanyName("");
    setYourName("");
    setPhoneNumber("");
    setEmailAddress("");
    setMessage("");
  };

  return (
    <div id="form" className={formClass}>
      <form className="form-container" onSubmit={handleSubmit}>
        <label>
          Company <span>*</span>
        </label>
        <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
        <label>
          Your Name <span>*</span>
        </label>
        <input type="text" value={yourName} onChange={(e) => setYourName(e.target.value)} required />
        <label>
          Phone Number <span>*</span>
        </label>
        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        <label>
          E-mail Address <span>*</span>
        </label>
        <input type="text" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} required />
        <label>
          Message <span>*</span>
        </label>
        <textarea type="textarea" value={message} onChange={(e) => setMessage(e.target.value)} required />
        <button className="form-btn primary-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
