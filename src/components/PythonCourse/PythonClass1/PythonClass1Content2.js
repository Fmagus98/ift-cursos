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
        {/* HEADER */}
        <Accordion.Trigger className="group w-full p-4 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors text-left">
          <div className="flex items-center gap-4 flex-1">
            <div
              onClick={(e) => {
                e.stopPropagation();
                setDone(true);
                onComplete("class1content2");
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
                  2. Características Comunes en los Programadores
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
            <p className="leading-relaxed">
              Las personas que se dedican a la programación pueden tener
              perfiles muy distintos según sus intereses, experiencia y
              objetivos. Sin embargo, existen algunas características que suelen
              desarrollarse con el tiempo y que ayudan en este camino.
            </p>
          </section>
          <section>
            <h5 className="font-semibold text-gray-900 mb-2">Adaptabilidad</h5>
            <p className="leading-relaxed">
              Con el avance constante de la tecnología, muchos programadores
              aprenden a adaptarse a nuevos lenguajes, frameworks y herramientas
              a lo largo de su carrera.
            </p>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Capacidad para resolver problemas
            </h5>
            <p className="leading-relaxed">
              {" "}
              La programación fomenta el análisis de situaciones, la búsqueda de
              soluciones y el desarrollo de algoritmos eficientes para resolver
              distintos desafíos.
            </p>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Aprendizaje continuo
            </h5>
            <p className="leading-relaxed">
              En un entorno en constante evolución, es común que los
              programadores mantengan una actitud de aprendizaje permanente,
              explorando nuevas tecnologías y mejorando sus habilidades.
            </p>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Atención a los detalles
            </h5>
            <p className="leading-relaxed">
              Con la práctica, se aprende la importancia de ser cuidadoso al
              escribir, probar y corregir el código, ya que pequeños errores
              pueden generar grandes consecuencias.
            </p>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Trabajo en equipo y comunicación
            </h5>
            <p className="leading-relaxed">
              Muchos proyectos requieren colaboración entre diferentes personas,
              por lo que la comunicación y el trabajo en equipo suelen ser parte
              fundamental del desarrollo.
            </p>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Pensamiento analítico
            </h5>
            <p className="leading-relaxed">
              La programación ayuda a desarrollar la capacidad de analizar
              problemas complejos, dividirlos en partes más simples y aplicar
              soluciones organizadas.{" "}
            </p>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Creatividad
            </h5>
            <p className="leading-relaxed">
              A lo largo del aprendizaje, también se estimula la creatividad
              para encontrar soluciones originales y eficientes.
            </p>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default PythonClass1Content2;
