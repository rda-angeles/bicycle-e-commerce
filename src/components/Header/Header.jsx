import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DirectionsBikeOutlinedIcon from "@mui/icons-material/DirectionsBikeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CyclingIcon from "../../assets/images/cycling-icon.png";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

import { useSelector } from "react-redux";
import "../../stylesheets/header.scss";
const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const navLinks = [
    { id: 1, navLink: "Home", path: "/home" },
    { id: 2, navLink: "Shop", path: "/shop" },
    { id: 3, navLink: "Cart", path: "/cart" },
  ];

  const [nav, setNav] = useState(false);
  const [navColor, setNavColor] = useState("white");
  const [navTextColor, setNavTextColor] = useState("black");
  const [navFix, setNavFix] = useState("inherit");

  const listenScrollEvent = () => {
    const headerScroll = document.querySelector(".header");

    if (window.scrollY > 10) {
      setNavColor("#06283D");
      setNavTextColor("white");
      setNavFix("fixed");
      headerScroll.classList.add("scroll");
    } else {
      setNavColor("white");
      setNavTextColor("black");
      setNavFix("inherit");
      headerScroll.classList.remove("scroll");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div
      className="flex justify-between items-center w-full h-20 px-4 z-30  shadow-black shadow-sm header"
      style={{
        backgroundColor: navColor,
        transition: "all .3s",
        position: navFix,
        color: navTextColor,
      }}
    >
      {/* Medium to Larger Device */}

      <div className="flex justify-between items-center w-full mx-auto container">
        {/* Logo/Name */}
        <div className="logo h-[100%] cursor-pointer max-w-[4rem] ">
          {/* <DirectionsBikeOutlinedIcon sx={{ fontSize: "2.5rem" }} /> */}

          <img
            src={CyclingIcon}
            alt="Pedal Deck Logo"
            className="header-logo"
          />
        </div>
        {/* Links */}
        <ul className="nav-links hidden md:flex">
          {navLinks.map(({ id, navLink, path }) => (
            <NavLink
              key={id}
              className="px-4 text-sm cursor-pointer"
              style={({ isActive }) =>
                isActive ? { fontWeight: "bolder" } : undefined
              }
              to={path}
            >
              {navLink}
            </NavLink>
          ))}
        </ul>

        <div className="flex">
          <Link to={"/cart"}>
            <motion.div whileTap={{ scale: 1.1 }} className="relative">
              <ShoppingCartOutlinedIcon
                sx={{
                  fontSize: "1.8rem",
                  marginRight: ".5rem",
                  cursor: "pointer",
                }}
              />

              <span className=" item-counter">{totalQuantity}</span>
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Mobile menu -- Smaller Device */}
      <div
        className="mobile-menu cursor-pointer md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? (
          <FaTimes size={25} color={nav ? "white" : "black"} />
        ) : (
          <FaBars size={25} />
        )}
      </div>

      {/* Mobile menu link */}
      {nav && (
        <ul className="w-full h-screen absolute top-0 left-0 bg-c-primary flex justify-center items-center flex-col menu-link">
          {navLinks.map(({ id, navLink, path }) => (
            <Link
              key={id}
              className="py-6 capitalize cursor-pointer text-3xl"
              to={path}
              onClick={() => setNav(!nav)}
            >
              {navLink}
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
