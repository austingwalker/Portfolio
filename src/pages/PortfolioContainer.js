import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import Content from "../components/Content";
import Footer from "../components/Footer";
import "./PortfolioContainer.css";
import current from "../current.json";
import personalWork from "../personal.json";
import professionalWork from "../professional.json";
import courseWork from "../course.json";
import NavBar from "../components/NavBar";
import Card from "../components/Card";


class Portfolio extends Component {
  state = {
  
    
  };

  render() {
    return (
      <div>
        <NavBar/>
        <Container className="containerBox" >
        <Row className="contentTitleRow">
          <h2 className="contentTitle">Current Position</h2>
        </Row>
        <Row className="portfolioRow">
        {current.map(item => (
              <Col md="6" className="noGuttersP" >
              <Card
                pro="pro"
                key={item.id}
                id={item.id}
                image={item.image}
                company={item.company}
                title={item.title}
                description={item.description}
                technologies={item.technologies}
                companyWebsite={item.companyWebsite}
              />  
              </Col>
            ))}   
        </Row>
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
                    company={item.company}
                    title={item.title}
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
              <Col md="6" key={item.id} className="noGuttersP" >
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
            <h2 className="contentTitle">Course Work</h2>
          </Row>
          <Row className="portfolioRow">
            {courseWork.map(item => (
              <Col md="4" key={item.id} className="noGuttersP " >
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
        </Container>
        <Row>
            <Col className="noGutters" md="12"><Footer/></Col>
          </Row>
      </div>
    );
  }
}

export default Portfolio;

