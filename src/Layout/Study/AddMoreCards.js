import React from "react";

function AddMoreCards({ studyDeck }) {
  console.log(studyDeck);
  if (!studyDeck) {
    return null;
  }
  if (studyDeck.cards.length > 2) {
    return null;
  }
  return null;
}

export default AddMoreCards;
