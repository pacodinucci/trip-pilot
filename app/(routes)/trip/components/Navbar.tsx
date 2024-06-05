import React from "react";
import { Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { Merriweather_Sans } from "next/font/google";

const merriweather = Merriweather_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-2 py-4 shadow-md rounded-lg">
      <Menu color="#0F172A" />
      <h1
        className={`${merriweather.className} text-2xl font-bold text-emerald-900 logo`}
      >
        TRIP PLANNER
      </h1>
      <UserButton />
    </div>
  );
};

export default Navbar;
