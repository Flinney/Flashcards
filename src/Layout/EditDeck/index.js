import React from "react";
import { Link } from "react-router-dom";

function EditDeck({ setCurrentDecks }) {
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
    </>
  );
}

export default EditDeck;
