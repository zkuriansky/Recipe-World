import { useParams } from "react-router";
import RecipeDetailsArticle from "../components/RecipeDetailsArticle";
import RecipeDetailsCard from "../components/RecipeDetailsCard";
import RecipeHeader from "../components/RecipeHeader";
import "../Recipe.scss";
import type { RecipesType } from "../types";
import { useEffect, useState } from "react";
import { getRecipe } from "../api";

const RecipePage = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<RecipesType>();
  useEffect(() => {
    if (!id) return;
    const fetchRecipe = async (id: string) => {
      try {
        const data = await getRecipe(id);
        setRecipe(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipe(id);
  }, [id]);
  if (!recipe) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="recipe-container">
      <RecipeHeader
        title={recipe?.title}
        description={recipe?.description}
        time={recipe?.time}
        difficulty={recipe?.difficulty}
        url={recipe?.image}
      />
      <section className="recipe-details">
        <div className="recipe-details__content">
          <RecipeDetailsArticle recipe={recipe.steps} />
          <aside className="recipe-details__sidebar">
            <RecipeDetailsCard
              title={"Ingredients"}
              obj={recipe?.ingredients}
            />
            <RecipeDetailsCard
              title={"Nutrition"}
              obj={recipe?.nutrition}
            />
          </aside>
        </div>
      </section>
    </div>
  );
};

export default RecipePage;
