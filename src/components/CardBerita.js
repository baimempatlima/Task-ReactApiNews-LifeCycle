import React from "react";
import { Col, Card, Button } from "react-bootstrap";

const CardBerita = ({ brt }) => {
  return (
    <Col md={4} xs={6}>
      <Card className="margin" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={brt.urlToImage} />
        <Card.Body>
          <Card.Title>{brt.title}</Card.Title>
          <Card.Text>{brt.description}</Card.Text>
          <Button variant="primary" href={brt.url}>
            {brt.source.name}{" "}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

// const CardBerita = (props) => {
//   return (
//     <Container>
//       <Row>
//         <Col>
//           <Row>
//             {props.berita.map((brt, i) => (
//               <CardItemBerita brt={brt} key={brt.title + i} />
//             ))}
//           </Row>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

export default CardBerita;
