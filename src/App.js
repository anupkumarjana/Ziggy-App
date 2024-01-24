import Body from "./components/Body";
import Header from "./components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <BrowserRouter className="App">
      {" "}
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
