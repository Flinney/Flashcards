import React from "react";
import { Link } from "react-router-dom";

function Deck({ deck, deleteDeck, setCurrentDecks }) {
  function deleteDeckHandler() {
    if (!window.confirm("Are you sure you want to delete?")) {
      return;
    }
    console.log("deleted");
    deleteDeck(deck.id);
    setCurrentDecks((prevState) =>
      prevState.filter((prevDeck) => prevDeck.id !== deck.id)
    );
  }
  const content = (
    <div className="col-12 m-2">
      <div className="card w-50">
        <div className="card-body">
          <h5 className="card-title">
            {deck.name}{" "}
            <span className="card-title float-right">
              {deck.cards.length} cards
            </span>
          </h5>

          <p className="card-text">{deck.description}</p>
          <Link
            to={`/decks/${deck.id}`}
            role="button"
            className="btn btn-seconday"
          >
            <span className="oi oi-eye mr-1"></span>View
          </Link>
          <Link
            to={`/decks/${deck.id}/study`}
            role="button"
            className="btn btn-primary"
          >
            <span className="oi oi-book mr-1"></span>Study
          </Link>
          <button
            onClick={deleteDeckHandler}
            className="btn btn-danger float-right"
          >
            <span className="oi oi-trash"></span>
          </button>
        </div>
      </div>
    </div>
  );
  return content;
}

export default Deck;
