import React from "react";
import { Store } from "./Store";
import { Link } from "@reach/router";

export default function App(props: any): JSX.Element {
  const { state } = React.useContext(Store);

  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Rick and Marty</h1>
          <p>Pick your favourite episode</p>
        </div>
        <Link to="/">Home</Link>
        <Link to="/favs">Favourite(s): {state.favourites.length}</Link>
      </header>
      {props.children}
    </React.Fragment>
  );
}
