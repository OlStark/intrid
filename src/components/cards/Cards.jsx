import React from "react";
import Card from "./Card";
import "./card.scss";
import data from "../../data";

function Cards() {
  return (
    <section className="cards">
      {data.map((elem) => (
        <Card
          id={elem.id}
          name={elem.name}
          pic={elem.pic}
          price={elem.price}
          intDia={elem.intDia}
          outDia={elem.outDia}
          width={elem.width}
          latest={elem.new}
          best={elem.best}
          discount={elem.discount}
        />
      ))}
    </section>
  );
}

export default Cards;
