import React from "react";
import "./Card.css";

const Card = props => (

    <div className="card portfolioDisplay" id={props.pro}>
        
            {/* <img className="card-img-top" src={props.image} alt="App-Pic"/> */}
            <img className="card-img-top" src={process.env.PUBLIC_URL + props.image} alt="App-Pic"/>
        <div className="card-body">
            <h5 className="card-title"><b>Company: </b>{props.company}</h5>
            <h5 className="card-title"><b>Title: </b>{props.title}</h5>
            <p className="card-text"><small><b>Description:</b> {props.description}</small></p>
            <p className="card-text"><small><b>Technologies Used:</b> {props.technologies}</small></p>
            <p><small><u><a className="card-text" href={props.companyWebsite} target="_blank" rel='noreferrer noopener'>Visit Company Website Here</a></u></small></p>

        </div>
        <img className="backgroundImg" src="https://austingwalker.github.io/Portfolio/assets/images/portfolio_water_color.jpg" alt="background"/>
    </div>

   
);

export default Card;

 