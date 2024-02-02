import Header from "./components/Header";
import Body from "./pages/Body";
import Search from "./pages/Search";
import Error from "./pages/Error";
import Offers from "./pages/Offers";
import Help from "./pages/Help";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import ResturantMenu from "./pages/ResturantMenu";
import { createBrowserRouter, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <div>
        {" "}
        <Outlet />
      </div>
    </div>
  );
}
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/search", element: <Search /> },
      { path: "/offers", element: <Offers /> },
      { path: "/help", element: <Help /> },
      { path: "/user", element: <Profile /> },
      { path: "/cart", element: <Cart /> },
      { path: "/resturant/:restaurantId", element: <ResturantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

export default App;
