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
                onComplete("class3content6");
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
                  6. Resolución de problemas
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
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Práctica con condicionales y bucles
            </h5>
            <p className="leading-relaxed mt-4 mb-6">
              En esta instancia del curso de Python comenzamos a implementar
              condicionales y bucles en problemas reales, desarrollando la
              lógica y la resolución de problemas.
            </p>
            <h6 className="font-medium text-gray-800 mb-3 mt-8">
              Problema N°1 – Validación de contraseña
            </h6>
            <p className="leading-relaxed mb-6">
              El usuario debe elegir una contraseña que contenga al menos:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Una letra</li>
              <li>Un número</li>
              <li>Mínimo 8 caracteres</li>
            </ul>
            <h6 className="font-medium text-gray-800 mb-3 mt-8">
              Diagrama de flujo
            </h6>
            <p className="leading-relaxed mb-6">
              Un diagrama de flujo es una representación gráfica de un algoritmo
              que permite visualizar los pasos y decisiones necesarias para
              resolver un problema.
            </p>
            <div className="relative mx-auto md:max-w-4xl mb-8">
              <img
                className="w-full rounded-xl"
                alt="Inicio del diagrama de validación"
                src="../img/pythonClass3/problem1-1.webp"
              />
            </div>
            <p className="leading-relaxed mb-6">
              A partir del enunciado, identificamos las condiciones que debe
              cumplir la contraseña.
            </p>
            <div className="relative mx-auto md:max-w-4xl mb-8">
              <img
                className="w-full rounded-xl"
                alt="Condiciones del diagrama"
                src="../img/pythonClass3/problem1-2.webp"
              />
            </div>
            <p className="leading-relaxed mb-6">
              Luego, definimos el proceso donde el usuario ingresa su contraseña
              y el sistema la valida.
            </p>
            <div className="relative mx-auto md:max-w-4xl mb-8">
              <img
                className="w-full rounded-xl"
                alt="Validación del usuario"
                src="../img/pythonClass3/problem1-3.webp"
              />
            </div>
            <p className="leading-relaxed mb-6">
              A partir del análisis del diagrama, podemos estructurar nuestro
              programa. No siempre el código será idéntico al diagrama, pero
              sirve como base para organizar la lógica.
            </p>
            <h6 className="font-medium text-gray-800 mb-3 mt-8 text-center">
              Posible solución en Python
            </h6>

            <div className="relative mx-auto md:max-w-4xl mb-20">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class3Code[12]}
              />
              <img
                className="w-full rounded-xl"
                alt="Código validación contraseña en Python"
                src="../img/pythonClass3/problem1-4.webp"
              />
            </div>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
export default Pythonclass3Content5;
