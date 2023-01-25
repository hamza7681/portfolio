import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { FooterAnimate } from "../../Animations";

const Footer = () => {
  return (
    <>
      <motion.div
        variants={FooterAnimate}
        whileInView="show"
        initial="hidden"
        className=" text-center rounded-[10px] p-[10px] md:p-[30px] m-[10px] md:m-[30px] px-[10px] md:px-[50px] flex flex-col md:flex-row justify-between bg-[rgba(139,139,139,0.3)]"
      >
        <p className="text-white text-[14px] md:text-[16px] bg-transparent">
          Copyright © Hamza Siddique | 2023. All Rights are Reserved
        </p>
        <div className=" flex-row justify-around  md:flex hidden md:mt-0 mt-[10px] bg-transparent ">
          <a
            href="https://www.facebook.com/itz.mughal.10?mibextid=ZbWKwL"
            rel="noreferrer"
            target="_blank"
            className="bg-transparent"
          >
            <FaFacebookF className="text-white text-[24px] cursor-pointer mr-[20px]  bg-transparent" />
          </a>
          <a
            href="https://www.linkedin.com/in/hamza-siddique-b90253130/"
            rel="noreferrer"
            target="_blank"
            className="bg-transparent"
          >
            <FaLinkedin className="text-white text-[24px] cursor-pointer  mr-[20px]  bg-transparent" />
          </a>
          <a
            href="https://github.com/hamza7681"
            rel="noreferrer"
            target="_blank"
            className="bg-transparent"
          >
            <FaGithub className="text-white text-[24px] cursor-pointer bg-transparent" />
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default Footer;
