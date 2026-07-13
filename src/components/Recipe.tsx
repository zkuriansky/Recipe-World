import { useEffect, useState } from "react";
import type { RecipesType } from "../types";
import Button from "./Button";
import Card from "./Card";
import Pagination from "./Pagination";

interface RecipeProp {
  recipes: RecipesType[];
  filters: string[];
}

const Recipe = (props: RecipeProp) => {
  const { recipes, filters } = props;
  //filter logic
  const [filter, setFilter] = useState<string>("All");
  const [page, setPage] = useState<number>(1);
  const filteredRecipes =
    filter === "All"
      ? recipes
      : recipes.filter((recipe) => recipe.category === filter);
  //pagi logic
  const pageSize = 6;
  const totalPages = Math.ceil(filteredRecipes.length / pageSize);
  const startElement = (page - 1) * pageSize;
  const endElement = startElement + pageSize;
  const paginated = [...filteredRecipes].slice(startElement, endElement);
  useEffect(() => setPage(1), [filter]);
  return (
    <section className="recipe">
      <div className="recipe__header">
        <div className="recipe__header-title">
          <h2>Embark on a journey</h2>
          <span>
            With our diverse collection of recipes we have something to satisfy
            every palate.
          </span>
        </div>
        <div className="recipe__header-filters">
          <Button
            className={
              filter === "All"
                ? "recipe__header-filter choosen"
                : "recipe__header-filter"
            }
            title="All"
            type="filter"
            onClick={setFilter}
          />
          {filters.map((item) => {
            return (
              <Button
                key={item}
                className={
                  filter === item
                    ? "recipe__header-filter choosen"
                    : "recipe__header-filter"
                }
                title={item}
                type="filter"
                onClick={setFilter}
              />
            );
          })}
        </div>
      </div>
      <div className="recipe__cards">
        {paginated.map((recipe) => {
          return (
            <Card
              key={recipe.id}
              id={recipe.id}
              type="recipe"
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
      <div className="recipe__pagi">
        <Pagination setPage={setPage} page={page} totalPages={totalPages} />
      </div>
    </section>
  );
};

export default Recipe;
