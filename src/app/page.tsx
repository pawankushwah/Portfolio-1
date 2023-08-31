"use client";
import About from "./About";
import Bio from "./Bio";
import Contact from "./Contact";
import Footer from "./Footer";
import Projects from "./Projects";
import MyStack from "./MyStack";
import ScrollToTopButton from "../components/scrollToTopButton";

export default function Home() {
  return (
  <>
    {/* <div className="fixed top-2 right-2 w-8 h-8 bg-red-400 sm:bg-yellow-400 md:bg-purple-400 lg:bg-blue-400 xl:bg-gray-400 2xl:bg-orange-400 3xl:bg-green-400"></div> */}
    <Bio/>
    <MyStack/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    <ScrollToTopButton/>
  </>
  )
}


// sm - 640px
// md - 768px
// lg - 1024px
// xl - 1280px
// 2xl - 1536px