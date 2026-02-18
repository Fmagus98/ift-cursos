import { Link } from "react-router-dom";
import { PythonClassItems } from "./PythonClassItems";
import CourseCard from "../CourseCard/CourseCard";

const PythonCourse = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <section className="relative py-12 px-4 bg-gradient-to-br from-cyan-600 to-cyan-700">
          <div className="container mx-auto">
            <Link to="/" className="inline-block">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground h-9 px-4 py-2 mb-6 text-white hover:bg-white/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 mr-2"
                  aria-hidden="true"
                >
                  <path d="m12 19-7-7 7-7" />
                  <path d="M19 12H5" />
                </svg>
                Volver a cursos
              </button>
            </Link>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 text-white">
                <div>
                  <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-white text-cyan-600 mb-4">
                    Programación
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    <span
                      data-ve-dynamic="true"
                      x-excluded="true"
                      style={{ display: "contents" }}
                    >
                      Introducción a Python
                    </span>
                  </h1>
                  <p className="text-xl text-cyan-100">
                    <span
                      data-ve-dynamic="true"
                      x-excluded="true"
                      style={{ display: "contents" }}
                    >
                      Aprende los fundamentos de Python desde cero. Ideal para
                      principiantes que quieren adentrarse en el mundo de la
                      programación.
                    </span>
                  </p>
                </div>
                <div className="flex flex-wrap gap-6 text-cyan-100">
                  <div className="flex items-center gap-2">
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
                      className="lucide lucide-clock w-5 h-5"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>
                      <span
                        data-ve-dynamic="true"
                        x-excluded="true"
                        style={{ display: "contents" }}
                      >
                        8 semanas
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
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
                      className="lucide lucide-users w-5 h-5"
                      aria-hidden="true"
                       >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                    </svg>
                    <span>
                      <span
                        data-ve-dynamic="true"
                        x-excluded="true"
                        style={{ display: "contents" }}
                      >
                        32{" "}
                      </span>
                      estudiantes
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
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
                      className="lucide lucide-book-open w-5 h-5"
                      aria-hidden="true"
                   >
                      <path d="M12 7v14"></path>
                      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                    </svg>
                    <span>
                      <span
                        data-ve-dynamic="true"
                        x-excluded="true"
                        style={{ display: "contents" }}
                      >
                        8{" "}
                      </span>{" "}
                      clases
                    </span>
                  </div>
                </div>
                <div className="inline-flex items-center rounded-md border font-semibold border-transparent bg-cyan-800 text-white text-base px-4 py-2">
                  Nivel: Principiante
                </div>
              </div>
              <div className="relative">
                <img
                  alt="Introducción a Python"
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-2xl"
                  src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&amp;auto=format&amp;fit=crop"
                />
              </div>
            </div>
          </div>
        </section>
        <span
          data-ve-dynamic="true"
          x-excluded="true"
          style={{ display: "contents" }}
        ></span>
        <span
          data-ve-dynamic="true"
          x-excluded="true"
          style={{ display: "contents" }}
        >
          <section className="py-12 px-4 bg-gray-50">
            <div className="container mx-auto">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  ¿Qué aprenderás en este curso?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <span
                    data-ve-dynamic="true"
                    x-excluded="true"
                    style={{ display: "contents" }}
                  >
                    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-cyan-600 font-bold">
                            <span
                              data-ve-dynamic="true"
                              x-excluded="true"
                              style={{ display: "contents" }}
                            >
                              1
                            </span>
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            <span
                              data-ve-dynamic="true"
                              x-excluded="true"
                              style={{ display: "contents" }}
                            >
                              ¿Qué es Python y por qué aprenderlo?
                            </span>
                          </h4>
                          <p className="text-sm text-gray-600">
                            <span
                              data-ve-dynamic="true"
                              x-excluded="true"
                              style={{ display: "contents" }}
                            >
                              Python es uno de los lenguajes de programación más
                              populares y versátiles del mundo. En esta clase
                              aprenderás qué lo hace especial y por qué deberías
                              aprenderlo.
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span>
                            <span
                              data-ve-dynamic="true"
                              x-excluded="true"
                              style={{ display: "contents" }}
                            >
                              2
                            </span>
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            <span
                              data-ve-dynamic="true"
                              x-excluded="true"
                              style={{ display: "contents" }}
                            >
                              Variables y Tipos de Datos
                            </span>
                          </h4>
                          <p className="text-sm text-gray-600">
                            <span
                              data-ve-dynamic="true"
                              x-excluded="true"
                              style={{ display: "contents" }}
                            >
                              Las variables son contenedores que almacenan
                              información. Aprenderás los diferentes tipos de
                              datos que Python puede manejar.
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-cyan-600 font-bold">
                            <span
                              data-ve-dynamic="true"
                              x-excluded="true"
                              style={{ display: "contents" }}
                            >
                              3
                            </span>
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            <span
                              data-ve-dynamic="true"
                              x-excluded="true"
                              style={{ display: "contents" }}
                            >
                              Estructuras de Control - Condicionales
                            </span>
                          </h4>
                          <p className="text-sm text-gray-600">
                            <span
                              data-ve-dynamic="true"
                              x-excluded="true"
                              style={{ display: "contents" }}
                            >
                              Los condicionales permiten que tu programa tome
                              decisiones. Aprenderás a usar if, elif y else para
                              controlar el flujo de tu código.
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-cyan-600 font-bold">
                            <span
                              data-ve-dynamic="true"
                              x-excluded="true"
                              style={{ display: "contents" }}
                            >
                              4
                            </span>
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            <span
                              data-ve-dynamic="true"
                              x-excluded="true"
                              style={{ display: "contents" }}
                            >
                              Bucles - For y While
                            </span>
                          </h4>
                          <p className="text-sm text-gray-600">
                            <span
                              data-ve-dynamic="true"
                              x-excluded="true"
                              style={{ display: "contents" }}
                            >
                              Los bucles te permiten repetir acciones múltiples
                              veces. Dominarás los bucles for y while para
                              automatizar tareas repetitivas.
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4 mt-10">
                  Clases
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {PythonClassItems.map((item, i) => (
                    <CourseCard key={i} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </span>
      </div>
    </div>
  );
};

export default PythonCourse;
