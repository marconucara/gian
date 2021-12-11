import React from "react";

export const HomepageServices: React.FC<{ services: any }> = ({ services }) => (
  <>
    <section className="relative py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img
              alt=""
              width="634px"
              height="800px"
              className="max-w-full rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1461532257246-777de18cd58b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&h=800&q=80"
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12 py-12">
              <div className="text-blue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-300">
                <i className="fas fa-handshake text-xl"></i>
              </div>
              <h2 className="text-3xl font-semibold">Servizio coaching</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Dopo un colloquio iniziale viene stilato un programma di
                allenamento personalizzato da svolgere in palestra o a casa che
                possa portare la persona a raggiungere i propri obiettivi. Per
                una valutazione più precisa verranno inoltre prese le
                misurazioni corporee per calcolare massa magra e massa grassa, e
                verranno dati dei consigli alimentari affinché il percorso sia
                il più funzionale possibile.
              </p>
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

      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap flex-row-reverse">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img
              alt=""
              width="634px"
              height="800px"
              className="max-w-full rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12 py-12">
              <div className="text-blue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-300">
                <i className="fas fa-hands text-xl"></i>
              </div>
              <h2 className="text-3xl font-semibold">Massoterapia</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                La Massoterapia serve a risolvere e prevenire problematiche
                dell’apparato muscolo- scheletrico tramite tecniche di massaggio
                specifiche. La massoterapia è adatta per:
                <ul className="list-disc pl-8 mb-2">
                  <li>Rilassare la muscolatura tesa </li>
                  <li>Sciogliere le contratture causate da posture errate </li>
                  <li>
                    Eliminare eventuali rigidità date da cattive abitudini
                  </li>
                  <li>
                    Ripristinare il corretto funzionamento della struttura
                    fasciale{" "}
                  </li>
                  <li>
                    Aiutare gli sportivi a prevenire gli infortuni o recuperare
                    da questi.
                  </li>
                </ul>
              </p>
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
      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img
              alt=""
              width="634px"
              height="800px"
              className="max-w-full rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1550259979-ed79b48d2a30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12 py-12">
              <div className="text-blue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-300">
                <i className="fas fa-clipboard text-xl"></i>
              </div>
              <h2 className="text-3xl font-semibold">Osteopatia</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                L’Osteopatia è una disciplina che si dimostra efficace per il
                trattamento di disturbi che interessano l’apparato neuro-muscolo
                scheletrico. L’osteopata considera l’individuo nella sua
                globalità, non tratta il sintomo ma va a scoprire la vera causa
                del problema. Dopo un’attenta valutazione si individua la
                “disfunzione somatica”, che rappresenta l’alterazione dello
                stato di salute. Una volta che questa viene individuata,
                attraverso il trattamento manipolativo, si va a ripristinare la
                corretta funzionalità e lo stato di salute perduti a causa di un
                trauma o di una patologia. L’osteopatia si dimostra inoltre
                molto efficace nella prevenzione e nel mantenimento dello stato
                di salute. Il trattamento osteopatico è indicato per:
              </p>
              <ul className="list-disc pl-8 mb-2 text-gray-600 text-lg">
                <li>Mal di schiena: lombalgie, dorsalgie, cervicalgie</li>
                <li>Mal di testa mio-tensivi</li>
                <li>
                  Dolori muscolari o tendinei: tendinite achilleo, epicondilite,
                  distorsioni, contratture
                </li>
                <li>
                  Dolori articolari: spalla, gomito, polso, anca, ginocchio,
                  caviglia
                </li>
                <li>Nevralgie: sciatica, brachialgia, cruralgia</li>
              </ul>
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
