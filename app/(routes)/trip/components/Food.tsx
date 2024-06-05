"use client";

import React from "react";
import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import restaurantsBerlin from "@/lib/constants";
import Restaurant from "./Restaurant";

const Food = () => {
  return (
    <div>
      <section>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-custom_brown bg-cover bg-center rounded-lg text-white px-2 py-2">
              <div>
                <motion.div
                  className="h-full w-full bg-neutral-800/40 rounded-lg text-neutral-100 font-black text-4xl text_shadow_xl"
                  whileTap={{ scale: 0.8 }}
                >
                  GASTRONOMÍA
                </motion.div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="bg-slate-800 text-white font-semibold flex items-center justify-center p-2 mt-2 rounded-sm">
                  Respuestas generadas por GPT
                </div>
                <div className="min-h-[450px] w-full mt-4 flex flex-col gap-4">
                  {restaurantsBerlin.map((restaurant) => (
                    <Restaurant
                      key={restaurant.nombre}
                      restaurant={restaurant}
                    />
                  ))}
                </div>
              </motion.div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
};

export default Food;
