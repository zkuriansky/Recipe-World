interface RecipeDetailsArticleProp {
  recipe: string[];
}

const RecipeDetailsArticle = (props: RecipeDetailsArticleProp) => {
  const { recipe } = props;
  return (
    <article className="recipe-details__article">
      <h2 className="recipe-details__article-title">Instructions</h2>
      <ul className="recipe-details__article-list">
        {recipe.map((item) => {
          return <li className="recipe-details__article-item">{item}</li>;
        })}
      </ul>
    </article>
  );
};

export default RecipeDetailsArticle;
