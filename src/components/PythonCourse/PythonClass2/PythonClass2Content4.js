import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import {
  Circle,
  CheckCircle2,
  CircleCheck,
  Clock,
  ChevronDown,
} from "lucide-react";
import { class2Code } from "../classCode";
import CopyButton from "../../CopyButton/CopyButton";

const PythonClass2Content4 = ({ onComplete }) => {
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
                onComplete("class2content4");
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
                  4. Operadores y expresiones
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

        {/* CONTENIDO */}
        <Accordion.Content className=" border-t border-gray-200 bg-gray-50 p-6 space-y-6 text-sm text-gray-700 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
          {/* INTRO */}
          <section>
            <p className="leading-relaxed mt-4 mb-4">
              En Python, los <strong>operadores</strong> son símbolos especiales
              que realizan operaciones en valores y variables. Las expresiones,
              por otro lado, son combinaciones de{" "}
              <strong>valores, variables y operadores</strong> que Python puede
              evaluar y dar un resultado.
            </p>

            <p className="leading-relaxed mt-4 mb-4">
              Existen varios <strong>tipos de operadores</strong> en Python,
              entre los más comunes se encuentran operadores:
              <strong>
                aritméticos, de comparación, lógicos y de asignación
              </strong>
              .
            </p>

            {/* Operadores Aritméticos */}
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Operadores aritméticos
            </h5>

            <p className="leading-relaxed mt-4 mb-4">
              Estos operadores{" "}
              <strong>
                se utilizan para realizar operaciones matemáticas básicas
              </strong>{" "}
              como la suma (+), la resta (-), la multiplicación (*), la división
              (/), el módulo (%) y la potencia (**).
            </p>

            <div className="relative mx-auto md:max-w-4xl mb-10">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class2Code[4]}
              />

              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt=""
                src="../img/pythonClass2/opArit.webp"
              />
            </div>

            {/* Operadores de Comparación */}
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Operadores de comparación
            </h5>

            <p className="leading-relaxed mt-4 mb-4">
              Se utilizan para comparar dos valores y devolver un valor booleano{" "}
              <strong>(verdadero o falso)</strong>como resultado. Algunos
              operadores de comparación comunes son:{" "}
              <strong>==, !=, &gt;, &lt;, &gt;=, &lt;=</strong>.
            </p>

            <div className="relative mx-auto md:max-w-4xl mb-10">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class2Code[5]}
              />

              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt=""
                src="../img/pythonClass2/opComp.webp"
              />
            </div>

            {/* Operadores Lógicos */}
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Operadores lógicos
            </h5>

            <p className="leading-relaxed mt-4 mb-4">
              Se utilizan{" "}
              <strong>
                para combinar valores booleanos y devolver un valor booleano
                como resultado
              </strong>
              . Los operadores lógicos más comunes son:{" "}
              <strong>and, or y not</strong>.
            </p>
            <div className="relative mx-auto md:max-w-4xl mb-20">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class2Code[6]}
              />

              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt=""
                src="../img/pythonClass2/opLog.webp"
              />
            </div>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default PythonClass2Content4;
