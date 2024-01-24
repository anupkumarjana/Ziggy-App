export default function Shimmer() {
  return (
    <>
      <div className="flex flex-col justify-start items-center flex-wrap w-56 hover:scale-95 transition duration-500 cursor-pointer">
        <div className="relative w-full">
          <div
            className="w-full h-40 object-cover
            relative rounded-lg bg-slate-300"
          ></div>
          <span className="absolute left-2 bottom-2 text-xl font-extrabold text-white bg-slate-400 shadow-lg b"></span>
        </div>{" "}
        <div className="flex flex-col justify-start w-full pt-4 px-2 text-zinc-800">
          <div className="flex fle-col items-center gap-2">
            <span className="w-full h-2 bg-slate-300 rounded-lg"></span>
            <span className="w-full h-2 bg-slate-300 rounded-lg"></span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="w-full h-2 bg-slate-300 rounded-lg"></span>
            <span className="w-full h-2 bg-slate-300 rounded-lg"></span>
          </div>
        </div>
      </div>
    </>
  );
}
