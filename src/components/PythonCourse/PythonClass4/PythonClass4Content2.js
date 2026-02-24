import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";
import { class4Code } from "../classCode";
import CopyButton from "../../CopyButton/CopyButton";

const PythonClass4Content2 = ({ onComplete }) => {
  const [done, setDone] = useState(false);

  return (
    <Accordion.Root type="single" collapsible className="w-full">
      <Accordion.Item
        value="item-1"
        className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md bg-white"
      >
        {/* HEADER */}
        <Accordion.Trigger className="group w-full p-4 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors text-left">
          <div className="flex items-center gap-4 flex-1">
            <div
              onClick={(e) => {
                e.stopPropagation();
                setDone(true);
                onComplete("class3content2");
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
              {/* TITULO */}
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="font-semibold text-gray-900">
                  2. Tipos de funciones
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

              {/* DURACION */}
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
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Funciones Integradas (Built-in Functions)
            </h5>

            <p className="leading-relaxed mt-4 mb-6">
              Estas son funciones que vienen incluidas en Python y están
              disponibles sin necesidad de importar ningún módulo.
            </p>
            <div className="relative mx-auto md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class4Code[1]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Funciones integradas en Python"
                src="../img/PythonClass4/function2.webp"
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Funciones definidas por el usuario (User-defined Functions)
            </h5>
            <p className="leading-relaxed mt-4 mb-6">
              Son funciones que se definen explícitamente en el código por el
              programador utilizando la palabra clave <strong>def</strong>.
            </p>
            <div className="relative mx-auto md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class4Code[2]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Funciones definidas por el usuario en Python"
                src="../img/PythonClass4/function3.webp"
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Funciones anónimas (Lambda Functions)
            </h5>
            <p className="leading-relaxed mt-4 mb-6">
              Son funciones que se definen sin un nombre utilizando la palabra
              clave <strong>lambda</strong>. Son útiles para funciones cortas y
              se suelen usar con <strong>map()</strong>,{" "}
              <strong>filter()</strong> o <strong>reduce()</strong>.
            </p>
            <div className="relative mx-auto md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class4Code[3]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Funciones lambda en Python"
                src="../img/PythonClass4/function4.webp"
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Funciones generadoras (Generator Functions)
            </h5>
            <p className="leading-relaxed mt-4 mb-6">
              Son funciones que generan una secuencia de valores. Se definen
              como funciones normales, pero utilizan <strong>yield</strong> en
              lugar de <strong>return</strong>. Cada vez que se llama a{" "}
              <strong>next()</strong>, la función se reanuda donde se quedó.
            </p>
            <div className="relative mx-auto md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class4Code[4]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Funciones generadoras en Python"
                src="../img/PythonClass4/function5.webp"
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Funciones recursivas (Recursive Functions)
            </h5>
            <p className="leading-relaxed mt-4 mb-6">
              Son funciones que se llaman a sí mismas dentro de su definición.
              Son útiles para problemas que pueden descomponerse en subproblemas
              similares.
            </p>
            <div className="relative mx-auto md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class4Code[5]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Funciones recursivas en Python"
                src="../img/PythonClass4/function6.webp"
              />
            </div>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default PythonClass4Content2;
