import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import {
  Circle,
  CheckCircle2,
  CircleCheck,
  Clock,
  ChevronDown,
} from "lucide-react";
import { class3Code } from "../classCode";
import CopyButton from "../../CopyButton/CopyButton";

const Pythonclass3Content4 = ({ onComplete }) => {
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
                onComplete("class3content4");
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
                <h4 className="font-semibold text-gray-900">4. While</h4>
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
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Bucle while (mientras)
            </h5>
            <p className="leading-relaxed mt-4 mb-6">
              El bucle <strong>while</strong> ejecuta repetidamente un bloque de
              código <strong>siempre que una condición sea verdadera.</strong> La condición se
              verifica antes de cada iteración y, <strong>si se vuelve falsa, se sale
              del bucle.</strong>
            </p>
            <div className="relative mx-auto md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class3Code[4]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Ejemplo while en Python"
                src="../img/pythonClass3/while.webp"
              />
            </div>
            <div className="relative mx-auto md:max-w-4xl mb-16">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class3Code[5]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Ejemplo while avanzado en Python"
                src="../img/pythonClass3/while2.webp"
              />
            </div>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default Pythonclass3Content4;
