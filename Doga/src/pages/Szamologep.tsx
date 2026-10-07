import { useState } from "react";
const Szamologep = () => {
  const [first, setFirst] = useState<number>(0);
  const [last, setLast] = useState<number>(0);
  const [operation, setOperation] = useState<string>("+");
  const [result, setResult] = useState<number>(0);

  const clickBtn = () => {
    switch (operation) {
      case "+":
        setResult(first + last);
        break;
      case "-":
        setResult(first - last);
        break;
      case "*":
        setResult(first * last);
        break;
      case "/":
        setResult(first / last);
        break;
    }
  };

  return (
    <>
      <h1>Egyszerű számológép</h1>
      <br />
      <br />
      <input
        type="number"
        onChange={(e) => setFirst(Number(e.target.value))}
      ></input>
      <br />
      <select onChange={(e) => setOperation(e.target.value)}>
        <option>+</option>
        <option>-</option>
        <option>*</option>
        <option>/</option>
      </select>
      <br />
      <input
        type="number"
        onChange={(e) => setLast(Number(e.target.value))}
      ></input>
      <br />
      <button onClick={clickBtn}>Számolás</button>
      <br />
      <span>Eredmény: {result}</span>
    </>
  );
};

export default Szamologep;
