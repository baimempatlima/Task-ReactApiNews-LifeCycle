import React from "react";
import { Col, Card, Button } from "react-bootstrap";

const CardBerita = ({ brt }) => {
  return (
    <Col sm={3} md={4} xs={6}>
      <Card className="margin" style={{ width: "21.8rem" }}>
        <Card.Img className="cardimg" variant="top" src={brt.urlToImage} />
        <Card.Body>
          <Card.Title className="cardtitle">{brt.title}</Card.Title>
          <Card.Text className="cardtext">{brt.description}</Card.Text>
          <Button className="buttonP" variant="primary" href={brt.url}>
            {brt.source.name}{" "}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardBerita;
