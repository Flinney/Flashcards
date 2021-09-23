import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api";
import Form from "../DeckForm";

function CreateDeck({ setCurrentDecks }) {
  const history = useHistory();
  const [deckName, setDeckName] = useState("");
  const [deckText, setDeckText] = useState("");
  function deckNameChange(event) {
    setDeckName(event.target.value);
  }
  function deckTextChange(event) {
    setDeckText(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(deckName, deckText);
    createDeck({ name: deckName, description: deckText }).then(
      (deck) => setCurrentDecks((prevState) => [...prevState, deck]),
      setDeckName(""),
      setDeckText("")
    );

    return null;
  }
  function handleCancel() {
    history.push("/");
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
              <li className="breadcrumb-item active" aria-current="page">
                Create Deck
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="row">
        <h1 className="col-12">Create Deck</h1>
        <div className="col-6">
          <Form
            formName={deckName}
            formNameChange={deckNameChange}
            formText={deckText}
            formTextChange={deckTextChange}
            handleCancel={handleCancel}
            nameDesc={`Deck Name`}
            textDesc={`Brief description of the deck`}
            handleSubmit={handleSubmit}
            inputName={`Name`}
            textAreaName={"Description"}
            buttonName={`Cancel`}
            submitButtonName={`Submit`}
          />
        </div>
      </div>
    </>
  );
}

export default CreateDeck;
