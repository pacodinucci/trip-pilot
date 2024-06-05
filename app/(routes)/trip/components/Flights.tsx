import React, { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { formatDate } from "@/lib/utils";

const Flights = () => {
  const flights = [
    {
      id: 1,
      origin: "Buenos Aires",
      destination: "Barcelona",
      date: "25/05/2024",
      hour: "09:00",
    },
    {
      id: 2,
      origin: "Barcelona",
      destination: "Berlin",
      date: "31/05/2024",
      hour: "12:00",
    },
    {
      id: 3,
      origin: "Berlin",
      destination: "Paris",
      date: "05/06/2024",
      hour: "08:00",
    },
    {
      id: 4,
      origin: "Paris",
      destination: "Buenos Aires",
      date: "12/06/2024",
      hour: "20:00",
    },
  ];

  const [selectedFlight, setSelectedFlight] = useState(null);

  return (
    <div className="px-4">
      {flights.map((flight) => (
        <Accordion key={flight.id} type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="border-b-0 bg-emerald-50 text-neutral-800 rounded-lg mb-2 px-2"
          >
            <AccordionTrigger className="">
              <p>{formatDate(flight.date)}</p>
              <p>
                {flight.origin} - {flight.destination}
              </p>
            </AccordionTrigger>
            <AccordionContent>
              Acá se muestra info adicional del vuelo.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default Flights;
