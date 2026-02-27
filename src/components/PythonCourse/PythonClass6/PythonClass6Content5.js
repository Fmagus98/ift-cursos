import { Link } from "react-router-dom";
import * as Accordion from "@radix-ui/react-accordion";
import {
  Circle,
  CircleCheck,
  Clock,
  ChevronDown
} from "lucide-react";

const PythonClass6Content5 = ({ onComplete, completed }) => {
  const done = completed?.includes(5);

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
                  5. Mini Proyecto 6: Inventario de productos
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
            <h6 className="font-semibold text-gray-900 mb-2">Objetivo</h6>
            <p className="text-break mx-auto w-75">
              Crear un sistema que permita gestionar un inventario de productos.
              El sistema deberá permitir: agregar, actualizar y eliminar
              productos, listar todos los productos, buscar productos por nombre
              y calcular el valor total del inventario.
            </p>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Agregar producto
            </h5>

            <ul className="text-break mx-auto w-75 list-disc ps-4">
              <li>
                Permitir al usuario agregar un nuevo producto al inventario.
              </li>
              <li>
                Cada producto se representará como un diccionario con el
                siguiente formato:
                <br />
                <strong>
                  {
                    "{ 'nombre': 'xxxx', 'cantidad': 00, 'precio_por_unidad': 0000 }"
                  }
                </strong>
              </li>
              <li>
                La lista de productos representará el inventario completo.
              </li>
            </ul>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Actualizar producto
            </h5>

            <ul className="text-break mx-auto w-75 list-disc ps-4">
              <li>Permitir al usuario modificar un producto existente.</li>
              <li>
                Se podrá actualizar el nombre, la cantidad o el precio por
                unidad.
              </li>
            </ul>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Eliminar producto
            </h5>

            <ul className="text-break mx-auto w-75 list-disc ps-4">
              <li>Permitir al usuario eliminar un producto del inventario.</li>
              <li>El producto se eliminará utilizando su nombre.</li>
            </ul>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Listar productos
            </h5>

            <ul className="text-break mx-auto w-75 list-disc ps-4">
              <li>
                Mostrar todos los productos del inventario indicando: nombre,
                cantidad y precio por unidad.
              </li>
            </ul>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Buscar producto
            </h5>

            <ul className="text-break mx-auto w-75 list-disc ps-4">
              <li>
                Permitir buscar un producto por su nombre y mostrar sus detalles
                si se encuentra en el inventario.
              </li>
            </ul>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Calcular valor total del inventario
            </h5>

            <ul className="text-break mx-auto w-75 list-disc ps-4">
              <li>
                Calcular y mostrar el valor total del inventario utilizando la
                fórmula:
                <br />
                <strong>cantidad × precio_por_unidad</strong> para cada
                producto, y luego sumar todos los resultados.
              </li>
            </ul>

            <p className="text-break mx-auto w-75 mt-4">
              El programa debe ejecutarse dentro de un bucle para que continúe
              funcionando hasta que el usuario decida finalizarlo.
            </p>

            <p className="text-break mx-auto w-75">
              Descargá un ejemplo del mini proyecto desde acá —
              <Link
                to="/pythonClassFile/miniproject6.py"
                target="_blank"
                download="miniproject6.py"
                className="text-primary"
              >
                Mini Proyecto Inventario
              </Link>
            </p>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
export default PythonClass6Content5;
