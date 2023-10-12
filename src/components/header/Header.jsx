import map from "../image/map.svg";
import logo from "../image/logo 1.svg";
import search from "../image/search.svg";
import phone from "../image/phone.svg";
import user from "../image/user.svg";
import cart from "../image/cart.svg";
import { CatalogButton } from "../buttons/CatalogButton";
import "./header.scss";

function Header() {
  return (
    <>
      <header>
        <div className="navigation">
          <div className="navigation__wrapper">
            <a
              href="https://yandex.ru/maps/-/CDaUvBZp"
              target="_blank"
              className="navigation__adress">
              <img src={map} alt="map" className="navigation__adress_image" />
              Подольск, Садовая 20
            </a>
            <nav className="navigation__section">
              <a href="#">Акции</a>
              <a href="#">Каталог производителей</a>
              <a href="#">Оптовым покупателям</a>
              <a href="#">Ремонт и обслуживание</a>
              <a href="#">Гарантии</a>
              <a href="#">О нас</a>
              <a href="#">Нововсти</a>
              <a href="#">Контакты</a>
            </nav>
          </div>
        </div>
        <div className="search">
          <div className="search__wrapper">
            <img src={logo} alt="logo" className="search__logo" />
            <div className="search__button">
              <CatalogButton />
            </div>
            <div className="search__input">
              <img src={search} alt="search" />
              <input
                className="search__input_placeholder"
                type="text"
                placeholder="Поиск по сайту"
              />
            </div>
            <div className="search__icons">
              <a href="#">
                <img src={phone} alt="phone" />
              </a>
              <a href="#">
                <img src={user} alt="user" />
              </a>
              <a href="#">
                <img src={cart} alt="cart" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
