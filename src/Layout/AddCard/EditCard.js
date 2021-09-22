import React from "react";
import { Link } from "react-router-dom";
import CardForm from "./CardForm";

function EditCard() {
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
          <CardForm
            formName={"formData.name"}
            formNameChange={"handleFormChange"}
            formText={"formData.description"}
            formTextChange={"handleFormChange"}
            handleCancel={"handleCancel"}
            nameDesc={"deckToEdit.name"}
            textDesc={"deckToEdit.description"}
            handleSubmit={"handleSubmit"}
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

export default EditCard;
