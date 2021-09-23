import React from "react";
import { useHistory } from "react-router-dom";

function StudyCard({ studyCards, front, setFront, cardPlace, setCardPlace }) {
  const history = useHistory();
  
  if (!studyCards || !cardPlace) {
    return null;
  }

  function flip() {
    setFront(!front);
  }

  function next() {
    setFront(true);
    if (cardPlace === studyCards.length) {
      return window.confirm("Reset?") ? history.go(0) : history.push("/");
    }

    return setCardPlace(cardPlace + 1);
  }

  const currentCard = studyCards[cardPlace - 1];
  const text = front ? currentCard?.front : currentCard?.back;

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{`Card ${cardPlace} of ${studyCards.length}`}</h5>
        <p className="card-text">{text}</p>
        <button onClick={flip} className="btn btn-secondary mr-1">
          Flip
        </button>
        <div className="float-right">
          {!front && (
            <button onClick={next} className="btn btn-primary">
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudyCard;
