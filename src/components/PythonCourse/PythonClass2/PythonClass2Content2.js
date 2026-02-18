import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";

const PythonClass2Content2 = ({ onComplete }) => {
  const [done, setDone] = useState(false);

  return (
    <Accordion.Root type="single" collapsible className="w-full">
      <Accordion.Item
        value="item-1"
        className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md bg-white"
      >
        {/* HEADER */}
        <Accordion.Trigger className="group w-full p-4 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors text-left">
          <div className="flex items-center gap-4 flex-1">
            <div
              onClick={(e) => {
                e.stopPropagation();
                setDone(true);
                onComplete("class2content2");
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
                  2. Estilo de escritura
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
              Convenciones de Estilo de Escritura en Python
            </h5>
            <p className="leading-relaxed">
              Las convenciones de estilo de codificación incluyen reglas para
              nombrar
              <strong>
                variables, funciones, clases, métodos, constantes, etc.
              </strong>
              <br></br>También pueden incluir reglas para la{" "}
              <strong>
                indentación, el espaciado, la longitud máxima de línea, entre
                otros aspectos
              </strong>
              .
            </p>
            <p className="leading-relaxed mt-4">
              En general, las convenciones de estilo de codificación{" "}
              <strong>
                se utilizan para estandarizar la forma en que se escribe el
                código dentro de un proyecto o una organización,
              </strong>{" "}
              lo que facilita la colaboración y el mantenimiento del código a
              largo plazo. <br></br>Además, siguiendo estas convenciones, el
              código puede ser más fácilmente <strong>legible</strong> y
              <strong>comprensible</strong> por otros programadores, lo que es
              especialmente importante en proyectos de equipo.
            </p>
            <p className="leading-relaxed mt-4">
              En el caso de python, tenemos{" "}
              <strong>3 tipos de estilos de escritura</strong>
              <br></br>
            </p>
            <p className="leading-relaxed">
              <strong>Upper case:</strong> Se utiliza cuando nombramos una
              variable o función llamada con una palabra.
            </p>
            <p className="leading-relaxed">
              <strong>Snake case:</strong> Cuando nombramos una variable llamada
              con más de 1 palabra se utilizará <strong>Snake Case.</strong>
              <br></br>
            </p>
            <p className="leading-relaxed">
              <strong>Pascal case:</strong> Este estilo de escritura se
              utilizará solamente cuando creamos una clase.
            </p>
            <img
              className="mt-4 md:max-w-4xl mx-auto"
              style={{ borderRadius: "1rem" }}
              alt=""
              src="../img/pythonClass2/namingConventions.webp"
            ></img>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Declaración de variables
            </h5>
            <p className="leading-relaxed">
              También tenemos que saber que el lenguaje de python es{" "}
              <strong>camel sensitive,</strong>esto que quiere decir? Al ser
              camel sensitive{" "}
              <strong>
                python es sensible a las mayúsculas y minúsculas y es importante
                evitar nombrar dos o más variables con el mismo nombre en un
                mismo ámbito en la programación
              </strong>
              , incluso si se utilizan diferentes tipos de escritura (como
              mayúsculas y minúsculas o snake case vs. camel case), ya que esto
              puede llevar a confusiones y dificultades para identificar qué
              variable contiene qué valor.
            </p>
            <img
              className="mt-4 md:max-w-4xl mx-auto mb-10"
              style={{ borderRadius: "1rem" }}
              alt=""
              src="../img/pythonClass2/practice.webp"
            ></img>
            <p className="leading-relaxed mb-10">
              <strong>
                Nombrar variables con nombres distintos y descriptivos ayudará a
                mantener un código más organizado y fácil de leer y entender, lo
                que será beneficioso para la mantenibilidad y escalabilidad del
                código a largo plazo.
              </strong>
            </p>
            <p className="leading-relaxed">
              También en python existen <strong>palabras reservadas</strong> que
              debemos evitar al nombrar variables, ya que podrías tener
              problemas en el código.
            </p>
            <img
              className="mt-4 md:max-w-4xl mx-auto"
              style={{ borderRadius: "1rem" }}
              alt=""
              src="../img/pythonClass2/letterNot.webp"
            ></img>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default PythonClass2Content2;
