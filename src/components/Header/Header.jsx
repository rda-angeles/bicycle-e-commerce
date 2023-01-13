import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DirectionsBikeOutlinedIcon from "@mui/icons-material/DirectionsBikeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinks = [
    { id: 1, navLink: "Home" },
    { id: 2, navLink: "Shop" },
    { id: 3, navLink: "Cart" },
  ];

  const [nav, setNav] = useState(false);
  const [navColor, setNavColor] = useState("white");
  const [navTextColor, setNavTextColor] = useState("black");
  const [navFix, setNavFix] = useState("inherit");

  const listenScrollEvent = () => {
    if (window.scrollY > 10) {
      setNavColor("#06283D");
      setNavTextColor("white");
      setNavFix("fixed");
    } else {
      setNavColor("white");
      setNavTextColor("black");
      setNavFix("inherit");
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
      className="flex justify-between items-center w-full h-20 px-4 z-30  shadow-black shadow-sm"
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
        <div className="logo h-[100%] cursor-pointer">
          <DirectionsBikeOutlinedIcon sx={{ fontSize: "2.5rem" }} />
        </div>
        {/* Links */}
        <ul className="nav-links hidden md:flex">
          {navLinks.map(({ id, navLink }) => (
            <li key={id} className="px-4 text-sm  cursor-pointer">
              {navLink}
            </li>
          ))}
        </ul>

        <div className="flex">
          <motion.div whileTap={{ scale: 1.1 }}>
            <ShoppingCartOutlinedIcon
              sx={{
                fontSize: "1.8rem",
                marginRight: ".5rem",
                cursor: "pointer",
              }}
            />
          </motion.div>

          <motion.div whileTap={{ scale: 1.1 }} className="mr-2 lg:mr-0">
            <AccountCircleIcon sx={{ fontSize: "1.8rem", cursor: "pointer" }} />
          </motion.div>
        </div>
      </div>

      {/* Mobile menu -- Smaller Device */}
      <div
        className="mobile-menu cursor-pointer z-10 md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {/* Mobile menu link */}
      {nav && (
        <ul className="w-full h-screen absolute top-0 left-0 bg-c-primary flex justify-center items-center flex-col">
          {navLinks.map(({ id, navLink }) => (
            <li key={id} className="py-6 capitalize cursor-pointer text-3xl">
              {navLink}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
