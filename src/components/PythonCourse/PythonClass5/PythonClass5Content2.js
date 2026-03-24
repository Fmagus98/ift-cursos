import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";
import { class5Code } from "../classCode";
import CopyButton from "../../CopyButton/CopyButton";

const PythonClass5Content2 = ({ onComplete, completed }) => {
  const done = completed?.includes(2);

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
                  2. Métodos de listas
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
            <p className="text-break mx-auto w-75 mb-4">
              Las listas en Python tienen varios<strong>métodos integrados</strong>que
              facilitan su manipulación.
            </p>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              append() / extend()
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              El método <strong>append()</strong> es una función incorporada de
              Python que se utiliza para agregar un elemento al final de una
              lista existente. Toma un argumento y lo agrega como un nuevo
              elemento al final de la lista.
            </p>
            <p className="text-break mx-auto w-75 mb-4">
              Ten en cuenta que <strong>append()</strong> modifica la lista
              existente y no devuelve una nueva lista. Si deseas agregar
              múltiples elementos a la lista al mismo tiempo, puedes utilizar el
              método <strong>extend()</strong>. Aquí tienes un ejemplo de estos
              métodos:
            </p>
             <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class5Code[5]} />
              <img
                className="w-full"
                alt="append extend"
                src="../../../img/pythonClass5/list6.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">insert()</h5>
            <p className="text-break mx-auto w-75 mb-4">
              Inserta un elemento en una posición específica de la lista.
            </p>
             <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class5Code[6]} />
              <img
                className="w-full"
                alt="insert"
                src="../../../img/pythonClass5/list7.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">remove()</h5>
            <p className="text-break mx-auto w-75 mb-4">
              Elimina la primera aparición de un elemento en la lista.
            </p>
             <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class5Code[7]} />
              <img
                className="w-full"
                alt="remove"
                src="../../../img/pythonClass5/list8.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">pop()</h5>
            <p className="text-break mx-auto w-75 mb-4">
              Se utiliza para eliminar el último elemento o un elemento en una
              posición específica de la lista.
            </p>
             <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class5Code[8]} />
              <img
                className="w-full"
                alt="pop"
                src="../../../img/pythonClass5/list9.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">index()</h5>
            <p className="text-break mx-auto w-75 mb-4">
              Devuelve el índice de la primera aparición de un elemento en la
              lista.
            </p>
             <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class5Code[9]} />
              <img
                className="w-full"
                alt="index"
                src="../../../img/pythonClass5/list10.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">count()</h5>
            <p className="text-break mx-auto w-75 mb-4">
              Devuelve el número de veces que un elemento aparece en la lista.
            </p>
             <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class5Code[10]} />
              <img
                className="w-full"
                alt="count"
                src="../../../img/pythonClass5/list11.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">clear()</h5>
            <p className="text-break mx-auto w-75 mb-4">
              Elimina todos los elementos en la lista.
            </p>
             <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class5Code[11]} />
              <img
                className="w-full"
                alt="clear"
                src="../../../img/pythonClass5/list12.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default PythonClass5Content2;
