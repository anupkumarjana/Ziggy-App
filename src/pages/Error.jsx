import { useRouteError } from "react-router-dom";
import cat from "../assets/cat-cats -sad.gif"

export default function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="h-screen w-full flex flex-col items-center mt-60 text-balck gap-6">
      <h1 className="text-3xl font-extrabold">Oops!! Something went wrong</h1>
      <h2 className="text-red-600 text-xl font-bold">
        {error.status} : {error.statusText}
      </h2>
      <img src={cat} alt=""  className="w-32"/>
    </div>
  );
}
