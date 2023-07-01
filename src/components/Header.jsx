import React, { useContext } from "react";
import "./Header.css";
import { DataContext } from "../context/DataContext";

const Header = () => {
  const { filter, setFilter, search, setSearch } = useContext(DataContext);

  return (
    <div className="header-container">
      <div>
        <input
          type="text"
          value={search}
          name=""
          id=""
          placeholder="search the item"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="filter-container">
        <h4>Filters:</h4>
        <label>
          <input
            type="radio"
            name="filter"
            value="name"
            checked={filter === "name"}
            onClick={() => setFilter("name")}
          />
          Name
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="ind"
            checked={filter === "ind"}
            onClick={() => setFilter("ind")}
          />
          Ingredients
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="cus"
            checked={filter === "cus"}
            onClick={() => setFilter("cus")}
          />
          Cuisine
        </label>
      </div>
    </div>
  );
};

export default Header;
