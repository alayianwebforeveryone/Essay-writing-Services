import WritersCard from "@/components/Writers/writers card/page";
import React from "react";
import "./../globals.css";
import CarousalContainer from "@/components/Writers/Carousal/page";
import { Button } from "@/components/ui/button";
import Reviews from "@/components/Writers/Reviews/page";

function Writers() {
  const reviewsData = [
    {
      title: "Public Relation",
      body: "“The writer diligently adhered to my some dummy data is here precise instructions and delivered the paper ahead of schedule. They exhibited excellent communication skills..",
    },
    {
      title: "Creative Writing on Buisness",
      body: "The writer diligently adhered to my precise here is some dummy data instructions and delivered the paper ahead of schedule. They exhibited excellent communication skills...",
    },
  ];
  //   const {} = props;

  return (
    <div className="container mt-40">
      <section className="">
        <h1 className="text-center my-4 headTwo text-bold ">
          We have available expert essay writer
        </h1>
        <p className="text-center text-[14px] leading-6 w-[50%] mx-auto">
          TopWritingService, a reputable platform, collaborates with
          highly-rated professional essay writers available online. We provide
          exceptional online writing services that connect students seeking
          assistance with carefully selected experts. Our writers are evaluated
          based on their performance and feedback from customers. Explore our
          experts profiles to find the most suitable writer for your specific
          project.
        </p>
      </section>
      {/* //* ===========================First Section ENDING======================= */}
      <CarousalContainer />
      {/* //* =========================Carousal ENDING======================= */}

      <div className="flex justify-center  gap-10 px-12 py-8">
        {/* --------first--- */}
        <div className="flex justify-center w-[30%] gap-4 flex-col">
          <h1 className="headTwo w-full">Our Service Reviews</h1>
          <p className="w-[90%] text-">
            Our service has received enthusiastic praise from clients!
          </p>
          <Button className="bg-purple-500 w-[30%]   rounded-r-full  py-1">
            Try Now
          </Button>
        </div>

        {reviewsData.map((item, index) => {
          return <Reviews key={index} title={item.title} body={item.body} />;
        })}
      </div>

      {/* //* =========================Reviews ENDING======================= */}
    </div>
  );
}

export default Writers;
