// FoodCategories.jsx
import React from "react";

export default function FoodCategories({ category }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center flex-wrap">
        <img src={category.img} alt="category-img" className="w-6" />
        {/* Additional content or styling for each food category can be added here */}
      </div>
    </div>
  );
}
