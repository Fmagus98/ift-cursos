import { Link } from "react-router-dom";
import { PythonClassItems } from "../PythonCourse/PythonClassItems";
import CourseCard from "../CourseCard/CourseCard";

import { useCourseAccess } from "../../hooks/useCourseAccess";
import { useAuth } from "../../context/AuthContext";

const DataScienceCourse = () => {

  const { user } = useAuth();

  const { isEnrolled, loading } = useCourseAccess(process.env.REACT_APP_COURSEIDDATASCIENCE, user?.id);

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <section className="relative py-12 px-4 bg-gradient-to-br from-cyan-600 to-cyan-700">
          <div className="container mx-auto">
            <Link to="/home" className="inline-block">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground h-9 px-4 py-2 mb-6 text-white hover:bg-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left w-4 h-4 mr-2" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
                Volver a cursos
              </button>
            </Link>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 text-white">
                <div>
                  <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-white text-cyan-600 mb-4">
                    Data science
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    <span
                      data-ve-dynamic="true"
                      x-excluded="true"
                      style={{ display: "contents" }}
                    >
                      Data Science
                    </span>
                  </h1>
                  <p className="text-xl text-cyan-100">
                    <span
                      data-ve-dynamic="true"
                      x-excluded="true"
                      style={{ display: "contents" }}
                    >
                      Aprende los fundamentos del anásis de datos con Python. Ideal para
                      los que quieren adentrarse en el mundo de la
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
                      class="lucide lucide-clock w-5 h-5"
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
                      class="lucide lucide-users w-5 h-5"
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
                      class="lucide lucide-book-open w-5 h-5"
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
                  Nivel: Intermedio
                </div>
              </div>
              <div className="relative">
                <img
                  alt="Data Science"
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-2xl"
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
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
                              Introducción a Django
                            </span>
                          </h4>
                          <p className="text-sm text-gray-600">
                            <span
                              data-ve-dynamic="true"
                              x-excluded="true"
                              style={{ display: "contents" }}
                            >
                             Se presenta qué es Django, cómo funciona el patrón MVT y cómo crear el primer proyecto. Los alumnos instalan el entorno, ejecutan el servidor y entienden la estructura básica del framework.
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
                              Apps y rutas
                            </span>
                          </h4>
                          <p className="text-sm text-gray-600">
                            <span
                              data-ve-dynamic="true"
                              x-excluded="true"
                              style={{ display: "contents" }}
                            >
                              Se explica cómo organizar el proyecto en aplicaciones (apps) y cómo funciona el sistema de URLs. Los estudiantes crean vistas y configuran rutas dinámicas.
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
                              Templates y herencia
                            </span>
                          </h4>
                          <p className="text-sm text-gray-600">
                            <span
                              data-ve-dynamic="true"
                              x-excluded="true"
                              style={{ display: "contents" }}
                            >
                              Se aprende a separar la lógica del diseño usando templates HTML dinámicos. Se trabaja con variables, estructuras de control y herencia para reutilizar layouts.
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
                              Modelos y base de datos
                            </span>
                          </h4>
                          <p className="text-sm text-gray-600">
                            <span
                              data-ve-dynamic="true"
                              x-excluded="true"
                              style={{ display: "contents" }}
                            >
                           Introducción al ORM de Django. Se crean modelos, migraciones y se administra la base de datos desde el panel de administración.
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
                              5
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
                             CRUD Completo
                            </span>
                          </h4>
                          <p className="text-sm text-gray-600">
                            <span
                              data-ve-dynamic="true"
                              x-excluded="true"
                              style={{ display: "contents" }}
                            >
                          Se desarrolla un sistema completo para crear, leer, actualizar y eliminar registros utilizando formularios y vistas conectadas a la base de datos.
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
                              6
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
                              Autenticación y usuarios
                            </span>
                          </h4>
                          <p className="text-sm text-gray-600">
                            <span
                              data-ve-dynamic="true"
                              x-excluded="true"
                              style={{ display: "contents" }}
                            >
                         Se implementa el sistema de login, registro y logout. Se protegen vistas y se restringe el acceso según el usuario autenticado.
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
                              7
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
                              Relaciones y consultas avanzadas
                            </span>
                          </h4>
                          <p className="text-sm text-gray-600">
                            <span
                              data-ve-dynamic="true"
                              x-excluded="true"
                              style={{ display: "contents" }}
                            >
                       Se trabajan relaciones entre modelos (ForeignKey y ManyToMany) y consultas más complejas con filtros, ordenamientos y paginación.</span>
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
                              8
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
                              Deploy y producción
                            </span>
                          </h4>
                          <p className="text-sm text-gray-600">
                            <span
                              data-ve-dynamic="true"
                              x-excluded="true"
                              style={{ display: "contents" }}
                            >
                          Se prepara el proyecto para producción, configurando variables de entorno, seguridad básica y realizando el despliegue en un servidor.
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4 mt-20">
                  Clases
                </h2>

                {loading ? (
                  <p className="text-gray-500">Verificando inscripción...</p>
                ) : !isEnrolled ? (
                  <div className="text-center py-12 border border-gray-400 border-2 border-dashed rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                      No disponible
                    </h3>
                    <p className="text-gray-500">
                      no estás inscripto a este Curso
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PythonClassItems.map((item, i) => (
                      <CourseCard key={i} {...item} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        </span>
      </div>
    </div>
  );
};

export default DataScienceCourse;
