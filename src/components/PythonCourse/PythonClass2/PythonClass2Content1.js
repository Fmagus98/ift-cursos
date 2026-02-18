import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";

const PythonClass2Content1 = ({ onComplete }) => {
  const [done, setDone] = useState(false);

  const points = [
    "Python es fácil de aprender y leer",
    "Tiene una gran comunidad y abundantes recursos",
    "Es usado por empresas como Google, Netflix, Instagram",
    "Ideal tanto para principiantes como para expertos",
  ];

  const codeExample = `# Tu primer programa en Python

print("¡Hola, mundo!")
print("Bienvenido a Python")

# Variables básicas
nombre = "Juan"
edad = 25

print(f"Mi nombre es {nombre} y tengo {edad} años")
`;

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
                onComplete("class2content1");
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
              {/* TITULO */}
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="font-semibold text-gray-900">1. Variables</h4>
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

              {/* DURACION */}
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

        {/* CONTENIDO */}
        <Accordion.Content className=" border-t border-gray-200 bg-gray-50 p-6 space-y-6 text-sm text-gray-700 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
          {/* INTRO */}
          <section>
            <h5 className="font-semibold text-gray-900 mb-2">
              ¿Que es una variable?
            </h5>
            <p className="leading-relaxed">
              En el contexto de la programación,
              <strong>
                una variable es un contenedor para almacenar y manipular datos.
              </strong>{" "}
              Imagina una variable como una caja etiquetada en la memoria del
              equipo, donde puedes guardar diferentes tipos de información, como
              <strong>números, texto o valores booleanos.</strong>En un
              programa, puedes declarar una variable y asignarle un valor para
              luego utilizarlo en diferentes partes del código.
            </p>
            <p className="leading-relaxed">
              Cuando declaras una variable en un lenguaje de programación,{" "}
              <strong>
                se reserva un espacio en la memoria para almacenar su valor.
              </strong>{" "}
              La ubicación exacta en la memoria puede variar dependiendo del
              lenguaje y del entorno de ejecución. Sin embargo, el proceso
              general para acceder al valor de una variable implica el uso de la{" "}
              <strong>CPU y RAM</strong> del equipo.
            </p>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Funcionamiento de hardware
            </h5>
            <p className="leading-relaxed">
              <strong>CPU (Unidad Central de Procesamiento):</strong> La CPU es
              el componente principal del hardware que ejecuta las instrucciones
              de un programa. Cuando accedes a una variable,
              <strong>
                la CPU utiliza registros internos para almacenar temporalmente
                el valor de la variable que se va a procesar.
              </strong>
              Los registros son ubicaciones de memoria extremadamente rápidas y
              cercanas a la CPU, lo que permite un acceso más rápido a los
              datos.
            </p>
            <p className="leading-relaxed mt-4">
              <strong>RAM (Memoria de Acceso Aleatorio):</strong> La RAM es un
              tipo de memoria de almacenamiento temporal que almacena tanto el
              programa en ejecución como los datos necesarios para el programa.
              Cuando se necesita el valor de una variable,
              <strong>
                la CPU busca en la RAM la ubicación de memoria reservada para
                esa variable y recupera el valor almacenado allí.
              </strong>
              Esto implica acceder a la dirección de memoria correspondiente a
              la variable y obtener los datos almacenados en esa ubicación.
            </p>
            <img
              className="md:max-w-lg2 mx-auto"
              style={{ borderRadius: "1rem" }}
              alt=""
              src="../img/pythonClass2/variable.webp"
            />
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default PythonClass2Content1;
