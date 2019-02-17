import React from "react";
import { Container, Row, Col } from 'reactstrap';
import "./Item.css";

const Item = props => (
  <div className="portfolioDisplay" md="4">
    <h3>{props.name}{(props) => console.log(props)}</h3>
    <ul>
        <li>{props.technologies}</li>
        <li>{props.url}</li>
    </ul>
  </div>
);

export default Item;