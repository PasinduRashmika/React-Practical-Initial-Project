import React from "react";
//import CardImg from './img1.jpg';

const Card = (props) => {
  return (
    <div className="cards">
      <div className="card-content">
        <h2 className="name">{props.name}</h2>
        <img src={props.url} alt="website logo" />
        <h2 >{props.tel}</h2> 
        <h2>{props.email}</h2>
      </div>
    </div>
  );
};

export default Card;
