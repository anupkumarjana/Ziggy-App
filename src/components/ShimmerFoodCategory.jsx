import cat from "../assets/smile-cat.gif";

export default function ShimmerFoodCategory() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-10 w-full h-[50vh] bg-[#FC8019]">
      <img
        src={cat}
        alt="dancing-cat"
        className="w-20 filter drop-shadow-3xl drop-shadow-custom "
      />
      <span className="text-xl text-slate-50 text-bold">
        Looking great food for you!!
      </span>
    </div>
  );
}
