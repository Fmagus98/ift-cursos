import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";
import { class4Code } from "../classCode";
import CopyButton from "../../CopyButton/CopyButton";

const PythonClass4Content2 = ({ onComplete }) => {
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
                onComplete("class3content3");
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
                  3. ¿Que es un módulo?
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
            <h5 className="font-semibold text-gray-900 mb-4">
              ¿Qué son los módulos en Python?
            </h5>
            <p className="leading-relaxed mt-4">
              En Python, los módulos son archivos con extensión{" "}
              <strong>.py</strong> o <strong>.pyc</strong> que contienen código
              reutilizable. Poseen su propio espacio de nombres y pueden incluir
              variables, funciones, clases e incluso otros módulos.
            </p>
            <p className="leading-relaxed">
              Los módulos se utilizan para organizar y modularizar el código,
              facilitando su mantenimiento y reutilización en diferentes
              programas.
            </p>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Pasos para crear y usar módulos
            </h5>
            <p className="leading-relaxed mt-4 mb-4">
              <strong>1. Crear un archivo de módulo:</strong> Crea un archivo
              con extensión <strong>.py</strong>. Por ejemplo:{" "}
              <strong>mi_modulo.py</strong>.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Creación de archivo de módulo en Python"
                src="../img/PythonClass4/module1.webp"
              />
            </div>
            <p className="leading-relaxed mt-4 mb-4">
              <strong>2. Escribir el código del módulo:</strong> En el archivo{" "}
              <strong>mi_modulo.py</strong>, escribe las funciones, clases o
              variables que formarán parte del módulo.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class4Code[6]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Código dentro de un módulo en Python"
                src="../img/PythonClass4/module2.webp"
              />
            </div>
            <p className="leading-relaxed mt-4 mb-4">
              <strong>3. Usar el módulo en otro archivo:</strong> Para utilizar
              el módulo, debes importarlo en otro archivo Python.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class4Code[7]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Importación de módulos en Python"
                src="../img/PythonClass4/module3.webp"
              />
            </div>
            <p className="leading-relaxed mt-4 mb-4">
              También puedes importar partes específicas del módulo usando{" "}
              <strong>from</strong> / <strong>import</strong>.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class4Code[8]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Importación específica de funciones en Python"
                src="../img/PythonClass4/module4.webp"
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Importar módulos desde otras carpetas
            </h5>
            <p className="leading-relaxed mt-4 mb-4">
              Si necesitas importar un archivo ubicado en otra carpeta fuera de
              tu directorio principal, puedes hacerlo modificando el path de la
              siguiente manera:
            </p>
            <div className="relative md:max-w-4xl mb-12">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class4Code[9]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Importación desde otras carpetas en Python"
                src="../img/PythonClass4/module5.webp"
              />
            </div>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default PythonClass4Content2;
