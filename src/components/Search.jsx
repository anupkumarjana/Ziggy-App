import React, { useState } from "react";
import ResturentCard from "./ResturantCards.jsx";

export default function Search() {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [searched, setSearched] = useState(false);

  console.log(searchText);
  const handleSearch = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();

    const resData =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    const searchedData = resData.filter(
      (resturant) =>
        resturant.info?.name
          ?.toLowerCase()
          .includes(searchText.toLowerCase()) ||
        resturant.info?.cuisines?.some((cuisine) =>
          cuisine.toLowerCase().includes(searchText.toLowerCase())
        )
    );

    setListOfResturants(searchedData);
    setSearched(!searched);
    console.log(searchedData);
  };

  return (
    <div className="flex flex-col gap-20">
      <div className="flex items-center gap-4 w-full justify-center mt-40">
        <input
          type="text"
          placeholder="Find your favourites"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-96 p-4 rounded-md border text-slate-600 outline-none"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        <button
          className="border rounded-lg p-4 text-slate-600"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="flex justify-center gap-10 items-center flex-wrap">
        {searched && listOfResturants.length === 0 ? (
          <h4 className="text-lg text-slate-700">
            Not having that option for now!
          </h4>
        ) : (
          listOfResturants.map((resturant, index) => (
            <ResturentCard resturant={resturant} key={index} />
          ))
        )}
      </div>
    </div>
  );
}
