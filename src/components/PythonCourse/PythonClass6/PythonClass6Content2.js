import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";
import { class6Code } from "../classCode";
import CopyButton from "../../CopyButton/CopyButton";

const PythonClass6Content2 = ({ onComplete, completed }) => {
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
                  2. Métodos de Diccionarios
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
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">keys()</h5>
            <p className="text-break mx-auto w-75 mb-4">
              El método <strong>keys()</strong> retorna una vista con todas las
              claves del diccionario.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class6Code[3]}
              />
              <img
                className="w-full"
                alt="metodo keys"
                src="../img/pythonClass6/dict4.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">values()</h5>
            <p className="text-break mx-auto w-75 mb-4">
              El método <strong>values()</strong> retorna una vista con todos
              los valores del diccionario.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class6Code[4]}
              />
              <img
                className="w-full"
                alt="metodo values"
                src="../img/pythonClass6/dict5.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">items()</h5>
            <p className="text-break mx-auto w-75 mb-4">
              El método <strong>items()</strong> retorna una vista de tuplas con
              los pares clave-valor del diccionario.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class6Code[5]}
              />
              <img
                className="w-full"
                alt="metodo items"
                src="../img/pythonClass6/dict6.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              get(clave, valor_predeterminado)
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              El método <strong>get()</strong> retorna el valor asociado a una
              clave. Si la clave no existe, devuelve un valor predeterminado en
              lugar de generar un error.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class6Code[6]}
              />
              <img
                className="w-full"
                alt="metodo get"
                src="../img/pythonClass6/dict7.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              update(diccionario2)
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              El método <strong>update()</strong> combina dos diccionarios,
              actualizando las claves existentes y agregando nuevas claves.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class6Code[7]}
              />
              <img
                className="w-full"
                alt="metodo update"
                src="../img/pythonClass6/dict8.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              pop(clave, valor_predeterminado)
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              El método <strong>pop()</strong> elimina y retorna el valor
              asociado a una clave. Si la clave no existe, se puede proporcionar
              un valor predeterminado opcional para evitar un error{" "}
              <strong>KeyError</strong>.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class6Code[8]}
              />
              <img
                className="w-full"
                alt="metodo pop"
                src="../img/pythonClass6/dict9.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">popitem()</h5>
            <p className="text-break mx-auto w-75 mb-4">
              El método <strong>popitem()</strong> elimina y retorna el último
              par clave-valor insertado en el diccionario como una tupla.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class6Code[9]}
              />
              <img
                className="w-full"
                alt="metodo popitem"
                src="../img/pythonClass6/dict10.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">clear()</h5>
            <p className="text-break mx-auto w-75 mb-4">
              El método <strong>clear()</strong> elimina todos los pares
              clave-valor del diccionario, dejándolo completamente vacío.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class6Code[10]}
              />
              <img
                className="w-full"
                alt="metodo clear"
                src="../img/pythonClass6/dict11.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">copy()</h5>
            <p className="text-break mx-auto w-75 mb-4">
              El método <strong>copy()</strong> retorna una copia superficial
              del diccionario.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class6Code[11]}
              />
              <img
                className="w-full"
                alt="metodo copy"
                src="../img/pythonClass6/dict12.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              fromkeys(iterable, valor)
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              El método <strong>fromkeys()</strong> crea un nuevo diccionario
              utilizando las claves de un iterable y asigna el mismo valor
              opcional a todas ellas.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class6Code[12]}
              />
              <img
                className="w-full"
                alt="metodo fromkeys"
                src="../img/pythonClass6/dict13.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default PythonClass6Content2;
