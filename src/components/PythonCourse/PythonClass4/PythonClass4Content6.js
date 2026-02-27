import { Link } from "react-router-dom";
import * as Accordion from "@radix-ui/react-accordion";
import {
  Circle,
  CircleCheck,
  Clock,
  ChevronDown,
  Download,
} from "lucide-react";

const PythonClass4Content5 = ({ onComplete, completed }) => {
  const done = completed?.includes(6);

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
                  6. Mini Proyecto 4: Calculadora avanzada
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
            <h6 className="font-medium text-gray-800 mb-2">Objetivo</h6>
            <p className="leading-relaxed mb-6">
              Desarrollar una calculadora avanzada que permita a los usuarios
              realizar diversas operaciones matemáticas, utilizando un módulo
              importado que contenga las funciones necesarias para efectuar los
              cálculos.
            </p>
            <h6 className="font-medium text-gray-800 mb-3 mt-4">
              Entrada de datos:
            </h6>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>
                <strong>Operación:</strong>Permitir al usuario seleccionar la
                operación matemática que desea realizar (suma, resta,
                multiplicación, división, potencia o raíz cuadrada).
              </li>
              <li>
                <strong>Números:</strong>Solicitar al usuario uno o dos números,
                según la operación seleccionada.
              </li>
            </ul>
            <h6 className="font-medium text-gray-800 mb-3 mt-8">Cálculo:</h6>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>
                <strong>Operación matemática:</strong>Según la opción elegida,
                llamar a la función correspondiente desde el módulo importado
                para realizar el cálculo.
              </li>
              <li>
                <strong>Números:</strong>Solicitar al usuario uno o dos números,
                según la operación seleccionada.
              </li>
            </ul>
            <h6 className="font-medium text-gray-800 mb-3 mt-8">
              Salida de datos:
            </h6>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>
                <strong>Resultado:</strong>Mostrar al usuario el resultado de la
                operación realizada.
              </li>
              <li>
                <strong>Manejo de errores:</strong>En caso de producirse un
                error (por ejemplo, división por cero), mostrar un mensaje claro
                y comprensible.
              </li>
            </ul>
            <div className="grid gap-2 md:max-w-4xl">
              <div
                className="
            flex items-start gap-4
            p-3
            bg-white
            rounded-lg
            border border-cyan-100 justify-center items-center
          "
              >
                <Download className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                <p className="text-break w-75">
                  Descarga un ejemplo del archivo principal del mini proyecto
                  aquí {" "}
                  <Link
                    to="/pythonClassFile/miniproject4-1.py"
                    target="_blank"
                    download="main.py"
                    className="text-cyan-600"
                  >
                    Calculadora
                  </Link>
                </p>
              </div>
            </div>
            <div className="grid gap-2 md:max-w-4xl">
              <div
                className="
            flex items-start gap-4
            p-3
            bg-white
            rounded-lg
            border border-cyan-100 justify-center
          "
              >
                <Download className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                <p className="text-break w-75">
                  Descarga un ejemplo del módulo utilizado en el archivo
                  principal del proyecto aquí {" "}
                  <Link
                    to="/pythonClassFile/miniproject4-2.py"
                    target="_blank"
                    download="funciones_operaciones.py"
                    className="text-cyan-600"
                  >
                    Módulo de la calculadora
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
export default PythonClass4Content5;
