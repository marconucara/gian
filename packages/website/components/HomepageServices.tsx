import React from "react";
import { BlockContent } from "./BlockContent";
import { SanityImage } from "./sanity/SanityImage";

export const HomepageServices: React.FC<{ services: any }> = ({ services }) => (
  <>
    <section className="relative py-20 bg-gray-200" id="services-1">
      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <SanityImage
              asset={services[0].image}
              layout="responsive"
              aspectRatio={4 / 3}
              sizes={{
                "800": "800px",
              }}
              className="max-w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12 py-12">
              <div className="text-blue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-300">
                <i className="fas fa-handshake text-xl"></i>
              </div>
              <h2 className="text-3xl font-semibold">{services[0].title}</h2>
              <div className="mt-4 text-lg leading-relaxed text-gray-600">
                <BlockContent
                  blocks={services[0].textRaw}
                  listStyle="compact"
                />
              </div>
              {/* <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Ti ascolto</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Ti spiego</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Pianifichiamo insieme
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="relative py-20 ">
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
            className="text-white fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div className="container mx-auto px-4" id="services-2">
        <div className="items-center flex flex-wrap flex-row-reverse">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <SanityImage
              asset={services[1].image}
              layout="responsive"
              aspectRatio={4 / 3}
              sizes={{
                "800": "800px",
              }}
              className="max-w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12 py-12">
              <div className="text-blue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-300">
                <i className="fas fa-hands text-xl"></i>
              </div>
              <h2 className="text-3xl font-semibold">{services[1].title}</h2>
              <div className="mt-4 text-lg leading-relaxed text-gray-600">
                <BlockContent
                  blocks={services[1].textRaw}
                  listStyle="compact"
                />
              </div>

              {/* <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Carefully crafted components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Amazing page examples
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Dynamic components</h4>
                        </div>
                      </div>
                    </li>
                  </ul> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="relative py-20 bg-gray-200">
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
            className="text-gray-200 fill-current"
            points="2560 100 0 100 0 0"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4" id="services-3">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <SanityImage
              asset={services[2].image}
              layout="responsive"
              aspectRatio={4 / 3}
              sizes={{
                "800": "800px",
              }}
              className="max-w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12 py-12">
              <div className="text-blue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-300">
                <i className="fas fa-clipboard text-xl"></i>
              </div>
              <h2 className="text-3xl font-semibold">{services[2].title}</h2>
              <div className="mt-4 text-lg leading-relaxed text-gray-600">
                <BlockContent
                  blocks={services[2].textRaw}
                  listStyle="compact"
                />
              </div>
              {/* <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Carefully crafted components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Amazing page examples
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Dynamic components</h4>
                        </div>
                      </div>
                    </li>
                  </ul> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="relative pt-20 ">
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
            className="text-white fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
    {/* <section className="relative py-20 ">
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
            className="text-white fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap  flex-row-reverse">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img
              alt=""
              width="634px"
              height="800px"
              className="max-w-full rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1540206276207-3af25c08abc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12 py-12">
              <div className="text-blue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-300">
                <i className="fas fa-dumbbell text-xl"></i>
              </div>
              <h2 className="text-3xl font-semibold">
                Personal training in palestra o a casa
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Puoi essere allenato direttamente da me in palestra o
                comodamente a casa con il solo scopo di raggiungere gli
                obiettivi prefissati in totale sicurezza sotto la mia
                supervisione.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section> */}
  </>
);
