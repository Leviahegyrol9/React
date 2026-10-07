import { useRef, useState } from "react";
const Penzvalto = () => {
  const huf = useRef<HTMLInputElement>(null);
  const option = useRef<HTMLSelectElement>(null);
  const [result, setResult] = useState<string>("");

  const clickBtn = () => {
    switch (option.current?.value) {
      case "Euró":
        let currentEUR = Number(huf.current?.value);
        setResult(`${currentEUR}Ft = ${(currentEUR / 380).toFixed(2)}€`);
        break;
      case "Dollár":
        let currentUSD = Number(huf.current?.value);
        setResult(`${currentUSD}Ft = ${(currentUSD / 350).toFixed(2)}$`);
        break;
    }
  };

  return (
    <>
      <h1>Pénzváltó</h1>
      <br />
      <h3>Pénzösszeg (HUF):</h3>

      <input type="number" ref={huf}></input>
      <br />
      <select ref={option}>
        <option>Euró</option>
        <option>Dollár</option>
      </select>
      <br />
      <button onClick={clickBtn}>Átváltás</button>
      <br />
      <span>{result}</span>
    </>
  );
};

export default Penzvalto;
