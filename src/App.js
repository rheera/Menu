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
          background: "var(--main-gold)",
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
          <div className="columns is-multiline is-centered">
            {items.map((item) => {
              return (
                <div
                  key={item.id}
                  className={"column is-6-desktop is-9-tablet"}
                >
                  <div className={"columns is-multiline"}>
                    <div className="food-pics column is-4 is-12-mobile has-text-centered">
                      <img
                        className={"food-img"}
                        src={item.img}
                        alt="menu item"
                      />
                    </div>
                    <div
                      className="food-info column is-9-mobile"
                      style={{ margin: "0 auto 0" }}
                    >
                      <div className="food-price columns is-mobile has-text-centered-mobile mb-0">
                        <h3
                          className={
                            "is-uppercase has-text-weight-bold column is-10-tablet is-10-mobile has-text-left"
                          }
                          style={{
                            letterSpacing: "2px",
                            textDecoration: "underline",
                          }}
                        >
                          {item.title}
                        </h3>
                        <h3
                          className={
                            "price has-text-weight-bold column is-2-mobile has-text-right"
                          }
                        >
                          ${item.price}
                        </h3>
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
