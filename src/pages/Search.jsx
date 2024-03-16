import React, { useEffect, useState } from "react";
import ResturentCard from "../components/ResturantCards.jsx";
import ShimmerFullWidth from "../components/ShimmerFullWidth.jsx";
import { Link } from "react-router-dom";
import { restaurantApi } from "../utils/constants.js";

export default function Search() {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleSearch();
    //eslint-disable-next-line
  }, []);

  const handleSearch = async () => {
    setLoading(true);

    const data = await fetch(restaurantApi);
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
    <div className="flex flex-col gap-10 mt-44 lg:px-32 px-4">
      <div className="flex items-center gap-4 w-full justify-center">
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
          listOfResturants.map((resturant) => (
            <Link
              key={resturant?.info?.id}
              to={`resturant/${resturant?.info?.id}`}
            >
              <ResturentCard resturant={resturant} />
            </Link>
          ))
        ) : (
          <p className="text-slate-700">No results found.</p>
        )}
      </div>
    </div>
  );
}
