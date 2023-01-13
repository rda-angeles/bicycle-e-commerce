import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: "2rem auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={item.img}
          alt={item.prodName}
          sx={{ objectFit: "cover", height: "200px" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.prodName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/shop/${item.id}`}>Read More</Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
