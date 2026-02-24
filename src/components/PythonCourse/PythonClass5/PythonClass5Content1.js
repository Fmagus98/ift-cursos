import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";
import { class5Code } from "../classCode";
import CopyButton from "../../CopyButton/CopyButton";

const PythonClass5Content1 = ({ onComplete }) => {
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
                <h4 className="font-semibold text-gray-900">1. Listas</h4>
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
            <p className="text-break mx-auto mt-4 w-75 mb-4">
              Una <strong>lista</strong> en Python{" "}
              <strong>
                es una estructura de datos que permite almacenar múltiples
                elementos dentro de un mismo objeto.
              </strong>
              <br></br>
              Se puede entender como una secuencia ordenada de elementos que
              pueden ser de distintos tipos, como{" "}
              <strong>
                números, cadenas de texto, valores booleanos e incluso otras
                listas.
              </strong>{" "}
              <br></br>Las listas se definen utilizando corchetes [ ] y sus
              elementos se separan por comas.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class5Code[0]}
              />
              <img
                className="w-full"
                alt="lista"
                src="../img/pythonClass5/list1.webp"
                style={{ borderRadius: "1rem" }}
              ></img>
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">Índice</h5>
            <p className="text-break mx-auto w-75 mb-4">
              <strong>
                Puedes acceder a los elementos de una lista utilizando índices.
              </strong>{" "}
              En Python, el primer elemento tiene el índice<strong>0</strong>,
              el segundo índice<strong>1</strong>, y así sucesivamente.
              <br></br>
              Por ejemplo, <strong>numeros[7]</strong> devuelve el{" "}
              <strong>8°</strong>elemento de la lista.
            </p>
             <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class5Code[1]} />
              <img
                className="w-full"
                alt="lista"
                src="../img/pythonClass5/list2.webp"
                style={{ borderRadius: "1rem" }}
              ></img>
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Modificación de elementos
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              Es posible modificar el valor de un elemento específico accediendo
              a su índice y asignándole un nuevo valor.
            </p>
             <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class5Code[2]} />
              <img
                className="w-full"
                alt="lista"
                src="../img/pythonClass5/list3.webp"
                style={{ borderRadius: "1rem" }}
              ></img>
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Segmentación (Slicing)
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              La técnica de{" "}
              <strong>
                slicing permite acceder a un subconjunto de elementos dentro de
                una lista.
              </strong>
              <br></br>Se basa en el uso de índices para obtener una porción
              específica de la lista, indicando el punto de inicio y el punto
              final.
            </p>
             <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class5Code[3]} />
              <img
                className="w-full"
                alt="lista"
                src="../img/pythonClass5/list4.webp"
                style={{ borderRadius: "1rem" }}
              ></img>
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Copia de lista
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              Para crear una copia de una lista en Python, puedes utilizar el
              método <strong>copy()</strong>o el constructor{" "}
              <strong>list()</strong>.<br></br>
              Ambos métodos generan una nueva lista independiente a partir de la
              original.
            </p>
             <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class5Code[4]} />
              <img
                className="w-full"
                alt="lista"
                src="../img/pythonClass5/list5.webp"
                style={{ borderRadius: "1rem" }}
              ></img>
            </div>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default PythonClass5Content1;
