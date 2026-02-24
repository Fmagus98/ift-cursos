import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";
import { class5Code } from "../classCode";
import CopyButton from "../../CopyButton/CopyButton";

const PythonClass5Content4 = ({ onComplete }) => {
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
                onComplete("class3content4");
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
                <h4 className="font-semibold text-gray-900">4. Tupla</h4>
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
            <p className="text-break mx-auto w-75 mt-4 mb-4">
              Una tupla en Python es una estructura de datos inmutable, lo que
              significa que no se pueden modificar una vez creadas.
              <br />
              Se utiliza para almacenar una colección ordenada de elementos
              heterogéneos, como números, cadenas de texto, booleanos, etc.
              <br />
              Las tuplas se definen utilizando paréntesis () y los elementos se
              separan por comas.
            </p>
             <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class5Code[19]} />
              <img
                className="w-full"
                alt="definicion tupla"
                src="../img/pythonClass5/tupla1.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">Índice</h5>
            <p className="text-break mx-auto w-75 mb-4">
              Al igual que las listas, el operador de indexación [ ] permite
              acceder a elementos individuales de la tupla utilizando su índice.
              Por ejemplo, <strong>tupla[0]</strong> devuelve el primer elemento
              de la tupla.
            </p>
             <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class5Code[20]} />
              <img
                className="w-full"
                alt="indice tupla"
                src="../img/pythonClass5/tupla2.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Segmentación
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              El operador de segmentación (:) permite acceder a un rango de
              elementos en la tupla. Por ejemplo, <strong>tupla[1:3]</strong>{" "}
              devuelve una nueva tupla que contiene los elementos desde el
              índice 1 hasta el índice 2.
            </p>
             <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class5Code[21]} />
              <img
                className="w-full"
                alt="segmentacion tupla"
                src="../img/pythonClass5/tupla3.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Concatenación
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              El operador de concatenación (+) permite unir dos o más tuplas
              para crear una nueva tupla que contenga todos los elementos de las
              tuplas originales en el mismo orden.
            </p>
             <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class5Code[22]} />
              <img
                className="w-full"
                alt="concatenacion tupla"
                src="../img/pythonClass5/tupla4.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Repetición
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              El operador de multiplicación (*) permite repetir una tupla
              múltiples veces para crear una nueva tupla que contenga las
              repeticiones de los elementos originales.
            </p>
             <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class5Code[23]} />
              <img
                className="w-full"
                alt="repeticion tupla"
                src="../img/pythonClass5/tupla5.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Conversión tupla - lista / lista - tupla
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              Si necesitas realizar operaciones más avanzadas con tuplas, como
              ordenar, filtrar o modificar elementos, puedes convertir la tupla
              en una lista utilizando el método <strong>list()</strong>,
              realizar las operaciones necesarias y luego convertir la lista
              resultante nuevamente en una tupla utilizando el método{" "}
              <strong>tuple()</strong>.
            </p>
             <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class5Code[24]} />
              <img
                className="w-full"
                alt="conversion tupla lista"
                src="../img/pythonClass5/tupla6.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>
            <p
              className="text-break mx-auto w-75"
            >
              Como expliqué anteriormente, las tuplas son estructuras de datos
              inmutables, lo que significa que no se pueden modificar una vez
              creadas. Debido a esto, tienen un conjunto limitado de métodos
              incorporados en comparación con las listas. Los únicos métodos
              disponibles para las tuplas son <strong>count()</strong> e{" "}
              <strong>index()</strong>.
            </p>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default PythonClass5Content4;
