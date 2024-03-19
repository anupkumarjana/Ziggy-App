import { useEffect, useState } from "react";
import { menuApi } from "./constants";

const useReataurantMenu = (restaurantId) => {
  // const [restaurantMenuCategory, setRestaurantMenuCategory] = useState([]);
  const [menuData, setmenuData] = useState([]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${menuApi}${restaurantId}`);
    const jsonData = await data.json();
    const menuDataCards =
      (await jsonData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
        .cards[1].card?.card?.itemCards) ||
      (await jsonData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
        .cards[2].card?.card?.itemCards);

    setmenuData(menuDataCards || []);

    // const menuCategory =
    //   jsonData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
    //     (c) =>
    //       c.card?.card["@type"] ===
    //       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    //   );
    // setRestaurantMenuCategory(menuCategory);
    // const category =
    //   jsonData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].filter(
    //     (ele) =>
    //       ele.card.card["@type"] ===
    //       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    //   );
    // console.log(category);
  };
  return menuData;
};

export default useReataurantMenu;
