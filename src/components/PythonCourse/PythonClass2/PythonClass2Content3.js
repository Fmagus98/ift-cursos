import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";
import { class2Code } from "../classCode";
import CopyButton from "../../CopyButton/CopyButton";

const PythonClass2Content2 = ({ onComplete }) => {
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
                onComplete("class2content3");
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
                  3. Tipos de Datos
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
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">Booleano</h5>
            <p className="leading-relaxed mt-4 mb-4">
              Este es el primer tipo de dato que vamos a ver y se asemeja al
              lenguaje máquina, ya que su comportamiento es de forma{" "}
              <strong>binaria</strong>
              como la máquina<strong>(0,1)</strong> pero tiene la particularidad
              de que no vamos a escribir 0 y 1, sino que utilizaremos la palabra{" "}
              <strong>False</strong> para representar el <strong>0</strong> y{" "}
              <strong>True</strong> para representar el <strong>1</strong>.
            </p>
            <div className="relative mx-auto md:max-w-4xl">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class2Code[0]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt=""
                src="../img/pythonClass2/boolean.webp"
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Integer/float
            </h5>
            <p className="leading-relaxed mt-4 mb-4">
              Cuando queramos representar números vamos a usar el tipo dato
              <strong>int</strong>o el tipo de dato <strong>float</strong>.{" "}
              <br></br>El tipo de dato<strong>Int</strong>representará
              <strong>todos los números enteros</strong>, estos pueden ser tanto
              positivos como negativos<br></br> El tipo de dato{" "}
              <strong>Float</strong> representará{" "}
              <strong>todos los números fraccionarios</strong>, estos pueden ser
              positivos, negativos mostrados como decimales.
            </p>
            <div className="relative mx-auto md:max-w-4xl">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class2Code[1]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt=""
                src="../img/pythonClass2/int.webp"
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">String</h5>
            <p className="leading-relaxed mt-4 mb-4">
              <strong>String:</strong> Este tipo de datos{" "}
              <strong>representa letras o texto</strong>, hay que tener en
              cuenta que podemos tipear también números pero estos{" "}
              <strong>
                no se comportarán como números y no podremos realizar
                operaciones matemáticas dentro de ella
              </strong>
              , para describir que el tipo de dato es un string debemos poner el
              texto entre comillas o doble comillas <strong>" ", "" ""</strong>{" "}
              si es que va a estar escrito en una linea de código y triple
              comillas<strong>""" """</strong> en el caso de que queramos
              escribir en varias líneas de código.
            </p>
            <div className="relative mx-auto md:max-w-4xl">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class2Code[2]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt=""
                src="../img/pythonClass2/str.webp"
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">Type()</h5>
            <p className="leading-relaxed mt-4 mb-4">
              A la hora de no saber qué tipo de dato contiene una variable
              podemos utilizar la <strong>función type()</strong>, para esto debemos escribir de
              la siguiente forma: <strong>type(var)</strong>
              <br></br><strong>var</strong> va a representar el <strong>nombre de la
              variable que contenga el dato que queremos saber</strong>, acá te mostraré
              un ejemplo de ello:
            </p>
            <div className="relative mx-auto md:max-w-4xl">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class2Code[3]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt=""
                src="../img/pythonClass2/type.webp"
              />
            </div>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default PythonClass2Content2;
