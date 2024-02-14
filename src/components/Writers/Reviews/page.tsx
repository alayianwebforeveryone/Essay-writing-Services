import React from "react";

interface reviewsProps {
  title: string;
  body: string;
}

function Reviews(props: reviewsProps) {
  const { title, body } = props;

  return (
    <div className=" w-[32%] bg-[#308bb9] px-4  py-6 ">
      <div className="bg-[rgb(232,232,236)] h-1 py-1 w-full mb-8"></div>
      <div className="border-8 border-y-0 px-4 border-[rgb(232,232,236]">
        <h1 className="font-bold text-lg text-white">{title}</h1>
        <p className="text-[13px] my-2 text-justify text-white ">{body}</p>
      </div>
      <div className="bg-[rgb(232,232,236)]  h-1 py-1 w-full mt-8"></div>
    </div>
  );
}

export default Reviews;
