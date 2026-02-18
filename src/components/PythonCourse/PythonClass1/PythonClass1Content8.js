import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";

const PythonClass1Content8 = ({ onComplete }) => {
  const [done, setDone] = useState(false);
  
  return (
    <Accordion.Root
         type="single"
         collapsible
         className="w-full"
       >
      <Accordion.Item
        value="item-1"
        className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md bg-white"
      >
        <Accordion.Trigger className="group w-full p-4 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors text-left">
          <div className="flex items-center gap-4 flex-1">
            <div
              onClick={(e) => {
                e.stopPropagation();
                setDone(true);
                onComplete("class1content8");
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
                  8. Entorno de desarrollo integrado (IDE)
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
          {/* FLECHA */}
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
          {/* INTRO */}
          <section>
            <p className="leading-relaxed mt-4 mb-4">
              Para programar en un lenguaje de programación debemos tener en
              nuestro ordenador un entorno de desarrollo integrado, más conocido
              como IDE, Un IDE combina un editor de código, un compilador o
              intérprete, herramientas de depuración, un sistema de gestión de
              versiones, entre otras funcionalidades, en una sola aplicación
              integrada. Esta integración facilita el trabajo de los
              programadores al permitirles desarrollar y probar aplicaciones de
              software en un solo entorno.
            </p>
            <p className="leading-relaxed mt-4 mb-4">
              Estos son unos de los IDEs más comunes que se utilizan para el
              lenguaje de programación python:
            </p>
            <ul className="intr-ul">
              <li>
                <img
                  className="w-32"
                  alt=""
                  src="../img/pythonClass1/jupiter.webp"
                />
                <p className="leading-relaxed mb-4">
                  <strong>JupiterLab:</strong> Es una interfaz de usuario web
                  interactiva para el entorno de programación Jupyter. Permite
                  la edición de código en varios lenguajes de programación,
                  incluido Python, y proporciona una variedad de características
                  y extensiones útiles.
                </p>
              </li>
              <li>
                 <img
                  className="w-32"
                  alt=""
                  src="../img/pythonClass1/pycharm.webp"
                />
                <p className="leading-relaxed mb-4">
                  <strong>Pycharm:</strong>Pycharm: Es un entorno de desarrollo
                  integrado para Python desarrollado por JetBrains. Proporciona
                  una amplia gama de características y herramientas para
                  facilitar el desarrollo de aplicaciones Python.
                </p>
              </li>
              <li>
                 <img
                  className="w-32"
                  alt=""
                  src="../img/pythonClass1/spyder.webp"
                />
                <p className="leading-relaxed mb-4">
                  <strong>Spyder:</strong> Es un entorno de desarrollo integrado
                  especialmente diseñado para trabajar con Python en el ámbito
                  científico y de análisis de datos. Está orientado a la
                  programación científica y ofrece una serie de características
                  y herramientas específicas para facilitar el desarrollo de
                  proyectos relacionados con ciencia, matemáticas y análisis de
                  datos.
                </p>
              </li>
              <li>
                 <img
                  className="w-32"
                  alt=""
                  src="../img/pythonClass1/visualStudio.webp"
                />
                <p className="leading-relaxed mb-4">
                  <strong>Visual Studio Code:</strong> Es un entorno de
                  desarrollo de código fuente abierto y gratuito desarrollado
                  por Microsoft. Es un editor de código ligero pero potente que
                  se ha vuelto muy popular entre los desarrolladores por su
                  facilidad de poder programar en diferentes lenguajes de
                  programación, incluido Python.
                </p>
              </li>
            </ul>
            <p className="leading-relaxed mt-4 mb-4">
              En este curso utilizaremos <strong>Visual Studio code</strong>, en el caso que
              tengas 32 bits podes usar <strong>Pycharm 2018.1.6</strong> pero cabe destacar que
              la elección del IDE dependerá de tus necesidades y preferencias
              personales.
            </p>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
export default PythonClass1Content8;
