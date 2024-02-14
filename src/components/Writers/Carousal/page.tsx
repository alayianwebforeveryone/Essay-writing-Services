import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import WritersCard from "../writers card/page";
// interface Props {}

const data = [
  {
    reviews: 233,
    title: "Smith T",
    body: "<b>Competencies</b>: Business and Finance Psychology, Liberal Arts & Humanities",
    rating: 2.5,
  },
  {
    reviews: 133,
    title: "K Wiliam ",
    body: "<b>Competencies</b>: Business and Finance Psychology, Liberal Arts & Humanities",
    rating: "4.5",
  },
  {
    reviews: 220,
    title: "W Kaylin",
    body: "<b>Competencies</b>: Business and Finance Psychology, Liberal Arts & Humanities",
    rating: 3,
  },
  {
    reviews: 420,
    title: " P Jasyal ",
    body: "<b>Competencies</b>: Education and Finance Psychology, Liberal Arts & Humanities",
    rating: 3,
  },
  {
    reviews: 310,
    title: " R Khayam ",
    body: "<b>Competencies</b>: Business and Finance Psychology, Liberal Arts & Humanities",
    rating: 3.5,
  },
  {
    reviews: 350,
    title: " U Mosa ",
    body: "<b>Competencies</b>: Englich and Finance Psychology, Science Arts & Humanities",
    rating: 2.5,
  },
  {
    reviews: 350,
    title: " G Kumar ",
    body: "<b>Competencies</b>: History and Finance Psychology, Liberal Arts & Humanities",
    rating: 2.5,
  },
];

function CarousalContainer() {
  const reviews = 233;

  return (
    <Carousel className=" py-6 w-[80%] mx-auto px-4 my-10 border bg-white">
      <CarouselContent
        className="w-[100%]
       "
      >
        {data.map((item, index) => {
          return (
            <CarouselItem
              key={index}
              className="md:basis-1/3 flex lg:basis-1/3 my-0"
            >
              <WritersCard
                reviews={item.reviews}
                title={item.title}
                rating={item.rating}
                body={item.body}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CarousalContainer;
