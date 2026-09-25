import { useState } from "react";

function Bmi() {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [bmi, setBmi] = useState<number>(0);
  const [result, setResult] = useState<string>("");

  const clickBtn = () => {
    const newBmi = weight / ((height / 100) * (height / 100));
    setBmi(newBmi);
    setResult(calculateResult(newBmi));
  };

  const calculateResult = (bmi: number) => {
    if (bmi >= 0 && bmi < 15.9) return "Súlyos soványság";
    else if (bmi >= 16 && bmi < 16.9) return "Mérsékelt soványság";
    else if (bmi >= 17 && bmi < 18.4) return "Enyhe soványság";
    else if (bmi >= 18.5 && bmi < 24.9) return "Normál testsúly";
    else if (bmi >= 25 && bmi < 29.9) return "Túlsúlyos";
    else if (bmi >= 30 && bmi < 34.9) return "Elhízott (I. fokú)";
    else if (bmi >= 35 && bmi < 39.9) return "Elhízott (II. fokú)";
    else return "Súlyosan elhízott (III. fokú)";
  };

  return (
    <>
      <h1>BMI Kalkulátor</h1>

      <span>Magasság (cm): </span>
      <input
        type="number"
        onChange={(e) => setHeight(Number(e.target.value))}
      />
      <span>Testsúly (kg): </span>
      <input
        type="number"
        onChange={(e) => setWeight(Number(e.target.value))}
      />
      <br />
      <button onClick={clickBtn}>Számol</button>
      <br />
      <span>
        Az állapotod: {result}
        <br />
        (BMI: {bmi.toFixed(2)})
      </span>
    </>
  );
}

export default Bmi;
