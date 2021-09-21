import React, { useEffect, useState } from "react";
import { readDeck } from "../../utils/api";
import { Link, useParams } from "react-router-dom";

function DeckView() {
  const [viewingDeck, setStudyDeck] = useState({});
  const { deckId } = useParams();
  useEffect(() => {
    const abortController = new AbortController();

    async function loadDeck() {
      const response = await readDeck(deckId, abortController.signal);
      setStudyDeck(response);
      console.log(viewingDeck);
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
            <li className="breadcrumb-item active" aria-current="page"></li>
          </ol>
        </nav>
      </div>
      <div className="row"></div>
    </>
  );
}

export default DeckView;
