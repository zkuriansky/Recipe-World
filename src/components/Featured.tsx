import type { RecipesType } from "../types";
import Card from "./Card";

interface FeaturedProp {
  recipes: RecipesType[];
}

const Featured = (props: FeaturedProp) => {
  const { recipes } = props;

  return (
    <section className="featured">
      <h2 className="featured__header">featured recipes</h2>
      <div className="featured__cards">
        {recipes.map((recipe) => {
          return (
            <Card
              id={recipe.id}
              type="featured"
              key={recipe.id}
              title={recipe.title}
              description={recipe.description}
              time={recipe.time}
              diff={recipe.difficulty}
              category={recipe.category}
              image={recipe.image}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Featured;
