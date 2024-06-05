"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import Flights from "./Flights";

const TuviajeBtn = () => {
  const [showTripInfo, setShowTripInfo] = useState<boolean>(false);
  const [showUtil, setShowUtil] = useState<boolean>(false);

  const tabs = [
    { id: "vuelos", label: "Vuelos" },
    { id: "estadias", label: "Estadías" },
    { id: "eventos", label: "Eventos" },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

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
        <motion.div
          className="relative w-1/3 py-2 px-2 rounded-md text-lg bg-emerald-500 font-semibold text-neutral-100 text_shadow flex items-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 16 }}
          onClick={() => setShowUtil(true)}
        >
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
        </motion.div>
      </section>
      {showTripInfo && (
        <Drawer open={!!showTripInfo} onClose={() => setShowTripInfo(false)}>
          <DrawerContent className="h-auto min-h-[600px] overflow-x-auto">
            {/* <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader> */}
            <Heading
              title="Información de tu viaje"
              description="Acá podes ver vuelos, hoteles, eventos, etc."
              className="px-4 py-4"
            />
            <Separator />
            <div className="flex flex-col items-center py-6">
              <nav className="w-[90%] bg-emerald-50 px-4 py-2 rounded-lg">
                <ul className="w-full flex justify-between">
                  {tabs.map((tab) => (
                    <li
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`${
                        activeTab === tab.id ? "" : "hover:text-white/50"
                      } relative rounded-lg px-3 py-1.5 text-base font-medium text-neutral-800 outline-2 outline-sky-400 transition focus-visible:outline`}
                    >
                      {activeTab === tab.id && (
                        <motion.div
                          layoutId="active-pill"
                          className="bg-emerald-900 absolute inset-0"
                          style={{ borderRadius: "8px" }}
                        />
                      )}
                      <span
                        className={`relative z-10 ${
                          activeTab === tab.id ? "text-white" : ""
                        }`}
                      >
                        {tab.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            {activeTab === "vuelos" && (
              <>
                <Flights />
              </>
            )}
          </DrawerContent>
        </Drawer>
      )}
      {showUtil && (
        <Drawer open={!!showUtil} onClose={() => setShowUtil(false)}>
          <DrawerContent className="h-auto min-h-[600px] overflow-x-auto">
            <Heading
              title="Información útil para tu viaje"
              description="Acá encontrás Información que no puede faltar."
              className="px-4 py-4"
            />
            <Separator />
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
};

export default TuviajeBtn;
