import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "../Layout";

const Home = lazy(() => import("../pages/Home.jsx"));
const Catalog = lazy(() => import("../pages/Catalog.jsx"));
const Favories = lazy(() => import("../pages/Favorites.jsx"));
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favories />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
