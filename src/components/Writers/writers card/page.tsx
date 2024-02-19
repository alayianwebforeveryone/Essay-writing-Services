"use client";
import React from "react";
import { Button } from "@/components/ui/button";
// import ReactRating from "react-rating";
// import { FaStar } from "react-icons/fa";



import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import TeamRating from "../ratingStar/page";

interface cardProps {
  title: string;
  reviews: number;
  body: string;
  rating: string;
  // ratingInStar: number;
}

function WritersCard(props: cardProps) {
  const { title, body, rating, reviews } = props;
  // const ratingNum: number = 2.3;

  return (
    <Card className="bg-purple-200">
      <CardHeader>
        <CardTitle className="text-center md:w-[40%] flex mx-auto text-purple-900   font-bold text-lg">
          {title}
        </CardTitle>
        <CardDescription className="flex text-sm text-center font-bold justify-center w-full ">
          {rating} &nbsp;
          <div className="mt-[1px]">
           </div>

          &nbsp; ({reviews} Reviews)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p
          className="text-center text-[14px]"
          dangerouslySetInnerHTML={{ __html: body }}
        ></p>
      </CardContent>
      <CardFooter>
        <Button className="flex mx-auto  bg-purple-800 hover:bg-purple-500 ">
          Hire me
        </Button>
      </CardFooter>
    </Card>
  );
}

export default WritersCard;
