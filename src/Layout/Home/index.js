import React from "react";
import { Link } from "react-router-dom";
import DeckList from "./DeckList";

function Home({ currentDecks, setCurrentDecks }) {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <Link to="/decks/new" role="button" className="btn btn-secondary">
            <span className="oi oi-plus mr-1"></span> Create Deck
          </Link>
        </div>
        <div className="row">
          <DeckList
            currentDecks={currentDecks}
            setCurrentDecks={setCurrentDecks}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
