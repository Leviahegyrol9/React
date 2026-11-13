import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import type { Champ } from "../types/Champ";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { useParams } from "react-router-dom";

const OneChamp = () => {
  const [champ, setChamp] = useState<Champ>();
  const { id } = useParams();

  useEffect(() => {
    apiClient
      .get(`/champions/${id}`)
      .then((res) => setChamp(res.data))
      .catch((e) => console.error(e.message));
  });

  return (
    <div style={{ width: 300, margin: "0 auto" }}>
      <Carousel>
        {champ?.images.map((i) => (
          <Carousel.Item>
            <img
              src={`${BACKEND_URL}/images/${i}`}
              style={{ width: 450 }}
            ></img>
          </Carousel.Item>
        ))}
      </Carousel>
      <p>{champ?.name}</p>
      <p>{champ?.role}</p>
      <p>{champ?.blue_essence}</p>
      <p>{champ?.difficulty}</p>
      <p>{champ?.damage_type}</p>
      <p>{champ?.lane}</p>
    </div>
  );
};

export default OneChamp;
