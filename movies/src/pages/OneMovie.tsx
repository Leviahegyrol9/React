import { useEffect, useState } from "react";
import type { Movie } from "../types/Movie";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Carousel } from "react-bootstrap";

const OneMovie = () => {
  const [movie, setMovie] = useState<Movie>();
  const [notFound, setNotFound] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    apiClient
      .get(`/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch(() => setNotFound(true));
  }, [id]);

  if (notFound) return <h1>404 Movie Not Found!</h1>;

  const deleteBtn = () => {
    apiClient
      .delete(`/movies/${id}`)
      .then(() => navigate("/"))
      .catch((e) => console.error(e.message));
  };

  return (
    <Card style={{ width: "18rem", margin: "0 auto" }}>
      <Card.Body>
        <Carousel interval={null}>
          {movie?.images.map((i) => (
            <Carousel.Item>
              <img
                src={`${BACKEND_URL}/images/${i}`}
                style={{ width: 500, height: 500 }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <Card.Title>{movie?.title}</Card.Title>
        <Card.Text>
          Műfaj: {movie?.genre}
          <br />
          Megjelenési év: {movie?.release_year}
          <br />
          Ár: {movie?.price} Ft
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="danger" onClick={deleteBtn}>
          Törlés
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default OneMovie;
