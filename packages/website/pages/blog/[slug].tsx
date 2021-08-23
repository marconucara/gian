import Head from "next/head";
import Image from "next/image";
import React from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Post() {
  return (
    <>
      <section className="relative block" style={{ height: "500px" }}>
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1617952986600-802f965dcdbc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3451&q=80')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px" }}
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
              className="text-gray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section className="relative py-16 bg-gray-200 ">
        <div className="container mx-auto px-4 post-page">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              {/* <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-16 sm:mt-0">
                      <button
                        className="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Contatti
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          22
                        </span>
                        <span className="text-sm text-gray-500">Friends</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          10
                        </span>
                        <span className="text-sm text-gray-500">Photos</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          89
                        </span>
                        <span className="text-sm text-gray-500">Comments</span>
                      </div>
                    </div>
                  </div>
                </div> */}
              <div className="mt-12">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <h1 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                      Titolo di un post
                    </h1>
                    <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      Occaecat fugiat amet id ipsum consectetur ex. Adipisicing
                      voluptate minim ex sit sit minim et enim pariatur commodo
                      aliqua irure. Pariatur elit minim velit eiusmod eiusmod
                      nisi minim quis minim irure ad ex ex deserunt.
                    </p>
                    <div className="mb-2 text-gray-700 mt-10 flex items-center">
                      <Image
                        alt="Gianluca Santambrogio"
                        src="/profile.png"
                        width="50"
                        height="50"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute  -ml-20 lg:-ml-16"
                        // style={{ maxWidth: "150px" }}
                      />
                      <div className="ml-2">
                        <div>Autore</div>
                        <div className=" font-bold">Gianluca Santambrogio</div>
                      </div>
                    </div>
                    <div className="mb-2 text-gray-700 mt-6">
                      <i className="fas fa-calendar mr-2 text-lg text-gray-500" />
                      Pubblicato il 20/08/2021
                    </div>
                    <div className="mb-2 text-gray-700">
                      <i className="fas fa-book mr-2 text-lg text-gray-500" />
                      Categoria:{" "}
                      <a href="#" className=" font-bold text-blue-500">
                        alimentazione
                      </a>
                    </div>
                    <div className="mb-2 text-gray-700">
                      <i className="fas fa-clock mr-2 text-lg text-gray-500" />
                      Tempo di lettura 3 min.
                    </div>
                  </div>
                  <div className="w-full lg:w-9/12 px-4 mt-10 py-10 border-t border-gray-300 text-lg text-gray-800">
                    <h2 className="mb-4 text-2xl font-bold">
                      Voluptate officia cillum ut dolor proident quis quis ex
                    </h2>
                    <p className="mb-4">
                      <i>Voluptate officia</i> cillum ut dolor proident quis
                      quis ex excepteur tempor. Duis in ex labore aliqua
                      excepteur adipisicing in culpa aliquip. Culpa mollit
                      proident et ullamco ullamco elit ullamco ipsum voluptate
                      officia non. Sint aliquip amet dolor culpa occaecat
                      mollit. Anim qui ea excepteur incididunt est{" "}
                      <strong>ipsum aute</strong> aute pariatur id sunt.
                    </p>
                    <p className="mb-4">
                      Voluptate officia cillum ut dolor proident quis quis ex
                      excepteur tempor. Duis in ex labore aliqua excepteur
                      adipisicing in culpa aliquip. Culpa mollit proident et
                      ullamco ullamco elit ullamco ipsum voluptate officia non.
                      Sint aliquip amet dolor culpa occaecat mollit. Anim qui ea
                      excepteur incididunt est <strong>ipsum aute</strong> aute
                      pariatur id sunt.
                    </p>
                    <h2 className="mb-4 text-2xl font-bold">
                      h2 Voluptate officia cillum ut dolor proident quis quis ex
                    </h2>
                    <h3 className="mb-4 text-xl font-bold">
                      h3 Voluptate officia cillum ut dolor proident quis quis ex
                    </h3>
                    <p className="mb-4">
                      Voluptate officia cillum ut dolor proident quis quis ex
                      excepteur tempor. Duis in ex labore aliqua excepteur
                      adipisicing in culpa aliquip. Culpa mollit proident et
                      ullamco ullamco elit ullamco ipsum voluptate officia non.
                      Sint aliquip amet dolor culpa occaecat mollit. Anim qui ea
                      excepteur incididunt est <strong>ipsum aute</strong> aute
                      pariatur id sunt.
                    </p>
                    <ul className="list-disc pl-8 mb-4">
                      <li className="mb-4">
                        Voluptate officia cillum ut dolor proident quis quis ex
                        excepteur tempor.{" "}
                      </li>
                      <li className="mb-4">
                        Voluptate officia cillum ut dolor proident quis quis ex
                        excepteur tempor.{" "}
                      </li>
                    </ul>
                    <p className="mb-4">
                      Voluptate officia cillum ut dolor proident quis quis ex
                      excepteur tempor. Duis in ex labore aliqua excepteur
                      adipisicing in culpa aliquip. Culpa mollit proident et
                      ullamco ullamco elit ullamco ipsum voluptate officia non.
                      Sint aliquip amet dolor culpa occaecat mollit. Anim qui ea
                      excepteur incididunt est <strong>ipsum aute</strong> aute
                      pariatur id sunt.
                    </p>
                    <div className="mb-8">
                      <Image
                        alt="test"
                        src="/profile.png"
                        width="500"
                        height="300"
                        layout="responsive"

                        // style={{ maxWidth: "150px" }}
                      />
                    </div>
                    <p className="mb-4">
                      Voluptate officia cillum ut dolor proident quis quis ex
                      excepteur tempor. Duis in ex labore aliqua excepteur
                      adipisicing in culpa aliquip. Culpa mollit proident et
                      ullamco ullamco elit ullamco ipsum voluptate officia non.
                      Sint aliquip amet dolor culpa occaecat mollit. Anim qui ea
                      excepteur incididunt est <strong>ipsum aute</strong> aute
                      pariatur id sunt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Working with us is a pleasure
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Don't let your uses guess by attaching tooltips and popoves to
                  any element. Just make sure you enable them first via
                  JavaScript.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go. Just make sure you enable them first via
                  JavaScript.
                </p>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                  className="font-bold text-gray-800 mt-8"
                >
                  Check Tailwind Starter Kit!
                </a>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px",
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-pink-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div> */}
        </div>
      </section>
    </>
  );
}
