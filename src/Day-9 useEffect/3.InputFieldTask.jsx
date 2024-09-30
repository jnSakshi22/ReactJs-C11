import { useEffect, useState } from "react";

const InputFieldTask = () => {
  const [uName, setUName] = useState("");
  const [profile, setProfile] = useState({
    fname: "",
    lname: "",
    age: "",
    city: "",
  });

  useEffect(() => {
    const value = localStorage.getItem("uName") || "";
    const objValue = JSON.parse(localStorage.getItem("profile")) || {
      fname: "",
      lname: "",
      age: "",
      city: "",
    };
    setUName(value);
    setProfile(objValue);
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setUName(value);
    localStorage.setItem("uName", value);
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });

    setProfile((prevState) => {
      const updatedProfile = {
        ...prevState,
        [name]: value,
      };
      localStorage.setItem("profile", JSON.stringify(updatedProfile));
      return updatedProfile;
    });
  };

  return (
    <div>
      <p>Name: {uName}</p>
      <input
        type="text"
        name="uName"
        placeholder="Enter Your First Name"
        value={uName}
        onChange={handleChange}
      />
      <p>First Name: {profile.fname}</p>
      <input
        type="text"
        name="fname"
        value={profile.fname}
        placeholder="Enter your First Name"
        onChange={onInputChange}
      />
      <p>Last Name: {profile.lname}</p>
      <input
        type="text"
        name="lname"
        value={profile.lname}
        placeholder="Enter your Last Name"
        onChange={onInputChange}
      />
      <p>Age: {profile.age}</p>
      <input
        type="text"
        name="age"
        value={profile.age}
        placeholder="Enter your Age"
        onChange={onInputChange}
      />
      <p>City: {profile.city}</p>
      <input
        type="text"
        name="city"
        value={profile.city}
        placeholder="Enter your City"
        onChange={onInputChange}
      />
    </div>
  );
};

export default InputFieldTask;
