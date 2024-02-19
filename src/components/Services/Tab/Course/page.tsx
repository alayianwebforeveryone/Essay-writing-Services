import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const dataOne = [
  { title: "Math Assignment" },
  { title: "Chemistry Assignment" },
  { title: "Statistics Assignment" },
  { title: "Physics Assignment" },
  { title: "Chemistry Assignment" },
  { title: "Book Review" },
  { title: "Biology Assignment" },
  { title: "Engineering Assignmen" },
  { title: "Geography Assignment" },
  { title: "Computer" },
  { title: "Term Paper / Essay" },
 
];

function CourseWork() {
  return (
    <div>
      <div className=" scrollbar-thumb-[#276886] scrollbar   overflow-y-auto h-72  grid bgGeneral py-8 rounded-lg px-4 justify-center gap-8 md:grid-cols-3 ">
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

export default CourseWork;
