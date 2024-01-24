import React, { useState, useEffect } from "react";
import ResturentCard from "./ResturantCards.jsx";

export default function Search() {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    setSearched(!searched);
  };

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    // console.log(jsonData);
    const resData =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const searchedData = resData.map(
      (resturant) => resturant.info?.name?.toLowerCase().includes(searchText)
      // resturant.info?.cuisines.map((cuisine) =>
      //   cuisine.toLowerCase().includes(searchText)
      // )
    );
    setListOfResturants(searchedData);
  };
  return (
    <div>
      {" "}
      <div className="flex items-center gap-4 w-full justify-center mt-40">
        <input
          type="text"
          placeholder="Find your favourites"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-[60%] p-4 rounded-md border text-slate-600 outline-none"
        />
        <button
          className="border rounded-lg p-4 text-slate-600"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="flex justify-center  gap-10 items-center flex-wrap">
        {searched &&
          listOfResturants &&
          listOfResturants.map((resturant, index) => {
            return <ResturentCard {...resturant} key={index} />;
          })}
      </div>
    </div>
  );
}
