import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";
import { class6Code } from "../classCode";
import CopyButton from "../../CopyButton/CopyButton";

const PythonClass6Content4 = ({ onComplete }) => {
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
                <h4 className="font-semibold text-gray-900">
                  4. Métodos en conjuntos
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
            <p className="text-break mx-auto w-75 mt-4">
              Los conjuntos en Python tienen varios métodos incorporados que
              permiten realizar diferentes operaciones y manipulaciones.
            </p>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">add()</h5>
            <p className="text-break mx-auto w-75 mb-4">
              El método <strong>add()</strong> agrega un elemento al conjunto.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class6Code[15]}
              />
              <img
                className="w-full"
                alt="metodo add set"
                src="../img/pythonClass6/set3.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">copy()</h5>
            <p className="text-break mx-auto w-75 mb-4">
              El método <strong>copy()</strong> crea y devuelve una copia
              superficial del conjunto.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class6Code[16]}
              />
              <img
                className="w-full"
                alt="metodo copy set"
                src="../img/pythonClass6/set4.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              update(otro_conjunto)
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              <strong>update()</strong> agrega los elementos de otro conjunto al
              conjunto actual.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class6Code[17]}
              />
              <img
                className="w-full"
                alt="metodo update set"
                src="../img/pythonClass6/set5.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              remove(elemento)
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              <strong>remove()</strong> elimina un elemento específico del
              conjunto. Si el elemento no existe, se produce un error.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class6Code[18]}
              />
              <img
                className="w-full"
                alt="metodo remove set"
                src="../img/pythonClass6/set6.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              discard(elemento)
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              <strong>discard()</strong> elimina un elemento si está presente.
              Si no existe, no genera ningún error.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class6Code[19]}
              />
              <img
                className="w-full"
                alt="metodo discard set"
                src="../img/pythonClass6/set7.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">pop()</h5>
            <p className="text-break mx-auto w-75 mb-4">
              <strong>pop()</strong> elimina y devuelve un elemento aleatorio
              del conjunto.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class6Code[20]}
              />
              <img
                className="w-full"
                alt="metodo pop set"
                src="../img/pythonClass6/set8.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              union(otro_conjunto)
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              <strong>union()</strong> devuelve un nuevo conjunto con todos los
              elementos de ambos conjuntos sin duplicados.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class6Code[21]}
              />
              <img
                className="w-full"
                alt="metodo union set"
                src="../img/pythonClass6/set9.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              intersection(otro_conjunto)
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              <strong>intersection()</strong> devuelve un nuevo conjunto con los
              elementos que están presentes en ambos conjuntos.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class6Code[22]}
              />
              <img
                className="w-full"
                alt="metodo intersection set"
                src="../img/pythonClass6/set10.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              difference(otro_conjunto)
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              <strong>difference()</strong> devuelve un nuevo conjunto con los
              elementos que están en el conjunto actual pero no en el otro.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class6Code[23]}
              />
              <img
                className="w-full"
                alt="metodo difference set"
                src="../img/pythonClass6/set11.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              symmetric_difference(otro_conjunto)
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              <strong>symmetric_difference()</strong> devuelve los elementos que
              están en uno u otro conjunto, pero no en ambos.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class6Code[24]}
              />
              <img
                className="w-full"
                alt="metodo symmetric difference set"
                src="../img/pythonClass6/set12.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              issubset(otro_conjunto)
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              <strong>issubset()</strong> verifica si todos los elementos del
              conjunto actual están presentes en el otro conjunto.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class6Code[25]}
              />
              <img
                className="w-full"
                alt="metodo issubset set"
                src="../img/pythonClass6/set13.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              issuperset(otro_conjunto)
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              <strong>issuperset()</strong> verifica si el conjunto actual
              contiene todos los elementos del otro conjunto.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class6Code[26]}
              />
              <img
                className="w-full"
                alt="metodo issuperset set"
                src="../img/pythonClass6/set14.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">clear()</h5>
            <p className="text-break mx-auto w-75 mb-4">
              <strong>clear()</strong> elimina todos los elementos del conjunto,
              dejándolo vacío.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class6Code[27]}
              />
              <img
                className="w-full"
                alt="metodo clear set"
                src="../img/pythonClass6/set15.webp"
                style={{ borderRadius: "1rem"}}
              />
            </div>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default PythonClass6Content4;
