import { useState } from "react";
import "./style.css";
import Modal from "react-modal";

const interestsList = ["Sports", "Music", "Reading", "Coding"];

const InputForm = () => {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    gender: "",
    interests: [],
    rangeValue: 1,
    dateValue: "",
    submit: false,
    showModal: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => {
        const updatedInterests = checked
          ? [...prevData.interests, value]
          : prevData.interests.filter((interest) => interest !== value);

        return { ...prevData, interests: updatedInterests };
      });
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = () => {
    const { fName, lName, email, password } = formData;
    const isValid =
      fName !== "" &&
      lName !== "" &&
      email !== "" &&
      password !== "" &&
      password.length > 8;

    setFormData((prevData) => ({
      ...prevData,
      submit: true,
      showModal: isValid,
    }));
  };

  const closeModal = () => {
    setFormData((prevData) => ({ ...prevData, showModal: false }));
  };

  return (
    <div className="container">
      <div className="subContainer">
        <h1>
          <strong>Registration Form</strong>
        </h1>

        <div className="inputField">
          <h4 className="headingTxt">
            <strong>First Name</strong>
          </h4>
          <input
            className="inputtxtType"
            name="fName"
            type="text"
            placeholder="Enter your First Name..."
            value={formData.fName}
            onChange={handleChange}
          />
          {formData.submit && formData.fName === "" && (
            <p className="validationTxt">Please enter your First Name</p>
          )}
        </div>

        <div className="inputField">
          <h4 className="headingTxt">
            <strong>Last Name</strong>
          </h4>
          <input
            className="inputtxtType"
            type="text"
            name="lName"
            placeholder="Enter your Last Name..."
            value={formData.lName}
            onChange={handleChange}
          />
          {formData.submit && formData.lName === "" && (
            <p className="validationTxt">Please enter your Last Name</p>
          )}
        </div>

        <div className="inputField">
          <h4 className="headingTxt">
            <strong>Email</strong>
          </h4>
          <input
            className="inputtxtType"
            type="email"
            name="email"
            placeholder="Enter your Email..."
            value={formData.email}
            onChange={handleChange}
          />
          {formData.submit &&
            (formData.email === "" || !formData.email.includes("@")) && (
              <p className="validationTxt">
                Please enter a valid Email address
              </p>
            )}
        </div>

        <div className="inputField">
          <h4 className="headingTxt">
            <strong>Password</strong>
          </h4>
          <input
            className="inputtxtType"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {formData.submit &&
            (formData.password === "" || formData.password.length < 8) && (
              <p className="validationTxt">
                Password must be at least 8 characters
              </p>
            )}
        </div>

        <div className="inputField">
          <h4 className="headingTxt">
            <strong>Gender</strong>
          </h4>
          <div className="inputRadioType">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
            <label>Male</label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
            <label>Female</label>
          </div>
        </div>

        <div className="inputField">
          <h4 className="headingTxt">
            <strong>Interests</strong>
          </h4>
          <div className="inputCheckboxType">
            {interestsList.map((item) => (
              <div className="checkboxes" key={item}>
                <input
                  type="checkbox"
                  name="interests"
                  value={item}
                  checked={formData.interests.includes(item)}
                  onChange={handleChange}
                />
                <label>{item}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="inputField">
          <h4 className="headingTxt">
            <strong>Age</strong>
          </h4>
          <input
            className="inputtxtType"
            name="rangeValue"
            type="range"
            min={1}
            max={100}
            value={formData.rangeValue}
            onChange={handleChange}
          />
          <p>Age: {formData.rangeValue} yrs.</p>
        </div>

        <div className="inputField">
          <h4 className="headingTxt">
            <strong>Date Of Birth</strong>
          </h4>
          <input
            name="dateValue"
            value={formData.dateValue}
            type="date"
            className="inputtxtType"
            onChange={handleChange}
          />
        </div>

        <div className="submitBtn">
          <input
            className="btnType"
            type="button"
            value="Submit"
            onClick={handleSubmit}
          />
        </div>

        {formData.showModal && (
          <Modal isOpen={formData.showModal}>
            <div className="modal">
              <h2>Hey!! Your details are:</h2>
              <p>First Name: {formData.fName}</p>
              <p>Last Name: {formData.lName}</p>
              <p>Email: {formData.email}</p>
              <p>Gender: {formData.gender}</p>
              <p>
                Interests:{" "}
                {formData.interests.map((item) => (
                  <span key={item}>{item} </span>
                ))}
              </p>
              <p>Age: {formData.rangeValue} yrs.</p>
              <p>DOB: {formData.dateValue}</p>
              <button className="btnType" onClick={closeModal}>
                Close
              </button>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default InputForm;
