import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import Content from "../components/Content";
import Footer from "../components/Footer";
import "./PortfolioContainer.css";
import personalWork from "../personal.json";
import professionalWork from "../professional.json";
import courseWork from "../course.json";
import NavBar from "../components/NavBar";


class Portfolio extends Component {
  state = {
  
    
  };

  render() {
    return (
      <div>
        <NavBar/>
        <Container className="containerBox" >
        <Row className="contentTitleRow">
          <h2 className="contentTitle">Professional Work</h2>
        </Row>
        <Row className="portfolioRow">
            {professionalWork.map(item => (
              <Col  key={item.id} className="noGuttersP" >
              <Content
                    pro="pro"
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    description={item.description}
                    technologies={item.technologies}
                    deployedUrl={item.deployedUrl}
                    githubRepo={item.githubRepo}
              />  
              </Col>
            ))}   
          </Row>
        <Row className="contentTitleRow">
          <h2 className="contentTitle">Personal Projects</h2>
        </Row>
        <Row className="portfolioRow">
            {personalWork.map(item => (
              <Col key={item.id} className="noGuttersP" >
              <Content
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    description={item.description}
                    technologies={item.technologies}
                    deployedUrl={item.deployedUrl}
                    githubRepo={item.githubRepo}
              />  
              </Col>
            ))}   
          </Row>
          <Row className="contentTitleRow">
            <h2 className="contentTitle">Course Work</h2>
          </Row>
          <Row className="portfolioRow">
            {courseWork.map(item => (
              <Col md="3" key={item.id} className="noGuttersP" >
              <Content
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    description={item.description}
                    technologies={item.technologies}
                    deployedUrl={item.deployedUrl}
                    githubRepo={item.githubRepo}
              />  
              </Col>
            ))}   
          </Row>
        </Container>
        <Row>
            <Col className="noGutters" md="12"><Footer/></Col>
          </Row>
      </div>
    );
  }
}

export default Portfolio;

