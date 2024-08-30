import { useState } from "react";

const ToggleExample = () => {
  const [light, setLight] = useState(false);
  return (
    <>
      <div>
        <div
          style={{
            width: "90px",
            height: "90px",
            background: light ? "green" : "red",
            color: "#fff",
            display: "grid",
            placeItems: "center",
            borderRadius: "50%",
            transition: ".2s",
          }}
        >
          i
        </div>
        <p style={{ color: light ? "green" : "red" }}>
          State {light ? "ON" : "OFF"}
        </p>
        <button onClick={() => setLight(!light)}>
          {light ? "Turn On" : "Turn Off"}
        </button>
      </div>
    </>
  );
};

export default ToggleExample;
