import { useParams } from "react-router-dom";
import { products } from "../assets/data";
import "../stylesheets/productDetails.scss";
const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id == id);
  return (
    <div className="my-8">
      {/* Image */}

      <div className="container mx-auto grid lg:grid-cols-2 gap-x-10">
        <div className="image-wrapper max-w-3xl">
          <img src={product.img} alt="" />
        </div>

        {/* Content */}
        <div className="content ">
          <h1 className="text-3xl">{product.prodName}</h1>
          <h3 className="mb-3">{product.category}</h3>
          <p>{product.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
