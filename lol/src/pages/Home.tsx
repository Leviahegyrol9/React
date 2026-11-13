import { useEffect, useState } from "react";
import type { Champ } from "../types/Champ";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { Card, Carousel, Row } from "react-bootstrap";

const Home = () => {
  const [champs, setChamps] = useState<Array<Champ>>([]);

  useEffect(() => {
    apiClient
      .get("/champions")
      .then((res) => setChamps(res.data))
      .catch((e) => console.error(e.message));
  }, []);

  const generateCard = (c: Champ) => {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Carousel interval={null}>
            {c.images.map((i) => (
              <Carousel.Item>
                <img
                  src={`${BACKEND_URL}/images/${i}`}
                  style={{ width: 300 }}
                ></img>
              </Carousel.Item>
            ))}
          </Carousel>
          <Card.Title>{c.name}</Card.Title>
          <Card.Text>{c.role}</Card.Text>
          <Card.Text>{c.blue_essence}</Card.Text>
          <Card.Text>{c.difficulty}</Card.Text>
          <Card.Text>{c.damage_type}</Card.Text>
          <Card.Text>{c.lane}</Card.Text>
        </Card.Body>
        <Card.Footer>{c.description}</Card.Footer>
      </Card>
    );
  };

  return (
    <>
      <Row>{champs.map((e) => generateCard(e))}</Row>
    </>
  );
};

export default Home;
