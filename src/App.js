import React, { lazy, Suspense } from "react";
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
import { Provider } from "react-redux";
import { appStore } from "./utils/appStore";

const Grocery = lazy(() => import("./components/Grocery"));

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <div>
          {" "}
          <Outlet />
        </div>
      </div>
    </Provider>
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
      {
        path: "/grocery",
        element: (
          <Suspense>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/resturant/:restaurantId",
        element: <ResturantMenu />,
      },
      { path: "/search/resturant/:restaurantId", element: <ResturantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

export default App;
