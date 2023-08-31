import Reveal from "@/components/Reveal";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faCss3Alt,
  faHtml5,
  faNodeJs,
  faReact,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";

export default function MyStack() {
  return (
    <div
      className="flex flex-col justify-center text-black bg-white"
      id="MyStack"
    >
      <Reveal>
      <div className="text-7xl lg:text-9xl font-bold text-center bg-blue-500 text-white w-screen py-10">
        My Stack
      </div>
      </Reveal>
      <Reveal style="w-full overflow-hidden">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 justify-center items-center gap-2 select-none p-10 text-7xl">
          <FontAwesomeIcon icon={faHtml5} className="text-red-400" />
          <FontAwesomeIcon icon={faCss3Alt} className="text-blue-400" />
          <FontAwesomeIcon icon={faSquareJs} className="text-yellow-400" />
          <FontAwesomeIcon icon={faReact} className="text-blue-400" />
          <FontAwesomeIcon icon={faNodeJs} className="text-green-500" />
          <Image
            src={"/next.svg"}
            alt="next"
            className="text-white text-center w-20 h-auto"
            width={200}
            height={200}
          />
          <Image
            src={"/tailwind.svg"}
            alt="tailwind"
            className="text-white text-center w-20 h-auto"
            width={200}
            height={200}
          />
          <Image
            src={"/mongodb.svg"}
            alt="mongodb"
            className="text-white text-center w-20 h-auto"
            width={200}
            height={200}
          />
        </div>
      </Reveal>
    </div>
  );
}
