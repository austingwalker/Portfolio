import React from "react";
import "./NavBar.css"
import { Container, Row, Col } from 'reactstrap';
import BioModal from "../BioModal";
import ResumeModal from "../ResumeModal";
import InfoModal from "../InfoModal";
import SkillsModal from "../SkillsModal";
import ExperienceModal from "../ExperienceModal";
import EducationModal from "../EducationModal";

const NavBar = () => (
  <div className="navContainer">
  <Row className="navContainer" >
 
 <Col md="4" className="profilePicColOutside" >
 <Col className="profilePicColInside">
    <div className="profilePic">
    
      <img className="headshot" src="http://i63.tinypic.com/2ef82aa.jpg" alt="headshot"/>
    </div>
    </Col>
  </Col>
   <Col className="colRows" >
   
    <Row className="navRowOne ">   
      <nav className="austinWBox">
        
        <div className="nameBox">
          <h1 className="austinW">| Austin Walker |</h1>   
          
        </div>
        
      
      </nav>
      {/* <div className="boxOne">
          <i className="fab fa-linkedin fa-3x linkedIn"></i>   
        </div> */}
      
      </Row>
      <Row className="navRowTwo">
        <nav className="titleBox">
          <div className="fswdBox" href="/">
            <h1 className="title">Full Stack Web Developer</h1> 
            
          </div>
          
          
         
        </nav>
        {/* <div className="boxTwo">
            <i className="fab fa-github fa-3x github"></i>
          </div> */}
       
      </Row>
      
      <Row className="modalRow">
        <nav className="modalNav">
          <div className="navbar-brand modalBtnRow">
            <ResumeModal/>
          </div>
          <div className="navbar-brand modalBtnRow">
            <InfoModal/>
          </div>
          <div className="navbar-brand modalBtnRow">
          <SkillsModal/>
          </div>
          <div className="navbar-brand modalBtnRow">
            <ExperienceModal/>
          </div>
          <div className="navbar-brand modalBtnRow">
            <EducationModal/>
          </div>
          <div className="navbar-brand modalBtnRow">
            <BioModal/>
          </div> 
          <div className="navbar-brand modalBtnRow">
          <a className="logo" href="https://github.com/austingwalker?tab=repositories" target="_blank" rel='noreferrer noopener'><button type="button" className="btn github"><i className="fab fa-github fa-3x"></i><h5 className="logoTitle">GitHub</h5></button></a>
            
          </div>
          <div className="navbar-brand modalBtnRow" >
          <a className="logo" href="https://www.linkedin.com/in/austin-walker-aa0aab129/" target="_blank" rel='noreferrer noopener'> <button type="button" className="btn linkedIn" ><i className="fab fa-linkedin fa-3x "></i><h5 className="logoTitle">LinkedIn</h5></button></a>
            
          </div>
        </nav>
    
      </Row>
      </Col>
    
    
    </Row>
  </div>
);

export default NavBar;
