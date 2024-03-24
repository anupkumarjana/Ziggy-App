import React from "react";
import { useDispatch, useSelector } from "react-redux";
import veg from "../assets/veg.png";
import nonveg from "../assets/nonveg.png";
import { clearCart } from "../slices/cartSlice";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  const dispatch= useDispatch(store=>store.cart.items)

  const handleClearCart =()=>{
    dispatch(clearCart())
  }

  return (
    <div className="flex flex-col gap-4 lg:px-80 px-4 text-[#111111] z-[99999] mt-36">
      {cartItems.length > 0 ? (
        <button
          className="border p-2 rounded-md w-28 text-center cursor-pointer"
          onClick={handleClearCart}
        >
          Empty Cart
        </button>
      ) : (
        ""
      )}
      {cartItems.map((data) => (
        <div
          className="flex justify-between items-start cursor-pointer pb-6 border-b-2"
          key={data.card.info.id}
        >
          <div>
            <div className="flex flex-col">
              {data?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
                <img className="w-4" src={veg} alt="veg" />
              ) : (
                <img className="w-4" src={nonveg} alt="non-veg" />
              )}
              <h3 className="text-normal text-zinc-700 font-medium py-1">
                {data?.card.info.name}
              </h3>
              <h3 className="text-xs text-zinc-700 pb-4">
                ₹ {parseInt(data?.card?.info?.price) / 100}
              </h3>{" "}
              {/* <h3 className="text-wrap max-w-[30rem] text-xs text-zinc-500 font-light">
                {data?.card?.info?.description}
              </h3> */}
            </div>
          </div>
          <div className="relative">
            <img
              className="w-28 h-28 rounded-lg"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/${data?.card?.info?.imageId}`}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
}
