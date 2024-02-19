import Image from "next/image";
import React from "react";
// interface Props {}
function Footer() {
  // const {} = props

  return (
    <div className="container flex flex-col justify-center gap-12  text-white text-sm items-center bg-topBottom bg-purple-700  py-8">
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-24 items-center">
        <div className="mx-auto  ">
          <Image src="/logo.png" alt=" logo" height={70} width={70}></Image>
        </div>
        <div className="md:py-12 px-8">
          <p>
            Disclaimer: Our essays and papers are meant solely for educational
            purposes and must not be submitted as original work.
          </p>
        </div>
      </div>

      <div className="flex justify-center md:px-8 px-2   flex-col-reverse md:flex-row gap-4 md:gap-48">
        <div className="">
          <p>All rights reserved-Copyrights &copy; 2024 writingservices.com</p>
        </div>
        <div>
          <p>Contact|Privacy|Terms</p>
        </div>
        <div className="flex justigy-center gap-2 ">
          <div>
            <Image src="/fb.svg" alt = "facebook" height = {20} width= {20}></Image>
          </div>
          <div>
            <Image src="/linkedin.svg" alt = "linkedin" height = {20} width= {20}></Image>
          </div>
          <div>
            <Image src="/youtube.svg" alt = "youtube" height = {20} width= {20}></Image>
          </div>
          <div>
            <Image src="/pintrest.svg" alt = "pintrest" height = {20} width= {20}></Image>
          </div>
     
        
        </div>
      </div>
    </div>
  );
}

export default Footer;
