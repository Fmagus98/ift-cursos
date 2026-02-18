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
                onComplete("class2content6");
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
                  6. Conversión de tipos de datos - String
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
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">F-string</h5>

            <p className="leading-relaxed mt-4 mb-4">
              F-strings (cadenas formateadas) <strong>son una forma conveniente y
              legible de formatear y construir cadenas en Python a partir de
              expresiones y variables.</strong> Se introdujeron en<strong>Python 3.6</strong> y son muy
              populares debido a su sintaxis sencilla y su capacidad para
              incorporar valores de manera directa en las cadenas.
            </p>

            <p className="leading-relaxed mt-4 mb-4">
              Un <strong>f-string</strong> se crea precediendo una cadena con el prefijo <strong>f</strong>o<strong>F.</strong> seguido de las comillas <strong>" "</strong>.
              <br></br>
              Dentro de un f-string, puedes incluir expresiones Python
              encerradas entre llaves <strong>{"{ }"}</strong>. Estas expresiones se evalúan y se
              insertan en la cadena final.
            </p>

            <div className="relative mx-auto md:max-w-4xl mb-10">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class2Code[8]}
              />

              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt=""
                src="../img/pythonClass2/f-string.webp"
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">Format</h5>

            <p className="leading-relaxed mt-4 mb-4">
              El método <strong>format()</strong> se llama en una cadena y toma uno o más
              argumentos que se utilizan para completar marcadores de posición
              dentro de la cadena. Estos marcadores se definen utilizando llaves<strong>{" "}</strong>
              <strong>{"{ }"}</strong> y se reemplazan por los valores correspondientes.
            </p>
            <div className="relative mx-auto md:max-w-4xl mb-10">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class2Code[9]}
              />

              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt=""
                src="../img/pythonClass2/format.webp"
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">Repr</h5>

            <p className="leading-relaxed mt-4 mb-4">
              El método repr() es una función incorporada que devuelve una
              representación de cadena "oficial" o "canónica" de un objeto.
              Cuando llamas a repr(), Python intenta devolver una cadena que, si
              se pasara nuevamente como código, crearía un objeto idéntico al
              original.
            </p>

            <p className="leading-relaxed mt-4 mb-4">
              Es decir, la cadena resultante debe ser una representación precisa
              del estado interno del objeto.
            </p>

            <div className="relative mx-auto md:max-w-4xl mb-20">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class2Code[10]}
              />

              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt=""
                src="../img/pythonClass2/repr.webp"
              />
            </div>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
export default PythonClass2Content5;
