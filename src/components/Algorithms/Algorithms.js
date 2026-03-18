import { Link } from "react-router-dom";

const Algorithms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-orange-50 opacity-70"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-700 text-sm font-medium mb-6"
              x-file-name="HomePage"
              x-line-number="62"
              x-component="div"
              x-id="HomePage_62"
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
                className="lucide lucide-sparkles w-4 h-4"
                aria-hidden="true"
                x-file-name="HomePage"
                x-line-number="63"
                x-component="Sparkles"
                x-id="HomePage_63"
                x-dynamic="false"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                <path d="M20 3v4"></path>
                <path d="M22 5h-4"></path>
                <path d="M4 17v2"></path>
                <path d="M5 18H3"></path>
              </svg>
              <span
                x-file-name="HomePage"
                x-line-number="64"
                x-component="span"
                x-id="HomePage_64"
                x-dynamic="false"
              >
                Sección Interactiva
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Aprende{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-500">
                Algoritmos<br></br>
              </span>{" "}
              de forma{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 ">
                Visual
              </span>{" "}
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Cursos prácticos diseñados por expertos para llevarte desde
              principiante hasta profesional en el lenguaje de programación más
              demandado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button
                className="inline-flex items-center justify-center gap-2 font-medium text-lg px-8 py-6 h-10 rounded-md bg-cyan-600 text-white hover:bg-cyan-700 transition-colors"
                onClick={() => {
                  const element = document.getElementById("courses-section");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explorar Algoritmos
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
                  className="lucide lucide-book-open w-6 h-6 text-white"
                >
                  <path d="M12 7v14"></path>
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="courses-section" className="py-20 px-4">
        <div
          className="px-6 py-12 max-w-7xl mx-auto"
          x-file-name="HomePage"
          x-line-number="84"
          x-component="div"
          x-id="HomePage_84"
          x-dynamic="false"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Categorías de algoritmos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Selecciona una categoria para aprender
            </p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            x-file-name="HomePage"
            x-line-number="90"
            x-component="div"
            x-id="HomePage_90"
            x-dynamic="false"
          >
            <span
              data-ve-dynamic="true"
              x-excluded="true"
              style={{ display: "contents" }}
            >
              <div
                data-testid="category-sorting"
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all cursor-pointer hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10"
                style={{ opacity: "1", transform: "none" }}
              >
                <div
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform"
                  x-file-name="AlgorithmCard"
                  x-line-number="26"
                  x-component="div"
                  x-id="AlgorithmCard_26"
                  x-dynamic="false"
                >
                  <span
                    data-ve-dynamic="true"
                    x-excluded="true"
                    style={{ display: "contents" }}
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
                      className="lucide lucide-arrow-up-down w-6 h-6"
                      aria-hidden="true"
                      x-file-name="AlgorithmCard"
                      x-line-number="27"
                      x-component="Icon"
                      x-id="AlgorithmCard_27"
                      x-dynamic="false"
                    >
                      <path d="m21 16-4 4-4-4"></path>
                      <path d="M17 20V4"></path>
                      <path d="m3 8 4-4 4 4"></path>
                      <path d="M7 4v16"></path>
                    </svg>
                  </span>
                </div>
                <h3
                  className="text-xl font-semibold mb-2 font-heading"
                  x-file-name="AlgorithmCard"
                  x-line-number="30"
                  x-component="h3"
                  x-id="AlgorithmCard_30"
                  x-dynamic="false"
                >
                  <span
                    data-ve-dynamic="true"
                    x-excluded="true"
                    style={{ display: "contents" }}
                  >
                    Algoritmos de Ordenamiento
                  </span>
                </h3>
                <p
                  className="text-sm text-muted-foreground mb-4 leading-relaxed"
                  x-file-name="AlgorithmCard"
                  x-line-number="31"
                  x-component="p"
                  x-id="AlgorithmCard_31"
                  x-dynamic="false"
                >
                  <span
                    data-ve-dynamic="true"
                    x-excluded="true"
                    style={{ display: "contents" }}
                  >
                    Aprende cómo funcionan los algoritmos de ordenamiento más
                    populares como Bubble Sort, Quick Sort y Merge Sort.
                  </span>
                </p>
                <Link to="/algorithms/sorting">
                  <div
                    className="flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400 font-medium"
                    x-file-name="AlgorithmCard"
                    x-line-number="42"
                    x-component="div"
                    x-id="AlgorithmCard_42"
                    x-dynamic="false"
                  >
                    <span
                      x-file-name="AlgorithmCard"
                      x-line-number="43"
                      x-component="span"
                      x-id="AlgorithmCard_43"
                      x-dynamic="false"
                    >
                      Ver detalles
                    </span>
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
                      className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </Link>
              </div>
              <div
                data-testid="category-searching"
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all cursor-pointer hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10"
                style={{ opacity: "1", transform: "none" }}
              >
                <div
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform"
                  x-file-name="AlgorithmCard"
                  x-line-number="26"
                  x-component="div"
                  x-id="AlgorithmCard_26"
                  x-dynamic="false"
                >
                  <span
                    data-ve-dynamic="true"
                    x-excluded="true"
                    style={{ display: "contents" }}
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
                      className="lucide lucide-search w-6 h-6"
                      aria-hidden="true"
                      x-file-name="AlgorithmCard"
                      x-line-number="27"
                      x-component="Icon"
                      x-id="AlgorithmCard_27"
                      x-dynamic="false"
                    >
                      <path d="m21 21-4.34-4.34"></path>
                      <circle cx="11" cy="11" r="8"></circle>
                    </svg>
                  </span>
                </div>
                <h3
                  className="text-xl font-semibold mb-2 font-heading"
                  x-file-name="AlgorithmCard"
                  x-line-number="30"
                  x-component="h3"
                  x-id="AlgorithmCard_30"
                  x-dynamic="false"
                >
                  <span
                    data-ve-dynamic="true"
                    x-excluded="true"
                    style={{ display: "contents" }}
                  >
                    Algoritmos de Búsqueda
                  </span>
                </h3>
                <p
                  className="text-sm text-muted-foreground mb-4 leading-relaxed"
                  x-file-name="AlgorithmCard"
                  x-line-number="31"
                  x-component="p"
                  x-id="AlgorithmCard_31"
                  x-dynamic="false"
                >
                  <span
                    data-ve-dynamic="true"
                    x-excluded="true"
                    style={{ display: "contents" }}
                  >
                    Explora técnicas de búsqueda incluyendo búsqueda lineal y
                    búsqueda binaria con visualizaciones interactivas.
                  </span>
                </p>
                <div
                  className="flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400 font-medium"
                  x-file-name="AlgorithmCard"
                  x-line-number="42"
                  x-component="div"
                  x-id="AlgorithmCard_42"
                  x-dynamic="false"
                >
                  <span
                    x-file-name="AlgorithmCard"
                    x-line-number="43"
                    x-component="span"
                    x-id="AlgorithmCard_43"
                    x-dynamic="false"
                  >
                    Ver detalles
                  </span>
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
                    className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
              </div>
              <div
                data-testid="category-data-structures"
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all cursor-pointer hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10"
                style={{ opacity: "1", transform: "none" }}
              >
                <div
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform"
                  x-file-name="AlgorithmCard"
                  x-line-number="26"
                  x-component="div"
                  x-id="AlgorithmCard_26"
                  x-dynamic="false"
                >
                  <span
                    data-ve-dynamic="true"
                    x-excluded="true"
                    style={{ display: "contents" }}
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
                      className="lucide lucide-database w-6 h-6"
                      aria-hidden="true"
                      x-file-name="AlgorithmCard"
                      x-line-number="27"
                      x-component="Icon"
                      x-id="AlgorithmCard_27"
                      x-dynamic="false"
                    >
                      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                      <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                      <path d="M3 12A9 3 0 0 0 21 12"></path>
                    </svg>
                  </span>
                </div>
                <h3
                  className="text-xl font-semibold mb-2 font-heading"
                  x-file-name="AlgorithmCard"
                  x-line-number="30"
                  x-component="h3"
                  x-id="AlgorithmCard_30"
                  x-dynamic="false"
                >
                  <span
                    data-ve-dynamic="true"
                    x-excluded="true"
                    style={{ display: "contents" }}
                  >
                    Estructuras de Datos
                  </span>
                </h3>
                <p
                  className="text-sm text-muted-foreground mb-4 leading-relaxed"
                  x-file-name="AlgorithmCard"
                  x-line-number="31"
                  x-component="p"
                  x-id="AlgorithmCard_31"
                  x-dynamic="false"
                >
                  <span
                    data-ve-dynamic="true"
                    x-excluded="true"
                    style={{ display: "contents" }}
                  >
                    Descubre estructuras de datos fundamentales como pilas,
                    colas, listas enlazadas y árboles binarios.
                  </span>
                </p>
                <div
                  className="flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400 font-medium"
                  x-file-name="AlgorithmCard"
                  x-line-number="42"
                  x-component="div"
                  x-id="AlgorithmCard_42"
                  x-dynamic="false"
                >
                  <span
                    x-file-name="AlgorithmCard"
                    x-line-number="43"
                    x-component="span"
                    x-id="AlgorithmCard_43"
                    x-dynamic="false"
                  >
                    Ver detalles
                  </span>
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
                    className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
              </div>
              <div
                data-testid="category-graphs"
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all cursor-pointer hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10"
                style={{ opacity: "1", transform: "none" }}
              >
                <div
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform"
                  x-file-name="AlgorithmCard"
                  x-line-number="26"
                  x-component="div"
                  x-id="AlgorithmCard_26"
                  x-dynamic="false"
                >
                  <span
                    data-ve-dynamic="true"
                    x-excluded="true"
                    style={{ display: "contents" }}
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
                      className="lucide lucide-network w-6 h-6"
                      aria-hidden="true"
                      x-file-name="AlgorithmCard"
                      x-line-number="27"
                      x-component="Icon"
                      x-id="AlgorithmCard_27"
                      x-dynamic="false"
                    >
                      <rect x="16" y="16" width="6" height="6" rx="1"></rect>
                      <rect x="2" y="16" width="6" height="6" rx="1"></rect>
                      <rect x="9" y="2" width="6" height="6" rx="1"></rect>
                      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
                      <path d="M12 12V8"></path>
                    </svg>
                  </span>
                </div>
                <h3
                  className="text-xl font-semibold mb-2 font-heading"
                  x-file-name="AlgorithmCard"
                  x-line-number="30"
                  x-component="h3"
                  x-id="AlgorithmCard_30"
                  x-dynamic="false"
                >
                  <span
                    data-ve-dynamic="true"
                    x-excluded="true"
                    style={{ display: "contents" }}
                  >
                    Algoritmos de Grafos
                  </span>
                </h3>
                <p
                  className="text-sm text-muted-foreground mb-4 leading-relaxed"
                  x-file-name="AlgorithmCard"
                  x-line-number="31"
                  x-component="p"
                  x-id="AlgorithmCard_31"
                  x-dynamic="false"
                >
                  <span
                    data-ve-dynamic="true"
                    x-excluded="true"
                    style={{ display: "contents" }}
                  >
                    Estudia algoritmos de grafos incluyendo BFS, DFS y el
                    algoritmo de Dijkstra para encontrar el camino más corto.
                  </span>
                </p>
                <div
                  className="flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400 font-medium"
                  x-file-name="AlgorithmCard"
                  x-line-number="42"
                  x-component="div"
                  x-id="AlgorithmCard_42"
                  x-dynamic="false"
                >
                  <span
                    x-file-name="AlgorithmCard"
                    x-line-number="43"
                    x-component="span"
                    x-id="AlgorithmCard_43"
                    x-dynamic="false"
                  >
                    Ver detalles
                  </span>
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
                    className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Algorithms;
