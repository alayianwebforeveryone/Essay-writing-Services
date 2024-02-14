import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const dataOne = [
  { title: "MCQ's Question" },
  { title: "Problems & Solutions" },
  { title: "Short Answer Questions" },
];

function OtherAssignment() {
  return (
    <div>
      <div className="  flex flex-col   bgGeneral py-8 rounded-lg px-4 justify-center gap-8 ">
        {[
          dataOne.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-[#276886]  shadow-lg rounded-xl px-4 py-1"
              >
                <Checkbox /> {item.title}
              </div>
            );
          }),
        ]}
      </div>
      <div>
        <Button className="flex justify-center mx-auto mt-8   bg-purple-500 ">
          Order Now
        </Button>
      </div>
    </div>
  );
}

export default OtherAssignment;
