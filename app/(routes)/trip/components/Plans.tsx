"use client";

import React from "react";
import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Plans = () => {
  return (
    <div>
      <section>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-custom_green bg-cover bg-center rounded-lg text-white px-2 py-2">
              <div>
                <motion.div
                  className="h-full w-full bg-neutral-800/40 rounded-lg text-neutral-100 font-black text-4xl text_shadow_xl"
                  whileTap={{ scale: 0.8 }}
                >
                  ACTIVIDADES
                </motion.div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="h-[450px] w-full"></div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
};

export default Plans;
