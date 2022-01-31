import React from "react";
import { getBerita } from "./api";
import CardBerita from "./components/CardBerita";
import CariBerita from "./components/CariBerita";
import NavbarComponents from "./components/NavbarComponents";
import { Col, Container, Row } from "react-bootstrap";

export default class App extends React.Component {
  state = {
    berita: [],
    cariTopik: "",
    hasilTotal: "",
    loading: false,
    apiError: "",
  };

  PencarianTopik = async (topic) => {
    try {
      this.setState({ loading: true });
      const response = await getBerita(topic);
      this.setState({
        berita: response.articles,
        // cariTopik: topic,
        // hasilTotal: response.totalResults,
      });
    } catch (error) {
      this.setState({ apiError: "not found" });
    }
    this.setState({ loading: false });
  };

  render() {
    const { berita, apiError, loading } = this.state;
    // const [berita] = this.state;
    return (
      <div className="App">
        <NavbarComponents />
        <Container>
          <h2 style={{ textAlign: "center", margin: 20 }}>Cari Berita Disini</h2>
          <CariBerita PencarianTopik={this.PencarianTopik} />

          {loading && <p style={{ textAlign: "center" }}>Mencari Topik Berita..</p>}
          {/* {berita.length && (
            <Container>
              <Row style={{ width: "1055px", textAlign: "center" }}>
                <Col>
                  <Alert variant="success">
                    <Alert.Heading>Pencarian ditemukan</Alert.Heading>
                    <p>
                      Menemukan pencarian sebanyak {hasilTotal} dari topik "{cariTopik}"
                    </p>
                  </Alert>
                </Col>
              </Row>
            </Container>
          )} */}
          {/* <Container>
            <Row style={{ width: "1055px", textAlign: "center" }}>
              <Col>
                <Row>
                  {this.state.berita.map((brt) => {
                    return <CardBerita brt={brt} />;
                  })}
                </Row>
              </Col>
            </Row> */}
          {/* </Container> */}
          {/* {berita && <CardBerita berita={berita} />} */}
          {/* <Container>
            <Row>
              <Col>
                <Row>
                  {berita.map((brt) => (
                    <CardBerita key={brt.id} brt={brt} />
                  ))}
                </Row>
              </Col>
            </Row>
          </Container> */}
          <Container>
            <Row>
              <Col>
                <Row>{berita && berita.map((brt, i) => <CardBerita brt={brt} key={brt.title + i} />)}</Row>
              </Col>
            </Row>
          </Container>
          {apiError && (
            <div>
              <p>coba lagi.</p>
            </div>
          )}
        </Container>
      </div>
    );
  }
}
