import { Button, Card } from "react-bootstrap"
import type { Car } from "./types/Cars"

function App() {
  const cars: Array<Car> = [
    { brand: "Mercedes", model: "Vito", year: 2015, img: "https://upload.wikimedia.org/wikipedia/commons/5/54/Mercedes-Benz_V_250_d_Exclusive_AMG_Line_Lang_%28V_447%29_%E2%80%93_Frontansicht%2C_29._Juni_2016%2C_D%C3%BCsseldorf.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" },
    { brand: "BMW", model: "M3", year: 2025, img: "https://hips.hearstapps.com/hmg-prod/images/2025-bmw-m3-111-66562de0157ab.jpg?crop=0.827xw:0.622xh;0.163xw,0.254xh&resize=2048:*" },
    { brand: "Audi", model: "Q6", year: 2018, img: "https://evadatbazis.hu/wp-content/uploads/2024/11/Audi_Q6_etron_Sportback_2024-01@2x.jpg" }
  ]

  return (
    <>
      {cars.map((car: Car) => (
        <Card style={{ width: '18rem', marginBottom: '1rem' }}>
          <Card.Img variant="top" src={car.img} />
          <Card.Body>
            <Card.Title>{car.brand} {car.model}</Card.Title>
            <Card.Text>
               {car.year}
            </Card.Text>
            <Button variant="primary" onClick={() => { window.open(car.img, '_blank') }}>
              Nézd meg
            </Button>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}

export default App