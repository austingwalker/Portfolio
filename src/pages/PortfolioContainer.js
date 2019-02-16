import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import Picture from "../components/Picture";
import NameBio from "../components/NameBio";
import Content from "../components/Content";
import PersonalInfo from "../components/PersonalInfo";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import Footer from "../components/Footer";
import "./PortfolioContainer.css";



class Portfolio extends Component {
  state = {

  };

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col  md="4"><Picture/></Col>
            <Col md="8"><NameBio/></Col>
          </Row>
          <Row>
            <Col md="8"><Content/></Col>
            <Col md="4"><PersonalInfo/></Col>
          </Row>
          <Row>
            <Col md="12"><Footer/></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Portfolio;
