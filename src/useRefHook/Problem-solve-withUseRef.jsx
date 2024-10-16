import { useRef } from "react";

const ProblemSolveWithUseRef = () => {
  const userNameRef = useRef(null);

  const onSubmit = () => {
    console.log("Value: ", userNameRef.current.value);
    userNameRef.current.value = "";

    // const inputElem = document.getElementById("sakshi");
    // console.log("InputElem: ", inputElem.value);
    // inputElem.value = "";
  };

  console.log("Re-Render: ");

  return (
    <div>
      <p>Name</p>
      <input
        type="text"
        placeholder="Enter name"
        ref={userNameRef}
        // id="sakshi"
      />
      <button onClick={onSubmit}>Submit Details</button>
    </div>
  );
};

export default ProblemSolveWithUseRef;