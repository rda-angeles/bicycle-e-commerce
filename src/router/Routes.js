import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/shop/:id" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
};

export default Router;
