import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import {
  Circle,
  CheckCircle2,
  CircleCheck,
  Clock,
  ChevronDown,
} from "lucide-react";
import { class4Code } from "../classCode";
import CopyButton from "../../CopyButton/CopyButton";

const PythonClass4Content1 = ({ onComplete }) => {
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
                  1. ¿Que es una función?
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
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              ¿Qué es una función en programación?
            </h5>
            <p className="leading-relaxed mt-4">
              Una función en programación es un conjunto de líneas de código
              agrupadas (bloque de código) que funcionan como una unidad
              realizando una tarea específica.
            </p>

            <p className="leading-relaxed mb-6">
              Estas funciones en Python pueden devolver o no valores, también
              pueden tener o no parámetros/argumentos. A las funciones también
              se las denomina <strong>métodos</strong> cuando se encuentran
              definidas dentro de una clase.
            </p>

            <h5 className="font-semibold text-gray-900 mb-4 mt-10">
              ¿Para qué se utiliza una función?
            </h5>
            <div className="grid gap-2">
              <div
                className="
            flex items-start gap-4
            p-3
            bg-white
            rounded-lg
            border border-cyan-100 justify-enter items-center
          "
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                <p className="leading-relaxed">
                  <strong>Reutilización de código</strong>
                </p>
                <p className="leading-relaxed">
                  Una vez que se define una función, puede ser llamada desde
                  diferentes partes del programa tantas veces como sea
                  necesario. Esto evita la repetición de código y promueve la
                  eficiencia.
                  <br></br>
                  En la comunidad de programadores se difundió la abreviación{" "}
                  <strong>DRY</strong> ("Don't Repeat Yourself"), que significa
                  "no te repitas a ti mismo".
                </p>
              </div>
            </div>
            <div className="grid gap-2">
              <div
                className="
            flex items-start gap-4
            p-3
            bg-white
            rounded-lg
            border border-cyan-100 justify-enter items-center
          "
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                <p className="leading-relaxed">
                  <strong>Modularidad</strong>
                </p>

                <p className="leading-relaxed">
                  Las funciones permiten dividir un programa en módulos más
                  pequeños y autónomos. Cada función se centra en una tarea
                  específica y puede ser desarrollada, probada y depurada de
                  manera independiente.
                </p>
              </div>
            </div>
            <div className="grid gap-2">
              <div
                className="
            flex items-start gap-4
            p-3
            bg-white
            rounded-lg
            border border-cyan-100
          "
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                <p className="leading-relaxed">
                  <strong>Abstracción</strong>
                </p>
                <p className="leading-relaxed">
                  Las funciones pueden ocultar los detalles internos de su
                  implementación y proporcionar una interfaz más simple y fácil
                  de usar.
                </p>
              </div>
            </div>
            <div className="grid gap-2">
              <div
                className="
            flex items-start gap-4
            p-3
            bg-white
            rounded-lg
            border border-cyan-100
          "
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                <p className="leading-relaxed">
                  <strong>Legibilidad y mantenimiento</strong>
                </p>
                <p className="leading-relaxed">
                  Al dividir un programa en funciones más pequeñas y enfocadas,
                  se mejora la legibilidad del código y se facilita su
                  mantenimiento.
                </p>
              </div>
            </div>
            <h5 className="font-semibold text-gray-900 text-center mb-2 mt-10">
              Sintaxis básica de una función
            </h5>
            <div className="relative mx-auto md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class4Code[0]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Ejemplo de función en Python"
                src="../img/pythonClass4/function.webp"
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Explicación de los elementos de una función
            </h5>

            <p className="leading-relaxed mt-4 mb-4">
              <strong>def:</strong> Se utiliza para definir una función en
              Python.
            </p>

            <p className="leading-relaxed mt-4 mb-4">
              <strong>Nombre de la función:</strong> Es el nombre que elegís
              para tu función y debe ser descriptivo.
            </p>

            <p className="leading-relaxed mt-4 mb-4">
              <strong>Parámetros:</strong> Son los valores que recibe la función
              como entrada. Pueden ser cero, uno o varios.
            </p>

            <p className="leading-relaxed mt-4 mb-4">
              <strong>Indentación:</strong> Define el cuerpo de la función y
              contiene las instrucciones a ejecutar.
            </p>

            <p className="leading-relaxed mt-4 mb-4">
              <strong>return:</strong> Indica el valor que devuelve la función.
              Si no se especifica, devuelve <strong>None</strong>.
            </p>

            <p className="leading-relaxed mt-4 mb-10">
              <strong>Llamada a la función:</strong> Para ejecutarla, se escribe
              su nombre seguido de paréntesis. Si tiene parámetros, se colocan
              dentro.
            </p>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default PythonClass4Content1;
