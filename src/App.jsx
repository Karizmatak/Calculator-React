import React, { useState, useRef } from "react";

function App() {
  const [output, setOutput] = useState("0");
  const outputRef = useRef(null);

  function includeButton(display) {
    if (output === "0") {
      setOutput(display);
    } else {
      setOutput(output + display);
    }
  }

  function clearBtn() {
    setOutput("0");
  }

  function calculate() {
    try {
      setOutput(eval(output).toString());
    } catch (error) {
      setOutput("Error");
      setTimeout(clearBtn, 2000);
    }
  }

  return (
    <div id="myBody">
      <div id="calculatorBorder1"></div>
      <div id="calculatorBorder2"></div>
      <div id="calculatorCtn">
        <input id="output" ref={outputRef} readOnly value={output} />
        <div id="buttons">
          <button onClick={() => includeButton("1")}>1</button>
          <button onClick={() => includeButton("2")}>2</button>
          <button onClick={() => includeButton("3")}>3</button>
          <button onClick={() => includeButton("+")} id="blueClr">
            +
          </button>
          <button onClick={() => includeButton("4")}>4</button>
          <button onClick={() => includeButton("5")}>5</button>
          <button onClick={() => includeButton("6")}>6</button>
          <button onClick={() => includeButton("-")} id="blueClr">
            -
          </button>
          <button onClick={() => includeButton("7")}>7</button>
          <button onClick={() => includeButton("8")}>8</button>
          <button onClick={() => includeButton("9")}>9</button>
          <button onClick={() => includeButton("*")} id="blueClr">
            *
          </button>
          <button onClick={() => includeButton("0")}>0</button>
          <button onClick={() => includeButton(".")}>.</button>
          <button onClick={() => clearBtn("C")} id="redClr">
            C
          </button>
          <button onClick={() => includeButton("/")} id="blueClr">
            7
          </button>
          <button onClick={() => calculate("")} id="calculate">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
