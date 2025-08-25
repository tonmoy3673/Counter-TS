import React, { useState } from "react";
import { useCounter } from "../context/CounterContext";
import CustomButton from "./CustomButton";

const Counter: React.FC = () => {
  const {state,increment,decrement,reset} = useCounter();
  const [incrementLoading,setIncrementLoading] = useState<boolean>(false);
  const [resetLoading,setResetLoading] = useState<boolean>(false);
  const [decrementLoading,setDecrementLoading]= useState<boolean>(false);

  return (
    <div className="mt-5">
        {/* =========== Count ======== */}
      <h2 className="text-center font-semibold text-xl text-cyan-600">
        Count : <span className="text-2xl text-blue-500">{state?.count}</span>{" "}
      </h2>
      {/* =========== Buttons Container ========= */}
     <div className="py-3 flex justify-center items-center gap-3">
      {/* ========== Increment Button ======= */}
       <CustomButton onClick={(async()=>{
        setIncrementLoading(true);
        await new Promise((res)=> setTimeout(res,200));
        increment();
        setIncrementLoading(false);


      })} title="Increment +" loading={incrementLoading} className="bg-blue-500"/>

      <CustomButton className="bg-emerald-600" loading={resetLoading} title="Reset 0" onClick={async()=>{
        setResetLoading(true)
        await new Promise((res)=> setTimeout(res,200) )
        reset();
        setResetLoading(false)
      }}/>
      <CustomButton className="bg-emerald-600" loading={decrementLoading} title="Decrement -" onClick={async()=>{
        setDecrementLoading(true)
        await new Promise((res)=> setTimeout(res,200) )
        decrement();
        setDecrementLoading(false)
      }}/>
      {/* ======= End of Buttons Container ======== */}
     </div>
     
    </div>
  );
};

export default Counter;
