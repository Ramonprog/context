import { useContext } from "react";
import { CounterContext } from "../context/CounterContex";

import React from "react";

export const useCounterContext = () => {
  const context = useContext(CounterContext);

  if (!context) console.log("Contexto não encontrado");

  return context;
};
