import React from "react";
import { Container, Row, Col } from 'reactstrap';
import "./Content.css";

const Content = props => (

    <div className="card portfolioDisplay">
            <img className="card-img-top" src={props.image} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text"><small><b>Description:</b> {props.description}</small></p>
            <p className="card-text"><small><b>Technologies Used:</b> {props.technologies}</small></p>
            <p><small><u>Visit Depolyed App Here</u></small></p>
            <p><small><u>GitHub Repo</u></small></p>
        </div>
    </div>

   
);

export default Content;

 