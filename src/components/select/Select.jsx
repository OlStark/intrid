import React from "react";
import "./select.scss";
import Arrow from "../image/down.svg";
import { useState } from "react";

function Select({ data, title }) {
  const [active, setActive] = useState(false);
  function toggleClass() {
    setActive(!active);
  }
  return (
    <section className="filter__select">
      <header className="filter__select_title" onClick={toggleClass}>
        <img src={Arrow} className={active ? "arrow__open" : "arrow"} />
        <p>{title}</p>
      </header>
      <div
        className={active ? "filter__select_body-open" : "filter__select_body"}>
        <input
          type="text"
          placeholder="Я ищу..."
          className="filter__select_input"
        />
        <ul className="filter__select_list">
          {data.map((el) => (
            <li key={el.id}>
              <label htmlFor="checkbox">
                {" "}
                <input type="checkbox" id="checkbox" className="checkbox" />
                <span className="custom-checkbox" />
                {el.name}
              </label>
              <p>{el.amount}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Select;
