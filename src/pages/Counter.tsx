import React from "react";
import { useCounter } from "../context/Context";

const Counter: React.FC = () => {
  const { state } = useCounter();

  return (
    <div>
      <h2 className="text-center font-semibold text-xl text-cyan-600">
        Count : <span className="text-2xl text-blue-500">{state.count} </span>{" "}
      </h2>
    </div>
  );
};

export default Counter;
