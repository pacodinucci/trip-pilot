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

const TripPage = async () => {
  return (
    <main className="h-full min-h-screen px-2 pt-2 mb-6 space-y-4">
      <Navbar />
      <Header />
      <TuviajeBtn />
      <IaInput />
      <Food />
      <Plans />
      <Places />
      <Contact />
    </main>
  );
};

export default TripPage;
