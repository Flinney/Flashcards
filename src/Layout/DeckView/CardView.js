import React from "react";
import { Link } from "react-router-dom";
import { deleteCard } from "../../utils/api";

function CardView({ setCardList, deckId, cardId, front, back }) {
  function deleteCardHandler() {
    if (!window.confirm("Are you sure you want to delete?")) {
      return;
    }
    console.log("deleted");
    deleteCard(cardId).then((ig) =>
      setCardList((prevState) => prevState.filter((item) => item.id !== cardId))
    );
  }
  return (
    <div className="col-7">
      <div className="card">
        <div className="card-body">
          <div className="float-left w-50">
            <p className="card-text text-align-left wrap">{front}</p>
          </div>
          <div className="float-right w-50 pr-1">
            <p className="card-text text-align-right wrap">{back}</p>
          </div>
        </div>
        <div>
          <button
            onClick={deleteCardHandler}
            className="btn btn-danger float-right"
          >
            <span className="oi oi-trash"></span>
          </button>
          <Link
            role="button"
            to={`/decks/${deckId}/cards/${cardId}/edit`}
            className="btn btn-secondary float-right"
          >
            <span className="oi oi-pencil mr-1"></span>Edit
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardView;
