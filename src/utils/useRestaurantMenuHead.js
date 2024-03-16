import { useEffect, useState } from "react";
import { menuApi } from "./constants";

const useReataurantMenuHead = (restaurantId) => {
  const [resData, setResData] = useState({});

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${menuApi}${restaurantId}`);
    const jsonData = await data.json();

    const ResturantData = await jsonData.data?.cards[0]?.card?.card?.info;
    setResData(ResturantData);
  };
  return resData;
};

export default useReataurantMenuHead;
