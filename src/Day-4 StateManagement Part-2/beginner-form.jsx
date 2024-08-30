import { useState } from "react";

const BeginnerForm = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleFName = (e) => {
    console.log(
      "event: ",
      e.target,
      e.target.name,
      e.target.value,
      e.target.type,
      e.target.placeholder
    );

    const { value } = e.target;
    setFName(value);
  };
  const handleLName = (e) => {
    const { value } = e.target;
    setLName(value);
  };
  const handleEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };
  const handlePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  return (
    <div>
      <div className="form-element">
        <p htmlFor="fName">First Name : {fName}</p>
        <input
          type="text"
          name="fName"
          placeholder="Enter first name"
          onChange={handleFName}
        />
      </div>
      <div className="form-element">
        <p htmlFor="lName">Last Name : {lName}</p>
        <input
          type="text"
          name="lName"
          placeholder="Enter last name"
          onChange={handleLName}
        />
      </div>
      <div className="form-element">
        <p htmlFor="email">Email : {email}</p>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleEmail}
        />
      </div>
      <div className="form-element">
        <p htmlFor="password">Password : {password}</p>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handlePassword}
        />
      </div>
      <div className="form-element">
        <p htmlFor="phone">Phone : {phone}</p>
        <input
          type="phone"
          name="phone"
          placeholder="Enter phone"
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
    </div>
  );
};

export default BeginnerForm;