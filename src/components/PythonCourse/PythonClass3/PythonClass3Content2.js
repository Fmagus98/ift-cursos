import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";
import { class3Code } from "../classCode";
import CopyButton from "../../CopyButton/CopyButton";

const Pythonclass3Content2 = ({ onComplete }) => {
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
                  2. If, else, elif y match
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
            <h5 className="font-semibold text-gray-900 mt-10">If</h5>
            <p className="leading-relaxed mt-4 mb-10">
              La palabra clave <strong>if</strong> se utiliza para iniciar una
              estructura condicional.
              <strong>
                Nos permite especificar una condición que se evalúa como
                verdadera o falsa.
              </strong>
              <br></br>
              Si la condición es
              <strong> verdadera,</strong>
              se ejecuta el bloque de código indentado bajo el{" "}
              <strong>if.</strong>
              <br></br>
              Si es
              <strong> falsa,</strong>
              se omite ese bloque y el programa continúa con la siguiente
              instrucción.
            </p>
            <div className="relative mx-auto md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class3Code[0]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Ejemplo if en Python"
                src="../img/pythonClass3/if.webp"
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">Else</h5>
            <p className="leading-relaxed mb-10">
              La palabra clave <strong>else</strong> se utiliza junto con if
              para ejecutar un bloque de código cuando la condición es falsa.
              <br></br>Si la condición del<strong>if es verdadera,</strong>el
              bloque else se omite y <strong> se ejecuta el bloque if</strong>{" "}
              <br></br>Si la condición del<strong>if es falso,</strong>el bloque
              if se omite y <strong> se ejcuta el bloque else</strong>
            </p>
            <div className="relative mx-auto md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class3Code[1]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Ejemplo else en Python"
                src="../img/pythonClass3/else.webp"
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">Elif</h5>
            <p className="leading-relaxed mt-4 mb-6">
              La palabra clave <strong>elif</strong> es una abreviatura de
              <strong>else if</strong>y se utiliza para agregar condiciones
              adicionales.
              <strong>
                Permite evaluar múltiples condiciones de forma secuencial hasta
                que una sea verdadera.
              </strong>
            </p>
            <div className="relative mx-auto md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class3Code[2]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Ejemplo elif en Python"
                src="../img/pythonClass3/elif.webp"
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">Match</h5>
            <p className="leading-relaxed mt-4 mb-6">
              match es una estructura introducida en Python<strong>3.10</strong>{" "}
              que permite la coincidencia de patrones. 
              <br></br>
              Es similar a<strong>switch</strong>en otros lenguajes, pero más potente y flexible. Ejecuta el bloque
              correspondiente al primer patrón que coincida.
            </p>
            <div className="relative mx-auto md:max-w-4xl mb-10">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class3Code[3]}
              />

              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Ejemplo match en Python"
                src="../img/pythonClass3/match.webp"
              />
            </div>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default Pythonclass3Content2;
