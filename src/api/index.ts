import { api } from "./client";
import { type RecipesType } from "../types";

export const getRecipes = async (): Promise<RecipesType[]> => {
  const response = await api.get<RecipesType[]>("/recipes");
  return response.data;
};

export const getRecipe = async (id: string): Promise<RecipesType> => {
  const response = await api.get<RecipesType>("/recipes" + id);
  return response.data;
};

export const getRandomRecipes = async (
  count: number = 2,
): Promise<RecipesType[]> => {
  const response = await api.get<RecipesType[]>("/recipes");
  const allRecipes = response.data;

  if (allRecipes.length <= count) return allRecipes;

  return [...allRecipes].sort(() => Math.random() - 0.5).slice(0, count);
};
