"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "w-full" | "w-fit";
  delay?: number;
}

export default function RevealImage({ children, width = "w-fit", delay= 0.5 }: Props) {
  const mainElementRef = useRef(null);
  const isInView = useInView(mainElementRef);
  const mainContentControl = useAnimation();
  const greenSlideControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainContentControl.start("visible");
      greenSlideControl.start("hidden");
    }
  }, [isInView, mainContentControl, greenSlideControl])
  return (
    <div ref={mainElementRef} className={`${width} overflow-hidden relative`}>
      <motion.div
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
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
          hidden: { left: "100%"}
        }}
        initial={"visible"}
        animate={greenSlideControl}
        transition={{delay: delay}}
        className="absolute top-0 right-0 left-0 bottom-0 bg-blue-500 w-full h-full animate-pulse"
      ></motion.div>
    </div>
  );
}
