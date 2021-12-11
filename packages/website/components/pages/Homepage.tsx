import { gql } from "@apollo/client";
import React, { useState } from "react";
import Link from "next/link";

import {
  SanityImageFragmentDoc,
  SanitySeoFragmentDoc,
  SectionsFragmentDoc,
  useGetHomepageQuery,
} from "../../generated/graphql";
import { RoutingConfig } from "../../lib/routing";
import { HomepageServices } from "../HomepageServices";
import { SanityImage } from "../sanity/SanityImage";
import { SanityPostListing } from "../sanity/SanityPostListing";
import { SanitySeo } from "../sanity/SanitySeo";

// this query could be done with this:
//  Post(id: $id) {
//  but you would miss deaft for live-preview
gql`
  ${SanitySeoFragmentDoc}
  ${SectionsFragmentDoc}
  ${SanityImageFragmentDoc}
  query getHomepage($id: ID!) {
    page: allHomepage(
      where: { _id: { matches: $id } }
      sort: { _updatedAt: DESC }
      limit: 1
    ) {
      _id
      seo {
        ...SanitySeo
      }
      title
      cover {
        ...SanityImage
      }
      profile {
        ...SanityImage
      }
      services {
        title
        textRaw
        image {
          ...SanityImage
        }
      }
    }
  }
`;

type HomepageProps = {
  routingConfig: RoutingConfig;
};

export const Homepage: React.FC<HomepageProps> = ({
  routingConfig: { id, slug, breadcrumbs },
}) => {
  const [formStatus, setFormStatus] = useState<boolean>(false);

  const { loading, error, data } = useGetHomepageQuery({
    variables: {
      id,
    },
  });
  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;

  const page = data?.page?.[0];

  return (
    <>
      <SanitySeo component={page?.seo} slug={slug} />
      <section className="relative block" style={{ height: "500px" }}>
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url('${page?.cover?.asset?.url}')`,
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
        <div className="container mx-auto px-4 ">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative -m-12">
                    {page?.profile && (
                      <SanityImage
                        asset={page?.profile}
                        layout="fixed"
                        width="150"
                        height="200"
                        className="shadow rounded-full -ml-20 lg:-ml-16"
                      />
                    )}
                  </div>
                </div>
                {/* <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-16 sm:mt-0">
                      <button
                        className="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Contatti
                      </button>
                    </div>
                  </div> */}
                {/* <div className="w-full lg:w-4/12 px-4 lg:order-1">
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
                  </div> */}
              </div>
              <div className="text-center mt-12">
                <h1 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                  Dr. Gianluca Santambrogio
                </h1>
                {/* <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    Seregno (MI)
                  </div> */}
                <div className="mb-2 text-gray-700 mt-10">
                  <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                  Laureato in Scienze Motorie e dello Sport
                </div>
                <div className="mb-2 text-gray-700">
                  <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                  Chinesiologo
                  <br />
                  MCB Massoterapista
                  <br />
                  Osteopatia
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-gray-300">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4 text-center">
                    {/* <div className="mb-4 text-lg leading-relaxed text-gray-800">
                      <BlockContent blocks={page?.introRaw} />
                    </div> */}
                    <Link href="/#contattami">
                      <a className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1">
                        Contattami
                      </a>
                    </Link>
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

      {page?.services && <HomepageServices services={page.services} />}

      <section className="pt-12 pb-48">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-8">
            <div className="w-full px-4">
              <h2 className="text-4xl font-semibold">
                Ultimi articoli del blog
              </h2>
              {/* <p className="text-lg leading-relaxed m-4 text-gray-600">
                Occaecat ad cupidatat eiusmod proident. Nostrud velit occaecat
                mollit fugiat consequat eu reprehenderit culpa sunt. Aute
                occaecat laborum aliqua adipisicing do voluptate id.
              </p> */}
            </div>
          </div>
          <SanityPostListing limit={4} />
          <div className="text-center mt-6">
            <a
              href="/blog"
              className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              style={{ transition: "all .15s ease" }}
            >
              Vedi tutti
            </a>
          </div>
        </div>
      </section>

      <section className="pb-20 relative block bg-gray-900">
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
              className="text-gray-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div
          className="container mx-auto px-4 lg:pt-24 lg:pb-64"
          id="contattami"
        >
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4 mb-8">
              <h2 className="text-4xl font-semibold text-white">Contattami</h2>
              {/* <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  Qua possiamo mettere qualcosa ma per ora non ho in mente
                  niente
                </p> */}
            </div>
          </div>
          {/* <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Lorem ipsum
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                  Qua possiamo mettere qualcosa ma per ora non ho in mente
                  niente
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Lorem ipsum
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Qua possiamo mettere qualcosa ma per ora non ho in mente
                  niente
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Lorem ipsum
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Qua possiamo mettere qualcosa ma per ora non ho in mente
                  niente
                </p>
              </div>
            </div> */}
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              const formData: Record<string, string> = {};

              Array.from(e.currentTarget.elements).forEach((field: any) => {
                if (!field.name) return;
                formData[field.name] = field.value;
              });

              await fetch("/api/mail", {
                method: "POST",
                body: JSON.stringify(formData),
              });

              setFormStatus(true);
            }}
          >
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    {/* <h4 className="text-2xl font-semibold">Contattami</h4> */}
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Compila il modulo sottostante, ti risponderò via Whatsapp
                      non appena leggerò la tua richiesta.
                    </p>
                    {formStatus === false ? (
                      <>
                        <div className="relative w-full mb-3 mt-8">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="full-name"
                          >
                            Tipologia di richiesta
                          </label>
                          <select
                            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            style={{ transition: "all .15s ease" }}
                            name="topic"
                          >
                            <option value=""></option>

                            <option value="Servizio Coaching">
                              Servizio Coaching
                            </option>

                            <option value="Trattamento massoterapico / osteopatico">
                              Trattamento massoterapico / osteopatico
                            </option>

                            <option value="Altro / info">Altro / info</option>
                          </select>
                        </div>

                        <div className="relative w-full mb-3 mt-8">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="full-name"
                          >
                            Nome e cognome
                          </label>
                          <input
                            type="text"
                            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Nome e cognome"
                            name="name"
                            style={{ transition: "all .15s ease" }}
                          />
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="email"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Email"
                            name="email"
                            style={{ transition: "all .15s ease" }}
                          />
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="email"
                          >
                            Numero di telefono
                          </label>
                          <input
                            type="phone"
                            name="phone"
                            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Numero di telefono"
                            style={{ transition: "all .15s ease" }}
                          />
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="message"
                          >
                            La tua richiesta
                          </label>
                          <textarea
                            rows={4}
                            cols={80}
                            name="message"
                            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Scrivi qui..."
                          />
                        </div>
                        <div className="text-center mt-6">
                          <button
                            className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                            type="submit"
                            style={{ transition: "all .15s ease" }}
                          >
                            Invia
                          </button>
                        </div>
                      </>
                    ) : (
                      <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                        Richiesta inviata con successo. Ti risponderò il prima
                        possibile, grazie!
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
