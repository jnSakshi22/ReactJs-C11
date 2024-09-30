import { useEffect, useState } from "react";
import styled from "styled-components";

const SidebbarBox = styled.div`
  background-color: #000;
  width: 500px;
  height: 100vh;
  display: flex;
  position: absolute;
  right: 0;
`;

const SideBarComponent = () => {
  const [clickButton, setClickButton] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const escFunction = (event) => {
      console.log("Inside the ESC Functon", event);
      if (event.key === "Escape") {
        console.log("Escape key Pressed");
        setClickButton(true);
      }
    };

    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("clickButton", JSON.stringify(clickButton));
      console.log("UseEffect:", clickButton);
    }
  }, [clickButton, isLoaded]);

  useEffect(() => {
    const getData = localStorage.getItem("clickButton");
    console.log("GetData: ", getData);
    if (getData) {
      setClickButton(JSON.parse(getData));
    }
    setIsLoaded(true);
  }, []);

  console.log("Clicked Button: ", clickButton);

  return (
    <>
      {!clickButton && (
        <SidebbarBox>
          <h1 style={{ color: "#fff", textAlign: "center" }}>
            Here is the Sidebar Component
          </h1>
        </SidebbarBox>
      )}

      <button onClick={() => setClickButton((prev) => !prev)}>
        {clickButton ? "Open Sidebar" : "Close Sidebar"}
      </button>
    </>
  );
};

export default SideBarComponent;
