"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const openNavigationWindow = () => {
    setIsOpen(true);
  };

  function hideNavigationWindow() {
    setIsOpen(false);
  }

  return (
    <div className="text-white w-full flex sm:flex-col justify-around p-3">

      {/* Hamburger */}
      <button
        className={`sm:hidden fixed top-5 right-5 bg-gray-700 p-2 rounded-full focus:outline-none ${
          isOpen ? "open" : ""
        } space-y-1 w-10 `}
        onClick={openNavigationWindow}
      >
        <div className="bg-white h-1 rounded-lg"></div>
        <div className="bg-white h-1 rounded-lg"></div>
        <div className="bg-white h-1 rounded-lg"></div>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed w-screen h-screen top-0 left-0 bg-[rgba(0,0,0,0.9)] flex justify-center items-center transition-all duration-300 ease-in-out"
            onClick={hideNavigationWindow}
          >
            <div
              className="absolute top-5 right-5 p-2 bg-gray-700 text-white text-4xl rounded-full w-10 h-10 flex justify-center items-center hover:bg-red-600 cursor-pointer"
              onClick={hideNavigationWindow}
            >
              &times;
            </div>

            <div className="flex flex-col text-4xl">
              <Link
                href={"#Bio"}
                className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-yellow-300 hover:border-yellow-300 dark:hover:text-yellow-300 group"
              >
                Bio
              </Link>
              <Link
                href={"#About"}
                className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-yellow-300 hover:border-yellow-300 dark:hover:text-yellow-300 group"
              >
                About
              </Link>
              <Link
                href={"#Projects"}
                className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-yellow-300 hover:border-yellow-300 dark:hover:text-yellow-300 group"
              >
                Projects
              </Link>
              <Link
                href={"#Contact"}
                className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-yellow-300 hover:border-yellow-300 dark:hover:text-yellow-300 group"
              >
                Contact
              </Link>
            </div>
          </div>
        </>
      )}

      <div
        className={`border-b border-yellow-400 dark:border-yellow-400 hidden sm:flex justify-center`}
      >
        <ul className="flex flex-wrap -mb-px text-2xl font-medium text-center text-white-500 dark:text-white-400">
        <li className="mr-2">
            <Link
              href={"#Bio"}
              className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-yellow-300 hover:border-yellow-300 dark:hover:text-yellow-300 group"
              aria-current="page"
            >
              <svg
                className="w-4 h-4 mr-2 text-white-400 group-hover:text-yellow-500 dark:text-white-500 dark:group-hover:text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
              </svg>
              Bio
            </Link>
          </li>
          <li className="mr-2">
            <Link
              href={"#About"}
              className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-yellow-300 hover:border-yellow-300 dark:hover:text-yellow-300 group"
            >
              <svg
                className="w-4 h-4 mr-2 text-white-400 group-hover:text-yellow-500 dark:text-white-500 dark:group-hover:text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              About
            </Link>
          </li>
         
          <li className="mr-2">
            <Link
              href={"#Projects"}
              className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-yellow-300 hover:border-yellow-300 dark:hover:text-yellow-300 group"
            >
              <svg
                className="w-4 h-4 mr-2 text-white-400 group-hover:text-yellow-500 dark:text-white-500 dark:group-hover:text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z" />
              </svg>
              Projects
            </Link>
          </li>
          <li className="mr-2">
            <Link
              href={"#Contact"}
              className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-yellow-300 hover:border-yellow-300 dark:hover:text-yellow-300 group"
            >
              <svg
                className="w-4 h-4 mr-2 text-white-400 group-hover:text-yellow-500 dark:text-white-500 dark:group-hover:text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
              </svg>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
