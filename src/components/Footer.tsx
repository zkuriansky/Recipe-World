const Footer = () => {
  return (
    <footer className="footer">
      <a href="/" className="footer__logo">
        <img
          src="/src/assets/logo-white.svg"
          alt="recipe-world"
          width="40px"
          height="35px"
          loading="lazy"
        />
        <span className="footer__logo-text">
          <span>Recipe</span>
          <span>world</span>
        </span>
      </a>
      <nav className="footer__menu">
        <ul className="footer__menu-list">
          <li className="footer__menu-item">
            <a href="/" className="footer__menu-link">
              HOME
            </a>
          </li>
          <li className="footer__menu-item">
            <a href="/" className="footer__menu-link">
              RECIPES
            </a>
          </li>
          <li className="footer__menu-item">
            <a href="/" className="footer__menu-link">
              COOKING TIPS
            </a>
          </li>
          <li className="footer__menu-item">
            <a href="/" className="footer__menu-link">
              ABOUT US
            </a>
          </li>
        </ul>
      </nav>
      <ul className="footer__socials">
        <li className="footer__socials-item">
          <a href="/">
            <img
              src="src/assets/icons/icon-tt.svg"
              alt="icon-tik-tok"
              width={"24px"}
              height={"24px"}
              loading="lazy"
            />
          </a>
        </li>
        <li className="footer__socials-item">
          <a href="/">
            <img
              src="src/assets/icons/icon-fb.svg"
              alt="icon-facebook"
              width={"24px"}
              height={"24px"}
              loading="lazy"
            />
          </a>
        </li>
        <li className="footer__socials-item">
          <a href="/">
            <img
              src="src/assets/icons/icon-insta.svg"
              alt="icon-insta"
              width={"24px"}
              height={"24px"}
              loading="lazy"
            />
          </a>
        </li>
        <li className="footer__socials-item">
          <a href="/">
            <img
              src="src/assets/icons/icon-yt.svg"
              alt="icon-youtube"
              width={"24px"}
              height={"24px"}
              loading="lazy"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
