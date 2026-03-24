import * as Avatar from "@radix-ui/react-avatar";
import * as Progress from "@radix-ui/react-progress";
import { useEffect, useState } from "react";
import { Award } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../../lib/supabase";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [courses, setCourses] = useState([]);

  const completedCourses = courses.filter((c) => c.progress === 100);

  const navigate = useNavigate();

  const [statsData, setStatsData] = useState({
    cursosInscriptos: 0,
    cursosCompletos: 0,
    clasesCompletadas: 0,
    progresoPromedio: 0,
  });

  useEffect(() => {
    const loadData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      setUser(user);

      // 📚 Cursos + progreso
      const { data: coursesData, error: coursesError } = await supabase
        .from("student_course_progress")
        .select(
          `
    general_progress,
    courses (
      title,
      description,
      link
    )
  `,
        )
        .eq("user_id", user.id);

      if (coursesError) {
        // console.log(coursesError);
        return;
      }

      // 🎓 Clases completadas
      const { data: lessonsData, error: lessonsError } = await supabase
        .from("student_lesson_progress")
        .select("progress")
        .eq("user_id", user.id)
        .gte("progress", 100);

      if (lessonsError) {
        // console.log("error en leccion", lessonsError);
        return;
      }

      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      setProfile(profileData);
      
      console.log(coursesData)

      // Formatear cursos
      const formattedCourses = (coursesData || []).map((c) => ({
        title: c.courses.title,
        description: c.courses.description,
        progress: c.general_progress,
        link: c.courses.link,
      }));

      setCourses(formattedCourses);

      // 📊 STATS DINÁMICOS

      const cursosInscriptos = coursesData.length;

      const cursosCompletos = coursesData.filter(
        (c) => c.general_progress === 100,
      ).length;

      const clasesCompletadas = lessonsData.length;

      const progresoPromedio =
        cursosInscriptos > 0
          ? Math.round(
              coursesData.reduce((acc, c) => acc + c.general_progress, 0) /
                cursosInscriptos,
            )
          : 0;

      setStatsData({
        cursosInscriptos,
        cursosCompletos,
        clasesCompletadas,
        progresoPromedio,
      });
    };

    loadData();
  }, []);

  const stats = [
    {
      label: "Cursos Inscritos",
      value: statsData.cursosInscriptos,
      color: "bg-cyan-100 text-cyan-600",
      icon: (
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
          className="lucide lucide-book-open w-6 h-6 text-cyan-600"
          aria-hidden="true"
        >
          <path d="M12 7v14"></path>
          <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
        </svg>
      ),
    },
    {
      label: "Cursos Completados",
      value: statsData.cursosCompletos,
      color: "bg-green-100 text-green-600",
      icon: (
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
          className="lucide lucide-award w-6 h-6 text-green-600"
          aria-hidden="true"
        >
          <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
          <circle cx="12" cy="8" r="6"></circle>
        </svg>
      ),
    },
    {
      label: "Clases Completadas",
      value: statsData.clasesCompletadas,
      color: "bg-orange-100 text-orange-600",
      icon: (
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
          className="lucide lucide-circle-check w-6 h-6 text-orange-600"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      ),
    },
    {
      label: "Progreso Promedio",
      value: statsData.progresoPromedio + "%",
      color: "bg-purple-100 text-purple-600",
      icon: (
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
          className="lucide lucide-trending-up w-6 h-6 text-purple-600"
          aria-hidden="true"
        >
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
          <polyline points="16 7 22 7 22 13"></polyline>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <Link to="/home" className="inline-block">
          <button className="stroke-[2] stroke-linecap-round stroke-linejoin-round inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-4 py-2 mb-6 text-white bg-cyan-600">
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
        <div className="bg-white rounded-2xl shadow border overflow-hidden">
          <div className="h-16 sm:h-32 bg-gradient-to-r from-cyan-600 to-cyan-700" />
          <div className="p-6 -mt-14 flex flex-col sm:flex-row gap-6 sm:items-end">
            <Avatar.Root className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-lg bg-white flex items-center justify-center">
              <Avatar.Fallback className="text-6xl font-bold text-cyan-600">
                {profile?.nombre.charAt(0)}
              </Avatar.Fallback>
            </Avatar.Root>
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
                {profile?.nombre}
              </h1>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                Estudiante de IFT Cursos
              </p>
              <div className="mt-3 text-xs sm:text-sm text-gray-500 space-y-1">
                <p>
                  Miembro desde{" "}
                  {new Date(profile?.registration_date).toLocaleDateString(
                    "es-AR",
                  )}
                </p>
                <p>{user?.email}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border shadow p-5 hover:shadow-md transition"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.color}`}
              >
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-2xl border shadow p-6 space-y-6">
          <div
            className="font-semibold leading-none tracking-tight flex items-center gap-3"
            x-file-name="Profile"
            x-line-number="233"
            x-component="CardTitle"
            x-id="Profile_233"
            x-dynamic="false"
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
              className="lucide lucide-book-open w-6 h-6 text-cyan-600"
              aria-hidden="true"
              x-file-name="Profile"
              x-line-number="234"
              x-component="BookOpen"
              x-id="Profile_234"
              x-dynamic="false"
            >
              <path d="M12 7v14"></path>
              <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
            </svg>
            Mis Cursos
          </div>
          {courses.map((course, i) => (
            <div key={i} className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 hover:text-cyan-600 cursor-pointer transition">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {course.description}
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <Progress.Root className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <Progress.Indicator
                        className="h-full bg-cyan-600 transition-all"
                        style={{ width: `${course.progress}%` }}
                      />
                    </Progress.Root>
                    <span className="text-sm font-semibold text-cyan-600 min-w-[45px]">
                      {course.progress}%
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => navigate(course.link)}
                  className="px-4 py-2 text-xs sm:text-sm border rounded-lg hover:bg-gray-600 transition bg-cyan-600 text-white"
                >
                  Continuar
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-2xl border shadow p-8 text-center">
          <div className="font-semibold leading-none tracking-tight flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="lucide lucide-award w-6 h-6 text-cyan-600"
              aria-hidden="true"
            >
              <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
              <circle cx="12" cy="8" r="6"></circle>
            </svg>
            Logros y Certificados
          </div>
          <div className="p-6 pt-0">
            <div className="text-center py-12">
              {completedCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {completedCourses.map((course) => (
                    <div
                      key={course.id}
                      className="p-4 border-2 border-green-200 bg-green-50 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {course.title}
                          </h4>
                          <p className="text-sm text-gray-600 mb-2">
                            Curso completado exitosamente
                          </p>
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-green-600 text-white">
                            Certificado disponible
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <div className="text-center py-12 border border-gray-400 border-2 border-dashed rounded-lg">
                    <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                      Aún no tienes certificados
                    </h3>
                    <p className="text-gray-500">
                      Completa un curso para obtener tu primer certificado
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
