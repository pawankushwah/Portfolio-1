import Image from "next/image";

export default function Projects() {
  const Project = [
    {
      metaData: {
        title: "CodeShop Ecommerce App",
        name: "",
        description: "This codeshop is created fpr selling images and videos",
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
        name: "",
        description:
          "This is Text utility app that helps us in changing the format of text",
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
      <div className="flex flex-col items-center bg-white p-5" id="Projects">
        <div className="text-7xl font-bold text-center text-blue-400 py-10">
          Projects
        </div>
      </div>

      {Project.map((project, index) => {
        return (
          <>
              <div className="absolute w-20 h-20 p-2 bg-white border-4 border-black font-extrabold text-black text-6xl rounded-full text-center -my-10">{index+1}</div>


            <div className="min-h-3/4 max-w-screen bg-gray-300 p-5 py-20 flex flex-col lg:flex-row items-center justify-center text-black">
              <div className="flex flex-col justify-center items-center">
                {/* project Title */}
                <div className="font-bold text-3xl text-center mb-4">
                  {project.metaData.title}
                </div>
                <div className="carousel carousel-center max-w-full w-full lg:w-1/2 p-4 space-x-4 bg-neutral rounded-box">
                  {/* images */}
                  <div className="carousel-item w-full">
                    {project.images.map((e) => {
                      return (
                        <>
                          <Image
                            key={e.id}
                            alt={e.name}
                            width={700}
                            height={700}
                            src={e.src}
                            className="rounded-box w-full h-full"
                          />
                        </>
                      );
                    })}
                    ;
                  </div>
                </div>
              </div>
              <div className="w-3/4 text-xl my-10 lg:w-1/2 lg:m-0 text-center">
                {/* Project Description */}
                <div>{project.metaData.description}</div>
              </div>
            </div>
            <hr className="w-full h-1 bg-gray-400" />
          </>
        );
      })}
    </>
  );
}
