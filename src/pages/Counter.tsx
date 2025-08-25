import React, { useState } from "react";

const Counter: React.FC = () => {
 
  const [incrementLoading,setIncrementLoading] = useState<boolean>(false);

  return (
    <div>
        {/* =========== Count ======== */}
      <h2 className="text-center font-semibold text-xl text-cyan-600">
        Count : <span className="text-2xl text-blue-500"></span>{" "}
      </h2>
      {/* ========== Increment Button ======= */}
     
    </div>
  );
};

export default Counter;
