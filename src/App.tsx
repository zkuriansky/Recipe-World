import { useEffect, useMemo, useState } from "react";
import "./App.scss";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Recipe from "./components/Recipe";
import { getRandomRecipes, getRecipes } from "./api";
import { type RecipesType } from "./types";

function App() {
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
      <Header />
      <Hero />
      <Featured recipes={featuredRecipes} />
      <Recipe
        recipes={recipes}
        filters={filters}
      />
      <Footer />
    </div>
  );
}

export default App;
