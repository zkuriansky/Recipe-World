import { useState, useEffect, useMemo } from "react";
import type { RecipesType } from "../types";
import { getRandomRecipes, getRecipes } from "../api";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Recipe from "../components/Recipe";

const MainPage = () => {
  const [recipes, setRecipes] = useState<RecipesType[]>([]);
  const [featuredRecipes, setFeaturedRecipes] = useState<RecipesType[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getRecipes();
        setRecipes(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipes();
  }, []);

  useEffect(() => {
    const fetchFeaturedRecipes = async () => {
      try {
        const data = await getRandomRecipes();
        setFeaturedRecipes(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFeaturedRecipes();
  }, []);

  const filters = useMemo(() => {
    return [...new Set(recipes.map((recipe) => recipe.category))];
  }, [recipes]);

  return (
    <div className="container">
      <Hero />
      <Featured recipes={featuredRecipes} />
      <Recipe recipes={recipes} filters={filters} />
    </div>
  );
};

export default MainPage;
