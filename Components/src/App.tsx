import { Alert, Badge, Button, Card } from "react-bootstrap";

function App() {
  return (
    <>
      {[
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}

      <div>
        <h1>
          Example heading <Badge bg="secondary">New</Badge>
        </h1>
        <h2>
          Example heading <Badge bg="secondary">New</Badge>
        </h2>
        <h3>
          Example heading <Badge bg="secondary">New</Badge>
        </h3>
        <h4>
          Example heading <Badge bg="secondary">New</Badge>
        </h4>
        <h5>
          Example heading <Badge bg="secondary">New</Badge>
        </h5>
        <h6>
          Example heading <Badge bg="secondary">New</Badge>
        </h6>
      </div>

      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default App;
