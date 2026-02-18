import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";

const Pythonclass3Content1 = ({ onComplete }) => {
  const [done, setDone] = useState(false);

  return (
    <Accordion.Root type="single" collapsible className="w-full">
      <Accordion.Item
        value="item-1"
        className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md bg-white"
      >
        {/* HEADER */}
        <Accordion.Trigger
          className="
            group
            w-full
            p-4
            cursor-pointer
            flex
            items-center
            justify-between
            hover:bg-gray-50
            transition-colors
            text-left
          "
        >
          <div className="flex items-center gap-4 flex-1">
            <div
              onClick={(e) => {
                e.stopPropagation();
                setDone(true);
                onComplete("class3content1");
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
                  1. Condicionales
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
            {/* Condicionales */}

            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Condicionales en Programación
            </h5>

            <p className="leading-relaxed mt-4 mb-6">
              En programación, las condicionales
              <strong>
                son estructuras que nos permiten tomar decisiones basadas en
                ciertas condiciones.
              </strong><br></br>
              Podemos pensar en ellas como una forma de emular el proceso de
              toma de decisiones que ocurre en la vida real.
            </p>

            <p className="leading-relaxed mb-6">
              Por ejemplo: imaginá que una persona está por salir de su casa por
              la mañana y existe la posibilidad de que llueva más tarde. En ese
              caso, debe decidir si lleva un paraguas o no. Cada decisión genera
              una situación diferente.
            </p>

            {/* Imagen ejemplo */}
            <div className="mx-auto md:max-w-4xl mb-6">
              <img
                className="w-full bg-black"
                style={{ borderRadius: "1rem" }}
                alt="Ejemplo de decisión con condicionales"
                src="../img/pythonClass3/condition.webp"
              />
            </div>

            <p className="leading-relaxed mt-10 mb-4">
              Las condicionales se basan en una expresión que se evalúa como
              <strong>verdadera</strong> o <strong>Falsa</strong>Según el
              resultado de esta evaluación, se ejecuta
              <strong> un bloque de código específico. </strong>
              <br></br>
              En Python, esta estructura se representa de la siguiente manera:
            </p>

            {/* Estructura condicional */}
            <div className="mx-auto md:max-w-4xl mb-10">
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Estructura de una condicional en Python"
                src="../img/pythonClass3/conditionalestructure.webp"
              />
            </div>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default Pythonclass3Content1;
