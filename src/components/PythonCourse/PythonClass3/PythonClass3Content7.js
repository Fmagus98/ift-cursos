import { Link } from "react-router-dom";
import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";
import { class3Code } from "../classCode";
import CopyButton from "../../CopyButton/CopyButton";

const Pythonclass3Content7 = ({ onComplete }) => {
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
                onComplete("class3content7");
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
                  7. Mini projecto 3 - Simulador de compra
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
              Mini proyecto – Simulador de compra
            </h5>
            <p className="leading-relaxed mt-4 mb-6">
              El objetivo es crear un simulador que permita a los usuarios
              seleccionar productos, ingresar cantidades y calcular el total a
              pagar, incluyendo impuestos si es necesario.
            </p>
            <h6 className="font-medium text-gray-800 mb-3 mt-8">Objetivo</h6>
            <p className="leading-relaxed mb-6">
              Crear un programa que simule una compra mostrando el detalle
              completo de los productos seleccionados.
            </p>
            <h6 className="font-medium text-gray-800 mb-3 mt-8">
              Entrada de datos
            </h6>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>
                <strong>Productos disponibles:</strong> lista con precios.
              </li>
              <li>
                <strong>Selección del producto:</strong> mediante número o menú.
              </li>
              <li>
                <strong>Cantidad:</strong> ingreso por teclado.
              </li>
              <li>
                <strong>Impuesto (opcional):</strong> porcentaje configurable.
              </li>
            </ul>
            <h6 className="font-medium text-gray-800 mb-3 mt-8">Cálculo</h6>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>
                <strong>Subtotal:</strong> precio × cantidad.
              </li>
              <li>
                <strong>Impuesto:</strong> aplicado al subtotal.
              </li>
              <li>
                <strong>Total:</strong> subtotal + impuesto.
              </li>
            </ul>
            <h6 className="font-medium text-gray-800 mb-3 mt-8">
              Salida de datos
            </h6>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>
                <strong>Detalle de compra:</strong> producto, cantidad, precio,
                subtotal, impuesto y total.
              </li>
            </ul>
            <p className="leading-relaxed mt-6">
              Descargá un ejemplo del mini proyecto:
              <Link
                to="/pythonClassFile/miniproject3.py"
                target="_blank"
                download="miniproject3.py"
                className="ml-2 text-cyan-600 font-medium hover:underline"
              >
                Simulador de compra
              </Link>
            </p>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
export default Pythonclass3Content7;
