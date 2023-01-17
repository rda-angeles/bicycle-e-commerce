import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, CardActions } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { cartActions } from "../../redux/slices/cartSlice";
import CurrencyFormatter from "../../helpers/currencyFormatter";
import "../../stylesheets/productCard.scss";
const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        prodName: item.prodName,
        price: item.price,
        img: item.img,
      })
    );

    toast.success("Product added successfully!");
  };

  return (
    <motion.div whileHover={{ scale: 1.1 }} className="prod-card">
      <Card sx={{ maxWidth: 345, margin: "2rem auto" }}>
        <Link to={`/shop/${item.id}`}>
          <CardActionArea>
            <LazyLoadImage
              src={item.img}
              alt={item.prodName}
              effect="blur"
              height="200px"
              width="100%"
            />

            <CardContent>
              <h1 className="text-2xl font-bold">{item.prodName}</h1>
              <p className="font-f-secondary mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis, asperiores quaerat? Consectetur adipisci nemo sint?
              </p>
            </CardContent>
          </CardActionArea>
        </Link>

        <CardActions
          className="flex justify-between"
          sx={{ padding: "8px 1rem" }}
        >
          <h3 className="font-semibold">
            <CurrencyFormatter price={item.price} />
          </h3>
          <motion.div
            whileTap={{ scale: 1.2 }}
            whileHover={{
              scale: 1.1,
            }}
            onClick={addToCart}
          >
            <Link>
              <AddCircleIcon sx={{ fontSize: "1.8rem", color: "#256D85" }} />
            </Link>
          </motion.div>
        </CardActions>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
