import { useState } from "react";

const Radio = () => {
  const [profile, setProfile] = useState({
    gender: "",
    name: "Raj",
  });

  const onInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    console.log({ name, value, checked });

    setProfile((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div>
      <div className="form-element">
        <p>
          Select Gender:{" "}
          <span style={{ textTransform: "capitalize" }}>{profile.gender}</span>
        </p>
        <ul>
          <li>
            <input
              type="radio"
              value="female"
              name="gender"
              onChange={onInputChange}
            />{" "}
            Female
          </li>
          <li>
            <input
              type="radio"
              value="male"
              name="gender"
              onChange={onInputChange}
            />{" "}
            Male
          </li>
          <li>
            <input
              type="radio"
              value="other"
              name="gender"
              onChange={onInputChange}
            />{" "}
            Others
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Radio;

