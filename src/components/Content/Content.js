import React from "react";
import "./Content.css";

const Content = props => (

    <div className="card portfolioDisplay">
            <img className="card-img-top" src={props.image} alt="App-Pic"/>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text"><small><b>Description:</b> {props.description}</small></p>
            <p className="card-text"><small><b>Technologies Used:</b> {props.technologies}</small></p>
            <p><small><u><a className="card-text" href={props.deployedUrl} target="_blank" rel='noreferrer noopener'>Visit Depolyed App Here</a></u></small></p>
            <p><small><u><a className="card-text" href={props.githubRepo} target="_blank" rel='noreferrer noopener'>GitHub Repo</a></u></small></p>

        </div>
    </div>

   
);

export default Content;

 