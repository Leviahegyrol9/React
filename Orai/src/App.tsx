import { Button, Card, Col, Row } from "react-bootstrap";
import type { Car } from "./types/Car";
import { useState } from "react";
import { initCars } from "./Cars";

const App = () => {
  const [allCar, setAllCar] = useState<Array<Car>>(initCars);

  const [brand, setBrand] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [year, setYear] = useState<number>(0);
  const generateCard = (p: Car) => {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={p.img} />
        <Card.Body>
          <Card.Title>{p.brand}</Card.Title>
          <Card.Text>{p.model}</Card.Text>
          <Card.Footer>{p.year}</Card.Footer>
        </Card.Body>
      </Card>
    );
  };

  const submit = () => {
    const newCar: Car = {
      brand: brand,
      model: model,
      year: year,
      img: "https://c8.alamy.com/comp/2PMJYXR/outline-car-icon-simple-vector-illustration-background-graphic-2PMJYXR.jpg",
    };

    setAllCar([...allCar, newCar]);
  };

  return (
    <>
      <Row>
        <Col>{allCar.map((p) => generateCard(p))}</Col>
        <Col>
          <input
            type="text"
            onChange={(e) => setBrand(e.target.value)}
            placeholder="Brand"
          />
          <br />
          <input
            type="text"
            onChange={(e) => setModel(e.target.value)}
            placeholder="Model"
          />
          <br />
          <input
            type="number"
            onChange={(e) => setYear(Number(e.target.value))}
            placeholder="Év"
          />
          <br />
          <Button onClick={submit}>Gomb</Button>
        </Col>
      </Row>
    </>
  );
};

export default App;
