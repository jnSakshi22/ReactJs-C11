import { useState } from "react";

const UNameComponent = () => {
  const [uName, setUName] = useState("Sakshi");
  return (
    <>
      <div>{uName}</div>
      <button onClick={() => setUName("Sakshi Jain")}>Change Name</button>
    </>
  );
};

export default UNameComponent;
