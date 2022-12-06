import { useContext } from "react";
import { CounterContext } from "../context/CounterContex";

const ChangeCounter = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Acione valor ao contador
      </button>
    </div>
  );
};

export default ChangeCounter;
