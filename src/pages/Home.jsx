import React from "react";
import { useContext } from "react";
import { CounterContext } from "../context/CounterContex";

const Home = () => {
  const { counter } = useContext(CounterContext);

  return <div>{counter}</div>;
};

export default Home;
