import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { readDeck, readCard, updateCard } from "../../utils/api";
import CardForm from "./CardForm";

function EditCard() {
  const { deckId, cardId } = useParams();
  const history = useHistory();
  const initialFormData = {
    id: cardId,
    front: "",
    back: "",
    deckId: deckId,
  };
  const [deckToEdit, setDeckToEdit] = useState({});
  const [cardToEdit, setCardToEdit] = useState({});
  const [formData, setFormData] = useState({ ...initialFormData });

  function handleFormChange(event) {
    console.log(formData);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(formData);
  }

  function handleDone() {
    history.push(`/decks/${deckId}`);
  }

  function handleSave(event) {
    event.preventDefault();
    updateCard(formData);
    history.push(`/decks/${deckId}`);
  }

  useEffect(() => {
    const abortController = new AbortController();

    async function loadDeck() {
      const response = await readDeck(deckId, abortController.signal);
      setDeckToEdit((prevDeck) => response);
    }
    loadDeck();

    return () => abortController.abort();
  }, [deckId]);

  useEffect(() => {
    const ac = new AbortController();

    async function loadCard() {
      const response = await readCard(cardId, ac.signal);
      setCardToEdit((prevCard) => response);
    }
    loadCard();
  }, [cardId]);

  return (
    <>
      <div className="row">
        <div className="col col-md-5">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">
                  <span className="oi oi-home mr-1"></span>Home
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {`Deck ${deckToEdit.name}`}
              </li>
              <li className="breadcrumb-item " aria-current="page">
                {`Edit Card ${cardToEdit.id}`}
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="row">
        <h1 className="col-12">Edit Card</h1>
        <div className="col-6">
          <CardForm
            formName={formData.front}
            formNameChange={handleFormChange}
            formText={formData.back}
            formTextChange={handleFormChange}
            handleCancel={handleDone}
            nameDesc={cardToEdit?.front}
            textDesc={cardToEdit?.back}
            handleSubmit={handleSave}
            inputName={`Front`}
            textAreaName={"Back"}
            buttonName={`Done`}
            submitButtonName={`Save`}
          />
        </div>
      </div>
    </>
  );
}

export default EditCard;
