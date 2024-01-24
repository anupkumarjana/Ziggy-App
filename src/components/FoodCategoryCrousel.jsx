import React, {useState} from "react";
import { Carousel } from "react-responsive-carousel";
import FoodCategories from "./FoodCategories.jsx";
import { foodCategories } from "../data/FoodCategories.js";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";
export default function FoodCategoryCrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleChange = (id) => {
    setCurrentIndex(id);
  };
  return (
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
          {foodCategories.map((category, id) => (
            <FoodCategories
              key={id}
              category={category}
              currentIndex={currentIndex}
              handleChange={handleChange}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
