// Body.jsx
import React, { useState } from "react";
import Card from "./Card.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import FoodCategories from "./FoodCategories.jsx";
import { foodCategories } from "../data/FoodCategories.js";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";
import RecomendedResturant from "./RecomendedResturant.jsx";
import AllResturants from "./AllResturants.jsx";

export default function Body({ datas }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center mt-10 lg:px-32 px-4 text-[#111111] z-[99999]">
      <div className="flex flex-col justify-center items-center gap-3 pt-20 pb-10 border-b">
        <div className="flex justify-between items-center w-full px-16">
          <p className="text-2xl font-semibold text-[#111111]">
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
            {foodCategories.map((category, index) => (
              <FoodCategories
                key={index}
                category={category}
                currentIndex={currentIndex}
                handleChange={handleChange}
              />
            ))}
          </Carousel>
        </div>
      </div>
      <div className="px-16 flex flex-col justify-start gap-4 mt-10">
        <h2 className="text-2xl font-semibold text-[#111111]">
          Top restaurant chains in Bangalore
        </h2>
        <RecomendedResturant />
      </div>
      <div className="px-16 flex flex-col justify-start gap-4 mt-10">
        <h2 className="text-2xl font-semibold text-[#111111]">
          Restaurants with online food delivery in Bangalore
        </h2>
        <AllResturants />
      </div>

      <div className="flex gap-4 justify-center items-center flex-wrap">
        {datas.map((product) => (
          <Card key={product.data.id} {...product.data} />
        ))}
      </div>
    </div>
  );
}
