"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "@/components/ui/modal";

const Header = () => {
  const [isClimateModalOpen, setIsClimateModalOpen] = useState<boolean>(false);

  const handleModalClose = () => {
    setIsClimateModalOpen(false);
  };

  console.log(isClimateModalOpen);

  return (
    <section className="h-[30svh]">
      <p className="text-lg  font-semibold">Hola Juan, estás en</p>
      <div className="w-full h-full px-2 py-2 flex flex-col items-center text-white rounded-md bg-berlin bg-cover bg-center text_shadow_xl">
        <h1 className="header_title uppercase">Berlin</h1>
        <div
          className="w-full px-2 py-2 mt-2 flex justify-between bg-neutral-800 bg-opacity-50 rounded-md z-10"
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
