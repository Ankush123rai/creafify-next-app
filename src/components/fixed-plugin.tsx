"use client";
import Image from "next/image";
// import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  return (
    <a href="" target="_blank">
      <button
        // color="white"
        // size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
      >
        <Image
          width={128}
          height={100}
          className="w-5 h-5"
          alt="Material Tailwind"
          src="/logos/creatifyLogo.png"
        />{" "}
        Creatify Technologies
      </button>
    </a>
  );
}
