
import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";
import { class8Code } from "../classCode";
import CopyButton from "../../CopyButton/CopyButton";

const PythonClass8Content3 = ({ onComplete, completed }) => {
  const done = completed?.includes(3);

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
                <h4 className="font-semibold text-gray-900">3. Atributos</h4>
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
              Los atributos son variables asociadas a un objeto. Pueden ser{" "}
              <strong>atributos de instancia</strong> (propios de cada objeto) o{" "}
              <strong>atributos de clase</strong> (compartidos por todos los
              objetos creados a partir de la misma clase). Para acceder a ellos
              se utiliza la <strong>notación de punto</strong>.
            </p>

            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10" code={class8Code[1]} />
              <img
                className="w-full"
                alt="ejemplo atributos persona"
                src="../img/pythonClass8/attributes.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <p
              className="text-break mx-auto w-75 mb-4"
            >
              En este ejemplo, la clase <strong>Persona</strong> define los
              atributos
              <strong>nombre</strong> y <strong>edad</strong>. Estos valores se
              asignan al momento de crear el objeto y se acceden utilizando la
              notación de punto (por ejemplo: <strong>persona.nombre</strong>).
            </p>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default PythonClass8Content3;
