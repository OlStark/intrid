import burger from "../image/hamburger-menu.svg";
import "./buttons.scss";
export const CatalogButton = () => {
  return (
    <>
      <button type="button" className="catalog-button">
        <img src={burger} alt="burger" />
        Каталог товаров
      </button>
    </>
  );
};
