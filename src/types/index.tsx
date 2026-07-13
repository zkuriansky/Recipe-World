export type RecipesType = {
  id: number;
  title: string;
  category: string;
  description: string;
  ingredients: string[];
  steps: string[];
  image: string;
  time: string;
  difficulty: string;
  calories: number;
  weight: string;
  nutrition: Nutrition;
  rating: number;
  reviews: number;
};

export type Nutrition = {
  protein: string;
  carbohydrates: string;
  fat: string;
};
