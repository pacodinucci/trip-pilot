import React, { useEffect, useState } from "react";
import Image from "next/image";

import TuviajeBtn from "./components/Tuviaje";
import axios from "axios";

const TripPage = async () => {
  return (
    <main className="h-full min-h-screen px-2 pt-2 space-y-4">
      <section className="h-[30svh]">
        <p className="text-lg  font-semibold">Hola Juan, estás en</p>
        <div className="w-full h-full py-2 flex flex-col text-white rounded-md bg-berlin bg-cover bg-center text_shadow_xl">
          <h1 className="header_title uppercase">Berlin</h1>
          <div className="w-full px-2">
            <div className="flex gap-2 items-center">
              <Image src="/sunny.png" alt="sunny" height={24} width={24} />
              <p className="text-lg font-medium">18 °C</p>
            </div>
          </div>
        </div>
      </section>
      <TuviajeBtn />
      <section>Gastronomía</section>
      <section>Cosas para hacer en Berlín</section>
    </main>
  );
};

export default TripPage;
