import "../stylesheets/shop.scss";
import { products } from "../assets/data";
import Helmet from "../components/Helmet/Helmet";
import SectionImage from "../components/UI/SectionImage";
import BikeShop from "../assets/images/bike-shop.jpg";
import ProductList from "../components/UI/ProductList";
import { useState } from "react";

const Shop = () => {
  const [items, setItems] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;

    if (filterValue == "all") {
      setItems(products);
    }
    if (filterValue == "Road Bike") {
      const filteredItem = products.filter(
        (item) => item.category == "Road Bike"
      );

      setItems(filteredItem);
    }
    if (filterValue == "Mountain Bike") {
      const filteredItem = products.filter(
        (item) => item.category == "Mountain Bike"
      );

      setItems(filteredItem);
    }
    if (filterValue == "Gravel Bike") {
      const filteredItem = products.filter(
        (item) => item.category == "Gravel Bike"
      );

      setItems(filteredItem);
    }
  };

  const handleSearch = (e) => {
    const searchItem = e.target.value;

    const searchedItem = products.filter((item) =>
      item.prodName.toLowerCase().includes(searchItem.toLowerCase())
    );

    setItems(searchedItem);
  };
  return (
    <Helmet title="Shop">
      <SectionImage title="Shop" bg={BikeShop} />

      {/* List of Products */}
      <div className="shop-section">
        {/* Selectors */}
        <div className="selectors-wrapper flex items-center justify-center">
          <div className="selectors-widgets flex flex-col gap-4 lg:flex-row lg:gap-[10rem]  ">
            <div className="filter-category">
              <select onChange={handleFilter}>
                <option value="asdas">Filter by Category:</option>
                <option value="all">All</option>
                <option value="Road Bike">Road Bike</option>
                <option value="Mountain Bike">Mountain Bike</option>
                <option value="Gravel Bike">Gravel Bike</option>
              </select>
            </div>
            <div className="search-item">
              <input
                type="text"
                placeholder="Search here"
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>

        {/* Product Lists */}

        <div>
          {items.length == 0 ? (
            <h1 className="text-center text-4xl mb-10">No Product Found</h1>
          ) : (
            <ProductList data={items} />
          )}
        </div>
      </div>
    </Helmet>
  );
};

export default Shop;
