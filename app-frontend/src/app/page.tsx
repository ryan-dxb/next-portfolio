"use client";

import { NextPage } from "next";
import { useTypingText } from "@/hooks/useTypingText";
import Image from "next/image";

export default function Home() {
  const { word, stop, start } = useTypingText(
    ["fast", "reliable", "affordable"],
    130,
    20
  );

  return (
    <div className="relative w-full h-full ">
      <div
        id="Main"
        className="flex flex-row items-center justify-center w-full h-full"
      >
        <div className="w-1/2 ">
          <h3 className="text-sm font-semibold uppercase">
            Welcome to my website!
          </h3>
          <div className="my-4 space-y-3">
            <h1 className="text-5xl font-bold">Hi, I'm Ryan Pereira</h1>
            <h2 className="text-2xl font-semibold">a {word}</h2>
          </div>
          <p className="text-sm font-semibold">
            I'm a passionate full-stack Python and JavaScript developer,
            dedicated to creating innovative and efficient solutions that drive
            business success.
          </p>
        </div>
        <div className="flex justify-end w-1/2">
          <div className="relative rounded-full w-96 h-96 bg-gray-50">
            <Image
              alt="Personal Portfolio Image"
              src="/home-banner.png"
              fill
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
