import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";
const PythonClass1Content5 = ({ onComplete }) => {
  const [done, setDone] = useState(false);
  
  return (
    <Accordion.Root
         type="single"
         collapsible
         className="w-full"
       >
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
                onComplete("class1content6");
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
                  6. ¿Que arquitectura tengo en mi PC?
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
          {/* INTRO */}
          <section>
            <p className="leading-relaxed">
              La arquitectura de 32 bits y 64 bits se refiere a cómo un
              procesador maneja la información.
            </p>
            <p className="leading-relaxed mb-4">
              Estos términos se refieren a la cantidad de datos que un
              procesador puede procesar en un solo ciclo de reloj y la cantidad
              máxima de memoria que puede direccionar el procesador.
            </p>
            <img
              className="md:max-w-lg2"
              style={{ borderRadius: "1rem" }}
              src="https://static.wixstatic.com/media/1d9c31_adba912f58f344a1b676c8ddd656962e~mv2.webp"
              alt="binary"
            ></img>
            <p className="leading-relaxed mt-4">
              Es importante saberlo ya que vamos a instalar una versión
              diferente de python e IDE para cada caso.{" "}
            </p>
            <p className="leading-relaxed mb-4">
              Para saber que tipo de arquitectura tengo en mi pc debemos hacer
              lo siguiente:
            </p>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              En Windows
            </h5>
            <p className="leading-relaxed mb-4">
              <strong>1</strong>. Toca la tecla windows, escribe en el buscador
              <strong>sistema</strong>y selecciona el primero que aparezca.
            </p>
            <img
              className="md:max-w-4xl"
              style={{ borderRadius: "1rem" }}
              src="../img/pythonClass1/w1.webp"
              alt="binary"
            ></img>
            <p className="leading-relaxed mb-4 mt-10">
              <strong>2</strong>. Dentro del sistema verás la información de tu
              computadora, allí encontrarás que tipo de arquitectura tiene tu
              pc.
            </p>
            <img
              className="md:max-w-4xl"
              style={{ borderRadius: "1rem" }}
              src="../img/pythonClass1/w2.webp"
              alt="binary"
            ></img>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">En MacOS</h5>
            <p className="leading-relaxed mb-4">
              <strong>1</strong>. Pulsamos el icono de la manzana y
              seleccionamos en "Sobre este Mac".
            </p>
            <img
              className="md:max-w-4xl"
              style={{ borderRadius: "1rem" }}
              src="../img/pythonClass1/m1.webp"
              alt="binary"
            ></img>
            <p className="leading-relaxed mb-4 mt-10">
              <strong>2</strong>. Dentro de la pantalla que se abrió,
              seleccionamos "informe del sistema".
            </p>
            <img
              className="md:max-w-4xl"
              style={{ borderRadius: "1rem" }}
              src="../img/pythonClass1/m2.webp"
              alt="binary"
            ></img>
            <p className="leading-relaxed mb-4 mt-10">
              <strong>3</strong>. Ingresa a "Extensiones" y dentro verás la
              información de tu procesador, en el caso que diga "x86_64" en
              arquitectura y "Si" en 64 bits(intel) será de 64 bits, en caso
              contrario es de 32 bits.
            </p>
            <img
              className="md:max-w-4xl"
              style={{ borderRadius: "1rem" }}
              src="../img/pythonClass1/m3.webp"
              alt="binary"
            ></img>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">En Linux</h5>
            <p className="leading-relaxed mb-4">
              <strong>1</strong>. Abre el terminal con las teclas
              <strong>CTRL</strong> +<strong>ALT</strong> +<strong>T</strong>, o
              desde <strong>Aplicaciones/Accesorios/Terminal</strong>(Estos
              atajos se basan en Linux/Ubuntu) y luego escribe{" "}
              <strong>lscpu</strong>, ejecutalo y te mostrará que tipo de
              arquitectura es. Si esta marca <strong>32-bits, 64-bits</strong>{" "}
              es de 64 bits, por el contrario si te marca solo{" "}
              <strong>32-bits</strong>, tu ordenador es de 32 bits.
            </p>
            <img
              className="md:max-w-4xl"
              style={{ borderRadius: "1rem" }}
              src="../img/pythonClass1/l1.webp"
              alt="binary"
            ></img>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
export default PythonClass1Content5;
