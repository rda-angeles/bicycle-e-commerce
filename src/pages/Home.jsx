import Helmet from "../components/Helmet/Helmet";
import "../stylesheets/home.scss";
import homeBicycle from "../assets/images/bike1-removebg.png";
import Button from "@mui/material/Button";

const Home = () => {
  return (
    <Helmet title="Home">
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

            <Button
              sx={{
                color: "white",
                backgroundColor: "#256D85",
                border: "1px solid #256D85",
              }}
            >
              Shop now!
            </Button>
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
    </Helmet>
  );
};

export default Home;
