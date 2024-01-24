// FoodCategories.jsx
import React from "react";

export default function FoodCategories({ imageId }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center flex-wrap">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${imageId}`}
          alt="category-img"
          className="w-6"
        />
        {/* Additional content or styling for each food category can be added here */}
      </div>
    </div>
  );
}
