import React from "react";
import "./Content.css";

const Content = props => (

    <div className="card portfolioDisplay" id={props.pro}>
        <img className="card-img-top" src={process.env.PUBLIC_URL + props.image} alt="App-Pic"/>
        <div className="card-body">
            {props.company ? <h5 className="card-title"><b>Company: </b>{props.company}</h5> : null}
            {props.title ? <h5 className="card-title"><b>Title: </b>{props.title}</h5> : null}
            <h5 className="card-title"><b>{props.name}</b></h5>
            <p className="card-text"><small><b>Description:</b> {props.description}</small></p>
            <p className="card-text"><small><b>Technologies Used:</b> {props.technologies}</small></p>
            <p><small><u><a className="card-text" href={props.deployedUrl} target="_blank" rel='noreferrer noopener'>Visit Deployed App Here</a></u></small></p>
            <p><small><u><a className="card-text" href={props.githubRepo} target="_blank" rel='noreferrer noopener'>GitHub Repo</a></u></small></p>
        </div>
        <img className="backgroundImg" src="https://austingwalker.github.io/Portfolio/assets/images/portfolio_water_color.jpg" alt="background"/>
    </div>
);

export default Content;

 