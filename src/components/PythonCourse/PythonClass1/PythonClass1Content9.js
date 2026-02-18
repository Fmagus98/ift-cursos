import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";

const PythonClass1Content9 = ({ onComplete }) => {
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
                onComplete("class1content9");
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
                  9. Instalación de IDE
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
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Instalación de IDE para sistema operativo de 64 bits
            </h5>
            <p className="leading-relaxed mt-4 mb-4">
              En este curso utilizaremos Visual Studio Code, es un editor de
              código ligero pero potente que se ha vuelto muy popular entre los
              desarrolladores por su facilidad de poder programar en diferentes
              lenguajes de programación, incluido Python.
            </p>
            <p className="leading-relaxed mt-4 mb-4">
              <strong>1. </strong>Para instalarlo ve al sitio web oficial de
              Visual Studio Code en{" "}
              <strong>
                <a
                  class="text-info"
                  href="https://code.visualstudio.com"
                  target="_blank" rel="noreferrer"
                >
                  https://code.visualstudio.com
                </a>
              </strong>
              .<br />
              En <strong>Download for Windows</strong> van a la palomita que
              esta al lado derecho y van a ver los diferentes sistemas
              operativos en el que pueden descargarlo
            </p>
            <img
              className="md:max-w-4xl"
              alt=""
              src="../img/pythonClass1/ide1.webp"
            />
            <p className="leading-relaxed mt-4 mb-4">
              <strong>2.</strong> Selecciona <strong>Acepto el acuerdo</strong>{" "}
              y luego
              <strong>siguiente</strong> para seguir con la instalación.
            </p>
            <img
              className="md:max-w-lg2"
              alt=""
              src="../img/pythonClass1/ide2.webp"
            />
            <p className="leading-relaxed mt-4 mb-4">
              <strong>3.</strong> Selecciona todos los checkbox y haz click
              derecho en el botón <strong>siguente</strong>.
            </p>
            <img
              className="md:max-w-lg2"
              alt=""
              src="../img/pythonClass1/ide3.webp"
            />
            <p className="leading-relaxed mt-4 mb-4">
              <strong>4.</strong> Haz click derecho en el boton{" "}
              <strong>siguiente</strong>.
            </p>
            <img
              className="md:max-w-lg2"
              alt=""
              src="../img/pythonClass1/ide4.webp"
            />
            <p className="leading-relaxed mt-4 mb-4">
              <strong>5.</strong> Al terminar la instalación haz click en
              <strong>finalizar</strong> y abrirá{" "}
              <strong>Visual Studio Code!</strong>.
            </p>
            <img
              className="md:max-w-lg2"
              alt=""
              src="../img/pythonClass1/ide5.webp"
            />
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Instalación de IDE para sistema operativo de 32 bits
            </h5>
            <p className="leading-relaxed mt-4 mb-4">
              En el caso que dispongas de una arquitectura de 32 bits, Visual
              Studio Code no es compatible y deberás ver otras alternativas, en
              este caso te daré una guía de como instalar{" "}
              <strong>
                Pycharm 2018.1.6(última version compatible con 32 bits)
              </strong>
              .
            </p>
            <p className="leading-relaxed mt-4 mb-4">
              <strong>1. </strong>Para instalarlo ve al sitio web oficial de
              Pycharm en
              <strong>
                <a
                  class="text-info"
                  href="https://www.jetbrains.com/pycharm/download/other.html"
                  target="_blank" rel="noreferrer"
                >
                  https://www.jetbrains.com/pycharm/download/other.html
                </a>
              </strong>
              y selecciona el sistema operativo que utilizas.
            </p>
            <img
              className="md:max-w-4xl"
              alt=""
              src="../img/pythonClass1/pych1.webp"
            />
            <p className="leading-relaxed mt-4 mb-4">
              <strong>2. </strong>Ejecuta el instalador que descargaste y
              selecciona <strong>Next</strong>.
            </p>
            <img
              className="md:max-w-lg2"
              alt=""
              src="../img/pythonClass1/pych2.webp"
            />
            <p className="leading-relaxed mt-4 mb-4">
              <strong>3. </strong>Selecciona <strong>Next</strong>.
            </p>
            <img
              className="md:max-w-lg2"
              alt=""
              src="../img/pythonClass1/pych5.webp"
            />
            <p className="leading-relaxed mt-4 mb-4">
              <strong>4. </strong>Presiona en <strong>32-bit launcher</strong>,{" "}
              <strong>.py</strong> y selecciona <strong>Next</strong>.
            </p>
            <img
              className="md:max-w-lg2"
              alt=""
              src="../img/pythonClass1/pych4.webp"
            />
            <p className="leading-relaxed mt-4 mb-4">
              <strong>5. </strong>Selecciona <strong>Install</strong> y espera a
              que se instale.
            </p>
            <img
              className="md:max-w-lg2"
              alt=""
              src="../img/pythonClass1/pych5.webp"
            />
            <p className="leading-relaxed mt-4 mb-4">
              <strong>6. </strong>Selecciona <strong>Finish</strong>.
            </p>
            <img
              className="md:max-w-lg2"
              alt=""
              src="../img/pythonClass1/pych6.webp"
            />
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
export default PythonClass1Content9;
