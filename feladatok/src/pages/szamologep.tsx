import { useState } from "react";

function Szamologep() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [operation, setOperation] = useState<string>("+");
  const [result, setResult] = useState<number>(0);

  const clickBtn = () => {
    switch (operation) {
      case "+":
        setResult(num1 + num2);
        break;
      case "-":
        setResult(num1 - num2);
        break;
      case "*":
        setResult(num1 * num2);
        break;
      case "/":
        setResult(num1 / num2);
        break;
    }
  };

  return (
    <>
      <h1>Egyszerű számológép</h1>

      <input
        type="number"
        onChange={(e) => setNum1(Number(e.target.value))}
      ></input>

      <select onChange={(e) => setOperation(e.target.value)}>
        <option>+</option>
        <option>-</option>
        <option>*</option>
        <option>/</option>
      </select>

      <input
        type="number"
        onChange={(e) => setNum2(Number(e.target.value))}
      ></input>

      <button onClick={clickBtn}>Számolás</button>

      <span>
        <br />
        Eredmény: {result}
      </span>
    </>
  );
}

export default Szamologep;
