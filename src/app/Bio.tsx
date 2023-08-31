import Image from "next/image";
import Header from "./Header";
import Reveal from "@/components/Reveal";
import RevealImage from "@/components/RevealImage";

export default function Bio() {
  return (
    <>
      <div className="grid grid-cols-1 w-full min-h-screen" id="Bio">
        <div className="bg-blue-800">
          <Header />
          <div className="h-[85%] p-15 text-7xl lg:text-9xl text-white flex flex-col md:flex-row items-center justify-around">
            <div className="p-10 flex flex-col">
              <Reveal>
                <span className="text-yellow-300 text-5xl md:text-7xl">
                  Hey I&apos;m,
                </span>
              </Reveal>
              <Reveal>
                <span className="text-9xl">Pawan</span>
              </Reveal>
              <Reveal>
                <div className="text-3xl">
                  Web Developer (ReactJS, NextJS, Tailwindcss)
                </div>
              </Reveal>
              
            </div>
            <div className="flex justify-center items-center p-15 md:p-0">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-transparent justify-center items-center flex border-2 border-white rounded-full overflow-hidden shadow-[rgba(255,_255,_255,_0.2)_30px_30px_40px_10px]">
                <RevealImage>
                  <Image
                    src={"/myPhoto2.jpg"}
                    className="object-cover"
                    alt="Photo"
                    height={400}
                    width={400}
                  />
                </RevealImage>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
