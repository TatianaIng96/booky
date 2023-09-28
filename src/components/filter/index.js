import React from "react";

const FilterSidebar = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="sidebar text-white">
      <h3>Filtrar por Categoría</h3>
      <ul className="list-group">
        {categories.map((category) => (
          <li
            key={category}
            className={`list-group-item ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSidebar;
