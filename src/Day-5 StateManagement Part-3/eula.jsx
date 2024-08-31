import { useState } from "react";

const EULA = () => {
  const [iAccept, setIAccept] = useState(false);

  const handleInputChange = (e) => {
    const { checked } = e.target;
    console.log({ checked });
    setIAccept(checked);
  };
  console.log("Re-Render", { iAccept });

  return (
    <div>
      <div className="form-element">
        <input type="checkbox" name="iAccept" onChange={handleInputChange} />
        <span>I Accept the user agreement</span>
      </div>

      <div>
        <p>Acceptance: {iAccept ? "Accepted" : "Not Accepted"}</p>
        <button disabled={!iAccept}>Submit Details</button>
      </div>
    </div>
  );
};

export default EULA;
