import React from "react";
import { useState, useEffect } from "react";
import { listCards, listDecks, deleteDeck } from "../utils/api";
import Deck from "./Deck";

function DeckList() {
  const [currentDecks, setCurrentDecks] = useState([]);
  useEffect(() => {
    setCurrentDecks([]);
    const abortController = new AbortController();

    async function loadDecks() {
      const response = await listDecks(abortController.signal);
      setCurrentDecks(response);
    }

    loadDecks();

    return () => abortController.abort();
  }, []);
  console.log(currentDecks);
  const deckCards = currentDecks.map((deck) => (
    <Deck deck={deck} key={deck.id} />
  ));

  return <>{deckCards}</>;
}

export default DeckList;
