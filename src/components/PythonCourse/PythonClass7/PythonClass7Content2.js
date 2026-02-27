import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";
import { class7Code } from "../classCode";
import CopyButton from "../../CopyButton/CopyButton";

const PythonClass7Content2 = ({ onComplete, completed }) => {
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
                  2. Manejo de excepciones
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
              Una excepción es un evento que ocurre durante la ejecución de un
              programa y puede interrumpir su flujo normal. Cuando se produce
              una excepción, el programa detiene la ejecución habitual y busca
              un bloque de código preparado para manejar ese error. A este
              proceso se lo conoce como "lanzar" (raise) una excepción.
            </p>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Bloque try - except
            </h5>

            <p className="text-break mx-auto w-75">
              El bloque <strong>try - except</strong> se utiliza para manejar
              excepciones en Python. Dentro del bloque <strong>try</strong> se
              coloca el código que podría generar un error. Si ocurre una
              excepción, el flujo del programa se desvía automáticamente al
              bloque <strong>except</strong>, donde podemos manejarla de forma
              controlada.
            </p>

            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class7Code[9]} />
              <img
                className="w-full"
                alt="try except ejemplo"
                src="../img/pythonClass7/tryExcept.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Bloque else
            </h5>

            <p className="text-break mx-auto w-75">
              El bloque <strong>else</strong> es opcional y se ejecuta
              únicamente si no se ha producido ninguna excepción dentro del
              bloque <strong>try</strong>. Se utiliza para colocar el código que
              debe ejecutarse cuando todo funciona correctamente.
            </p>

            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class7Code[10]} />
              <img
                className="w-full"
                alt="else ejemplo"
                src="../img/pythonClass7/else.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Bloque finally
            </h5>

            <p className="text-break mx-auto w-75">
              El bloque <strong>finally</strong> también es opcional y se
              ejecuta siempre, independientemente de si ocurrió una excepción o
              no. Se utiliza principalmente para realizar tareas de limpieza,
              como cerrar archivos, liberar recursos o finalizar conexiones.
            </p>

            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class7Code[11]} />
              <img
                className="w-full"
                alt="finally ejemplo"
                src="../img/pythonClass7/finally.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default PythonClass7Content2;
