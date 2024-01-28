import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import RecomendedResturant from "./RecomendedResturant.jsx";
import ResturentCard from "./ResturantCards.jsx";
import { allRestaurants } from "../data/AllResturants.js";
import FoodCategoryCrousel from "./FoodCategoryCrousel.jsx";
import Shimmer from "./Shimmer.jsx";
import Footer from "./Footer.jsx";

export default function Body() {
  const [listOfResturants, setListOfResturants] = useState([]);

  const [topResturants, setTopResturants] = useState(listOfResturants);
  const [isFilterted, setisFilterted] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    //another api: https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log(jsonData);
    setListOfResturants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants //only cards[1] and cards[4] working for resturant
    );
  };

  function handleToggleFilter() {
    setisFilterted(!isFilterted);
  }
  function handleTopResturants() {
    const filteredTopResturants = topResturants.filter(
      (resturant) => resturant.info.avgRating >= 4.0
    );
    console.log(filteredTopResturants);
    handleToggleFilter();
    isFilterted
      ? setTopResturants(allRestaurants)
      : setTopResturants(filteredTopResturants);
  }

  return (
    <>
      <FoodCategoryCrousel />
      <div className="flex flex-col gap-4 justify-center items-center lg:px-32 px-4 text-[#111111] z-[99999] ">
        {/* <div className="px-16 flex flex-col justify-start gap-4 mt-10">
          <h2 className="text-2xl font-semibold text-[#111111]">
            Top restaurant chains in Bangalore
          </h2>
            {listOfResturants.length === 0 ? (
              <div className=" flex justify-center gap-10 items-center flex-wrap mt-10 ">
                <Shimmer />
                <Shimmer />
                <Shimmer />
                <Shimmer />
              </div>
            ) : (
              <div className="flex justify-center  gap-10 items-center flex-wrap">
                {listOfResturants.map((resturant) => (
                  <RecomendedResturant
                    resturant={resturant}
                    key={resturant.info.id}
                  />
                ))}
              </div>
            )}
       
        </div> */}
        <div className="px-16 flex flex-col justify-start gap-2 mt-4">
          <h2 className="text-2xl font-semibold text-[#111111]">
            Restaurants with online food delivery in Bangalore
          </h2>
          <div className=" py-2 px-4 w-full flex justify-between">
            <button className="border rounded-2xl px-4 py-2 shadow-sm">
              Sort By
            </button>
            <button
              className="border rounded-2xl px-4 py-2 shadow-sm"

              // onClick={handleTopDeliveryTime}
            >
              Fast Delivery
            </button>
            <button
              className={`border rounded-2xl px-4 py-2 shadow-sm ${
                isFilterted ? "bg-blue-500 text-white" : ""
              }`}
              onClick={handleTopResturants}
            >
              Ratings 4.0+
            </button>
            <button
              className="border rounded-2xl px-4 py-2 shadow-sm"
              // onClick={handlePureVeg}
            >
              Pure Veg
            </button>
            <button className="border rounded-2xl px-4 py-2 shadow-sm">
              Rs. 300-Rs. 600
            </button>
            <button className="border rounded-2xl px-4 py-2 shadow-sm">
              Less Than Rs. 300
            </button>
          </div>
          {listOfResturants.length === 0 ? (
            <div className=" flex justify-center gap-10 items-center flex-wrap">
              <Shimmer />
              <Shimmer />
              <Shimmer />
              <Shimmer />
              <Shimmer />
              <Shimmer />
              <Shimmer />
              <Shimmer />
              <Shimmer />
              <Shimmer />
              <Shimmer />
              <Shimmer />
              <Shimmer />
              <Shimmer />
              <Shimmer />
              <Shimmer />
              <Shimmer />
              <Shimmer />
              <Shimmer />
              <Shimmer />
              <Shimmer />
            </div>
          ) : (
            <div className="flex justify-center  gap-10 items-center flex-wrap">
              {listOfResturants &&
                listOfResturants.map((resturant, index) => {
                  return (
                    <ResturentCard
                      resturant={resturant}
                      key={resturant?.info?.id}
                    />
                  );
                })}
            </div>
          )}
        </div>

        {/* <div className="flex gap-4 justify-center items-center flex-wrap">
        {datas.map((product) => (
          <Card key={product.data.id} {...product.data} />
        ))}
      </div> */}
      </div>
      <Footer />
    </>
  );
}
