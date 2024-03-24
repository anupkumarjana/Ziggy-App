import React, { useState } from "react";
import ResturantMenuHead from "../components/ResturantMenuHead";
import ResturantMenuBody from "../components/ResturantMenuBody";
import { useParams } from "react-router-dom";
import ShimmerMenu from "../components/ShimmerMenu";
import useReataurantMenuHead from "../utils/useRestaurantMenuHead";
import useReataurantMenuCategory from "../utils/useRestauranrMenuCategory";
import { FaAngleDown } from "react-icons/fa6";

export default function ResturantMenu() {
  const { restaurantId } = useParams();

  const resData = useReataurantMenuHead(restaurantId);
  const restauranrMenuCategory = useReataurantMenuCategory(restaurantId);

  const [expandedMenu, setExpandedMenu] = useState(null);

  const handleCategoryClick = (categoryTitle) => {
    setExpandedMenu(expandedMenu === categoryTitle ? null : categoryTitle);
  };

  if (!resData || restauranrMenuCategory.length === 0) {
    return (
      <div className="flex flex-col gap-10 mt-36 lg:px-80 px-4">
        <ShimmerMenu />
        <ShimmerMenu />
        <ShimmerMenu />
        <ShimmerMenu />
        <ShimmerMenu />
        <ShimmerMenu />
        <ShimmerMenu />
        <ShimmerMenu />
        <ShimmerMenu />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 lg:px-80 px-4 text-[#111111] z-[99999] mt-36">
      <ResturantMenuHead resData={resData} key={resData.id} />
      <div className="flex flex-col gap-2">
        {restauranrMenuCategory.map((menuCategory) => (
          <div key={menuCategory.card.card.title} className={`cursor-pointer`}>
            <div
              className="flex justify-between py-2 shadow-sm"
              onClick={() => handleCategoryClick(menuCategory.card.card.title)}
            >
              <span>
                {menuCategory.card.card.title} (
                {menuCategory.card.card.itemCards.length})
              </span>
              <span>
                <FaAngleDown />
              </span>
            </div>
            {expandedMenu === menuCategory.card.card.title && (
              <div className={`cursor-pointer`}>
                {menuCategory.card.card.itemCards.map((menuCard) => (
                  <div className="mt-4" key={menuCard?.card?.info?.id}>
                    <ResturantMenuBody data={menuCard} />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
