import React from "react";
import TabMenue from "./Tab/page";

// interface Props {}

function ServicesComp() {
  // const {} = props

  return (
    <div>
      <div className="w-[60%] mx-auto flex-col items-center my-12   flex justify-center gap-6">
        <h1 className="headTwo text-center">Types of Services</h1>
        <p className=" text-center">
          Our range of writer services caters to all your writing assignments.
          Take a look at some of our samples, and feel free to place your order
          without any hesitation.
        </p>
      </div>
      <TabMenue />
    </div>
  );
}

export default ServicesComp;
