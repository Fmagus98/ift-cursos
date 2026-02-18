import { useState } from "react";
import { Link } from "react-router-dom";
import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";

const PythonClass2Content9 = ({ onComplete }) => {
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
                onComplete("class2content9");
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
                  9. Mini proyecto 2: Conversor de unidades
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
              Mini Proyecto: Conversor de Unidades
            </h5>
            <p className="leading-relaxed mt-4 mb-6">
              El objetivo es crear un programa que convierta entre diferentes
              unidades de medida, como kilómetros a millas y kilogramos a
              libras.
            </p>
            <ul className="list-disc pl-6 space-y-3 leading-relaxed mb-6">
              <li>
                <strong>Entrada de datos:</strong> Determiná cómo vas a pedir al
                usuario que ingrese el valor que quiere convertir y la unidad de
                medida original.
              </li>
              <li>
                <strong>Conversión:</strong> Definí las fórmulas necesarias para
                realizar las conversiones:
                <div className="mt-2 ml-4 text-sm text-gray-700 space-y-1">
                  <div>1 kg = 2.20462 libras</div>
                  <div>1 km = 0.621371 millas</div>
                  <div>1 litro = 0.264172 galones</div>
                </div>
              </li>
              <li>
                <strong>Salida de datos:</strong> Pensá cómo mostrar el
                resultado de una manera clara y comprensible para el usuario.
              </li>
            </ul>
            <p className="leading-relaxed mb-10">
              Descargá un ejemplo del mini proyecto desde acá:
              <Link
                to="/pythonClassFile/miniproject2.py"
                target="_blank"
                download="miniproject2.py"
                className="ml-2 text-cyan-600 font-medium hover:underline"
              >
                Conversor de unidades
              </Link>
            </p>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
export default PythonClass2Content9;
