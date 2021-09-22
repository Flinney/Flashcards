import React, { useEffect, useState } from "react";
import { deleteCard, listCards, readDeck, deleteDeck } from "../../utils/api";
import { Link, useParams, useHistory } from "react-router-dom";
import CardView from "./CardView";

function DeckView({ setCurrentDecks }) {
  const [viewingDeck, setStudyDeck] = useState({});
  const [cardList, setCardList] = useState([]);
  const { deckId } = useParams();
  const history = useHistory();
  useEffect(() => {
    const abortController = new AbortController();

    async function loadDeck() {
      const response = await readDeck(deckId, abortController.signal);
      setStudyDeck((prevDeck) => response);
    }
    loadDeck();

    return () => abortController.abort();
  }, [deckId]);

  useEffect(() => {
    const abortController = new AbortController();

    async function loadCards() {
      const response = await listCards(deckId, abortController.signal);
      setCardList((prevState) => response);
    }
    loadCards();

    return () => abortController.abort();
  }, [deckId]);

  function deleteDeckHandler() {
    if (!window.confirm("Are you sure you want to delete?")) {
      return;
    }
    console.log("deleted");
    deleteDeck(viewingDeck.id).then(
      (ig) =>
        setCurrentDecks((prevState) =>
          prevState.filter((prevDeck) => prevDeck.id !== viewingDeck.id)
        ),
      history.push("/")
    );
  }

  function deleteCardHandler(cardId) {
    if (!window.confirm("Are you sure you want to delete?")) {
      return;
    }
    console.log("deleted");
    deleteCard(cardId).then((ig) =>
      setCardList((prevState) => prevState.filter((item) => item.id !== cardId))
    );
  }
  const viewingDeckCards = cardList.map((card) => (
    <CardView
      deleteCardHandler={deleteCardHandler}
      cardId={card.id}
      front={card.front}
      back={card.back}
    />
  ));

  return (
    <>
      <div className="row">
        <div className="col">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">
                  <span className="oi oi-home mr-1"></span>Home
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {viewingDeck?.name}
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className="col-12 m-2">
          <div className="card w-50">
            <div className="card-body">
              <h5 className="card-title">
                {viewingDeck.name}{" "}
                <span className="card-title float-right">
                  {viewingDeck?.cards?.length} cards
                </span>
              </h5>

              <p className="card-text">{viewingDeck.description}</p>
              <Link
                to={`/decks/${viewingDeck.id}/edit`}
                role="button"
                className="btn btn-seconday"
              >
                <span className="oi oi-pencil mr-1"></span>Edit
              </Link>
              <Link
                to={`/decks/${viewingDeck.id}/study`}
                role="button"
                className="btn btn-primary"
              >
                <span className="oi oi-book mr-2"></span>Study
              </Link>
              <Link to={`/`} role="button" className="btn btn-primary">
                <span className="oi oi-plus mr-1"></span>Add Cards
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
      </div>
      <div className="row">
        <h3 className="col-12">Cards</h3>
        <div>{viewingDeckCards}</div>
      </div>
    </>
  );
}

export default DeckView;
