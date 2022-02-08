import React from "react";
// import { Grid, Header, Image, List } from "semantic-ui-react";
import { Col, ListGroup, Row } from "react-bootstrap";

const ListBerita = ({ brt }) => {
  return (
    <ListGroup as="ul" className="margin-list">
      <ListGroup.Item as="li" className="margin-img">
        <Row>
          <Col sm={4}>
            <div className="d-flex w-100 justify-content-between ">
              <h5 className="mb-1"> {brt.title}</h5>
            </div>
            <Row>
              <a href={brt.url}>
                {brt.source.name}
              </a>
            </Row>
          </Col>
          <Col sm={4}>
            <div className="d-flex w-100 justify-content-between ">
              <p className="mb-1">{brt.description}</p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="image-url">
              <img src={brt.urlToImage} className="img-thumbnail" alt="..."></img>
            </div>
          </Col>
        </Row>
        <Row></Row>
      </ListGroup.Item>
    </ListGroup>
    // <List.Item style={{ padding: 30 }}>
    //   <Header as="h3">{brt.title}</Header>
    //   <List.Description style={{ margin: "20px 0" }}>{brt.description}</List.Description>
    //   <List bulleted horizontal>
    //     <List.Item>
    //       <a href={brt.url}>{brt.source.name}</a>
    //     </List.Item>
    //     <List.Item>{brt.publishedAt.split("T")[0]}</List.Item>
    //   </List>

    // </List.Item>

    // <Col md={4} xs={6}>
    // <Card className="margin" style={{ width: "18rem" }}>
    //     <Card.Img className="cardimg" variant="top" src={brt.urlToImage} />
    //     <Card.Body>
    //       <Card.Title className="cardtitle">{brt.title}</Card.Title>
    //       <Card.Text className="cardtext">{brt.description}</Card.Text>
    //       <Button className="buttonP" variant="primary" href={brt.url}>
    //         {brt.source.name}{" "}
    //       </Button>
    //     </Card.Body>
    //   </Card>
    //  </Col>
  );
};

export default ListBerita;
