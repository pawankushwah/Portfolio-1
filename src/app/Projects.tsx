import Reveal from "@/components/Reveal";
import RevealImage from "@/components/RevealImage";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Projects() {
  const Project = [
    {
      metaData: {
        title: "CodeShop Ecommerce App",
        url: "https://codeshop-ecommerce-application.vercel.app/",
        description:
          "Introducing Codeshop Ecommerce App, Codeshop allows you to explore an array of products showcased through vibrant images and engaging videos. Codeshop isn't just about browsing – it's about making your favorite items yours. Through an intuitive cart system.",
      },
      images: [
        {
          id: 1,
          name: "Text Utility Pic 1",
          src: "/images/project/1/pic1.png",
        },
      ],
    },
    {
      metaData: {
        title: "Text Utility App",
        url: "https://pawankushwah.github.io/TextUtil",
        description:
          "Introducing the Text Utility App – where words find a new dimension and text manipulation becomes an art.",
      },
      images: [
        {
          id: 1,
          name: "Text Utility Pic 1",
          src: "/images/project/2/pic1.png",
        },
      ],
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center bg-blue-500 p-5" id="Projects">
        <Reveal>
          <div className="text-7xl lg:text-9xl font-bold text-center text-white py-10">
            Projects
          </div>
        </Reveal>
      </div>

      {Project.map((project, index) => {
        return (
          <div key={index}>
            <Reveal style="">
              <div className="absolute w-20 h-20 p-2 bg-white border-4 border-black font-extrabold text-black text-6xl rounded-full flex justify-center items-center -my-10">
                {index + 1}
              </div>
            </Reveal>

            <div className=" max-w-screen bg-white p-5 py-20 flex flex-col lg:flex-row items-center justify-center text-black gap-2">
              <a
                href={project.metaData.url}
                className="flex flex-col justify-center items-center"
              >
                {/* project Title */}
                <div className="font-bold text-3xl lg:text-4xl text-center mb-4">
                  <Reveal>
                    <>{project.metaData.title}</>
                  </Reveal>
                </div>

                <RevealImage>
                  <div className="flex justify-center">
                    <div className="carousel carousel-center max-w-full w-full lg:w-1/2 p-4 space-x-4 bg-neutral rounded-box">
                      {/* images */}
                      <div className="carousel-item w-full lg:m-auto lg:w-full">
                        {project.images.map((e) => {
                          return (
                            <Image
                              key={e.id}
                              alt={e.name}
                              width={900}
                              height={900}
                              src={e.src}
                              className="rounded-box w-full h-full"
                            />
                          );
                        })}
                        ;
                      </div>
                    </div>
                  </div>
                </RevealImage>
              </a>
              <div className="w-3/4 text-xl md:text-2xl my-10 lg:w-1/2 lg:m-0 text-center">
                {/* Project Description */}
                <Reveal>
                  <>
                    <div>{project.metaData.description}</div>
                    <a href={project.metaData.url} className="text-blue-500 m-10">Visit Site <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                  </>
                </Reveal>
              </div>
            </div>
            <hr className="w-full h-1 bg-gray-400" />
          </div>
        );
      })}
    </>
  );
}
