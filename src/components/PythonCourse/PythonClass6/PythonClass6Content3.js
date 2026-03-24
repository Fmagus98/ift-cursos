import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";
import { class6Code } from "../classCode";
import CopyButton from "../../CopyButton/CopyButton";

const PythonClass6Content3 = ({ onComplete, completed }) => {
  const done = completed?.includes(3);

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
                  3. Conjunto - Set
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
          <section>
            <p className="text-break mx-auto w-75 mt-4">
              Los conjuntos o <strong>set</strong> permiten almacenar varios
              elementos y acceder a ellos de una forma similar a las listas,
              pero con algunas diferencias importantes:
            </p>

            <ul className="text-break mx-auto w-75 list-disc ps-4 mt-3">
              <li>
                Los elementos de un set son únicos, es decir, no pueden existir
                duplicados.
              </li>
              <li>
                Son desordenados, lo que significa que no mantienen el orden en
                el que fueron declarados.
              </li>
              <li>
                Se utilizan principalmente para eliminar elementos repetidos.
              </li>
              <li>Son estructuras mutables.</li>
            </ul>

            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class6Code[13]}
              />
              <img
                className="w-full"
                alt="definicion set"
                src="../../../img/pythonClass6/set1.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Extracción de elementos en un conjunto
            </h5>

            <p className="text-break mx-auto w-75">
              Los conjuntos no poseen índices, por lo tanto no es posible
              acceder a un elemento específico mediante posición. Para trabajar
              con sus elementos podemos:
              <br />• Iterar utilizando un bucle <strong>for</strong>.<br />
              • Convertir el conjunto en una lista.
              <br />• Utilizar el método <strong>pop()</strong> para eliminar y
              obtener un elemento.
            </p>

            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class6Code[14]}
              />
              <img
                className="w-full"
                alt="extraccion set"
                src="../../../img/pythonClass6/set2.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default PythonClass6Content3;
