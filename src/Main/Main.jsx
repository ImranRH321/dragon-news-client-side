import React from "react";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Header/Footer/Footer";
import { Button, Col, Container, Row } from "react-bootstrap";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <h1>main page </h1>
      <Container>
        <Row>
          <Col className="border" lg={3}>Left nav</Col>
          <Col className="border" lg={6}>main conent page</Col>
          <Col className="border" lg={3}>right nav</Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
