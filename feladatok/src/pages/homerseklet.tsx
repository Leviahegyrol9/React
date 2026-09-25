import { useState } from "react";

function Homerseklet() {
  const [celsius, setCelsius] = useState<number>(0);
  const [fahrenheit, setFahrenheit] = useState<number>(0);
  const [kelvin, setKelvin] = useState<number>(0);

  const clickBtn = () => {
    setFahrenheit(celsius * 1.8 + 32);
    setKelvin(celsius + 273.15);
  };

  return (
    <>
      <h1>Hőmérséklet átváltó</h1>

      <h3>Adja meg a Celcius hőmérsékletet:</h3>

      <input
        type="number"
        onChange={(e) => setCelsius(Number(e.target.value))}
      ></input>

      <button onClick={clickBtn}>Számítás</button>

      <span>
        <br />
        <b>
          {celsius}°C: = {fahrenheit.toFixed(2)} °F
        </b>
        <br />
        <b>
          {celsius}°C: = {kelvin.toFixed(2)} K
        </b>
      </span>
    </>
  );
}

export default Homerseklet;
