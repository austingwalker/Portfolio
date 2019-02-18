import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import Picture from "../components/Picture";
import NameBio from "../components/NameBio";
import Content from "../components/Content";
import PersonalInfo from "../components/PersonalInfo";
import Footer from "../components/Footer";
import Boxes from "../components/Boxes";
import Info from "../components/Info";
import Jumbotron from "../components/Jumbotron";
import BioModal from "../components/BioModal";
import ResumeModal from "../components/ResumeModal";
import InfoModal from "../components/InfoModal";
import SkillsModal from "../components/SkillsModal";
import ExperienceModal from "../components/ExperienceModal";
import EducationModal from "../components/EducationModal";
import "./PortfolioContainer.css";
import portfolioItems from "../PortfolioItems.json";



class Portfolio extends Component {
  state = {
    portfolioItems,
    
  };


  render() {
    return (
      <div>
        <Container className="containerBox" fluid>

          <Jumbotron/>

          <Row className="portfolioRow">
            
            {this.state.portfolioItems.map(item => (
              <Col className="noGuttersP" >
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
            
            {/* </Col> */}
            <Col>
              <div className="modalBox">
                <Row className="modalRowOne">
                  <ResumeModal/>
                  <InfoModal/>
                </Row>
                <Row className="modalRowTwo">
                  <SkillsModal/>
                  <ExperienceModal/>
                </Row>
                <Row className="modalRowThree">
                  <EducationModal/>
                  <BioModal/>
                </Row>
              </div>
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

