"use client";

import React from "react";
import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Places = () => {
  return (
    <div>
      <section>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-berlinplaces bg-cover bg-center rounded-lg text-white px-2">
              <motion.div
                className="h-[100px] text-neutral-100 font-black text-4xl text_shadow_xl px-4 py-6"
                whileTap={{ scale: 0.8 }}
              >
                LUGARES CERCANOS
              </motion.div>
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

export default Places;
