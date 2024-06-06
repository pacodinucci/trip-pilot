import React, { useEffect, useState } from "react";
import Image from "next/image";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import TuviajeBtn from "./components/Tuviaje";
import IaInput from "./components/IaInput";
import Food from "./components/Food";
import Plans from "./components/Plans";
import Places from "./components/Places";
import Contact from "./components/Contact";
import IaChat from "./components/IaChat";

const TripPage = async () => {
  return (
    <main className="h-full min-h-screen md:w-[76%] px-2 pt-2 mb-6 space-y-4">
      <Navbar />
      <Header />
      <div className="md:flex md:gap-4">
        <div className="md:w-[45svw] space-y-4 mb-4 md:mb-0">
          <TuviajeBtn />
          <IaInput />
          <Food />
          <Plans />
          <Places />
        </div>
        <Contact />
        <div className="hidden md:flex mt-7">
          <IaChat />
        </div>
      </div>
    </main>
  );
};

export default TripPage;
