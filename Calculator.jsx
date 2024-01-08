
import React, { useState } from "react";
import CalcButton from "./CalcButton";
import "./calculator.css";

function Calculator() {
  const [calc, setCalc] = useState({
    current: "0",
    total: "0",
    isInitial: true,
    preOp: null,
  });

  function handleNumber(value) {
    let newValue = value;

    if (!calc.isInitial) {
      newValue = calc.current + value;
    }
    setCalc({ current: newValue, total: calc.total, isInitial: false, preOp: calc.preOp });
  }

  function handleOperator(value) {
    if (value === "=") {
      const total = doCalculation();
      setCalc({ current: total.toString(), total: total.toString(), isInitial: true, preOp: null });
    } else {
      setCalc({ current:" " , total: calc.current, isInitial: false, preOp: value });
    }
  }

  function doCalculation() {
    let total = parseInt(calc.total);

    switch (calc.preOp) {
      case "+":
        total += parseInt(calc.current);
        break;
      case "-":
        total -= parseInt(calc.current);
        break;
      case "*":
        total *= parseInt(calc.current);
        break;
      case "/":
        total /= parseInt(calc.current);
        break;
      default:
        total = parseInt(calc.current);
    }

    return total;
  }

  function renderDisplay() {
    return calc.current;
  }

  return (<>
    <h2>CALCULATOR</h2>
    <div className="calculatorbox">
      
      <div className="display">{renderDisplay()}</div>
      <CalcButton value="7" onClick={() => handleNumber("7")} />
      <CalcButton value="8" onClick={() => handleNumber("8")} />
      <CalcButton value="9" onClick={() => handleNumber("9")} />
      <CalcButton className="operator" value="/" onClick={() => handleOperator("/")} />
      <CalcButton value="4" onClick={() => handleNumber("4")} />
      <CalcButton value="5" onClick={() => handleNumber("5")} />
      <CalcButton value="6" onClick={() => handleNumber("6")} />
      <CalcButton className="operator" value="*" onClick={() => handleOperator("*")} />
      <CalcButton value="3" onClick={() => handleNumber("3")} />
      <CalcButton value="2" onClick={() => handleNumber("2")} />
      <CalcButton value="1" onClick={() => handleNumber("1")} />
      <CalcButton className="operator" value="+" onClick={() => handleOperator("+")} />
      <CalcButton className="operator" value="C" onClick={() => handleOperator("C")} />
      <CalcButton value="0" onClick={() => handleNumber("0")} />
      <CalcButton className="operator" value="=" onClick={() => handleOperator("=")} />
      <CalcButton className="operator" value="-" onClick={() => handleOperator("-")} />
    </div>
    </>
  );
}

export default Calculator;
