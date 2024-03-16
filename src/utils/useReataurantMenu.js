import { useEffect, useState } from "react";
import { menuApi } from "../constants";

const useReataurantMenu = (restaurantId) => {
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
  };
  return menuData;
};

export default useReataurantMenu;
