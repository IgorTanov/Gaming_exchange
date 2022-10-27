import Card from "react-bootstrap/Card";
import "./cards.css";

const Cards = ({ img, name }) => {
  return (
    <div className="card">
      <Card style={{ width: "18rem" }}>
        <div>
          <Card.Img variant="top" src={img} data-src="holder.js/100px180?text=Image cap" />
        </div>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <Card.Body className="card-link">
          <Card.Link>Acounts</Card.Link>
          <Card.Link>Gold</Card.Link>
          <Card.Link>Items</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
