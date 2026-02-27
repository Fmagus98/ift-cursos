import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";
import { class6Code } from "../classCode";
import CopyButton from "../../CopyButton/CopyButton";

const PythonClass6Content1 = ({ onComplete, completed }) => {
  const done = completed?.includes(1);

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
                <h4 className="font-semibold text-gray-900">1. Diccionarios</h4>
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
              Definición y uso de diccionarios
            </h5>

            <p className="text-break mx-auto w-75 mb-4">
              Un diccionario es una estructura de datos <strong>mutable</strong>{" "}
              en Python, compuesta por pares <strong>clave-valor</strong>, donde
              cada clave es única y se utiliza para acceder a su respectivo
              valor.
              <br />
              Las claves deben ser de tipo inmutable, como cadenas de texto,
              números o tuplas. Los valores pueden ser de cualquier tipo,
              incluyendo listas, otros diccionarios e incluso funciones.
            </p>

             <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class6Code[0]} />
              <img
                className="w-full"
                alt="definicion diccionario"
                src="../img/pythonClass6/dict1.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Manipulación de elementos en diccionarios
            </h5>

            <p className="text-break mx-auto w-75 mb-4">
              Para acceder a un valor en un diccionario, utilizamos la clave
              correspondiente. Por ejemplo:{" "}
              <strong>diccionario["clave"]</strong>.
            </p>

             <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class6Code[1]} />
              <img
                className="w-full"
                alt="acceso diccionario"
                src="../img/pythonClass6/dict2.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Modificación de elementos
            </h5>

            <p className="text-break mx-auto w-75 mb-4">
              Podemos modificar el valor asociado a una clave existente
              simplemente asignándole un nuevo valor. También es posible agregar
              nuevas claves o eliminar elementos del diccionario.
            </p>

             <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class6Code[2]} />
              <img
                className="w-full"
                alt="modificacion diccionario"
                src="../img/pythonClass6/dict3.webp"
                style={{ borderRadius: "1rem", marginBottom: "7rem" }}
              />
            </div>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default PythonClass6Content1;
