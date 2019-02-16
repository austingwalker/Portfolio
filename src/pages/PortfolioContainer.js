import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import Picture from "../components/Picture";
import NameBio from "../components/NameBio";
import Content from "../components/Content";
import PersonalInfo from "../components/PersonalInfo";
import Footer from "../components/Footer";
import Boxes from "../components/Boxes";
import Info from "../components/Info";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import "./PortfolioContainer.css";



class Portfolio extends Component {
  state = {

  };

  render() {
    return (
      <div>
        <Container className="containerBox" fluid>
          <Row >
            <Col className="noGutters" md="4" ><Picture/></Col>
            <Col className="noGutters" md="6" ><NameBio/></Col>
            <Col className="noGutters" md="2" ><Boxes/></Col>
          </Row>
          <Row>
            <Col className="noGutters" md="8"><Content/></Col>
            <Col className="noGutters" md="4">
            <PersonalInfo>
            <Row>
              <Col className="noGutters" md="7">
                <Info/>
              </Col>
              <Col className="noGutters" md="5">
                <Resume/>
              </Col>
            </Row>
            <Row>
              <Skills/>
            </Row>
            </PersonalInfo>
            </Col>
          </Row>
          <Row>
            <Col className="noGutters" md="12"><Footer/></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Portfolio;
