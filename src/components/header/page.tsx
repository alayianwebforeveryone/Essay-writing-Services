"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="w-full">
      <nav className="md:w-[100%]   bg-topBottom   right-0 z-10 box-border">
        <div className="justify-between px-4 box-borer w-[100%] mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="box-border w-[100%]">
            <div className="flex items-center box-border justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <Image
                  src="/Logo.png"
                  alt="logo"
                  height="50"
                  width="100"
                ></Image>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? " md:p-0 block" : "hidden"
              }`}
            >
              <ul className=" md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-md text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900 md:hover:text-cyan-300   md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="pb-6 text-md text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900 md:hover:text-cyan-300  md:hover:bg-transparent">
                  <Link href="/Writers" onClick={() => setNavbar(!navbar)}>
                    Writers
                  </Link>
                </li>
                <li className="pb-6 text-md text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900 md:hover:text-cyan-300   md:hover:bg-transparent">
                  <Link href="/Services" onClick={() => setNavbar(!navbar)}>
                    Services
                  </Link>
                </li>
                <li className="pb-6 text-md text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900 md:hover:text-cyan-300 md:hover:bg-transparent">
                  <Link href="/Signup" onClick={() => setNavbar(!navbar)}>
                    Signup
                  </Link>
                </li>
                <li className="pb-6  text-md text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900   md:hover:text-cyan-300 md:hover:bg-transparent">
                  <Link href="/Signin" onClick={() => setNavbar(!navbar)}>
                    Signin
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
