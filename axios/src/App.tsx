import { useEffect, useState } from "react";
import type { Pizza } from "./types/Pizza";
import apiClient, { BACKEND_URL } from "./api/apiClient";
import { Button, Card, Row } from "react-bootstrap";

function App() {
  const [pizza, setPizza] = useState<Array<Pizza>>([]);
  useEffect(() => {
    apiClient.get("/pizzak").then((response) => {
      setPizza(response.data);
    });
  }, []);

  const fillPizza = (p: Pizza) => {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`${BACKEND_URL}/kepek/${p.imageUrl}`}
          width={300}
        />
        <Card.Body>
          <Card.Title>{p.nev}</Card.Title>
          <Card.Text>{p.leiras}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Text>{p.ar}</Card.Text>
        </Card.Footer>
      </Card>
    );
  };

  return <>{pizza.map((p) => fillPizza(p))}</>;
}

export default App;
