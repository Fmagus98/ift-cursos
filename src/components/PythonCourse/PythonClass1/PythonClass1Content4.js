import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import {
  Circle,
  CheckCircle2,
  CircleCheck,
  Clock,
  ChevronDown,
} from "lucide-react";

const PythonClass1Content4 = ({ onComplete }) => {
  const [done, setDone] = useState(false);

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
                setDone(true);
                onComplete("class1content4");
              }}
              className={`flex items-center justify-center w-10 h-10 rounded-fullcursor-pointer transition-colors ${done ? "bg-cyan-100" : "bg-gray-100"}`}
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
                  4. Caracteristicas de Python
                </h4>
                 {done && (
                  <span
                    data-ve-dynamic="true"
                    x-excluded="true"
                    style={{ display: "contents" }}
                  >
                    {" "}
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

        {/* CONTENIDO */}
        <Accordion.Content className=" border-t border-gray-200 bg-gray-50 p-6 space-y-6 text-sm text-gray-700 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
          {/* INTRO */}
          <section>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              lenguaje de alto nivel
            </h5>
            <p className="leading-relaxed mb-4">
              Dentro de la programación hay tipos niveles, estos niveles
              determinan la complejidad en la podemos programar en dicho
              lenguaje. Si el nivel es más bajo, este se acercará más al
              lenguaje máquina(código binario) y facilitará a la maquina a
              interpretar más rápido pero a la vez es más complejo para los
              programadores programar en este lenguaje ya que se aleja del
              lenguaje humano.
            </p>
            <img
              className="md:max-w-4xl mx-auto"
              style={{ borderRadius: "1rem" }}
              src="../img/pythonClass1/level.webp"
              alt="binary"
            ></img>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Case sensitive
            </h5>
            <p className="leading-relaxed">
              Lo que significa que distingue entre mayúsculas y minúsculas en
              los nombres de variables, funciones, clases, módulos y otros
              identificadores. Esto significa que dos identificadores que se
              diferencian solo en su uso de mayúsculas y minúsculas se
              consideran diferentes en Python.
            </p>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Implementación
            </h5>
            <p className="leading-relaxed">
              La implementación de Python se refiere a la forma en que se
              ejecuta el código de Python. Hay varias implementaciones de Python
              disponibles, aquí hay algunas de las más populares:
            </p>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">•</span>
                <span>
                  <strong>CPython:</strong>
                  Es la implementación más común de Python y está escrita en C.
                  CPython es la implementación predeterminada de Python y es
                  utilizada por la mayoría de los programadores de Python.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">•</span>
                <span>
                  <strong>Jython:</strong>
                  Es una implementación de Python escrita en Java. Jython
                  permite a los programadores utilizar Python en una máquina
                  virtual Java y acceder a las librerías y frameworks de Java.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">•</span>
                <span>
                  <strong>IronPython:</strong>
                  Es una implementación de Python escrita en C# y diseñada para
                  el entorno .NET. IronPython permite a los programadores
                  utilizar Python en el entorno .NET y acceder a las librerías y
                  frameworks de .NET.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">•</span>
                <span>
                  <strong>Pypy:</strong>
                  Es una implementación de Python escrita en Python. PyPy es
                  conocido por ser mucho más rápido que CPython, especialmente
                  en aplicaciones que requieren mucho cálculo.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">•</span>
                <span>
                  <strong>Micropython:</strong>
                  Es una implementación de Python diseñada para ser utilizada en
                  microcontroladores y dispositivos de baja potencia.
                  MicroPython es una versión reducida de Python que incluye un
                  conjunto limitado de librerías y frameworks.
                </span>
              </li>
            </ul>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Multiplataforma
            </h5>
            <p className="leading-relaxed mb-4">
              Python se puede utilizar en una amplia variedad de plataformas:
            </p>
            <div className="grid gap-2">
              <div className="w-32 flex items-start gap-2 p-3 bg-white rounded-lg border border-cyan-100 ">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                <span>Windows</span>
              </div>
              <div className="w-32 flex items-start gap-2 p-3 bg-white rounded-lg border border-cyan-100 ">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                <span>MacOS</span>
              </div>
              <div className="w-32 flex items-start gap-2 p-3 bg-white rounded-lg border border-cyan-100 ">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                <span>Linux</span>
              </div>
              <div className="w-32 flex items-start gap-2 p-3 bg-white rounded-lg border border-cyan-100 ">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                <span>Android</span>
              </div>
              <div className="w-32 flex items-start gap-2 p-3 bg-white rounded-lg border border-cyan-100 mb-10">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                <span>IOS</span>
              </div>
            </div>
            <img
              className="md:max-w-4xl mx-auto"
              style={{ borderRadius: "1rem" }}
              src="../img/pythonClass1/os.webp"
              alt="binary"
            ></img>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default PythonClass1Content4;
