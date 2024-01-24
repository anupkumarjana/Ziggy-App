import React, { useEffect, useState } from "react";
import ResturentCard from "./ResturantCards.jsx";
import ShimmerFullWidth from "./ShimmerFullWidth.jsx";

export default function Search() {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = async () => {
    setLoading(true);

    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();

    const resData =
      (await jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants) || [];

    const searchedData = await resData.filter(
      (resturant) =>
        resturant.info?.name
          ?.toLowerCase()
          .includes(searchText.toLowerCase()) ||
        resturant.info?.cuisines?.some((cuisine) =>
          cuisine.toLowerCase().includes(searchText.toLowerCase())
        )
    );

    setListOfResturants(searchedData);
    setSearched(true);
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center gap-4 w-full justify-center mt-24">
        <input
          type="text"
          placeholder="Find your favourite restaurant"
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
        {loading ? (
          <ShimmerFullWidth />
        ) : searched && listOfResturants.length > 0 ? (
          listOfResturants.map((resturant, index) => (
            <ResturentCard resturant={resturant} key={index} />
          ))
        ) : (
          <p className="text-slate-700">No results found.</p>
        )}
      </div>
    </div>
  );
}
