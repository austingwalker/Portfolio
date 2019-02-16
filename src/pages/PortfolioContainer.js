import React, { Component } from "react";
import Picture from "../components/Picture";
import NameBio from "../components/NameBio";
import Content from "../components/Content";
import PersonalInfo from "../components/PersonalInfo";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Footer from "../components/Footer";

class Portfolio extends Component {
  state = {

  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="md-6"><Picture/></Col>
            <Col size="md-6"><NameBio/></Col>
          </Row>
          <Row>
            <Col size="md-6"><Content/></Col>
            <Col size="md-6"><PersonalInfo/></Col>
          </Row>
          <Row>
            <Footer/>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Portfolio;
