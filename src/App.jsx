function App() {
  const output = document.getElementById("output");

  function includeButton(display) {
    if (output.value === "0") {
      output.value = output.value.slice(1) + display;
    } else {
      output.value += display;
    }
  }
  function clearBtn() {
    output.value = "0";
  }

  function calculate() {
    try {
      output.value = eval(output.value);
    } catch (error) {
      output.value = "Error";
      setTimeout(clearBtn, 2000);
    }
  }

  if (isNaN(output)) {
    output.value = "0";
  }

  return (
    <body>
      <div id="calculatorBorder1"></div>
      <div id="calculatorBorder2"></div>
      <div id="calculatorCtn">
        <input id="output" readOnly />
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
    </body>
  );
}

export default App;
