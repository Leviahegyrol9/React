import { Button, Card, Col, Row } from "react-bootstrap";
import type { Car } from "./types/Car";
import { cache, useState } from "react";
import { initCars } from "./Cars";
import { toast } from "react-toastify";

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
          <Card.Text>
            {p.model}({p.year})
          </Card.Text>
          <Card.Footer>
            <Button onClick={() => deleteBtn(p.id)}>Törlés</Button>
          </Card.Footer>
        </Card.Body>
      </Card>
    );
  };

  const submit = () => {
    if (!brand || !model || !year) {
      toast.warning("Adja meg az össezes jellemzőt!");
      return;
    }

    const newCar: Car = {
      id: allCar.at(-1).id + 1,
      brand: brand,
      model: model,
      year: year,
      img: "https://c8.alamy.com/comp/2PMJYXR/outline-car-icon-simple-vector-illustration-background-graphic-2PMJYXR.jpg",
    };
    setAllCar([...allCar, newCar]);
    toast.success("Sikeres hozzáadás!");
  };

  const deleteBtn = (id: number) => {
    setAllCar([...allCar.filter((c) => c.id != id)]);
    toast.success("Sikeres törlés!");
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
