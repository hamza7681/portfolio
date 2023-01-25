import React, { useState } from "react";
import logo from "../../Assets/logo.png";
import { FaBars, FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { NavbarAnimate } from "../../Animations";
import SideBar from "./SideBar";
import { RiMenu2Fill } from "react-icons/ri";

const Navbar = ({ show }) => {
  const [active, setActive] = useState("/");
  const [toggle, setToggle] = useState(false);

  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Experience",
      path: "/experience",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <>
      <motion.nav
        variants={NavbarAnimate}
        initial="hidden"
        whileInView="show"
        className="flex flex-row h-[80px] justify-between pt-[10px]  relative items-center md:px-[50px] px-[30px]  "
      >
        <div className="bg-gradient-to-r from-indigo-500 via-purple-700 to-pink-600 blur-2xl h-[100px]  md:h-[70px] w-[190px] absolute top-0 md:left-[420px] "></div>
        <div className="md:block hidden w-1/3 relative bg-transparent">
          <RiMenu2Fill
            className="text-white text-[24px] cursor-pointer"
            onClick={() => show(true)}
          />{" "}
          <span
            className="text-white absolute top-0 left-[25px] bg-tranparent cursor-pointer font-semibold"
            onClick={() => show(true)}
          >
            Menu
          </span>
        </div>
        <div className="md:w-1/3">
          <img
            src={logo}
            alt="Hamza Siddique"
            className="object-cover h-[50px] md:h-[70px] relative md:-left-[30px] bg-transparent"
          />
        </div>
        <div className=" flex-row justify-around md:flex hidden ">
          <a
            href="https://www.facebook.com/itz.mughal.10?mibextid=ZbWKwL"
            rel="noreferrer"
            target="_blank"
          >
            <FaFacebookF className="text-white text-[24px] cursor-pointer mr-[20px]  " />
          </a>
          <a
            href="https://www.linkedin.com/in/hamza-siddique-b90253130/"
            rel="noreferrer"
            target="_blank"
          >
            <FaLinkedin className="text-white text-[24px] cursor-pointer  mr-[20px]  " />
          </a>
          <a
            href="https://github.com/hamza7681"
            rel="noreferrer"
            target="_blank"
          >
            <FaGithub className="text-white text-[24px] cursor-pointer " />
          </a>
        </div>
        <div className="md:hidden md:w-1/3 block">
          <FaBars
            className="text-white text-[20px] relative top-[3px] "
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </motion.nav>
      <SideBar
        toggle={toggle}
        setToggle={setToggle}
        routes={routes}
        active={active}
        setActive={setActive}
      />
    </>
  );
};

export default Navbar;
