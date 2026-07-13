import Button from "./Button";

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="header__logo">
        <img
          src="/src/assets/logo.svg"
          alt="recipe-world"
          width="40px"
          height="35px"
          loading="lazy"
        />
        <span className="header__logo-text">
          <span>Recipe</span>
          <span>world</span>
        </span>
      </a>
      <nav className="header__menu">
        <ul className="header__menu-list">
          <li className="header__menu-item">
            <a href="/" className="header__menu-link">
              HOME
            </a>
          </li>
          <li className="header__menu-item">
            <a href="/" className="header__menu-link">
              RECIPES
            </a>
          </li>
          <li className="header__menu-item">
            <a href="/" className="header__menu-link">
              COOKING TIPS
            </a>
          </li>
          <li className="header__menu-item">
            <a href="/" className="header__menu-link">
              ABOUT US
            </a>
          </li>
        </ul>
      </nav>
      {/* <button className="header__button">SUBSCRIBE</button> */}
      <Button
        className="header__button"
        title="SUBSCRIBE"
        type="header"
        onClick={() => console.log("Subscribe")}
      />
    </header>
  );
};

export default Header;
