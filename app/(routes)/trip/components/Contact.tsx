"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="bg-slate-900 rounded-lg text-white text-xl px-4 py-2 text_shadow_xl shadow-lg flex md:hidden justify-between items-center"
      whileTap={{ scale: 0.9 }}
    >
      <p>Contacto con la agencia</p>
      <Image
        src="/cellphone.svg"
        alt="planewindow"
        width={40}
        height={40}
        className=""
      />
    </motion.div>
  );
};

export default Contact;
