import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-gray-300 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Restiamo in contatto</h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-700">
                Seguimi sui social network
              </h5>
              <div className="mt-6">
                <a
                  href="https://www.facebook.com/Gianluca-Santambrogio-109070334667486"
                  target="_blank"
                  className="bg-white text-blue-600 shadow-lg font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                >
                  <i className="flex fab fa-facebook-square"></i>
                </a>
                <a
                  href="https://www.instagram.com/dr.gianlucasantambrogio"
                  target="_blank"
                  className="bg-white text-gray-900 shadow-lg font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                >
                  <i className="flex fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="w-full sm:pt-6 lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Pagine del sito
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link href="/chi-sono">
                        <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                          Chi sono
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                          Blog
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Ultime dal blog
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                      >
                        Articolo 1
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/terms"
                      >
                        Articolo 2
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/privacy"
                      >
                        Articolo 3
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Dr. Gianluca Santambrogio
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
