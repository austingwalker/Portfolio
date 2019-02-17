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
import Experience from "../components/Experience";
import Education from "../components/Education";
import "./PortfolioContainer.css";
import portfolioItems from "../PortfolioItems.json";



class Portfolio extends Component {
  state = {
    portfolioItems
  };


  render() {
    return (
      <div>
        <Container className="containerBox" fluid>
          <Row >
            <Col className="noGutters"  ><Picture/></Col>
            <Col className="noGutters"  ><NameBio/></Col>
            <Col className="noGutters"  ><Boxes/></Col>
          </Row>

          <Row className="portfolioRow">
            {/* <Col className="noGutters fullContentBox" md="8"> */}
            
            {this.state.portfolioItems.map(item => (
              <Col className="noGuttersP" md="2">
              <Content
              key={item.id}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    description={item.description}
                    technologies={item.technologies}
                    url={item.url}
              />  
              </Col>
            ))}
            
            {/* </Col> */}
            
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
                    <Row>
                      <Col className="noGuttersEX" md="6">
                          <Experience/>
                      </Col>

                      <Col className="noGuttersED" md="6">
                          <Education/>
                      </Col>
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

