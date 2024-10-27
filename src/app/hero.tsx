"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gradient-to-r from-black via-gray-700 to-black bg-size-200 animate-gradient-move px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              color="white"
              className="mb-4 text-[2.5rem] font-bold"
            >
              Let's build the future together <br />
              starting with your vision.
            </Typography>
            <Typography
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              At <strong className="text-red-500">Creatify Technologies</strong>, we are passionate about transforming
              ideas into cutting-edge software solutions. At Creatify
              Technologies, we provide{" "}
              <ReactTyped
                className="text-red-500 font-bold"
                strings={[
                  "Modern Websites",
                  "CRM Development",
                  "Mobile Applications",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
              .|
            </Typography>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                let's Connect
              </Button>
            </div>
          </div>
          <Image
            width={470}
            height={576}
            src="/image/iphones.png"
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <Typography
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            variant="h3"
            color="blue-gray"
            className="mb-3"
          >
            Empowering your vision—one innovative solution at a time.
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-5/12"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Welcome to Creatify Technologies, where we bring ideas to life with
            innovative, high-performance software solutions. Our team is
            dedicated to transforming visions into impactful Android apps and IT
            solutions that drive success. Let’s create the future of digital,
            together.
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
