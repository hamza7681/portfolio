import React from "react";
import { FaEnvelope, FaMapMarkedAlt, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { picAnimate } from "../../Animations";

const Contact = () => {
  return (
    <>
      <div className="w-full p-[30px] flex flex-col md:flex-row ">
        <div className="md:w-1/2 w-full flex flex-col gap-8 mb-[20px] md:mb-0 md:p-[20px] ">
          <div className="flex flex-row items-center gap-3 md:gap-6">
            <FaEnvelope className="text-white md:text-[32px]  " />
            <div>
              <p className="text-white md:text-[24px] font-bold">Email:</p>
              <p className="text-white md:text-[20px] ">hamzambf@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3 md:gap-6">
            <FaWhatsapp className="text-white md:text-[32px]  " />
            <div>
              <p className="text-white md:text-[24px] font-bold">WhatsApp:</p>
              <p className="text-white md:text-[20px] ">+92 311 7110211</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3 md:gap-6">
            <FaMapMarkedAlt className="text-white md:text-[32px]  " />
            <div>
              <p className="text-white md:text-[24px] font-bold">Location:</p>
              <p className="text-white md:text-[20px]  ">
                106-A, Street 3, Sector A, DHA Phase 6, Lahore, Pakistan
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <motion.iframe
            variants={picAnimate}
            initial="hidden"
            whileInView="show"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54446.51628770041!2d74.42097558264385!3d31.4717369909229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190920e59fccd3%3A0x56cae6ee2c7a479b!2sDHA%20Phase%206%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1674625497852!5m2!1sen!2s"
            className="w-full h-[350px] rounded-[10px] opacity-70"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></motion.iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
