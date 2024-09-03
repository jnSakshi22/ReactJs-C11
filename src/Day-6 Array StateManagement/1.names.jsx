import { useState } from "react";

const Names = () => {
  const [nameList, setNameList] = useState([
    "Ankit",
    "Ram",
    "Dev",
    "Sakshi",
    "Pratiksha",
    "Anamika",
    "Chirag",
  ]);

  return (
    <div>
      <h1>My batch people</h1>
      <ul>
        {nameList.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Names;