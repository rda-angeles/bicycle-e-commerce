import SectionImage from "../components/UI/SectionImage";
import Helmet from "../components/Helmet/Helmet";
import CartSectImg from "../assets/images/cart-sect.jpg";
import "../stylesheets/cart.scss";
import DeleteIcon from "@mui/icons-material/Delete";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import CurrencyFormatter from "../helpers/currencyFormatter";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Cart">
      <SectionImage title="Cart" bg={CartSectImg} />
      <div className="px-5 py-10 lg:flex lg:justify-center items-center gap-10">
        {/* Cart table */}
        <div className="cart-sect">
          {cartItems.length === 0 ? (
            <h1 className="text-center text-2xl">No Item selected</h1>
          ) : (
            <TableContainer component={Paper}>
              <Table stickyHeader aria-label="a dense table" size="small">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>Image</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Product</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Price</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Quantity</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Remove</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item) => (
                    <Tr item={item} key={item.id} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>

        {/* Total Amount */}
        <div className="mt-8 max-w-[20rem] mx-auto text-center lg:text-left lg:mx-0">
          <h1 className="text-md ">Total Amount:</h1>
          <h1 className="font-bold text-2xl mb-4">
            <CurrencyFormatter price={totalAmount} />
          </h1>
          <p className="text-sm opacity-50">
            taxes and shipping fee will calculate upon checking out.
          </p>
        </div>
      </div>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(item.id));
  };
  return (
    <TableRow
      key={item.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell className="tbl-img">
        <img
          src={item.img}
          alt={item.prodName}
          className="max-w-[10rem] rounded-xl"
        />
      </TableCell>
      <TableCell sx={{ fontSize: ".9rem" }}>{item.prodName}</TableCell>
      <TableCell sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
        <CurrencyFormatter price={item.price} />
      </TableCell>
      <TableCell sx={{ fontSize: ".9rem" }}>{item.quantity}</TableCell>
      <TableCell sx={{ fontSize: ".9rem" }}>
        <div onClick={deleteItem} className="cursor-pointer">
          <DeleteIcon color="error" />
        </div>
      </TableCell>
    </TableRow>
  );
};

export default Cart;
