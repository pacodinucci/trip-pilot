"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const TuviajeBtn = () => {
  const [showTripInfo, setShowTripInfo] = useState<boolean>(false);
  return (
    <div>
      <section className="flex justify-between gap-2 pt-6">
        <motion.div
          className="w-2/3 py-2 px-4 rounded-md text-xl font-black text-neutral-100 tracking-wider flex justify-between items-center bg-emerald-600 pointer-events-auto z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 16 }}
          onClick={() => setShowTripInfo(!showTripInfo)}
        >
          <h2 className="text_shadow">Tu Viaje</h2>
          <div className="mr-2">
            <Image
              src="/plane-ticket.svg"
              alt="planewindow"
              width={40}
              height={40}
            />
          </div>
        </motion.div>
        <div className="relative w-1/3 py-2 px-2 rounded-md text-lg bg-emerald-500 font-semibold text-neutral-100 text_shadow flex items-center">
          <h3>Info Útil</h3>
          <div className="mr-2">
            <Image
              src="/street-sign.svg"
              alt="planewindow"
              width={40}
              height={40}
              className="absolute bottom-2.5 right-0"
            />
          </div>
        </div>
      </section>
      {showTripInfo && (
        <motion.div
          className="h-48 bg-emerald-600 mt-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut" }}
        ></motion.div>
      )}
    </div>
  );
};

export default TuviajeBtn;
