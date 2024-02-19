import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabItem from "./paper work/page";
import CourseWork from "./Course/page";
import OtherAssignment from "./Other Assignment/page";
import PaperWork from "./paper work/page";

// interface Props {}

function TabMenue() {
  // const {} = props

  return (
    <Tabs
      defaultValue="paper"
      className="w-[80%] rounded-md mx-auto py-8  bg-[#080c35]  "
    >
      <TabsList className=" bg-white md:gap-12 gap-2 f md:w-[80%] md:flex-row items-center justify-center flex-col   ">
        <TabsTrigger value="paper">Paper Work </TabsTrigger>
        <TabsTrigger value="course">Course/Home Work </TabsTrigger>
        <TabsTrigger value="Assignmnt">Othr Assignment </TabsTrigger>
      </TabsList>
      <TabsContent
        value="paper"
        className="text-white flex justify-center mt-8"
      >
        <PaperWork />
      </TabsContent>
      <TabsContent value="course" className="  text-white flex justify-center ">
        <CourseWork />
      </TabsContent>
      <TabsContent
        value="Assignmnt"
        className=" text-white flex justify-center "
      >
        <OtherAssignment />
      </TabsContent>
    </Tabs>
  );
}

export default TabMenue;
