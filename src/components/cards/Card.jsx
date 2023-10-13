import React from "react";
import "./card.scss";
import { useState } from "react";

function Card({
  id,
  name,
  price,
  intDia,
  outDia,
  pic,
  width,
  latest,
  best,
  discount,
}) {
  const [quantity, setQuantity] = useState(1);

  const addItem = () => {
    quantity >= 100 ? setQuantity(quantity) : setQuantity(quantity + 1);
  };

  const reduceItem = () => {
    quantity <= 1 ? setQuantity(quantity) : setQuantity(quantity - 1);
  };
  return (
    <section className="card">
      <div key={id} className="card__wrapper">
        <div className="card__promotion">
          {latest ? <p className="card__mark latest">Новинка</p> : null}
          {discount ? <p className="card__mark discount">Акция</p> : null}
          {best ? <p className="card__mark best">Хит</p> : null}
        </div>
        <img src={pic} className="card__image" alt="card" />
        <div className="card__body">
          <p className="card__title">{name}</p>
          <p className="card__description">
            Внутренний диаметр, мм <span>{intDia}</span>
          </p>
          <p className="card__description">
            Внешний диаметр, мм <span>{outDia}</span>
          </p>
          <p className="card__description">
            Ширина, мм <span>{width}</span>
          </p>
          <p className="card__price">{price}</p>

          <div className="card__nav">
            <div className="card__buttons">
              <button
                type="button"
                className="card__button minus"
                onClick={() => addItem()}>
                +
              </button>
              <span className="card__quantity">{quantity}</span>
              <button
                type="button"
                className="card__button plus"
                onClick={() => reduceItem()}>
                -
              </button>
            </div>
            <button className="catalog-button card__cart-button" type="submit">
              В корзину
            </button>
          </div>
        </div>
      </div>
      <button className="card__buy-button" type="submit">
        Купить в 1 клик
      </button>
    </section>
  );
}

export default Card;
