import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";
import { class7Code } from "../classCode";
import CopyButton from "../../CopyButton/CopyButton";

const PythonClass7Content1 = ({ onComplete, completed }) => {
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
                <h4 className="font-semibold text-gray-900">
                  1. Tipos de excepciones
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
              Python incluye una amplia variedad de excepciones incorporadas que
              permiten identificar distintos tipos de errores durante la
              ejecución del programa. Algunos de los tipos más comunes son:
            </p>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              SyntaxError
            </h5>

            <p className="text-break mx-auto w-75 mb-4">
              Ocurre cuando el código no respeta las reglas de sintaxis de
              Python.
            </p>

            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class7Code[0]} />
              <img
                className="w-full"
                alt="syntax error"
                src="../img/pythonClass7/indexError.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">NameError</h5>

            <p className="text-break mx-auto w-75 mb-4">
              Ocurre cuando se intenta utilizar una variable o nombre que no ha
              sido definido.
            </p>

            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class7Code[1]} />
              <img
                className="w-full"
                alt="name error"
                src="../img/pythonClass7/nameError.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">TypeError</h5>

            <p className="text-break mx-auto w-75 mb-4">
              Ocurre cuando se realiza una operación con un tipo de dato
              incompatible.
            </p>

            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class7Code[2]} />
              <img
                className="w-full"
                alt="type error"
                src="../img/pythonClass7/typeError.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              ValueError
            </h5>

            <p className="text-break mx-auto w-75 mb-4">
              Ocurre cuando una función recibe un argumento del tipo correcto,
              pero con un valor inapropiado.
            </p>

            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class7Code[3]} />
              <img
                className="w-full"
                alt="value error"
                src="../img/pythonClass7/valueError.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              IndentationError
            </h5>

            <p className="text-break mx-auto w-75 mb-4">
              Ocurre cuando la indentación (espacios o tabulaciones) no está
              correctamente alineada.
            </p>

            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class7Code[4]} />
              <img
                className="w-full"
                alt="indentation error"
                src="../img/pythonClass7/indentationError.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              AttributeError
            </h5>

            <p className="text-break mx-auto w-75 mb-4">
              Ocurre cuando se intenta acceder a un atributo o método que no
              existe en un objeto.
            </p>

            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class7Code[5]} />
              <img
                className="w-full"
                alt="attribute error"
                src="../img/pythonClass7/attributeError.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">KeyError</h5>

            <p className="text-break mx-auto w-75 mb-4">
              Ocurre cuando se intenta acceder a una clave que no existe en un
              diccionario.
            </p>

            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class7Code[6]} />
              <img
                className="w-full"
                alt="key error"
                src="../img/pythonClass7/keyError.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              ZeroDivisionError
            </h5>

            <p className="text-break mx-auto w-75 mb-4">
              Ocurre cuando se intenta dividir un número entre cero.
            </p>

            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class7Code[7]} />
              <img
                className="w-full"
                alt="zero division error"
                src="../img/pythonClass7/zeroDivisionError.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              FileNotFoundError
            </h5>

            <p className="text-break mx-auto w-75 mb-4">
              Ocurre cuando se intenta abrir un archivo que no existe en la ruta
              especificada.
            </p>

            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class7Code[8]} />
              <img
                className="w-full"
                alt="file not found error"
                src="../img/pythonClass7/fileNotFound.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default PythonClass7Content1;
