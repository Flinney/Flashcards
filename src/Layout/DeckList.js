import React from "react";
import { useEffect } from "react";
import { listDecks, deleteDeck } from "../utils/api";
import Deck from "./Deck";

function DeckList({ currentDecks, setCurrentDecks }) {
  useEffect(() => {
    const abortController = new AbortController();

    async function loadDecks() {
      const response = await listDecks(abortController.signal);
      setCurrentDecks(response);
    }

    loadDecks();

    return () => abortController.abort();
  }, [setCurrentDecks]);

  const deckCards = currentDecks.map((deck) => (
    <Deck
      deck={deck}
      key={deck.id}
      deleteDeck={deleteDeck}
      setCurrentDecks={setCurrentDecks}
    />
  ));

  return <>{deckCards}</>;
}

export default DeckList;
