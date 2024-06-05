import React from "react";
import { Restaurant as RestaurantType } from "@/lib/constants";

interface RestaurantProps {
  restaurant: RestaurantType;
}

const Restaurant: React.FC<RestaurantProps> = ({ restaurant }) => {
  return (
    <div className="flex flex-col justify-between px-2 py-2 bg-slate-100 rounded-lg text-neutral-800">
      <div className="flex gap-8 items-end py-2">
        <h3 className="text-2xl font-bold">{restaurant.nombre}</h3>
        <p className="text-lg">
          {restaurant.ubicacion}, <strong>{restaurant.zona}</strong>
        </p>
      </div>
      <div className="text-lg flex flex-col gap-1">
        <p className="font-medium">{restaurant.descripcion}</p>
        <p>{restaurant.ambiente}</p>
        <p>{restaurant.platosDestacados}</p>
        <strong className="self-end pt-1">{restaurant.precioPromedio}</strong>
      </div>
    </div>
  );
};

export default Restaurant;
