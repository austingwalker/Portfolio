import React from "react";
import { Container, Row, Col } from 'reactstrap';
import "./Jumbotron.css";



const Jumbotron = props => (
    <div className="jumbotron">
    <Row className="jumboRow">
        <Col className="picCol" md="5">
            <img className="headshot" src="http://i67.tinypic.com/25uofwn.jpg" alt="headshot"/>    
        </Col>
        <Col className="nandt" md="5">
            <div className="nameAndTitle">
                <h1>Austin Walker</h1>
                <hr/>
                <h3>Full Stack Web Developer</h3>
            </div>
        
        </Col>
        <Col className="linkButtons" md="2">
            <p className="lead">
                <a className="btn btn-primary btn-lg linkedIn" href="https://www.linkedin.com/in/austin-walker-aa0aab129/" target="_blank" rel='noreferrer noopener' role="button"><i className="fab fa-linkedin fa-3x"></i></a>
            </p>
            <p className="lead">
                <a className="btn btn-primary btn-lg gitHub" href="https://github.com/austingwalker?tab=repositories" target="_blank" rel='noreferrer noopener' role="button"><i className="fab fa-github fa-3x"></i></a>
            </p>
        </Col>
    </Row>
        
        
     </div>

    
);

export default Jumbotron;

