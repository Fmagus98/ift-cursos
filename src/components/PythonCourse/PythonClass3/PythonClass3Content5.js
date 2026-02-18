import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";
import { class3Code } from "../classCode";
import CopyButton from "../../CopyButton/CopyButton";

const Pythonclass3Content5 = ({ onComplete }) => {
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
                onComplete("class3content5");
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
                <h4 className="font-semibold text-gray-900">5. For</h4>
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
              Bucle for
            </h5>
            <p className="leading-relaxed mt-4 mb-6">
              El bucle <strong>for</strong> se utiliza para iterar sobre una
              secuencia de elementos, como listas, cadenas de texto o rangos de
              números. En cada iteración, asigna el siguiente elemento a una
              variable y ejecuta el bloque de código.
            </p>
            <h6 className="font-medium text-gray-800 mb-3 mt-8 text-center">
              Bucle for en cadena de texto
            </h6>

            <div className="relative mx-auto md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class3Code[6]}
              />
              <img
                className="w-full rounded-xl"
                alt="For en cadena Python"
                src="../img/pythonClass3/for1.webp"
              />
            </div>
            <div className="relative mx-auto md:max-w-4xl mb-12">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class3Code[7]}
              />

              <img
                className="w-full rounded-xl"
                alt="For en string Python"
                src="../img/pythonClass3/for2.webp"
              />
            </div>
            <h6 className="font-medium text-gray-800 mb-3 mt-8 text-center">
              Bucle for en rango de números
            </h6>
            <div className="relative mx-auto md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class3Code[8]}
              />
              <img
                className="w-full rounded-xl"
                alt="For con range Python"
                src="../img/pythonClass3/for3.webp"
              />
            </div>
            <div className="relative mx-auto md:max-w-4xl mb-12">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class3Code[9]}
              />
              <img
                className="w-full rounded-xl"
                alt="Range Python"
                src="../img/pythonClass3/range.webp"
              />
            </div>
            <h6 className="font-medium text-gray-800 mb-3 mt-8 text-center">
              Bucle for en listas
            </h6>
            <div className="relative mx-auto md:max-w-4xl mb-12">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class3Code[10]}
              />
              <img
                className="w-full rounded-xl"
                alt="For en listas Python"
                src="../img/pythonClass3/for4.webp"
              />
            </div>
            <h6 className="font-medium text-gray-800 mb-3 mt-8 text-center">
              Bucle for en tuplas
            </h6>
            <div className="relative mx-auto md:max-w-4xl mb-20">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class3Code[11]}
              />
              <img
                className="w-full rounded-xl"
                alt="For en tuplas Python"
                src="../img/pythonClass3/for5.webp"
              />
            </div>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
export default Pythonclass3Content5;
