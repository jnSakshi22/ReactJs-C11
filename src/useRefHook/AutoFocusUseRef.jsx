import { useRef } from "react";

const AutoFocusWithReactJSUseRef = () => {
  const inputRefA = useRef();
  const inputRefB = useRef();
  const inputRefC = useRef();

  console.log(inputRefA.current);

  return (
    <div>
      <div className="box">
        <input type="text" ref={inputRefA} />
        <button onClick={() => inputRefA.current.focus()}>Toggle A</button>
      </div>
      <div className="box">
        <input type="text" ref={inputRefB} />
        <button onClick={() => inputRefB.current.focus()}>Toggle B</button>
      </div>
      <div className="box">
        <input type="text" ref={inputRefC} />
        <button onClick={() => inputRefC.current.focus()}>Toggle C</button>
      </div>
    </div>
  );
};

export default AutoFocusWithReactJSUseRef;
