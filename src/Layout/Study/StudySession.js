import React from "react";

function StudySession({ studyDeck }) {
  if (!studyDeck) {
    return null;
  }
  if (studyDeck.cards.length < 2) {
    return null;
  }
  return <p>You got enough cards</p>;
}

export default StudySession;
