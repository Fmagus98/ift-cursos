import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";

const PythonClass1Content2 = ({ onComplete }) => {
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
                onComplete("class1content3");
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
                  3. ¿Que es python?
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

        {/* CONTENIDO */}
        <Accordion.Content className=" border-t border-gray-200 bg-gray-50 p-6 space-y-6 text-sm text-gray-700 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
          {/* INTRO */}
          <section>
            <h5 className="font-semibold text-gray-900 text-center mb-2">
              Guido Van Rossum{" "}
            </h5>
            <img
              className="md:max-w-lg2 w-64 mx-auto"
              style={{ borderRadius: "1rem" }}
              src="../img/pythonClass1/guido.webp"
              alt="binary"
            ></img>
            <p className="leading-relaxed mt-4">
              Python es un lenguaje de programación de alto nivel basado en C.
              Fue creado en 1989 por Guido Van Rossum, un programador holandés,
              mientras trabajaba en el Centro de Investigación para la
              Informática (CWI) en los Países Bajos.
            </p>
          </section>
          <section>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              El objetivo de python
            </h5>
            <p className="leading-relaxed">
              La idea detrás de Python era crear un lenguaje de programación que
              fuera fácil de aprender, legible y que permitiera a los
              programadores escribir código rápidamente.
            </p>

            <p className="leading-relaxed">
              Van Rossum quería un lenguaje que fuera más poderoso que el
              lenguaje de script Unix shell, pero que fuera más fácil de usar
              que otros lenguajes de programación de la época, como C++ y Perl.
            </p>
          </section>
          <section>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Origen de su nombre
            </h5>
            <p className="leading-relaxed">
              El nombre "Python" fue inspirado por el grupo de comedia británico
              Monty Python, y muchos de los términos en el lenguaje, como "spam"
              y "egg", también se tomaron de los sketches de Monty Python. Desde
              su lanzamiento inicial, Python ha evolucionado y se ha utilizado
              en una amplia variedad de aplicaciones.
            </p>
          </section>
          <section>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Python actualmente
            </h5>
            <p className="leading-relaxed mb-4">
              Este lenguaje es muy popular en la comunidad de programación
              debido a su sintaxis simple y legible, así como a su enfoque en la
              legibilidad del código. En 2008, Python 3 fue lanzado, lo que
              mejoró aún más el lenguaje y lo hizo más consistente y fácil de
              aprender. Actualmente, Python es uno de los lenguajes de
              programación más populares en todo el mundo y las empresas de alto
              nivel los están utilizando .
            </p>
            <img
              className="md:max-w-lg mx-auto"
              style={{ borderRadius: "1rem" }}
              src="../img/pythonClass1/ep.webp"
              alt="binary"
            ></img>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default PythonClass1Content2;
