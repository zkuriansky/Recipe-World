interface RecipeHeaderProp {
  title: string;
  description: string;
  time: string;
  difficulty: string;
  url: string;
}

const RecipeHeader = (props: RecipeHeaderProp) => {
  const { title, description, time, difficulty, url } = props;
  return (
    <section className="recipe-header">
      <div className="recipe-header__cont">
        <h1 className="recipe-header__cont-title">{title}</h1>
        <span className="recipe-header__cont-description">{description}</span>
        <ul className="recipe-header__cont-list">
          <li className="recipe-header__cont-list-item">
            <img
              src="/icons/icon-timer.svg"
              alt="header-icon"
              className="recipe-header__cont-list-item-image"
              loading="lazy"
            />
            <span className="recipe-header__cont-list-item-title">{time}</span>
          </li>
          <li className="recipe-header__cont-list-item">
            <img
              src="/icons/icon-diff.svg"
              alt="header-icon"
              className="recipe-header__cont-list-item-image"
              loading="lazy"
            />
            <span className="recipe-header__cont-list-item-title">
              {difficulty}
            </span>
          </li>
        </ul>
      </div>
      <img
        src={url}
        className="recipe-header__cont-image"
        width={"1232px"}
        height={"640px"}
        alt="image-recipe"
        loading="lazy"
      />
    </section>
  );
};

export default RecipeHeader;
