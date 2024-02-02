import React, { useEffect, useState } from "react";
import ResturantMenuHead from "../components/ResturantMenuHead";
import ResturantMenuBody from "../components/ResturantMenuBody";
import { useParams } from "react-router-dom";

export default function ResturantMenu(data) {
  const [resData, setResData] = useState({});
  const [menuData, setmenuData] = useState([]);

  const { restaurantId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&catalog_qa=undefined&submitAction=ENTER&restaurantId=${restaurantId}`
    );
    const jsonData = await data.json();

    const ResturantData = await jsonData.data?.cards[0]?.card?.card?.info;
    const menuDataCards = await jsonData.data?.cards[2]?.groupedCard
      ?.cardGroupMap?.REGULAR.cards[1].card?.card?.itemCards;
    setResData(ResturantData);
    setmenuData(menuDataCards || []);
  };

  return (
    <div className="flex flex-col gap-4 lg:px-80 px-4 text-[#111111] z-[99999] mt-36">
      <ResturantMenuHead resData={resData} />
      {menuData.map((data) => (
        <ResturantMenuBody data={data} key={data?.card?.info?.id} />
      ))}
    </div>
  );
}
