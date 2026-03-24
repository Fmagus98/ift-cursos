import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCourseAccess } from "../../hooks/useCourseAccess";
import CourseCard from "../CourseCard/CourseCard";

import { coursesData } from "../../data/courses";
import { PythonClassItems } from "../PythonCourse/PythonClassItems";

const Course = () => {
  const { courseId } = useParams();
  const { user } = useAuth();

const course = Object.values(coursesData).find(
  (c) => c.id === courseId
);

  const { isEnrolled, loading } = useCourseAccess(courseId, user?.id);

  if (!course) return <div>Curso no encontrado</div>;

  let classes = [];

  if (courseId === "a586408c-e2d5-4a43-8356-cdb9aa9b8091") classes = PythonClassItems;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative py-12 px-4 bg-gradient-to-br from-cyan-600 to-cyan-700">
        <div className="container mx-auto">
          <Link to="/home" className="inline-block">
            <button className="stroke-[2] stroke-linecap-round stroke-linejoin-round inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-4 py-2 mb-6 text-white hover:bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
              Volver a cursos
            </button>
          </Link>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-white">
              <div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-white text-cyan-600 mb-4">
                  {course.category}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  <span
                    data-ve-dynamic="true"
                    x-excluded="true"
                    style={{ display: "contents" }}
                  >
                    {course.title}
                  </span>
                </h1>

                <p className="text-xl text-cyan-100">
                  <span
                    data-ve-dynamic="true"
                    x-excluded="true"
                    style={{ display: "contents" }}
                  >
                    {course.description}
                  </span>
                </p>
              </div>
              <div className="flex flex-wrap gap-6 text-cyan-100">
                <div className="flex items-center gap-2 stroke-[2] stroke-linecap-round stroke-linejoin-round ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
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
                      {course.duration}
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-2 stroke-[2] stroke-linecap-round stroke-linejoin-round ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
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
                      {course.students}{" "}
                    </span>
                    estudiantes
                  </span>
                </div>
                <div className="flex items-center gap-2 stroke-[2] stroke-linecap-round stroke-linejoin-round ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
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
                      {course.classesCount}{" "}
                    </span>{" "}
                    clases
                  </span>
                </div>
              </div>
              <div className="inline-flex items-center rounded-md border font-semibold border-transparent bg-cyan-800 text-white text-base px-4 py-2">
                Nivel: {course.level}
              </div>
            </div>
            <div className="relative">
              <img
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-2xl"
                src={course.image}
                alt={course.title}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-cyan-600">
            ¿Qué aprenderás en este curso?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {course.learnings.map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-600 font-bold">
                      <span
                        data-ve-dynamic="true"
                        x-excluded="true"
                        style={{ display: "contents" }}
                      >
                        {i + 1}
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
                        {item.title}
                      </span>
                    </h4>
                    <p className="text-sm text-gray-600">
                      <span
                        data-ve-dynamic="true"
                        x-excluded="true"
                        style={{ display: "contents" }}
                      >
                        {item.description}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CLASES */}
          <h2 className="text-4xl font-bold mt-20 mb-4 text-cyan-600">
            Clases
          </h2>
          {loading ? (
            <p>Verificando inscripción...</p>
          ) : !isEnrolled ? (
            <div className="text-center py-12 border border-gray-400 border-2 border-dashed rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                No disponible
              </h3>
              <p className="text-gray-500">No estás inscripto a este Curso</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {classes.map((item, i) => (
                <CourseCard
                  key={i}
                  {...item}
                  link={`/course/${courseId}/class/${item.id}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Course;
