import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";

const PythonClass1Content1 = ({ onComplete }) => {
  const [done, setDone] = useState(false);

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
                onComplete("class1content1");
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
                <h4 className="font-semibold text-gray-900">
                  1. Historia de la programación
                </h4>
                {done && (
                  <span
                    data-ve-dynamic="true"
                    x-excluded="true"
                    style={{ display: "contents" }}
                  >
                    {" "}
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
            <h5 className="font-semibold text-gray-900 mb-2">El inicio...</h5>
            <p className="leading-relaxed">
              En los comienzos de la programación los programadores se veían
              obligados a escribir en código binario, lo que resultaba en una
              gran cantidad de código para lograr incluso las funcionalidades
              más simples. Con el paso de los años, las computadoras, los
              lenguajes de programación y los métodos se han ido desarrollando,
              permitiendo simplificar el proceso de programación.
            </p>
          </section>
          <section>
            <h5 className="font-semibold text-gray-900 mb-2">Código Binario</h5>
            <p className="leading-relaxed">
              El código binario es un sistema de representación de información
              que utiliza solamente dos dígitos: 0 y 1. Cada dígito se llama bit
              y puede ser 0 o 1. La cantidad de bits en un código binario varía
              según la información que se necesita representar, siendo los
              múltiplos de 8 (8, 16, 32, 64 y 128) los números más comunes. Por
              ejemplo, un byte consta de 8 bits y puede representar 256 valores
              únicos (2^8).
            </p>
            <p className="leading-relaxed">
              En los inicios de las computadoras, el código binario era la única
              forma de representar la información, lo que requería que los
              programas fueran escritos en este sistema. Sin embargo, este
              proceso era lento y propenso a errores ya que los programadores
              tenían que convertir manualmente cada instrucción y dato en una
              serie de ceros y unos.
            </p>
          </section>
          <section>
            <h5 className="font-semibold text-gray-900 text-center mb-2">
              Representación de números en código binario
            </h5>
            <img
              className="md:max-w-lg2 mx-auto"
              style={{ borderRadius: "1rem" }}
              src="../img/pythonClass1/btot.webp"
              alt="binary"
            ></img>
            <h5 className="mt-10 font-semibold text-gray-900 text-center mb-2">
              Representación de letras en código binario
            </h5>
            <img
              className="md:max-w-lg2 mx-auto"
              style={{ borderRadius: "1rem" }}
              alt="Representación binaria en letras"
              src="../img/pythonClass1/btot2.webp"
            />
          </section>
          <section>
            <h5 className="font-semibold text-gray-900 mb-2">
              Comienzos de la computación
            </h5>
            <p className="leading-relaxed">
              En las primeras computadoras, el código binario era la única forma
              de representar la información. Los datos se almacenaban y se
              procesaban en forma de bits, lo que significaba que los programas
              debían ser escritos en código binario. Esto requería que los
              programadores convirtieran cada instrucción y dato en una serie de
              ceros y unos, lo que era un proceso lento y propenso a errores.
            </p>
            <p className="leading-relaxed mb-4">
              Más adelante se empezó a utilizar programas como Ensamblador, este
              lenguaje empezaba a utilizar letras y números en vez de 0 y 1,
              esto ocasionó que sea un poco más legible y fácil de recordar
              aunque estaba muy alejado aún del lenguaje humano.
            </p>
            <h5 className="font-semibold text-gray-900 mb-2">
              Limitaciones de los 8 bits
            </h5>
            <p className="leading-relaxed mb-10">
              A mediado de los 80' las consolas estaban hechas en 8-bits como la
              NES de Nintendo y la Master System de SEGA a la cabeza. En el
              juego "Pac-man" existe un error por estas limitaciones de bits, en
              la programación del juego existe una variable encargada de ser el
              contador de los niveles del juego, al llegar al nivel 256 el
              procesador no es capaz de calcularlo y aparece en pantalla este
              error.{" "}
            </p>
            <img
              className="md:max-w-4xl mx-auto"
              style={{ borderRadius: "1rem" }}
              alt="8bits"
              src="../img/pythonClass1/PMg.webp"
            />
          </section>

          {/* TEMAS */}
          {/* <section>
            <h5 className="font-semibold text-gray-900 mb-3">
              Temas que aprenderás:
            </h5>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">•</span>

                <span>Historia y evolución de Python</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">•</span>

                <span>Ventajas de Python sobre otros lenguajes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">•</span>
                <span>
                  Aplicaciones reales: Web, Data Science, IA, Automatización
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">•</span>
                <span>Instalación de Python y configuración del entorno</span>
              </li>
            </ul>
          </section>

          {/* CODIGO */}
          {/*   <section>
            <h5 className="font-semibold text-gray-900 mb-3">
              Ejemplo de código:
            </h5>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-gray-100 text-sm">
                <code>{codeExample}</code>
              </pre>
            </div>
         </section> */}

          {/* PUNTOS CLAVE */}
          {/*
          <section>
            <h5 className="font-semibold text-gray-900 mb-3">Puntos clave:</h5>

            <div className="grid gap-2">
              {points.map((point, i) => (
                <div
                  key={i}
                  className="
            flex items-start gap-2
            p-3
            bg-white
            rounded-lg
            border border-cyan-100
          "
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </section> 
          */}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default PythonClass1Content1;
