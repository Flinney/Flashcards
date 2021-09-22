import React from "react";
import { Link, useParams } from "react-router-dom";
import { readDeck, listCards } from "../../utils/api";
import { useEffect, useState } from "react";
import StudySession from "./StudySession";
import AddMoreCards from "./AddMoreCards";

function Study() {
  const [studyDeck, setStudyDeck] = useState({});
  const [front, setFront] = useState(true);
  const [cardPlace, setCardPlace] = useState(1);

  const { deckId } = useParams();
  useEffect(() => {
    const abortController = new AbortController();

    async function loadDeck() {
      const response = await readDeck(deckId, abortController.signal);
      setStudyDeck((prevDeck) => response);
    }
    loadDeck();

    return () => abortController.abort();
  }, [deckId]);

  const cardsFromDeck = studyDeck.cards;

  if (!studyDeck.id) {
    return "Loading...";
  }

  return (
    <>
      <div className="row">
        <div className="col col-md-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">
                  <span className="oi oi-home mr-1"></span>Home
                </Link>
              </li>
              <li className="breadcrumb-item">{studyDeck.name}</li>
              <li className="breadcrumb-item active" aria-current="page">
                Study
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <AddMoreCards studyDeck={studyDeck} deckId={deckId} />
      <StudySession
        studyDeck={studyDeck}
        studyCards={cardsFromDeck}
        front={front}
        setFront={setFront}
        cardPlace={cardPlace}
        setCardPlace={setCardPlace}
      />
    </>
  );
}

export default Study;
