import { createContext, useEffect, useState } from "react";
import recipes from "../data/data";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  localStorage.setItem("recipe", JSON.stringify(recipes));
  let localStorageData = localStorage.getItem("recipe");
  const [recipeData, setRecipeData] = useState([]);
  const [filter, setFilter] = useState("name");
  const [search, setSearch] = useState("")
  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {
    setRecipeData(JSON.parse(localStorageData));
  }, [localStorageData]);

  const deleteHandler = (rId) => {
    const findFood = recipeData.filter(({ id }) => id !== rId);
    setRecipeData(findFood);
    localStorage.setItem("updated", JSON.stringify(findFood));
    localStorageData = localStorage.getItem("recipe");
  };
  return (
    <DataContext.Provider
      value={{ recipeData, setRecipeData, deleteHandler, filter, setFilter,search, setSearch }}
    >
      {children}
    </DataContext.Provider>
  );
};
