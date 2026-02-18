import * as Tabs from "@radix-ui/react-tabs";
import SectionCourse from "./SectionCourse";
import { courses } from "./courses";

const Home = () => {
  const getCoursesByTab = (tab) => {
    if (tab === "todos") return courses;
    return courses.filter((course) => course.category === tab);
  };
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
     >
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-orange-50 opacity-70"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-cyan-600"
              >
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                <path d="M22 10v6"></path>
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
              </svg>
              <span className="text-sm font-medium text-gray-700">
                Aprende a tu ritmo
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Domina{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-500">
                Python
              </span>{" "}
              y{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
                transforma
              </span>{" "}
              tu carrera
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Cursos prácticos diseñados por expertos para llevarte desde
              principiante hasta profesional en el lenguaje de programación más
              demandado.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button
                className="inline-flex items-center justify-center gap-2 font-medium text-lg px-8 py-6 h-10 rounded-md bg-cyan-600 text-white hover:bg-cyan-700 transition-colors"
                onClick={() => {
                  const element = document.getElementById("courses-section");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explorar Cursos
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
                  class="lucide lucide-book-open w-6 h-6 text-white"
                >
                  <path d="M12 7v14"></path>
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        id="courses-section"
        className="py-20 px-4"
        >
        <div
          className="container mx-auto"
          >
          <div
            className="text-center mb-12"
            >
            <h2
              className="text-4xl font-bold text-gray-900 mb-4"
                >
              Nuestros Cursos
            </h2>
            <p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
               >
              Elige el curso que se adapte a tu nivel y objetivos profesionales
            </p>
          </div>
          <div
            className="max-w-4xl mx-auto mb-12 space-y-6"
             >
            <Tabs.Root defaultValue="todos" className="w-full">
              {/* Lista de tabs */}
              <Tabs.List
                className="grid grid-cols-4 w-full items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground"
                aria-orientation="horizontal"
              >
                <Tabs.Trigger
                  value="todos"
                  className="inline-flex items-center justify-center rounded-md px-3 py-3 font-medium text-sm sm:text-base transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
                >
                  Todos
                </Tabs.Trigger>

                <Tabs.Trigger
                  value="programacion"
                  className="inline-flex items-center justify-center rounded-md px-3 py-3 font-medium text-sm sm:text-base transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
                >
                  Programación
                </Tabs.Trigger>

                <Tabs.Trigger
                  value="data-science"
                  className="inline-flex items-center justify-center rounded-md px-3 py-3 font-medium text-sm sm:text-base transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
                >
                  Data Science
                </Tabs.Trigger>

                <Tabs.Trigger
                  value="desarrollo-web"
                  className="inline-flex items-center justify-center rounded-md px-3 py-3 font-medium text-sm sm:text-base transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
                >
                  Desarrollo Web
                </Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="todos" className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {getCoursesByTab("todos").map((course) => (
                    <SectionCourse key={course.id} course={course} />
                  ))}
                </div>
              </Tabs.Content>

              <Tabs.Content value="programacion" className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {getCoursesByTab("Programación").map((course) => (
                    <SectionCourse key={course.id} course={course} />
                  ))}
                </div>
              </Tabs.Content>

              <Tabs.Content value="data-science" className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {getCoursesByTab("Data science").map((course) => (
                    <SectionCourse key={course.id} course={course} />
                  ))}
                </div>
              </Tabs.Content>

              <Tabs.Content value="desarrollo-web" className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {getCoursesByTab("Desarrollo web").map((course) => (
                    <SectionCourse key={course.id} course={course} />
                  ))}
                </div>
              </Tabs.Content>
            </Tabs.Root>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
