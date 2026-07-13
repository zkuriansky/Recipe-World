import type { Nutrition } from "../types";

interface RecipeDetailsCardProp {
  title: string;
  obj: Nutrition | string[];
}

const RecipeDetailsCard = (props: RecipeDetailsCardProp) => {
  const { title, obj } = props;
  if (Array.isArray(obj)) {
    return (
      <div className="recipe-details__card">
        <span className="recipe-details__card-title">{title}</span>
        <ul className="recipe-details__card-list">
          {obj.map((item) => {
            return <li className="recipe-details__card-item">{item}</li>;
          })}
        </ul>
      </div>
    );
  }
  return (
    <div className="recipe-details__card">
      <span className="recipe-details__card-title">{title}</span>
      <ul className="recipe-details__card-list">
        {Object.entries(obj).map(([key, value]) => (
          <li key={key} className="recipe-details__card-item">
            {key}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetailsCard;
