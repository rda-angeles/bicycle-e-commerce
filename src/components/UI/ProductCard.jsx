import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { motion } from "framer-motion";
const ProductCard = ({ item }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <Card sx={{ maxWidth: 345, margin: "2rem auto" }}>
        <Link to={`/shop/${item.id}`}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={item.img}
              alt={item.prodName}
              sx={{ objectFit: "cover", height: "200px" }}
            />
            <CardContent>
              <h1 className="text-2xl font-bold">{item.prodName}</h1>
              <p className="font-f-secondary mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, asperiores quaerat? Consectetur adipisci nemo sint?
              </p>
            </CardContent>
          </CardActionArea>
        </Link>

        <CardActions
          className="flex justify-between"
          sx={{ padding: "8px 1rem" }}
        >
          <h3 className="font-semibold">{item.price}</h3>
          <motion.div
            whileTap={{ scale: 1.2 }}
            whileHover={{
              scale: 1.1,
            }}
          >
            <Link>
              <AddCircleIcon />
            </Link>
          </motion.div>
        </CardActions>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
