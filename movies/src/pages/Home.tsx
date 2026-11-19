import { useEffect, useState } from "react";
import type { Movie } from "../types/Movie";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { Button, Card, Carousel, Row } from "react-bootstrap";

const Home = () => {
  const [movies, setMovies] = useState<Array<Movie>>([]);

  useEffect(() => {
    apiClient
      .get("/movies")
      .then((res) => setMovies(res.data))
      .catch((e) => console.error(e.message));
  }, []);

  const generateCard = (m: Movie) => {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Carousel interval={null}>
            {m.images.map((i) => (
              <Carousel.Item>
                <img
                  src={`${BACKEND_URL}/images/${i}`}
                  style={{ width: 400, height: 400 }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <Card.Title>{m.title}</Card.Title>
          <Card.Text>
            Műfaj: {m.genre}
            <br />
            Megjelenési év: {m.release_year}
            <br />
            Ár: {m.price} Ft
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="danger" onClick={() => deleteBtn(m.id)}>
            Törlés
          </Button>
        </Card.Footer>
      </Card>
    );
  };

  const deleteBtn = (id: number) => {
    apiClient
      .delete(`/movies/${id}`)
      .then(() => setMovies(movies.filter((m) => m.id !== id)))
      .catch((e) => console.error(e.message));
  };

  return (
    <>
      <Row>{movies.map(generateCard)}</Row>
    </>
  );
};

export default Home;
