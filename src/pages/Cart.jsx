import SectionImage from "../components/UI/SectionImage";
import Helmet from "../components/Helmet/Helmet";
import CartSectImg from "../assets/images/cart-sect.jpg";
import "../stylesheets/cart.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { cartActions } from "../redux/slices/cartSlice";
import CurrencyFormatter from "../helpers/currencyFormatter";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
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
        <div className="mt-8 max-w-[20rem] mx-auto text-center lg:text-left lg:mx-0 lg:mt-0">
          <h1 className="text-md ">Total Amount:</h1>
          <h1 className="font-bold text-2xl mb-4">
            <CurrencyFormatter price={totalAmount} />
          </h1>
          <p className="text-sm opacity-50 mb-5">
            taxes and shipping fee will calculate upon checking out.
          </p>
          <Button
            variant="outlined"
            className="flex gap-2"
            onClick={handleOpen}
            sx={{
              color: "white",
              backgroundColor: "#256D85",
              border: "#256D85",
              ":hover": {
                backgroundColor: "#47B5FF",
                border: "#47B5FF",
              },
            }}
          >
            Checkout
            <PointOfSaleIcon sx={{ fontSize: "1.2rem" }} />
          </Button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <h1 className="text-md ">Total Amount:</h1>
                <h1 className="font-bold text-2xl mb-4">
                  <CurrencyFormatter price={totalAmount} />
                </h1>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Send via Gcash: <span className="font-bold text-sm">09778120096</span>
              </Typography>
            </Box>
          </Modal>
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
