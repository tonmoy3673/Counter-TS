import React, { useState } from "react";
import { useCounter } from "../context/Context";
import CustomButton from "./CustomButton";

const Counter: React.FC = () => {
  const { state, increment } = useCounter();
  const [incrementLoading,setIncrementLoading] = useState<boolean>(false);

  return (
    <div>
        {/* =========== Count ======== */}
      <h2 className="text-center font-semibold text-xl text-cyan-600">
        Count : <span className="text-2xl text-blue-500">{state.count} </span>{" "}
      </h2>
      {/* ========== Increment Button ======= */}
      <CustomButton loading={incrementLoading} title="Increment" onClick={async()=>{
        setIncrementLoading(true)
        await new Promise((res)=> setTimeout(res,500))
        increment();
        setIncrementLoading(false)
      }

      }/>
    </div>
  );
};

export default Counter;
