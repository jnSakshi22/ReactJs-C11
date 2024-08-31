import { useState } from "react";

const EULAObj = () => {
  const [profile, setProfile] = useState({
    iAccept: true,
    isMarried: false,
    name: "Ram",
    price: 3006,
    dob: "",
  });

  const handleInputChange = (e) => {
    const { checked, name, value, type } = e.target;

    console.log({ checked, name, value, type });

    setProfile((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  console.log("Profile: ", profile);
  return (
    <div>
      <h1>EULA Object Based {profile?.details?.city}</h1>
      <div className="form-element">
        <input
          type="checkbox"
          name="iAccept"
          checked={profile.iAccept}
          // disabled={profile.iAccept}
          onChange={handleInputChange}
        />
        <span>I Accept the user agreement</span>
      </div>
      <div className="form-element">
        <input type="checkbox" name="isMarried" onChange={handleInputChange} />{" "}
        {profile.isMarried ? "Married" : "Not Married"}
        <br />
        <span>Please tick if you are married</span>
      </div>
      <div className="form-element">
        <input
          type="text"
          name="name"
          value={profile.name}
          placeholder="Enter your name"
          onChange={handleInputChange}
        />
      </div>

      <div className="form-element">
        <p>Price Range : {profile.price}</p>
        <input
          type="range"
          name="price"
          min={10}
          value={profile.price}
          max={10000}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-element">
        <p>DOB : {profile.dob}</p>
        <input
          type="date"
          name="dob"
          value={profile.dob}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <p>Acceptance: {profile.iAccept ? "Accepted" : "Not Accepted"}</p>
        <button disabled={!profile.iAccept}>Submit Details</button>
      </div>
    </div>
  );
};

export default EULAObj;
