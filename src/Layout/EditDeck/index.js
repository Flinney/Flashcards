import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { readDeck } from "../../utils/api";
import { updateDeck } from "../../utils/api";
import Form from "../Form";

function EditDeck({ setCurrentDecks }) {
  const { deckId } = useParams();
  const history = useHistory();
  const initialFormData = { name: "", description: "" };
  const [deckToEdit, setDeckToEdit] = useState({});
  const [formData, setFormData] = useState({ ...initialFormData });

  /*function deckNameChange(event) {
    setDeckName(event.target.value);
  }
  function deckDescriptionChange(event) {
    setDeckText(event.target.value);
  }*/
  function handleFormChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleCancel() {
    history.push(`/decks/${deckToEdit.id}`);
  }

  function handleSubmit(event) {
    event.preventDefault();
    updateDeck({ ...formData, id: deckToEdit.id })
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
              <li className="breadcrumb-item active" aria-current="page">
                Edit Deck
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="row">
        <h1 className="col-12">Edit Deck</h1>
        <div className="col-6">
          <Form
            formName={formData.name}
            formNameChange={handleFormChange}
            formText={formData.description}
            formTextChange={handleFormChange}
            handleCancel={handleCancel}
            nameDesc={deckToEdit.name}
            textDesc={deckToEdit.description}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </>
  );
}

export default EditDeck;
