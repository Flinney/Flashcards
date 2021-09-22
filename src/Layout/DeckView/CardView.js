import React from "react";
import { Link } from "react-router-dom";

function CardView({ deleteCardHandler, cardId, front, back }) {
  return (
    <div className="col-7">
      <div className="card">
        <div className="card-body">
          <div className="float-left">
            <p className="card-text text-align-left wrap">{front}</p>
          </div>
          <div className="float-right">
            <p className="card-text text-align-right wrap">{back}</p>
          </div>
        </div>
        <div>
          <Link role="button" to="#" className="btn btn-danger float-right">
            <span className="oi oi-trash"></span>
          </Link>
          <Link role="button" to="#" className="btn btn-secondary float-right">
            <span className="oi oi-pencil mr-1"></span>Edit
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardView;
