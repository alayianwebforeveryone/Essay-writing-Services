import Image from "next/image";
import React from "react";

interface stepProps {
  stepNumber: number;
}

function StepCircle(props: stepProps) {
  const {stepNumber} = props;

  return (
    <div className="">
      <div className="">
      
        <div className="h-20 w-20  rounded-full bg-[#236E87] hover:bg-[#601D7F] hover:outline outline-offset-4 outline-[#601D7F] text-2xl z-10 text-white flex items-center justify-center duration-100">{stepNumber}</div>
      </div>

    </div>
  );
}

export default StepCircle;
