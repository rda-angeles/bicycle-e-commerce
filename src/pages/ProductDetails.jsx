import { useParams } from "react-router-dom";
import { products } from "../assets/data";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";
import "../stylesheets/productDetails.scss";
const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id == id);
  return (
    <div className="px-4 prod-details flex items-center">
      <div className="container mx-auto ">
        {/* Back Button */}
        <div className="mb-3">
          <Link to={"/home"} className="flex items-center">
            <ArrowBackIosNewIcon />
            <p className="text-sm">Back</p>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-10">
          {/* Image */}

          <div className="image-wrapper max-w-3xl">
            <img
              src={product.img}
              alt={product.prodName}
              className="rounded-xl shadow-lg "
            />
          </div>

          {/* Content */}
          <div className="content ">
            <h1 className="text-4xl font-bold">{product.prodName}</h1>
            <h3 className="mb-4 font-f-secondary">{product.category}</h3>
            <p className="font-f-secondary">{product.desc}</p>

            <div className="mt-9">
              <Button
                variant="contained"
                className="flex gap-2"
                sx={{
                  backgroundColor: "#256D85",
                  ":hover": { color: "white", backgroundColor: "#47B5FF" },
                }}
              >
                Add to Cart
                <ShoppingCartIcon sx={{ fontSize: "1.2rem" }} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
