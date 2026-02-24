import { useState } from "react";
import { Link } from "react-router-dom";
import * as Accordion from "@radix-ui/react-accordion";
import {
  Circle,
  CircleCheck,
  Clock,
  ChevronDown,
  Download,
} from "lucide-react";

const PythonClass5Content5 = ({ onComplete }) => {
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
                  6. Mini Proyecto 5: Sistema de Gestión de Usuarios y Roles
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
              Desarrollar un sistema que permita gestionar usuarios y sus roles
              utilizando una lista de tuplas, donde cada tupla representa un
              usuario con su nombre y rol.{" "}
            </p>
            <h6 className="font-medium text-gray-800 mb-3 mt-4">
              Agregar Usuario:
            </h6>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>
                <p>
                  Permitir al usuario agregar un nuevo usuario con un rol
                  asignado.
                </p>{" "}
              </li>
              <li>
                <p>
                  El sistema debe verificar si el rol es válido antes de agregar
                  el usuario.
                </p>{" "}
              </li>
            </ul>
            <h6 className="font-medium text-gray-800 mb-3 mt-8">
              Listar Usuarios:
            </h6>
            <ul>
              <li>
                <p>Mostrar todos los usuarios con sus roles.</p>
              </li>
            </ul>
            <h6 className="font-medium text-gray-800 mb-3 mt-8">
              Listar Roles Disponibles:
            </h6>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>
                <p>Mostrar todos los roles disponibles en el sistema.</p>
              </li>
            </ul>
            <h6 className="font-medium text-gray-800 mb-3 mt-8">
              Estructura de datos:
            </h6>
            <ul>
              <li>
                <p>
                  <strong>Lista:</strong>Se utiliza para almacenar las tuplas de
                  usuarios y sus roles..
                </p>
              </li>
              <li>
                <p>
                  <strong>Tupla:</strong>Cada tupla contiene dos elementos: el
                  nombre del usuario y su rol.
                </p>
              </li>
              <li>
                <p>
                  <strong>Lista de roles:</strong> Para manejar los diferentes
                  roles disponibles en el sistema.
                </p>
              </li>
            </ul>
            <p className="leading-relaxed mb-6 mt-10">
              El programa debe tener un bucle para que no termine de consultar
              el inventario hasta que no lo diga el usuario.
            </p>
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
                  Descarga un ejemplo del mini proyecto desde acá{" "}
                  <Link
                    to="/pythonClassFile/miniproject5.py"
                    target="_blank"
                    download="main.py"
                    className="text-cyan-600"
                  >
                    Sistema de gestion de usuarios y roles
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
export default PythonClass5Content5;
