import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeckList from "./DeckList";

function Home() {
  const [currentDecks, setCurrentDecks] = useState([]);
  return (
    <>
      <div className="row">
        <div className="col-12">
          <Link to="/test" role="button" className="btn btn-secondary">
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
