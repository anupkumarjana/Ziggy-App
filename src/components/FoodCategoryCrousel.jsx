import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import FoodCategories from "./FoodCategories.jsx";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";
import ShimmerFoodCategory from "./ShimmerFoodCategory.jsx";

export default function FoodCategoryCrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleChange = (id) => {
    setCurrentIndex(id);
  };

  const [foodCategory, setFoodCategoty] = useState([]);

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
    const imageData =
      await jsonData?.data?.cards[0]?.card.card.imageGridCards.info.map(
        (imageData) => imageData.imageId
      );
    setFoodCategoty(imageData);
    console.log(imageData);
  };

  return foodCategory.length === 0 ? (
    <div className="flex gap-4 w-full">
      <ShimmerFoodCategory />
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center gap-3 mt-10 lg:px-32 px-4 pt-20 pb-10 border-b">
      <div className="flex justify-between items-center w-full px-16">
        <p className=" text-2xl font-semibold text-[#111111]">
          Anup, what's on your mind?
        </p>

        <div className="carousel-buttons flex gap-4 items-center">
          <button
            className="text-slate-300 text-3xl"
            onClick={() => handleChange(currentIndex - 1)}
          >
            <FaCircleArrowLeft />
          </button>
          <button
            className="text-slate-300 text-3xl"
            onClick={() => handleChange(currentIndex + 1)}
          >
            <FaCircleArrowRight />
          </button>
        </div>
      </div>

      <div>
        <Carousel
          showArrows={false}
          autoPlay={false}
          infiniteLoop={false}
          selectedItem={currentIndex}
          onChange={handleChange}
          className="carousel-container px-16"
          showThumbs={false}
          emulateTouch={true}
          dynamicHeight={false}
          renderThumbs={() => {}}
          centerMode={true}
          centerSlidePercentage={100 / 8}
          showStatus={false}
          showIndicators={false}
        >
          {foodCategory.map((foodCategoryImage, id) => (
            <FoodCategories
              key={id}
              imageId={foodCategoryImage}
              currentIndex={currentIndex}
              handleChange={handleChange}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
