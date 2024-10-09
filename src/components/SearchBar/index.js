// components/SearchBar.js
import React, { useState } from "react";
import "./index.css";

const SearchBar = ({ setQuery, setCaloriesFilter, setProteinFilter }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(searchText);
    setSearchText("");
  };

  const handleCaloriesFilter = (amount) => {
    setCaloriesFilter(amount);
  };

  const handleProteinFilter = (amount) => {
    setProteinFilter(amount);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for recipes..."
          value={searchText}
          className="input-box"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="filter-container">
        <h2 className="filter-heading">Calories Filter</h2>
        <ul className="list-items">
          <li className="item">
            <button
              className="filter-item"
              onClick={() => handleCaloriesFilter(1000)}
            >
              Calories greater than 1000
            </button>
          </li>
          <li className="item">
            <button
              className="filter-item"
              onClick={() => handleCaloriesFilter(700)}
            >
              Calories greater than 700
            </button>
          </li>
          <li className="item">
            <button
              className="filter-item"
              onClick={() => handleCaloriesFilter(500)}
            >
              Calories greater than 500
            </button>
          </li>
          <li className="item">
            <button
              className="filter-item"
              onClick={() => handleCaloriesFilter(300)}
            >
              Calories greater than 300
            </button>
          </li>
          <li className="item">
            <button
              className="filter-item"
              onClick={() => handleCaloriesFilter(100)}
            >
              Calories greater than 100
            </button>
          </li>
        </ul>
      </div>
      <div className="filter-container">
        <h2 className="filter-heading">Protein Filter</h2>
        <ul className="list-items">
          <li className="item">
            <button
              className="filter-item"
              onClick={() => handleProteinFilter(50)}
            >
              Protein greater than 50
            </button>
          </li>
          <li className="item">
            <button
              className="filter-item"
              onClick={() => handleProteinFilter(30)}
            >
              Protein greater than 30
            </button>
          </li>
          <li className="item">
            <button
              className="filter-item"
              onClick={() => handleProteinFilter(10)}
            >
              Protein greater than 10
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
