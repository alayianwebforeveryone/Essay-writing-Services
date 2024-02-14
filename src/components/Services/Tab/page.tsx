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
      <TabsList className="bg-[#c0c3e4] gap-12 w-[80%] flex mx-auto   ">
        <TabsTrigger value="paper" className="">
          Paper Work
        </TabsTrigger>
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
