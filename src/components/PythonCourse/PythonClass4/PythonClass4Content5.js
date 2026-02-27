import { Link } from "react-router-dom";
import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";


const PythonClass4Content5 = ({ onComplete, completed }) => {
  const done = completed?.includes(5);

  return (
    <Accordion.Root type="single" collapsible className="w-full">
      <Accordion.Item
        value="item-1"
        className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md bg-white"
      >
        <Accordion.Trigger className="group w-full p-4 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors text-left">
          <div className="flex items-center gap-4 flex-1">
            <div
              onClick={(e) => {
                e.stopPropagation();
                onComplete();
              }}
              className={`
    flex items-center justify-center w-10 h-10 rounded-full
    cursor-pointer
    transition-colors
    ${done ? "bg-cyan-100" : "bg-gray-100"}
  `}
            >
              {done ? (
                <CircleCheck className={`w-6 h-6 text-cyan-600`} />
              ) : (
                <Circle className={`w-6 h-6 text-gray-400`} />
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="font-semibold text-gray-900">
                  5. Módulos y librerias independientes para python
                </h4>
                {done && (
                  <span
                    data-ve-dynamic="true"
                    x-excluded="true"
                    style={{ display: "contents" }}
                  >
                    <div class="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-green-100 text-green-700 border-green-200">
                      Completada
                    </div>
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>45 min</span>
              </div>
            </div>
          </div>
          <ChevronDown
            className="
              w-5 h-5
              transition-transform
              duration-300
              group-data-[state=open]:rotate-180
            "
          />
        </Accordion.Trigger>
        <Accordion.Content className=" border-t border-gray-200 bg-gray-50 p-6 space-y-6 text-sm text-gray-700 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
          <section>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Bibliotecas externas en Python
            </h5>
            <p className="leading-relaxed mt-4 ">
              Existe una amplia gama de módulos y bibliotecas disponibles para
              integrar en proyectos de Python, según los objetivos y necesidades
              del proyecto.
            </p>
            <p className="leading-relaxed mt-4 mb-10">
              A continuación, se muestran algunas de las más populares.
            </p>
            <div className="grid gap-2">
              <div className="flex items-start gap-4 justify-enter items-center">
                <img
                  src="/img/pythonClass4/pygame.webp"
                  alt="pygame"
                  className="w-32 h-auto rounded-lg shadow-md"
                />
                <h5 className="font-semibold text-gray-900">Pygame</h5>
              </div>
            </div>
            <p className="leading-relaxed mt-4">
              Biblioteca para el desarrollo de juegos y aplicaciones multimedia,
              con soporte para gráficos, sonidos y eventos.
            </p>
            <Link
              className="text-blue-600 hover:underline"
              to="https://www.pygame.org"
              target="_blank"
              rel="noreferrer"
            >
              Documentación oficial de Pygame
            </Link>
            <div className="grid gap-2 mt-10">
              <div className="flex items-start gap-4 justify-enter items-center">
                <img
                  src="/img/pythonClass4/flask.webp"
                  alt="flask"
                  className="w-32 h-auto rounded-lg shadow-md"
                />
                <h5 className="font-semibold text-gray-900">Flask</h5>
              </div>
            </div>
            <p className="leading-relaxed mt-4 ">
              Framework web ligero que facilita la creación de aplicaciones web
              robustas y escalables.
            </p>
            <Link
              className="text-blue-600 hover:underline"
              to="https://flask.palletsprojects.com/en/2.3.x/installation"
              target="_blank"
              rel="noreferrer"
            >
              Documentación oficial de Flask
            </Link>{" "}
            <div className="grid gap-2 mt-10">
              <div className="flex items-start gap-4 justify-enter items-center">
                <img
                  src="/img/pythonClass4/django.webp"
                  alt="django"
                  className="w-32 h-auto rounded-lg shadow-md"
                />
                <h5 className="font-semibold text-gray-900">Django</h5>
              </div>
            </div>
            <p className="leading-relaxed mt-4 ">
              Framework web completo para crear aplicaciones seguras, escalables
              y mantenibles.
            </p>
            <Link
              className="text-blue-600 hover:underline"
              to="https://www.djangoproject.com/download"
              target="_blank"
              rel="noreferrer"
            >
              Documentación oficial de Django
            </Link>
            <div className="grid gap-2 mt-10">
              <div className="flex items-start gap-4 justify-enter items-center">
                <img
                  src="/img/pythonClass4/numpy.webp"
                  alt="numpy"
                  className="w-32 h-auto rounded-lg shadow-md"
                />
                <h5 className="font-semibold text-gray-900">Numpy</h5>
              </div>
            </div>
            <p className="leading-relaxed mt-4 ">
              Biblioteca para cálculos numéricos eficientes y manipulación de
              matrices.
            </p>
            <Link
              className="text-blue-600 hover:underline"
              to="https://numpy.org/doc"
              target="_blank"
              rel="noreferrer"
            >
              Documentación oficial de NumPy
            </Link>
            <div className="grid gap-2 mt-10">
              <div className="flex items-start gap-4 justify-enter items-center">
                <img
                  src="/img/pythonClass4/pandas.webp"
                  alt="pandas"
                  className="w-32 h-auto rounded-lg shadow-md"
                />
                <h5 className="font-semibold text-gray-900">Pandas</h5>
              </div>
            </div>
            <p className="leading-relaxed mt-4 ">
              Herramientas para análisis y manipulación de datos estructurados.
            </p>
            <Link
              className="text-blue-600 hover:underline"
              to="https://pandas.pydata.org/docs"
              target="_blank"
              rel="noreferrer"
            >
              Documentación oficial de Pandas
            </Link>
            <div className="grid gap-2 mt-10">
              <div className="flex items-start gap-4 justify-enter items-center">
                <img
                  src="/img/pythonClass4/requests.webp"
                  alt="requests"
                  className="w-32 h-auto rounded-lg shadow-md"
                />
                <h5 className="font-semibold text-gray-900">Requests</h5>
              </div>
            </div>
            <p className="leading-relaxed mt-4 ">
              Permite realizar solicitudes HTTP y trabajar con APIs fácilmente.
            </p>
            <Link
              className="text-blue-600 hover:underline"
              to="https://requests.readthedocs.io/en/latest/user/install"
              target="_blank"
              rel="noreferrer"
            >
              Documentación oficial de Requests
            </Link>{" "}
            <div className="grid gap-2 mt-10">
              <div className="flex items-start gap-4 justify-enter items-center">
                <img
                  src="/img/pythonClass4/opencv.webp"
                  alt="opencv"
                  className="w-32 h-auto rounded-lg shadow-md"
                />
                <h5 className="font-semibold text-gray-900">OpenCV</h5>
              </div>
            </div>
            <p className="leading-relaxed mt-4 ">
              Biblioteca de visión por computadora para procesamiento de
              imágenes y video.
            </p>
            <Link
              className="text-blue-600 hover:underline"
              to="https://docs.opencv.org/3.4/d6/d00/tutorial_py_root.html"
              target="_blank"
              rel="noreferrer"
            >
              Documentación oficial de OpenCV
            </Link>
            <div className="grid gap-2 mt-10">
              <div className="flex items-start gap-4 justify-enter items-center">
                <img
                  src="/img/pythonClass4/tensorflow.webp"
                  alt="tensorflow"
                  className="w-32 h-auto rounded-lg shadow-md"
                />
                <h5 className="font-semibold text-gray-900">TensorFlow</h5>
              </div>
            </div>
            <p className="leading-relaxed mt-4 ">
              Biblioteca de aprendizaje automático para crear y entrenar redes
              neuronales.
            </p>
            <Link
              className="text-blue-600 hover:underline"
              to="https://www.tensorflow.org/api_docs"
              target="_blank"
              rel="noreferrer"
            >
              Documentación oficial de TensorFlow
            </Link>
            <h5 className="font-semibold text-gray-900 mb-2 mt-14">
              ¿Dónde encontrar módulos de Python?
            </h5>
            <p className="leading-relaxed mt-4 ">
              Existen distintas plataformas donde puedes buscar bibliotecas y
              paquetes.
            </p>
            <div className="grid gap-2 mt-10">
              <div className="flex items-start gap-4 justify-enter items-center">
                <img
                  src="/img/pythonClass4/pypi.webp"
                  alt="pypi"
                  className="w-16 h-auto rounded-lg shadow-md"
                />
                <h5 className="font-semibold text-gray-900">Python Package Index (PyPI)</h5>
              </div>
            </div>
            <p className="leading-relaxed mt-4 ">
              Repositorio oficial de paquetes de Python.
            </p>
            <Link
              className="text-blue-600 hover:underline"
              to="https://pypi.org/"
              target="_blank"
              rel="noreferrer"
            >
              https://pypi.org/
            </Link>  
            <div className="grid gap-2 mt-10">
              <div className="flex items-start gap-4 justify-enter items-center">
                <img
                  src="/img/pythonClass4/anaconda.webp"
                  alt="anaconda"
                  className="w-16 h-auto rounded-lg shadow-md"
                />
                <h5 className="font-semibold text-gray-900">Anaconda</h5>
              </div>
            </div> 
            <p className="leading-relaxed mt-4 ">
              Distribución que incluye múltiples librerías para ciencia de
              datos.
            </p>
            <Link
              className="text-blue-600 hover:underline"
              to="https://anaconda.org/"
              target="_blank"
              rel="noreferrer"
            >
              https://anaconda.org/
            </Link> 
            <div className="grid gap-2 mt-10">
              <div className="flex items-start gap-4 justify-enter items-center">
                <img
                  src="/img/pythonClass4/github.webp"
                  alt="github"
                  className="w-16 h-auto rounded-lg shadow-md"
                />
                <h5 className="font-semibold text-gray-900">Github</h5>
              </div>
            </div> 
            <p className="leading-relaxed mt-4 ">
              Plataforma colaborativa con miles de proyectos Python.
            </p>
            <Link
              className="text-blue-600 hover:underline"
              to="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/
            </Link>
            <div className="grid gap-2 mt-10">
              <div className="flex items-start gap-4 justify-enter items-center">
                <img
                  src="/img/pythonClass4/python.webp"
                  alt="python"
                  className="w-16 h-auto rounded-lg shadow-md"
                />
                <h5 className="font-semibold text-gray-900">Documentación oficial de Python</h5>
              </div>
            </div> 
            <p className="leading-relaxed mt-4 ">
              Contiene los módulos estándar incluidos en Python.
            </p>
            <Link
              className="text-blue-600 hover:underline"
              to="https://docs.python.org/"
              target="_blank"
              rel="noreferrer"
            >
              https://docs.python.org/
            </Link>
           <div className="grid gap-2 mt-10">
              <div className="flex items-start gap-4 justify-enter items-center">
                <img
                  src="/img/pythonClass4/community.webp"
                  alt="community"
                  className="w-16 h-auto rounded-lg shadow-md"
                />
                <h5 className="font-semibold text-gray-900">Comunidades y foros</h5>
              </div>
            </div> 
            <p className="leading-relaxed mt-4 ">
              Espacios donde desarrolladores comparten proyectos y
              recomendaciones.
            </p>
            <ul className="list-disc pl-6  text-blue-600">
              <li>
                <Link
                  to="https://www.reddit.com/r/Python/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Reddit r/Python
                </Link>
              </li>
              <li>
                <Link
                  to="https://python-forum.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Python Forum
                </Link>
              </li>
              <li>
                <Link
                  to="https://stackoverflow.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Stack Overflow
                </Link>
              </li>
            </ul>
            <p className="leading-relaxed mt-6">
              Al elegir una biblioteca, es recomendable verificar su
              popularidad, calidad, mantenimiento y compatibilidad con tu
              versión de Python.
            </p>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
export default PythonClass4Content5;
