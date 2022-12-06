import { useCounterContext } from "../hooks/useCounterContext";

const ChangeCounter = () => {
  const { counter, setCounter } = useCounterContext();
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Acione valor ao contador
      </button>
    </div>
  );
};

export default ChangeCounter;
