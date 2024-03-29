import Step from "@/components/Services/Step/page";
import ServicesComp from "@/components/Services/page";
import { Button } from "@/components/ui/button";
import React from "react";

// interface Props {}

function Page() {
  // const {} = props

  return (
    <div className="md:my-36 my-12">
      <div className="">
        <h1 className="headTwo text-center md:mx-0 mx-2 ">
          Allow us to present our team of skilled essay writers!
        </h1>
        <Button className="bg-purple-700 flex mx-auto my-6 hover:bg-purple-400  rounded-full ">
          Register Now
        </Button>

        <div>
            <ServicesComp/>
        </div>
        <div>
          <Step/>
        </div>
      </div>
    </div>
  );
}

export default Page;
