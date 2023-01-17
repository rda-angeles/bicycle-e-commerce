import Helmet from "../components/Helmet/Helmet";
import "../stylesheets/home.scss";
import homeBicycle from "../assets/images/bike1-removebg.png";
import Button from "@mui/material/Button";
import ProductList from "../components/UI/ProductList";
import { products } from "../assets/data";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [trendingRoadbikes, setTrendingRoadBikes] = useState(products);
  const [trendingMTB, setTrendingMTB] = useState(products);
  const [trendingGravel, setTrendingGravel] = useState(products);

  useEffect(() => {
    const filteredRb = products.filter((item) => item.category === "Road Bike");
    const filteredMtb = products.filter(
      (item) => item.category === "Mountain Bike"
    );
    const filteredGravel = products.filter(
      (item) => item.category === "Gravel Bike"
    );

    setTrendingRoadBikes(filteredRb);
    setTrendingMTB(filteredMtb);
    setTrendingGravel(filteredGravel);
  }, []);

  return (
    <Helmet title="Home">
      {/* Hero Section */}
      <div className="home__section bg-primary text-white flex items-center ">
        {/* Content container */}
        <div className="container mx-auto px-4 flex flex-col justify-evenly items-center lg:grid grid-cols-3">
          <div className="content ">
            <h3>We keep you riding,</h3>
            <h1 className="text-5xl mb-7 mt-3">
              Life is better on two wheels.
            </h1>
            <p className="text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum officiis neque iste minima ipsam aut aliquam ratione
              alias cum nemo!
            </p>
            <Link to={"/shop"}>
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "#256D85",
                  border: "1px solid #256D85",
                }}
              >
                Shop now!
              </Button>
            </Link>
          </div>

          <div className="image-wrapper col-span-2">
            <img
              src={homeBicycle}
              alt=""
              className="w-screen lg:max-w-[55rem]"
            />
          </div>
        </div>
      </div>

      {/* Trending and best sales Roadbikes */}
      <section className="trending-items my-6 ">
        <div className="section__title">
          <h1 className="text-center text-xl mb-2 font-semibold">
            Trending Roadbikes
          </h1>
        </div>
        <ProductList data={trendingRoadbikes} />
      </section>

      {/* Trending and best sales MTB */}
      <section className="trending-items my-6 ">
        <div className="section__title">
          <h1 className="text-center text-xl mb-2 font-semibold">
            Trending Mountain Bikes
          </h1>
        </div>
        <ProductList data={trendingMTB} />
      </section>

      {/* Trending and best sales Grave, */}
      <section className="trending-items my-6 ">
        <div className="section__title">
          <h1 className="text-center text-xl mb-2 font-semibold">
            Trending Gravel Bikes
          </h1>
        </div>
        <ProductList data={trendingGravel} />
      </section>
    </Helmet>
  );
};

export default Home;
