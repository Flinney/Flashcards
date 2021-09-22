import React, { useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Study from "./Study";
import DeckView from "./DeckView";
import CreateDeck from "./CreateDeck";
import EditDeck from "./EditDeck";

function Layout() {
  const [currentDecks, setCurrentDecks] = useState([]);
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <Home
              currentDecks={currentDecks}
              setCurrentDecks={setCurrentDecks}
            />
          </Route>
          <Route exact path="/decks/new">
            <CreateDeck setCurrentDecks={setCurrentDecks} />
          </Route>
          <Route exact path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route exact path="/decks/:deckId/edit">
            <EditDeck setcurrentDecks={setCurrentDecks} />
          </Route>
          <Route exact path="/decks/:deckId">
            <DeckView setCurrentDecks={setCurrentDecks} />
          </Route>
          <NotFound />
        </Switch>
      </div>
    </>
  );
}

export default Layout;
