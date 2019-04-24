import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import Content from "../components/Content";
import Footer from "../components/Footer";
import "./PortfolioContainer.css";
import portfolioItemsOne from "../PortfolioItemsOne.json";
import portfolioItemsTwo from "../PortfolioItemsTwo.json";
import NavBar from "../components/NavBar";





class Portfolio extends Component {
  state = {
    portfolioItemsOne,
    portfolioItemsTwo
    
  };


  render() {
    return (
      <div>
       
        <NavBar/>
        <Container className="containerBox" fluid>

          

          <Row className="portfolioRow">
            
            {this.state.portfolioItemsOne.map(item => (
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

          <Row className="portfolioRow">
            
            {this.state.portfolioItemsTwo.map(item => (
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

          <Row>
            <Col className="noGutters" md="12"><Footer/></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Portfolio;

