import { useEffect, useState } from "react";
import { menuApi } from "./constants";

const useReataurantMenuCategory = (restaurantId) => {
  const [restaurantMenuCategory, setRestaurantMenuCategory] = useState([]);
  //   const [menuData, setmenuData] = useState([]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${menuApi}${restaurantId}`);
    const jsonData = await data.json();

    const menuCategory =
      jsonData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
        (c) =>
          c.card?.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    setRestaurantMenuCategory(menuCategory);
  };
  return restaurantMenuCategory;
};

export default useReataurantMenuCategory;
