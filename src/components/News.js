import React from "react";
import { Col, Card, Button } from "react-bootstrap";

const News = ({ defaultbrt }) => {
  
  return (
    <Col md={4} xs={6}>
      <Card className="margin">
        <Card.Img variant="top" src={defaultbrt.urlToImage} />
        <Card.Body>
          <Card.Title>{defaultbrt.title}</Card.Title>
          <Card.Text>{defaultbrt.description}</Card.Text>
          <Button variant="primary" href={defaultbrt.url} target="_blank">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default News;
