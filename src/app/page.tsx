"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  let [page, setPage] = useState(0);

  const Increment = () => {
    setPage(page++);
  };
  const decreament = () => {
    if (page > 0) {
      setPage(page--);
    }
  };

  return (
    <main className="">
      <div className="flex justify-around    w-full h-auto py-48  border ">
        <div className="w-[40%]  ">
          <h4 className="headTwo">Essay writing service your perfect essay</h4>
          <p className="text-md mt-4 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            perferendis eius, sapiente reiciendis porro cumque, ut veniam amet
            nam veritatis accusantium exercitationem ullam odit voluptatibus aut
            corporis nihil inventore a.
          </p>
          <Button className="rounded-full mt-10 bg-purple-700 py-2 text-white hover:text-black hover:bg-purple-400 px-2">
            Start Writing Services
          </Button>
        </div>
        <div className=" w-[30%]">
          <div className="absolute top-20 right-16  ">
            <Image
              src="/circleHeader.png"
              alt="circle-design"
              width="550"
              height="700"
            ></Image>
          </div>
          <div className="py-4  flex flex-col justify-center items-center relative mt-4 px-2 border rounded-2xl w-[70%] bg-purple-500">
            <h4 className="text-center text-white font-bold text-lg">
              Calculate Price
            </h4>
            <button className=" w-[80%]  mx-auto mt-4 bg-white rounded-lg text-sm text-black  border py-1  hover:text-black hover:bg-purple-400 ">
              Analytical Essay
            </button>

            <button
              title=""
              className="w-[80%] mx-auto mt-4 bg-white rounded-lg text-sm text-black  border py-1  hover:text-black hover:bg-purple-400  "
            >
              School Essay
            </button>

            <button className=" w-[80%] mx-auto -py-1 mt-4 bg-white rounded-lg text-sm text-black  border py-1  hover:text-black hover:bg-purple-400 ">
              With in 24 hour
            </button>

            <div className="flex justify-between gap-12 border px-2 py-1 mt-4 text-center">
              <button
                onClick={Increment}
                className="border leading-2 -py  px-2 hover:bg-slate-600 text-white bg-purple-800 rounded text-lg"
              >
                +
              </button>
              <p>{page}</p>
              <button
                onClick={decreament}
                className="border leading-4 px-[11px] hover:bg-slate-600 text-white bg-purple-800 rounded text-lg"
              >
                -
              </button>
            </div>
            <Button className=" w-[90%] mx-auto text-white mt-4 bg-blue-400 rounded-lg text-sm    border -py-1  hover:text-black hover:bg-purple-400 ">
              Order now
            </Button>
          </div>
        </div>
      </div>
      {/* --------------------------//*Discover the un parallel Advantages--------------- */}

      <div className="py- border px-2 ">
        <h1 className="text-center mb-8 headTwo">
          Discover the unparalled advantages of our services{" "}
        </h1>
        <div className=" flex justify-between px-16 ">
          {/* //! ---------------left text */}
          <div className="flex justify-center gap-4 flex-col">
            <div className="">
              <h5 className="text-lg font-bold">
                Carefully selected essay writers
              </h5>
              <p className="text-sm">
                Stay completely anonymous with our paper writing service.
              </p>
            </div>
            <section className="">
              <h5 className="text-lg font-bold">Rapid writing Services:</h5>
              <p className="text-sm">
                We prioritize both speed and excellence in our writing service.
              </p>
            </section>
          </div>
          {/* //! center part */}
          <div className=" border-purple-500 border-2 pb-1 ">
            <div className="text-center mb-4">
              <h3>Feature you will get free</h3>
            </div>
            <div className="flex justify-center gap-10 px-4 ">
              <div>
                <ul className="text-sm">
                  <li className="mt-2">Unlimeted Revisions</li>
                  <li className="mt-2">Formatting</li>
                  <li className="mt-2">Turntin Report</li>
                  <li className="mt-2">Title Pag</li>
                  <li className="mt-2">Proof Reading</li>
                  <li className="mt-2">Unlimeted Revisions</li>
                </ul>
              </div>
              <div>
                <ul className="text-sm">
                  <li className="mt-2">
                    {" "}
                    <s>$10.00</s> <span className=" px-2 bg-red-500">Free</span>
                  </li>
                  <li className="mt-2">
                    {" "}
                    <s>$20.00</s> <span className=" px-2 bg-red-500">Free</span>
                  </li>
                  <li className="mt-2">
                    {" "}
                    <s>$30.00</s> <span className=" px-2 bg-red-500">Free</span>
                  </li>
                  <li className="mt-2">
                    {" "}
                    <s>$25.00</s> <span className=" px-2 bg-red-500">Free</span>
                  </li>
                  <li className="mt-2">
                    {" "}
                    <s>$15.00</s> <span className=" px-2 bg-red-500">Free</span>
                  </li>
                  <li className="mt-2">
                    {" "}
                    <s>$5.000</s> <span className=" px-2 bg-red-500">Free</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Button className="w-[80%] flex justify text-sm -py-1 mx-auto mt-6 rounded-sm bg-purple-500">
                Write my essay
              </Button>
            </div>
          </div>
          {/* //! ---------------rigth text */}
          <div className="flex justify-center gap-4 flex-col">
            <section className="">
              <h5 className="text-lg font-bold">
                Carefully selected essay writers
              </h5>
              <p className="text-sm">
                Stay completely anonymous with our paper writing service.
              </p>
            </section>
            <section className="">
              <h5 className="text-lg font-bold">Rapid writing Services:</h5>
              <p className="text-sm">
                We prioritize both speed and excellence in our writing service.
              </p>
            </section>
          </div>
        </div>
      </div>
      {/* --------------------------//*FAQs------------------------ */}
      <div className="Container border bgFaq my-8">
        <div className="flex flex-col justify-center gap-2">
          <section className="py-10 px-4 w-[70%] mx-auto">
            <h3 className="text-center  whiteHead ">
              Seeking a Proficient Essay Writer?
            </h3>
            <p className="text-center  text-sm  text-white mt-12 w-[80%] mx-auto">
              Get top-notch essay writing assistance with our user-friendly
              service, providing students a wide range of support and
              exceptional customer care. Achieve expert-level results
              effortlessly with our experienced professionals.
            </p>
          </section>
          <div className="w-[50%] mx-auto mb-12 ">
            <div>
              <h3 className="font-bold text- 2xl-10 text-center whiteHead">
                Frequently asked Question
              </h3>
            </div>

            <Accordion type="single" collapsible className="text-white">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-md">
                  Why must I pay upfront for my essay writing?
                </AccordionTrigger>
                <AccordionContent className="text-justify">
                  Our team consists of genuine professionals, and we highly
                  appreciate their time and contributions, ensuring they receive
                  fair pay and compensation. Hence, we request our clients to
                  make upfront payments as a sign of their financial capacity to
                  support our writers efforts. To ensure our clients confidence,
                  we offer a money-back guarantee and withhold the funds until
                  you approve the final work to your satisfaction.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-md">
                  Is the payment is advance or after work?
                </AccordionTrigger>
                <AccordionContent className="text-justify">
                  Our team consists of genuine professionals, and we highly
                  appreciate their time and contributions, ensuring they receive
                  fair pay and compensation. Hence, we request our clients to
                  make upfront payments as a sign of their financial capacity to
                  support our writers efforts. To ensure our clients confidence,
                  we offer a money-back guarantee and withhold the funds until
                  you approve the final work to your satisfaction.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-md">
                  Who are the writers handling your order?
                </AccordionTrigger>
                <AccordionContent className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing, elit.
                  Atque iusto porro esse ea repellat consequuntur maxime,
                  mollitia voluptatem ratione quod quaerat obcaecati
                  dignissimos, hic, voluptas delectus earum illum possimus
                  repellendus.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-md">
                  How can I trust you to write my essay without any scam?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-jsutify">
                  Lorem ipsum dolor sit amet consectetur adipisicing, elit.
                  Atque iusto porro esse ea repellat consequuntur maxime,
                  mollitia voluptatem ratione quod quaerat obcaecati
                  dignissimos, hic, voluptas delectus earum illum possimus
                  repellendus.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* --------------------------//*Subscribe------------------------ */}

      <div className="   flex justify-between py-2 px-16 bg-slate-500 border">
        <p className="text-white">
          Subscribe now to receive an exclusive 15% discount coupon to your
          email!
        </p>
        <div className="flex justify-center gap-4 ">
          <input
            type="text"
            placeholder="Enter your Email"
            className="rounded-full bg-white px-2 py-1 "
          />
          <Button className="rounded-sm bg-purple-500 text-white py-1 px-2">
            Subscribe
          </Button>
        </div>
      </div>

      {/* --------------------------//*Footer------------------------ */}
    </main>
  );
}
