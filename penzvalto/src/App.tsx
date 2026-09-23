import { useState } from "react";

function App() {
  const [huf, setHuf] = useState<number>(0);
  const [type, setType] = useState<string>("Euro");
  const [result, setResult] = useState<string>("");

  const clickBtn = () => {
    switch (type) {
      case "Euro":
        setResult(`${huf} HUF = ${(huf / 380).toFixed(2)} Euro`);
        break;
      case "Dollár":
        setResult(`${huf} HUF = ${(huf / 350).toFixed(2)} Dollár`);
        break;
    }
  };

  return (
    <>
      <h1>Pénzváltó</h1>

      <span>Pénzösszeg (HUF):</span>
      <input type="number" onChange={(e) => setHuf(Number(e.target.value))} />
      <br />
      <select onChange={(e) => setType(String(e.target.value))}>
        <option>Euro</option>
        <option>Dollár</option>
      </select>
      <br />
      <button onClick={clickBtn}>Váltás</button>
      <br />
      <h3>{result}</h3>
    </>
  );
}

export default App;
