"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, delay } from "framer-motion";

interface Props {
  children: JSX.Element;
  style?: string;
  delay?: number;
}

export default function Reveal({ children, style="w-fit overflow-hidden", delay=0.5 }: Props) {
  const mainElementRef = useRef(null);
  const isInView = useInView(mainElementRef,{ once: true });
  const mainContentControl = useAnimation();
  const greenSlideControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainContentControl.start("visible");
      greenSlideControl.start("hidden");
    }
  }, [isInView, greenSlideControl, mainContentControl])
  return (
    <div ref={mainElementRef} className={`relative ${style}`} >
      <motion.div
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y:"100%" },
        }}
        initial="hidden"
        animate={mainContentControl}
        transition={{ duration: 0.5, delay: delay * 0.75}}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          visible: { left: 0},
          hidden: { left: "120%"}
        }}
        initial={"visible"}
        animate={greenSlideControl}
        transition={{delay: delay}}
        className="absolute top-4 right-0 left-0 bottom-4 bg-blue-500 w-full h-[80%] rounded-lg animate-pulse"
      ></motion.div>
    </div>
  );
}
