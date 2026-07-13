import { Route, Routes } from "react-router";
import "./App.scss";
import MainLayout from "./layout/MainLayout";
import MainPage from "./pages/MainPage";
import RecipePage from "./pages/RecipePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
