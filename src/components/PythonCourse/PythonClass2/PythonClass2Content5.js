import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";
import { class2Code } from "../classCode";
import CopyButton from "../../CopyButton/CopyButton";

const PythonClass2Content5 = ({ onComplete }) => {
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
                onComplete("class2content5");
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
                  5. Conversión común de tipos de datos
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
              La conversión de tipos de datos en Python se refiere al <strong>proceso de
              cambiar el tipo de un valor de una clase de datos a otra.</strong><br></br>En
              Python, esto se puede hacer mediante el uso de funciones
              incorporadas llamadas <strong>funciones de conversión</strong> que toman un valor
              y lo convierten en otro tipo de dato.
            </p>
            <div className="relative mx-auto md:max-w-4xl mb-20">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class2Code[7]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt=""
                src="../img/pythonClass2/convType.webp"
              />
            </div>
            <p className="leading-relaxed mt-4 mb-4">
              También es importante tener en cuenta que algunas conversiones
              <strong>pueden no ser posibles o pueden producir resultados inesperados.</strong>
              <br></br>Por ejemplo, la conversión de una cadena de texto que no
              representa un número válido a un número puede producir un <strong>error en
              tiempo de ejecución.</strong> <br></br>Por lo tanto, <strong>es importante ser cuidadoso al
              realizar conversiones de tipo en Python y asegurarse de que los
              valores sean compatibles con el tipo de destino.</strong>
            </p>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
export default PythonClass2Content5;
