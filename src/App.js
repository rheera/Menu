import "./App.css";
import React from "react";
import data from "./data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className={"title is-1 has-text-centered mt-6 pt-6"}>Our Menu</h1>
      </header>
      <div
        style={{
          background: "hsl(53,81%,45%)",
          height: "0.25rem",
          width: "5rem",
          margin: "1rem auto 0.25rem",
        }}
      ></div>
      <section className="categories-section section">
        <button className="button">All</button>
        <button className="button">Breakfast</button>
        <button className="button">Lunch</button>
        <button className="button">Shakes</button>
      </section>
    </div>
  );
}

export default App;
