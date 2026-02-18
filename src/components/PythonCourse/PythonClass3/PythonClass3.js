import { Link } from "react-router-dom";
import { useState } from "react";

import PythonClass3Content1 from "./PythonClass3Content1";
import PythonClass3Content2 from "./PythonClass3Content2";
import PythonClass3Content3 from "./PythonClass3Content3";
import PythonClass3Content4 from "./PythonClass3Content4";
import PythonClass3Content5 from "./PythonClass3Content5";
import PythonClass3Content6 from "./PythonClass3Content6";
import PythonClass3Content7 from "./PythonClass3Content7";
import PythonClass3Content8 from "./PythonClass3Content8";
import PythonClass3Content9 from "./PythonClass3Content9";

const PythonClass3 = () => {
  const TOTAL_CLASES = 8;

  const [completed, setCompleted] = useState([]);

  const handleComplete = (id) => {
    setCompleted((prev) => {
      if (prev.includes(id)) return prev;
      return [...prev, id];
    });
  };

  const progress = Math.round((completed.length / TOTAL_CLASES) * 100);

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
                      </span>
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
        >
          <section className="border-b border-gray-200 bg-white">
            <div className="container mx-auto px-4 py-8">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
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
                      className="lucide lucide-trending-up w-6 h-6 text-cyan-600"
                      aria-hidden="true"
                    >
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                    <h3 className="text-xl font-bold text-gray-900">
                      Tu Progreso
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-cyan-600">
                      <span
                        data-ve-dynamic="true"
                        x-excluded="true"
                        style={{ display: "contents" }}
                      >
                        {progress}
                      </span>
                      %
                    </div>
                    <div className="text-sm text-gray-500">Completado</div>
                  </div>
                </div>
                {/* PROGRESO */}
                <div className="relative w-full h-3 rounded-full bg-gray-200 overflow-hidden">
                  <div
                    className="h-full bg-cyan-600 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <span
                  data-ve-dynamic="true"
                  x-excluded="true"
                  style={{ display: "contents" }}
                ></span>
              </div>
            </div>
          </section>
        </span>
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
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
                Contenido de la clase 3
              </h2>
              <span
                data-ve-dynamic="true"
                x-excluded="true"
                style={{ display: "contents" }}
              >
                <div className="space-y-4">
                  <span
                    data-ve-dynamic="true"
                    x-excluded="true"
                    style={{ display: "contents" }}
                  >
                    <PythonClass3Content1 onComplete={handleComplete} />
                    <PythonClass3Content2 onComplete={handleComplete} />
                    <PythonClass3Content3 onComplete={handleComplete} />
                    <PythonClass3Content4 onComplete={handleComplete} />
                    <PythonClass3Content5 onComplete={handleComplete} />
                    <PythonClass3Content6 onComplete={handleComplete} />
                    <PythonClass3Content7 onComplete={handleComplete} />
                    <PythonClass3Content8 onComplete={handleComplete} />
                    <PythonClass3Content9/>
                  </span>
                </div>
                <div className="p-10 flex justify-between items-center">
                    <Link to="/python/class2" className="inline-block">
                  <button className="inline-flex items-center justify-center gap-2 font-medium text-lg px-8 py-6 h-10 rounded-md bg-cyan-600 text-white hover:bg-cyan-700 transition-colors">
                    Clase Anterior
                  </button>
                  </Link>
                    <Link to="/python/class4" className="inline-block">
                  <button className="inline-flex items-center justify-center gap-2 font-medium text-lg px-8 py-6 h-10 rounded-md bg-cyan-600 text-white hover:bg-cyan-700 transition-colors">
                    Clase Siguiente
                  </button>
                  </Link>
                </div>
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PythonClass3
