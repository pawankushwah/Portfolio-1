import Image from "next/image";
import Header from "./Header";
import Reveal from "@/components/Reveal";
import RevealImage from "@/components/RevealImage";

export default function Bio() {
  return (
    <>
      <div className="bg-blue-800 w-full h-full py-5" id="Bio">
        <Header />
        <div className="h-[85%] p-15 text-7xl lg:text-9xl text-white flex flex-col md:flex-row items-center justify-around">
          <div className="py-10 px-2 sm:p-10 flex flex-col items-center md:items-start">
            <Reveal>
              <div className="text-yellow-300 text-5xl md:text-7xl">
                Hey I&apos;m,
              </div>
            </Reveal>
            <Reveal>
              <div className="text-5xl sm:text-7xl">Pawan</div>
            </Reveal>
            <Reveal>
              <>
                <div className="text-white font-bold text-4xl sm:text-5xl md:text-3xl text-center md:text-left">
                  I&apos;m a Web Developer
                </div>
              </>
            </Reveal>
          </div>
          <div className="flex justify-center items-center p-15 md:p-10">
            <div className="w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-transparent justify-center items-center flex border-2 border-white rounded-full overflow-hidden shadow-[rgba(255,_255,_255,_0.2)_30px_30px_40px_10px]">
              <RevealImage>
                <Image
                  src={"/myPhoto2.jpg"}
                  className="object-cover"
                  alt="Photo"
                  height={370}
                  width={370}
                />
              </RevealImage>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
