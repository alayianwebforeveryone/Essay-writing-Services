"use client";
import Image from "next/image";
import Link from "next/link";
import React, { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";

// interface Props {}

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await fetch("http://localhost:3000/Signin", {
      method: "POST",
      headers: { "Contenet-type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    await router.push("/Signin");
  };

  // const {} = props

  return (
    <div className="block max-w-sm rounded-lg mt-12 mb-12 md:mx-auto mx-12  bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:mt-40">
      <div className="flex justify-end -mt-4 ">
        <Link
          href="/"
          className="hover:shadow-lg -py-2 rounded-full bg-[#209fc5] hover:bg-slate-800  "
        >
          <Image src="/end.svg" alt="close" height={28} width={28}></Image>
        </Link>
      </div>
      <form onSubmit={submit}>
        <div className="relative " data-te-input-wrapper-init>
          <input
            type="text"
            className="peer block min-h-[auto] my-4 w-full rounded-sm border bg-transparent px-3 pt-4 pb-[0.32rem] leading-[1.6] outline-none  transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="pointer-events-none absolute left-3 top-2 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
            Full Name
          </label>
        </div>
        <div className="relative mb-12" data-te-input-wrapper-init>
          <input
            type="email"
            className="peer block min-h-[auto] my-4 w-full rounded-sm border bg-transparent px-3 pt-4 pb-[0.32rem] leading-[1.6] outline-none  transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInputEmail1"
            value={email}
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="pointer-events-none absolute left-3 top-2 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
            Email address
          </label>
          <small
            id="emailHelp"
            className="absolute w-full text-neutral-500 dark:text-neutral-200"
            data-te-input-helper-ref
          >
            We will never share your email with anyone else.
          </small>
        </div>

        {/* <!--Password input--> */}
        <div className="relative mb-6" data-te-input-wrapper-init>
          <input
            type="password"
            className="peer block min-h-[auto] my-4 w-full rounded-sm border bg-transparent px-3 pt-4 pb-[0.32rem] leading-[1.6] outline-none  transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInputPassword1"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="pointer-events-none absolute left-3 top-2 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
            Set Password
          </label>
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <input
            type="password"
            className="peer block min-h-[auto] my-4 w-full rounded-sm border bg-transparent px-3 pt-4 pb-[0.32rem] leading-[1.6] outline-none  transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInputPassword1"
            placeholder="Password"
          />
          <label className="pointer-events-none absolute left-3 top-2 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
            Confirm Password
          </label>
        </div>

        {/* <!--Submit button--> */}
        <button
          type="submit"
          className="inline-block rounded  bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
