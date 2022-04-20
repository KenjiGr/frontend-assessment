import React from "react";
import './card-styles.css';

function Card(props){
    return (
        <div className="main-cont">
            <div className="img-cont">
                <img src={props.data.pic} alt={`${props.data.firstName} ${props.data.lastName} Profile Pic`}/>
            </div>
            <div className="second-cont">
                <h1>{props.data.firstName} {props.data.lastName}</h1>
                <div className="info-cont">
                    <h3>Email: {props.data.email}</h3>
                    <h3>Company: {props.data.company}</h3>
                    <h3>Skill: {props.data.skill}</h3>
                    <h3>Average: {props.data.average}</h3>
                </div>
            </div>
        </div>
    )
}

export default Card