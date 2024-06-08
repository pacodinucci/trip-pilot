"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Modal } from "@/components/ui/modal";

const Header = () => {
  const [isClimateModalOpen, setIsClimateModalOpen] = useState<boolean>(false);

  const handleModalClose = () => {
    setIsClimateModalOpen(false);
  };

  console.log(isClimateModalOpen);

  return (
    <section className="h-[30svh] md:h-[24svh] flex gap-12">
      <div>
        <p className="text-lg  font-semibold">Hola Juan, estás en</p>
        <div className="w-[96svw] md:w-[56svw] h-full px-2 py-2 flex flex-col items-center text-white rounded-md bg-berlin bg-cover bg-center text_shadow_xl">
          <h1 className="header_title uppercase">Berlin</h1>
          <div
            className="md:hidden w-full h-[9svh] px-2 py-2 mt-2 flex justify-between bg-neutral-800 bg-opacity-50 rounded-md z-10"
            onClick={() => setIsClimateModalOpen(true)}
          >
            <div className="flex gap-2 items-center">
              <Image src="/sunny.png" alt="sunny" height={24} width={24} />
              <p className="text-lg font-medium">18 °C</p>
            </div>
            <div>
              <ul className="flex gap-2 text_shadow_xl text-sm">
                <li className="flex flex-col items-center">
                  <div className="flex">
                    <Image
                      src="/partlycloudy.png"
                      alt="partlycloudy"
                      height={24}
                      width={24}
                    />
                    <p className="text-sm font-medium">17 °C</p>
                  </div>
                  <div>10 AM</div>
                </li>
                <li className="h-full w-[2px] bg-white z-20" />
                <li className="flex flex-col items-center">
                  <div className="flex">
                    <Image
                      src="/partlycloudy.png"
                      alt="partlycloudy"
                      height={24}
                      width={24}
                    />
                    <p className="text-sm font-medium">15 °C</p>
                  </div>
                  <div>2 PM</div>
                </li>
                <li className="flex flex-col items-center">
                  <div className="flex">
                    <Image
                      src="/partlycloudy.png"
                      alt="partlycloudy"
                      height={24}
                      width={24}
                    />
                    <p className="text-sm font-medium">14 °C</p>
                  </div>
                  <div>6 PM</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full flex flex-col justify-between mt-7">
        <div
          className="hidden md:flex flex-col w-[16svw] h-[16svh] px-4 py-2 justify-around rounded-md z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-200 to-blue-800 cursor-pointer"
          onClick={() => setIsClimateModalOpen(true)}
        >
          <div className="flex gap-2 items-center">
            <Image src="/sunny.png" alt="sunny" height={24} width={24} />
            <p className="text-lg font-medium">18 °C</p>
          </div>
          <div>
            <ul className="flex gap-2 text_shadow_xl text-sm">
              <li className="flex flex-col items-center">
                <div className="flex">
                  <Image
                    src="/partlycloudy.png"
                    alt="partlycloudy"
                    height={24}
                    width={24}
                  />
                  <p className="text-sm font-medium">17 °C</p>
                </div>
                <div>10 AM</div>
              </li>
              <li className="h-full w-[2px] bg-white z-20" />
              <li className="flex flex-col items-center">
                <div className="flex">
                  <Image
                    src="/partlycloudy.png"
                    alt="partlycloudy"
                    height={24}
                    width={24}
                  />
                  <p className="text-sm font-medium">15 °C</p>
                </div>
                <div>2 PM</div>
              </li>
              <li className="flex flex-col items-center">
                <div className="flex">
                  <Image
                    src="/partlycloudy.png"
                    alt="partlycloudy"
                    height={24}
                    width={24}
                  />
                  <p className="text-sm font-medium">14 °C</p>
                </div>
                <div>6 PM</div>
              </li>
            </ul>
          </div>
        </div>
        <motion.div
          className="bg-slate-900 rounded-lg text-white text-xl px-4 py-2 text_shadow_xl shadow-lg hidden md:flex justify-between items-center cursor-pointer"
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
      </div>
      {isClimateModalOpen && (
        <Modal
          title="Pronóstico del clima"
          description=""
          isOpen={isClimateModalOpen}
          onClose={handleModalClose}
        >
          <p>Puede estar conectado a la API de Accuweather u otra similar.</p>
        </Modal>
      )}
    </section>
  );
};

export default Header;
