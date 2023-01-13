import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ data }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-7">
      {data.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductList;
