import "./App.css";
import React, { useState } from "react";
import data from "./data";

function App() {
  const [items, setItems] = useState(data);
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
      <section className="categories section">
        <div className="columns is-centered">
          <div className="column is-half">
            <div className="buttons is-centered">
              <button className="button" onClick={() => setItems(data)}>
                All
              </button>
              <button
                className="button"
                onClick={() =>
                  setItems(data.filter((item) => item.category == "breakfast"))
                }
              >
                Breakfast
              </button>
              <button
                className="button"
                onClick={() =>
                  setItems(data.filter((item) => item.category == "lunch"))
                }
              >
                Lunch
              </button>
              <button
                className="button"
                onClick={() =>
                  setItems(data.filter((item) => item.category == "shakes"))
                }
              >
                Shakes
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="section menu">
        <div className="container">
          <div className="columns is-multiline">
            {items.map((item) => {
              return (
                <div key={item.id} className="column is-6-desktop">
                  <div className={"columns"}>
                    <div className="food-pics column is-4">
                      <img
                        className={"food-img"}
                        src={item.img}
                        alt="menu item"
                      />
                    </div>
                    <div className="food-info column">
                      <div className="food-price columns">
                        <h3
                          className={
                            "is-uppercase has-text-weight-bold column is-10"
                          }
                          style={{ letterSpacing: "2px" }}
                        >
                          {item.title}
                        </h3>
                        <h3 className={"column"}>{item.price}</h3>
                      </div>

                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
