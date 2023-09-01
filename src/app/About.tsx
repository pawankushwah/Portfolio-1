import Reveal from "@/components/Reveal"

export default function About() {
  return (
    <div
      className="flex flex-col justify-center text-black bg-white"
      id="About"
    >
      <Reveal>
      <div className="text-7xl lg:text-9xl font-bold text-center bg-blue-500 text-white w-screen py-10">
        About
      </div>
      </Reveal>
      <Reveal>
      <div className="text-center text-xl md:text-2xl md:w-[90%] md:mx-auto p-10">
        A passionate web developer with a focus on crafting dynamic digital
        experiences. My toolkit includes ReactJS and NextJS for building
        engaging front-end interfaces, complemented by the versatility of
        Tailwind CSS for sleek designs. On the backend, I harness the power of
        MongoDB to create data-driven and efficient applications.
      </div>
        </Reveal>
    </div>
  );
}
