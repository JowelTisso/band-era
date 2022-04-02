import React from "react";
import "./CategoryCard.css";

const CategoryCard = ({ img, categoryName }) => {
  return (
    <div className="category-card pointer">
      <img src={img} alt="category" className="category-img mg-top-2x" />
      <p className="t4 mg-top-1x">{categoryName}</p>
    </div>
  );
};

export default CategoryCard;
