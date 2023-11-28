import React from "react";
import "./Card.css";

function Card({ title, imageurl, body }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageurl} alt="image" />
      </div>
      <div className="card-title">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <p>{body}</p>
      </div>
      <div className="btn">
        <button>
          <a>view more</a>
        </button>
      </div>
    </div>
  );
}

export default Card;
