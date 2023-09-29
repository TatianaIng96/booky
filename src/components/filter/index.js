import React from "react";
import style from "./filter.module.css";
import VerticalMode from "../verticalCarousel";

const FilterSidebar = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div>
      <div className={` ${style.filter} sidebar text-white`}>
        <h6>Filtrar por Categoría</h6>
        <ul className={` ${style.wh} list-group`}>
          {categories.map((category) => (
            <li
              key={category}
              className={`list-group-item ${
                selectedCategory === category ? "active" : ""
              }  ${style.li} text-white`}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
        <div>
          <VerticalMode />
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
