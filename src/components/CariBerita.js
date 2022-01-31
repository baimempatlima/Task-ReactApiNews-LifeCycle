import React from "react";
import { Button, Form, InputGroup, FormControl, Row, Col, Container } from "react-bootstrap";

class CariBerita extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cariTopik: "" };
  }

  handleChange = (event) => {
    this.setState({ cariTopik: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.PencarianTopik(this.state.cariTopik);
  };

  render() {
    return (
      <div className="margin">
        <Container>
          <Row className="justify-content-md-center">
            <Col sm={8}>
              <Form onSubmit={this.handleSubmit}>
                <InputGroup className="mb-3">
                  <FormControl aria-label="Recipient's username" aria-describedby="basic-addon2" placeholder="Ketik Topik Berita Disini" name="topic" value={this.state.cariTopik} onChange={this.handleChange} />
                  <Button variant="primary" id="button-addon2" type="submit">
                    Cari
                  </Button>
                </InputGroup>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CariBerita;
