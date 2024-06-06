"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";

const IaInput = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <div className="flex md:hidden justify-between gap-2">
      <Input
        placeholder="Preguntale a la IA acerca de Berlin..."
        className="h-[50px] text-base"
      />
      <Button
        variant="outline"
        className="h-[50px]"
        onClick={() => setIsModalOpen(true)}
      >
        Buscar
      </Button>
      {isModalOpen && (
        <Modal
          title="Búsqueda con IA"
          description=""
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <p>
            Se puede conectar a la API de ChatGPT para que responda como guía
            turístico.
          </p>
        </Modal>
      )}
    </div>
  );
};

export default IaInput;
