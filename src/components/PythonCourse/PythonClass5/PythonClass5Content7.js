
import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";
import QuizForm from "../../QuizForm/QuizForm";
import { questionsPythonClass5 } from "../../QuizForm/questionsPython";

const PythonClass5Content7 = ({ onComplete, completed }) => {
  const done = completed?.includes(7);

  return (
    <Accordion.Root type="single" collapsible className="w-full">
      <Accordion.Item
        value="item-1"
        className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md bg-white"
      >
        <Accordion.Trigger className="group w-full p-4 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors text-left">
          <div className="flex items-center gap-4 flex-1">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full cursor-pointer transition-colors ${done ? "bg-cyan-100" : "bg-gray-100"}`}
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
                  7. Evaluación de Conocimientos: Clase 5 - Listas y tuplas
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
        <Accordion.Content
          forceMount
          className="md:px-3 pt-2 overflow-hidden data-[state=closed]:hidden data-[state=open]:block pb-6"
        >
          <section>
            <div className="rounded-xl shadow border-2 border-cyan-200 p-4 m-4 bg-cyan-50">
              <div>
                <p className="text-sm text-gray-600 text-center font-bold">
                  Responde todas las preguntas y envía el formulario para ver tu
                  resultado
                </p>
              </div>
            </div>
            <QuizForm
              questions={questionsPythonClass5}
              onDone={() => {
                onComplete();
              }}
            />
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
export default PythonClass5Content7;
