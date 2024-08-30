import { useState } from "react";

const MidLevelEngineerForm = () => {
  const [profile, setProfile] = useState({
    fName: "Navdeep",
    lName: "",
    password: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
  };

  return (
    <div>
      <div className="form-element">
        <p htmlFor="fName">First Name : {profile.fName}</p>
        <input
          type="text"
          name="fName"
          placeholder="Enter first name"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-element">
        <p htmlFor="lName">Last Name : {profile.lName}</p>
        <input
          type="text"
          name="lName"
          placeholder="Enter last name"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-element">
        <p htmlFor="email">Email : {profile.email}</p>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-element">
        <p htmlFor="password">Password : {profile.password}</p>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-element">
        <p htmlFor="phone">Phone : {profile.phone}</p>
        <input
          type="phone"
          name="phone"
          placeholder="Enter phone"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default MidLevelEngineerForm;