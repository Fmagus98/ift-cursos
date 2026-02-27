import { Link } from "react-router-dom";
import * as Accordion from "@radix-ui/react-accordion";
import {
  Circle,
  CircleCheck,
  Info,
  Clock,
  ChevronDown,
} from "lucide-react";
import { class4Code } from "../classCode";
import CopyButton from "../../CopyButton/CopyButton";

const PythonClass4Content4 = ({ onComplete, completed }) => {
  const done = completed?.includes(4);

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
                  4. Módulos nativos de python
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
          {/* FLECHA */}
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
            <h5 className="font-semibold text-gray-900 mb-2">
              Módulos nativos de Python
            </h5>
            <p className="leading-relaxed mt-4">
              Python tiene una amplia biblioteca estándar que incluye múltiples
              módulos nativos para realizar diversas tareas.
            </p>
            <p className="leading-relaxed">
              A continuación, se muestran algunos de los módulos más utilizados.
            </p>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Módulo Math
            </h5>
            <p className="leading-relaxed mt-4 mb-6">
              El módulo <strong>math</strong> proporciona funciones y constantes
              matemáticas para realizar cálculos numéricos.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class4Code[10]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Importación del módulo math"
                src="../img/pythonClass4/math1.webp"
              />
            </div>
            <p className="leading-relaxed mt-4 mb-4">
              <strong>Redondeo de números:</strong> Puedes usar{" "}
              <strong>ceil</strong>, <strong>floor</strong> y{" "}
              <strong>trunc</strong>.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class4Code[11]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Redondeo con math"
                src="../img/pythonClass4/math2.webp"
              />
            </div>
            <p className="leading-relaxed mt-4 mb-4">
              <strong>Funciones trigonométricas:</strong> Seno, coseno y
              tangente con <strong>sin</strong>, <strong>cos</strong> y{" "}
              <strong>tan</strong>.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class4Code[12]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Funciones trigonométricas"
                src="../img/pythonClass4/math3.webp"
              />
            </div>
            <p className="leading-relaxed mt-4 mb-4">
              <strong>Funciones hiperbólicas:</strong> Uso de{" "}
              <strong>sinh</strong>, <strong>cosh</strong>,{" "}
              <strong>tanh</strong>.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class4Code[13]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Funciones hiperbólicas"
                src="../img/pythonClass4/math4.webp"
              />
            </div>
            <p className="leading-relaxed mt-4 mb-4">
              <strong>Funciones exponenciales y logarítmicas:</strong> Uso de{" "}
              <strong>log</strong>, <strong>exp</strong> y <strong>pow</strong>.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class4Code[14]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Funciones logarítmicas"
                src="../img/pythonClass4/math5.webp"
              />
            </div>
            <div className="grid gap-2 md:max-w-4xl">
              <div
                className="
            flex items-start gap-4
            p-3
            bg-white
            rounded-lg
            border border-cyan-100 justify-enter items-center
          "
              >
                <Info className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                <p className="leading-relaxed">
                  Más información en la documentación oficial:{" "}
                  <Link
                    className="text-blue-600 hover:underline"
                    target="_blank" rel="noreferrer"
                    to="https://docs.python.org/3/library/math.html"
                  >
                    Módulo math
                  </Link>
                </p>{" "}
              </div>
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-12">
              Módulo Random
            </h5>
            <p className="leading-relaxed mt-4 mb-6">
              El módulo <strong>random</strong> permite generar números
              pseudoaleatorios.
            </p>
            <p className="leading-relaxed mt-4 mb-4">
              <strong>random():</strong> Genera un número aleatorio.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class4Code[15]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Uso de random"
                src="../img/pythonClass4/random1.webp"
              />
            </div>
            <p className="leading-relaxed mt-4 mb-4">
              <strong>randint():</strong> Número entero dentro de un rango.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class4Code[16]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Uso de randint"
                src="../img/pythonClass4/random2.webp"
              />
            </div>
            <p className="leading-relaxed mt-4 mb-4">
              <strong>uniform():</strong> Número decimal dentro de un rango.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class4Code[17]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Uso de uniform"
                src="../img/pythonClass4/random3.webp"
              />
            </div>
            <p className="leading-relaxed mt-4 mb-4">
              <strong>choice():</strong> Selecciona un elemento aleatorio.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class4Code[18]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Uso de choice"
                src="../img/pythonClass4/random4.webp"
              />
            </div>
            <p className="leading-relaxed mt-4 mb-4">
              <strong>shuffle():</strong> Mezcla una lista aleatoriamente.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class4Code[19]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Uso de shuffle"
                src="../img/pythonClass4/random5.webp"
              />
            </div>
            <div className="grid gap-2 md:max-w-4xl">
              <div
                className="
            flex items-start gap-4
            p-3
            bg-white
            rounded-lg
            border border-cyan-100 justify-enter items-center
          "
              >
                <Info className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                <p className="leading-relaxed">
                  Más información en la documentación oficial:{" "}
                  <Link
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                    to="https://docs.python.org/3/library/random.html"
                  >
                    Módulo random
                  </Link>
                </p>
              </div>
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-12">
              Módulo Datetime
            </h5>
            <p className="leading-relaxed mt-4 mb-6">
              El módulo <strong>datetime</strong> permite trabajar con fechas y
              horas.
            </p>
            <p className="leading-relaxed mt-4 mb-4">
              <strong>datetime.now():</strong> Obtiene la fecha y hora actual.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class4Code[20]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Fecha actual con datetime"
                src="../img/pythonClass4/datetime1.webp"
              />
            </div>
            <p className="leading-relaxed mt-4 mb-4">
              <strong>date():</strong> Crea una fecha específica.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class4Code[21]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Fecha con date"
                src="../img/pythonClass4/datetime2.webp"
              />
            </div>
            <p className="leading-relaxed mt-4 mb-4">
              <strong>time():</strong> Crea un tiempo específico.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class4Code[22]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Tiempo con datetime"
                src="../img/pythonClass4/datetime3.webp"
              />
            </div>
            <p className="leading-relaxed mt-4 mb-4">
              <strong>datetime():</strong> Crea fecha y hora personalizada.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class4Code[23]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Fecha y hora personalizada"
                src="../img/pythonClass4/datetime4.webp"
              />
            </div>
            <p className="leading-relaxed mt-4 mb-4">
              <strong>strftime():</strong> Formatea fecha y hora como texto.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class4Code[24]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Formato con strftime"
                src="../img/pythonClass4/datetime5.webp"
              />
            </div>
            <p className="leading-relaxed mt-4 mb-4">
              También puedes obtener los valores individuales.
            </p>
            <div className="relative md:max-w-4xl mb-12">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class4Code[25]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt="Componentes de fecha y hora"
                src="../img/pythonClass4/datetime6.webp"
              />
            </div>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default PythonClass4Content4;
