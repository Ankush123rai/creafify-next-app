"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  CpuChipIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: CpuChipIcon,
    title: "AI Services",
    children:
      "Leverage our advanced AI solutions to transform data into valuable insights, automate processes, and enhance decision-making.",
  },
  {
    icon: GlobeAltIcon,
    title: "Website Development",
    children:
      "Build responsive, high-performance websites tailored to your business needs, ensuring an engaging online presence.",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "App Development",
    children:
      "Create intuitive, user-friendly mobile applications designed to provide seamless user experiences across platforms.",
  },
  {
    icon: PencilSquareIcon,
    title: "UI/UX Design",
    children:
      "Design visually appealing, user-centered interfaces that enhance usability, accessibility, and brand consistency.",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          variant="h1"
          color="blue-gray"
          className="mb-4"
        >
          Features
        </Typography>
        {/* <Typography
          variant="lead"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
          Access your learning materials on the go. Whether you&apos;re
          commuting, waiting for a friend, or just have a few minutes to spare,
          our app fits seamlessly into your busy life.
        </Typography> */}
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
