import React from "react";
import { Link, useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import { useEffect, useState } from "react";
import StudySession from "./StudySession";
import AddMoreCards from "./AddMoreCards";

function Study() {
  const [studyDeck, setStudyDeck] = useState(null);
  const { deckId } = useParams();
  useEffect(() => {
    const abortController = new AbortController();

    async function loadDeck() {
      const response = await readDeck(deckId, abortController.signal);
      setStudyDeck(response);
      console.log(studyDeck);
    }
    loadDeck();

    return () => abortController.abort();
  }, []);

  return (
    <>
      <div className="row">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">
                <span className="oi oi-home mr-1"></span>Home
              </Link>
            </li>
            <li className="breadcrumb-item">Bollocks</li>
            <li className="breadcrumb-item active" aria-current="page">
              Study
            </li>
          </ol>
        </nav>
      </div>
      <AddMoreCards studyDeck={studyDeck} />
      <StudySession studyDeck={studyDeck} />
      <p>STUDY TIME</p>
    </>
  );
}

export default Study;
