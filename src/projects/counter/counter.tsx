import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const Counter = () => {
  const [curVal, setCurVal] = useCookies(["counter"]);

  const [counter, setCounter] = useState(Number(curVal.counter) || 0);

  useEffect(() => {
    // Update the counter state when the cookie changes
    setCounter(Number(curVal.counter) || 0);
  }, [curVal]);

  const handleIncrement = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    setCurVal("counter", newCounter); // Update the cookie value
  };

  const handleDecrement = () => {
    const newCounter = counter - 1;
    setCounter(newCounter);
    setCurVal("counter", newCounter); // Update the cookie value
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-8 mx-8">
      <h1 className="text-9xl relative bottom-32">{counter}</h1>

      <div className="space-x-8 flex  w-full">
        <button
          onClick={handleIncrement}
          className="bg-white w-full h-44 text-neutral-800 text-semibold rounded-md px-3 py-1"
        >
          + 1
        </button>
        <button
          onClick={handleDecrement}
          className="bg-white w-full h-44 text-neutral-800 text-semibold rounded-md px-3 py-1"
        >
          - 1
        </button>
      </div>
    </main>
  );
};

export default Counter;
