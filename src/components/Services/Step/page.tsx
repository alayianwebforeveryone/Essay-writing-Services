import React from "react";
import StepCircle from "./StepCircle/page";
import Image from "next/image";
import StepTitle from "./StepCircle/StepTitle/page";
import { title } from "process";

// interface Props {}

function Step() {
  const data = [
    {
      stepNum: 1,
      title: "Create Account",
    },
    {
      stepNum: 2,
      title: "Fill the Order Formt",
    },
    {
      stepNum: 3,
      title: "Download Your Draft",
    },
    {
      stepNum: 4,
      title: "Create Account",
    },
  ];

  // const {} = props

  return (
    <div className="m-20  rounded  ">
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="headTwo text-center ">
          How Our Essay Writing Service Function
        </h1>
        <p className="w-[75%] text-justify ">
          To commence, the initial step is to establish an account. The
          registration procedure is swift and uncomplicated, requiring only a
          few moments of your time. Throughout this process, you will be asked
          to furnish a password and a valid email address. To initiate a write
          an essay for me request, all you need to do is fill out the 10-minute
          order form. Include the essential instructions, preferred sources, and
          deadline. If you desire the writer to mimic your writing style, you
          can attach a sample of your previous work. Once you have reviewed your
          paper, complete the necessary payment and finally download your
          finished paper.
        </p>
        <div
          className="flex justify-center gap-8 items-center w-[80%]
          "
        >
          {data.map((item, index) => {
            return (
              <div key={index}>
                <div className="flex items-center justify-center">
                  <Image
                    src="/rightArrow.svg"
                    alt="rigth Arrow"
                    height={50}
                    width={96}
                  />
                  <StepCircle stepNumber={item.stepNum} />
                </div>

                <div className="flex justify-center pl-20 text-center">
                  <StepTitle title={item.title} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Step;
