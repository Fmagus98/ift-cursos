import { useState } from "react";
import { Link } from "react-router-dom";
import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";

const PythonClass2Content8 = ({ onComplete }) => {
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
                onComplete("class2content8");
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
                  8. Mini proyecto 1: Calculadora de propinas
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
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Mini Proyecto: Calculadora de Propinas
            </h5>
            <p className="leading-relaxed mt-4 mb-6">
              Crear una calculadora que permita a los usuarios ingresar el total
              de su cuenta y el porcentaje de propina que desean dejar. El
              objetivo es calcular y mostrar tanto la propina como el total a
              pagar.
            </p>
            <ul className="list-disc pl-6 space-y-3 leading-relaxed mb-6">
              <li>
                <strong>Entrada de datos:</strong> ¿Cómo recogerás la
                información del usuario (total de la cuenta y porcentaje de
                propina)?
              </li>

              <li>
                <strong>Cálculo:</strong> ¿Cómo calcularás el monto de la
                propina y el total incluyendo la propina?
              </li>
              <li>
                <strong>Salida de datos:</strong> ¿Cómo mostrarás los resultados
                al usuario?
              </li>
            </ul>
            <p className="leading-relaxed mb-10">
              En caso de que no puedas realizarlo, descargá un ejemplo del mini proyecto desde acá:
              <Link
                to="/pythonClassFile/miniproject1.py"
                target="_blank"
                download="miniproject1.py"
                className="ml-2 text-cyan-600 font-medium hover:underline"
              >
                Calculadora de propinas
              </Link>
            </p>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
export default PythonClass2Content8;
