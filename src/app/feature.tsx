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
import { motion } from "framer-motion";

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

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function Features() {
  return (
    <section className="py-28 px-4">
      <motion.div
        className="container mx-auto mb-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
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
      </motion.div>

      <motion.div
        className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {FEATURES.map((props, idx) => (
          <motion.div key={idx} variants={fadeInUp}>
            <FeatureCard {...props} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Features;
