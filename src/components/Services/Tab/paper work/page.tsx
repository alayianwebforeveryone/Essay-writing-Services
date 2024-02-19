import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const dataOne = [
  { title: "Annotated Bibliography" },
  { title: "Creative Writing" },
  { title: "Case Study" },
  { title: "Editing and Proofreading" },
  { title: "Literature Review" },
  { title: "Book Review" },
  { title: "Movie/Book Review" },
  { title: "Research Paper" },
  { title: "Presentation / Speech" },
  { title: "Review / Critical Thinking" },
  { title: "Term Paper / Essay" },
  { title: "Admission Essay" },
  { title: "Report Writing" },
  { title: "Research Proposal" },
  { title: "Thesis / Dissertation" },
  { title: "Article Review" },
  { title: "Reflective Writing" },
  { title: "Reflective Writing" },
];
// const dataTwo = [
//   { title: "Editing and Proofreading" },
//   { title: "Literature Review" },
//   { title: "Book Review" },
// ];
// const dataThree = [
//   { title: "Movie/Book Review" },
//   { title: "Research Paper" },
//   { title: "Presentation / Speech" },
// ];
// const dataFour = [
//   { title: "Review / Critical Thinking" },
//   { title: "Term Paper / Essay" },
//   { title: "Admission Essay" },
// ];
// const dataFive = [
//   { title: "Report Writing" },
//   { title: "Research Proposal" },
//   { title: "Thesis / Dissertation" },
// ];
// const dataSix = [
//   { title: "Article Review" },
//   { title: "Reflective Writing" },
//   { title: "Reflective Writing" },
// ];

function PaperWork() {
  // const {} = props

  return (
    <div>
      <div className="  grid bgGeneral scrollbar-thumb-[#276886] py-8 rounded-lg px-4 justify-center h-72 md:h-auto scrollbar   overflow-y-auto  gap-8 md:grid-cols-3">
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

export default PaperWork;
