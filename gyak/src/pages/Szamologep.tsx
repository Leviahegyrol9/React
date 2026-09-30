import { useRef, useState } from "react";

const Szamologep = () => {
  const operetion = useRef<HTMLSelectElement>(null);
  const num1 = useRef<HTMLInputElement>(null);
  const num2 = useRef<HTMLInputElement>(null);
  const [result, setResult] = useState<Number>(null);

  const onBtnClick = () => {
    switch (operetion.current.value) {
      case "+":
        break;
      case "-":
        break;
      case "*":
        break;
      case "/":
        break;
    }
  };

  return (
    <>
      <h1>Egyszerű számológép</h1>

      <input type="number" ref={num1}></input>
      <select ref={operetion}>
        <option>+</option>
        <option>-</option>
        <option>*</option>
        <option>/</option>
      </select>
      <input type="number" ref={num2}></input>
      <button onClick={onBtnClick}>Katt</button>
    </>
  );
};

export default Szamologep;
