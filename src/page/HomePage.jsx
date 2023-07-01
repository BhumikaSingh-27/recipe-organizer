import React, { useContext } from "react";
import Header from "../components/Header";
import Card from "../components/Card/Card";
import { DataContext } from "../context/DataContext";

const HomePage = () => {
  const { recipeData, search, filter, setIsNew } = useContext(DataContext);

  const searchData = (filter) => {
    if (filter === "name") {
      return recipeData.filter(({ name }) =>
        name.toLowerCase().includes(search.toLowerCase())
      );
    } else if (filter === "ind") {
      return recipeData.filter(({ ingredients }) =>
        ingredients.join("").toLowerCase().includes(search.toLowerCase())
      );
    } else {
      return recipeData.filter(({ type }) =>
        type.toLowerCase().includes(search.toLowerCase())
      );
    }
  };

  const showData = search ? searchData(filter) : [...recipeData];
  //   console.log(showData, "show");
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Header />
      <h1>All Recipies:</h1>
      <div className="display-flex">
        {showData.map((data) => (
          <div key={data.id}>
            <Card data={data} />
          </div>
        ))}
        <div className="BTN">
          <button onClick={() => setIsNew(true)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
