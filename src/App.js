import React from "react";
import { getBerita, getBitcoinArticles } from "./api";
// import { getBitcoinArticles } from "./api";
import CardBerita from "./components/CardBerita";
import CariBerita from "./components/CariBerita";
import NavbarComponents from "./components/NavbarComponents";
import { Col, Container, Row } from "react-bootstrap";
import { Oval } from "react-loader-spinner";
import ListBerita from "./components/ListBerita";
// import News from "./components/News";

export default class App extends React.Component {
  state = {
    berita: [],
    cariTopik: "",
    // hasilTotal: "",
    loading: false,
    apiError: "",
    beritadefault: [],
    showToogle: true,
  };

  async componentDidMount() {
    try {
      const response = await getBitcoinArticles();
      this.setState({ berita: response.articles });
    } catch (error) {
      this.setState({ apiError: "Could not find any articles" });
    }
  }

  PencarianTopik = async (topic) => {
    try {
      this.setState({
        loading: true,
        berita: [],
      });
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

  handleToogle = (value) => {
    this.setState({
      showToogle: value,
    });
  };
  render() {
    const { berita, apiError, loading } = this.state;
    const { showToogle } = this.state;
    //eritadefault const [berita] = this.state;
    return (
      <div className="App">
        <NavbarComponents />
        <Container>
          <h2 style={{ textAlign: "center", margin: "40px" }}>Cari Berita Disini</h2>
          <CariBerita PencarianTopik={this.PencarianTopik} />
          {/* {loading && <p style={{ textAlign: "center" }}>Mencari Topik Berita..</p>} */}
          {loading && (
            <div className="Box">
              <Oval color="#00BFFF" height={80} width={80} />
            </div>
          )}
          <div className="toogle-btns">
            <i className="fas fa-list" onClick={() => this.handleToogle(true)}></i>
            <i className="fas fa-th-large" onClick={() => this.handleToogle(false)}></i>
          </div>
          {showToogle ? (
            <Container>
              <Row>
                <Col>
                  <Row>{berita && berita.map((brt, i) => <ListBerita brt={brt} key={brt.title + i} />)}</Row>
                </Col>
              </Row>
            </Container>
          ) : (
            <Container>
              <Row>
                <Col>
                  <Row>{berita && berita.map((brt, i) => <CardBerita brt={brt} key={brt.title + i} />)}</Row>
                </Col>
              </Row>
            </Container>
          )}

          {apiError && (
            <div>
              <p>coba lagi.</p>
            </div>
          )}
          {/* <Container>
            <Row>
              <Col>
                <Row>{beritadefault && beritadefault.map((defaultbrt) => <News key={defaultbrt.id} defaultbrt={defaultbrt} />)}</Row>
              </Col>
            </Row>
          </Container> */}
        </Container>
      </div>
    );
  }
}
