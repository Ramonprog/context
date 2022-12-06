import React from "react";
import { useContext } from "react";
import ChangeCounter from "../components/ChangeCounter";
import { CounterContext } from "../context/CounterContex";

const Home = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h1>Home</h1>
      <p>Valor do Contador: {counter}</p>
      <ChangeCounter />
    </div>
  );
};

export default Home;
