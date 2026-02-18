import React from "react";

const About = () => {
  return (
    <>
      <section
        className="relative py-20 px-4 bg-gradient-to-br from-cyan-600 to-cyan-700 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-10"        >
          <div
            className="absolute inset-0"
                  style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
        <div
          className="container mx-auto relative z-10"
              >
          <div
            className="max-w-4xl mx-auto text-center text-white space-y-6"
                 >
            <div
              className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow hover:bg-primary/80 bg-white/20 text-white border-white/30 mb-4"
                    >
              Desde 1994
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold leading-tight"
           >
              Instituto Vasco Argentino de Formación Tecnológica
            </h1>
            <p
              className="text-xl md:text-2xl text-cyan-100 font-medium"
               >
              30 años dedicados a la formación técnica en Argentina
            </p>
          </div>
        </div>
      </section>
      <section
        className="py-16 px-4"
        >
        <div
          className="container mx-auto"
            >
          <div
            className="max-w-4xl mx-auto"
                 >
            <div
              className="flex items-center gap-3 mb-8"
              x-file-name="SobreNosotros"
                 >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-book-open w-8 h-8 text-cyan-600"
                aria-hidden="true"
              >
                <path d="M12 7v14"></path>
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
              </svg>
              <h2
                className="text-3xl font-bold text-gray-900"
                  >
                Nuestra Historia
              </h2>
            </div>
            <div
              className="prose prose-lg max-w-none space-y-6 text-gray-700"
          >
              <p
                className="text-lg leading-relaxed"
                 >
                El
                <strong>
                  Gobierno de la Comunidad Autónoma del País Vasco
                </strong>
                se ha caracterizado por su solidaridad con los países en vía de
                desarrollo y en especial con aquellos en los que es
                significativa la presencia de ciudadanos oriundos de Euskadi y
                sus descendientes.
              </p>
              <p className="text-lg leading-relaxed">
                Así, ha considerado pertinente coayudar a la reconversión de la
                mano de obra industrial de la República Argentina, con especial
                atención a los pequeños y medianos empresarios, en el marco de
                las estrechas relaciones históricas, culturales, económicas y de
                cooperación técnica existentes, mediante la creación de un
                <strong>
                  centro de formación continua para transferencia de tecnología
                </strong>
                .
              </p>
              <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 my-8 rounded-r-lg">
                <p className="text-lg leading-relaxed text-gray-800">
                  Ello no hubiera sido posible sin la participación activa del
                  empresariado con su aporte material y humano, a través de
                  diversas entidades y organizaciones comprometidas con el
                  desarrollo industrial argentino.
                </p>
              </div>
              <p className="text-lg leading-relaxed">
                La conjunción de esfuerzos vasco-argentinos posibilitó la
                capacitación de operarios, técnicos y profesionales mediante el
                dictado de cursos especializados en tecnología y desarrollo.
              </p>
              <p className="text-lg leading-relaxed">
                Esta actividad de cooperación surgió en
                <strong>SAIOLAN</strong>, cuna de grandes realizaciones, ubicada
                en
                <strong>MONDRAGÓN</strong>, una localidad de Guipúzcoa netamente
                industrial y ejemplo del sistema cooperativo.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Hitos Importantes
            </h3>
            <div className="space-y-4">
              <span
                data-ve-dynamic="true"
                x-excluded="true"
                style={{ display: "contents" }}
              >
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-32 flex-shrink-0">
                    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow hover:bg-primary/80 bg-cyan-100 text-cyan-700 border-cyan-200">
                      1994
                    </div>
                  </div>
                  <p className="text-gray-700 flex-1">
                    <span
                      data-ve-dynamic="true"
                      x-excluded="true"
                      style={{ display: "contents" }}
                    >
                      Fundación del Instituto Vasco Argentino
                    </span>
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-32 flex-shrink-0">
                    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow hover:bg-primary/80 bg-cyan-100 text-cyan-700 border-cyan-200">
                      1994-1999
                    </div>
                  </div>
                  <p className="text-gray-700 flex-1">
                    <span
                      data-ve-dynamic="true"
                      x-excluded="true"
                      style={{ display: "contents" }}
                    >
                      Durante los años siguientes a su fundación, el IFT se
                      dedicó a establecer programas de formación continua y
                      capacitación técnica, especialmente en ámbitos
                      industriales y tecnológicos orientados a la pequeña y
                      mediana empresa.
                    </span>
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-32 flex-shrink-0">
                    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow hover:bg-primary/80 bg-cyan-100 text-cyan-700 border-cyan-200">
                      2000-2005
                    </div>
                  </div>
                  <p className="text-gray-700 flex-1">
                    <span
                      data-ve-dynamic="true"
                      x-excluded="true"
                      style={{ display: "contents" }}
                    >
                      A lo largo de la década del 2000, el IFT fue reconocido
                      como un centro importante de capacitación técnica en áreas
                      como diseño por computadora, automatización, mecanizado
                      convencional y otras disciplinas industriales.
                    </span>
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-32 flex-shrink-0">
                    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow hover:bg-primary/80 bg-cyan-100 text-cyan-700 border-cyan-200">
                      2006
                    </div>
                  </div>
                  <p className="text-gray-700 flex-1">
                    <span
                      data-ve-dynamic="true"
                      x-excluded="true"
                      style={{ display: "contents" }}
                    >
                      En el informe de responsabilidad social corporativa del
                      Año 2006, se menciona el Instituto como activo en
                      capacitación técnica con un centro tecnológico propio para
                      operarios industriales, estudiantes y docentes.
                    </span>
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-32 flex-shrink-0">
                    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow hover:bg-primary/80 bg-cyan-100 text-cyan-700 border-cyan-200">
                      2010 - 2020
                    </div>
                  </div>
                  <p className="text-gray-700 flex-1">
                    <span
                      data-ve-dynamic="true"
                      x-excluded="true"
                      style={{ display: "contents" }}
                    >
                      Durante esta década el instituto estuvo involucrado en
                      actividades de formación y colaboración educativa con
                      otras entidades técnicas y programas de capacitación.
                    </span>
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-32 flex-shrink-0">
                    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow hover:bg-primary/80 bg-cyan-100 text-cyan-700 border-cyan-200">
                      2022
                    </div>
                  </div>
                  <p className="text-gray-700 flex-1">
                    <span
                      data-ve-dynamic="true"
                      x-excluded="true"
                      style={{ display: "contents" }}
                    >
                      El IFT firmó un acuerdo de colaboración con la Universidad
                      Tecnológica Nacional (facultad Regional Avellaneda) para
                      fortalecer la formación de educadores y capacitadores
                      técnicos.
                    </span>
                  </p>
                </div>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-users w-8 h-8 text-cyan-600"
                aria-hidden="true"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <circle cx="9" cy="7" r="4"></circle>
              </svg>
              <h2 className="text-3xl font-bold text-gray-900">
                Alianzas Estratégicas
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <span
                data-ve-dynamic="true"
                x-excluded="true"
                style={{ display: "contents" }}
              >
                <div className="rounded-xl border bg-card text-card-foreground shadow border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-award w-5 h-5 text-cyan-600"
                          aria-hidden="true"
                        >
                          <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                          <circle cx="12" cy="8" r="6"></circle>
                        </svg>
                      </div>
                      <p className="text-gray-700 font-medium">
                        <span
                          data-ve-dynamic="true"
                          x-excluded="true"
                          style={{ display: "contents" }}
                        >
                          AAFMHA - Asociación de Fabricantes de
                          Máquinas-Herramientas
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border bg-card text-card-foreground shadow border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-award w-5 h-5 text-cyan-600"
                          aria-hidden="true"
                         >
                          <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                          <circle cx="12" cy="8" r="6"></circle>
                        </svg>
                      </div>
                      <p className="text-gray-700 font-medium">
                        <span
                          data-ve-dynamic="true"
                          x-excluded="true"
                          style={{ display: "contents" }}
                        >
                          Cámara de Industria y Comercio Argentino Alemana
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border bg-card text-card-foreground shadow border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-award w-5 h-5 text-cyan-600"
                          aria-hidden="true"
                        >
                          <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                          <circle cx="12" cy="8" r="6"></circle>
                        </svg>
                      </div>
                      <p className="text-gray-700 font-medium">
                        <span
                          data-ve-dynamic="true"
                          x-excluded="true"
                          style={{ display: "contents" }}
                        >
                          SAIOLAN - Mondragón, Guipúzcoa
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border bg-card text-card-foreground shadow border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-award w-5 h-5 text-cyan-600"
                          aria-hidden="true"
                                >
                          <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                          <circle cx="12" cy="8" r="6"></circle>
                        </svg>
                      </div>
                      <p className="text-gray-700 font-medium">
                        <span
                          data-ve-dynamic="true"
                          x-excluded="true"
                          style={{ display: "contents" }}
                        >
                          UTN Avellaneda
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-gradient-to-br from-cyan-50 to-orange-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-600 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-target w-8 h-8 text-white"
                  aria-hidden="true"
                      >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nuestra Misión
              </h2>
            </div>
            <div className="rounded-xl text-card-foreground border-2 border-cyan-200 bg-white shadow-xl">
              <div className="p-8">
                <p className="text-xl text-center text-gray-800 leading-relaxed font-medium">
                  "La mejora continua de la calidad educacional de nuestros
                  alumnos y clientes para el crecimiento de la industria
                  argentina."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-graduation-cap w-8 h-8 text-cyan-600"
                aria-hidden="true"
                 >
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                <path d="M22 10v6"></path>
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
              </svg>
              <h2 className="text-3xl font-bold text-gray-900">
                Información del Docente
              </h2>
            </div>
            <div className="rounded-xl border bg-card text-card-foreground shadow border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 h-32"></div>
              <div className="p-8 -mt-16">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-32 h-32 bg-white rounded-full border-4 border-white shadow-xl flex items-center justify-center flex-shrink-0">
                    <img
                      src="https://media.licdn.com/dms/image/v2/D4D03AQFjHaOTluy4ZA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1696382593957?e=1772668800&v=beta&t=vScFkkvRZatD-yPQ3_cxRKP_fEmUoqQorO4tNkfB9p4"
                      alt="teacher"
                      className="rounded-full"
                    ></img>
                  </div>
                  <div className="flex-1 pt-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Federico Martearena
                    </h3>
                    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow hover:bg-primary/80 bg-cyan-100 text-cyan-700 border-cyan-200 mb-4">
                      Instructor Principal - Python
                    </div>
                    <div className="space-y-4 mt-6">
                      <div className="flex items-start gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-briefcase w-5 h-5 text-cyan-600 mt-1 flex-shrink-0"
                          aria-hidden="true"
                              >
                          <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                          <rect
                            width="20"
                            height="14"
                            x="2"
                            y="6"
                            rx="2"
                          ></rect>
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-900">
                            Experiencia Profesional
                          </p>
                          <p className="text-gray-700">
                            Más de 3 años como
                            <strong>Tester QA en el sector bancario</strong>,
                            asegurando calidad y confiabilidad en sistemas
                            críticos
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-map-pin w-5 h-5 text-cyan-600 mt-1 flex-shrink-0"
                          aria-hidden="true"
                         >
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-900">
                            Experiencia Docente
                          </p>
                          <p className="text-gray-700">
                            2 años como
                            <strong>
                              Docente de Python en FabLab Vicente López
                            </strong>
                            , formando a nuevas generaciones de programadores
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-award w-5 h-5 text-cyan-600 mt-1 flex-shrink-0"
                          aria-hidden="true"
                          >
                          <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                          <circle cx="12" cy="8" r="6"></circle>
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-900">
                            Formación Académica
                          </p>
                          <ul className="space-y-1 text-gray-700">
                            <li>
                              •<strong>Técnico Electromecánico</strong>
                            </li>
                            <li>
                              •<strong>Diplomatura en Python</strong>-
                              Universidad Tecnológica Nacional (UTN)
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-calendar w-5 h-5 text-cyan-600 mt-1 flex-shrink-0"
                          aria-hidden="true"
                         >
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect
                            width="18"
                            height="18"
                            x="3"
                            y="4"
                            rx="2"
                          ></rect>
                          <path d="M3 10h18"></path>
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-900">
                            Especialidades
                          </p>
                          <div>
                            <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                              Python
                            </div>
                            <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                              MicroPython
                            </div>
                            <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                              Desarrollo web (Reactjs - Node)
                            </div>
                            <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                              Testing QA
                            </div>
                            <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                              Automatización
                            </div>
                            <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                              Sistemas Bancarios
                            </div>
                            <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                              Educación Tecnológica
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-cyan-50 rounded-lg border border-cyan-200">
                      <p className="text-sm text-cyan-900 italic">
                        "Mi pasión es enseñar y ayudar a que cada estudiante
                        alcance su máximo potencial en el mundo de la
                        programación, combinando teoría con experiencia práctica
                        del sector industrial."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
