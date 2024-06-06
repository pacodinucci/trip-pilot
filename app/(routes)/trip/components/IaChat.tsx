"use client";

import React, { useState } from "react";
import { Bot } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";

const IaChat = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <div className="sticky flex flex-col justify-between top-8 left-0 border-2 border-slate-700/10 rounded-lg z-50 h-[60svh] w-[28.6svw] px-2 py-4 shadow-md">
      <div className="flex gap-2">
        <span className="rounded-full h-10 w-10 bg-slate-300 self-end flex justify-center items-center">
          <Bot color="white" />
        </span>
        <div className="bg-slate-600/40 rounded-lg p-2">
          <p className="text-neutral-800 text-lg">
            Hola soy tu guía turístico virtual. En qué te puedo ayudar hoy?{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-between gap-2">
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
    </div>
  );
};

export default IaChat;
