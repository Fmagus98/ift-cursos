import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";
import { class2Code } from "../classCode";
import CopyButton from "../../CopyButton/CopyButton";

const PythonClass2Content7 = ({ onComplete }) => {
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
                onComplete("class2content7");
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
                  7. Métodos de string
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
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">Lower()</h5>

            <p className="leading-relaxed mt-4 mb-4">
              El método lower() se utiliza en objetos de tipo str (cadenas) en
              Python y <strong>se utiliza para convertir una cadena a minúsculas.</strong>
            </p>

            <div className="relative mx-auto md:max-w-4xl mb-10">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class2Code[11]}
              />

              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt=""
                src="../img/pythonClass2/lower.webp"
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">Upper()</h5>

            <p className="leading-relaxed mt-4 mb-4">
              El método upper() se utiliza en objetos de tipo str (cadenas) en
              Python y <strong>se utiliza para convertir una cadena a mayúsculas.</strong>
            </p>

            <div className="relative mx-auto md:max-w-4xl mb-10">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class2Code[12]}
              />

              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt=""
                src="../img/pythonClass2/upper.webp"
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Islower()
            </h5>

            <p className="leading-relaxed mt-4 mb-4">
              El método islower() <strong>verifica si todos los caracteres de la cadena
              son minúsculas.</strong>
            </p>

            <div className="relative mx-auto md:max-w-4xl mb-10">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class2Code[13]}
              />

              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt=""
                src="../img/pythonClass2/islower.webp"
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Isupper()
            </h5>

            <p className="leading-relaxed mt-4 mb-4">
              El método isupper() <strong>verifica si todos los caracteres de la cadena
              son mayúsculas.</strong>
            </p>

            <div className="relative mx-auto md:max-w-4xl mb-10">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class2Code[14]}
              />

              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt=""
                src="../img/pythonClass2/isupper.webp"
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Isdigit()
            </h5>

            <p className="leading-relaxed mt-4 mb-4">
              El método isdigit() <strong>verifica si todos los caracteres de la cadena
              son dígitos.</strong>
            </p>

            <div className="relative mx-auto md:max-w-4xl mb-10">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class2Code[15]}
              />

              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt=""
                src="../img/pythonClass2/isdigit.webp"
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Isalpha()
            </h5>

            <p className="leading-relaxed mt-4 mb-4">
              El método isalpha() <strong>verifica si todos los caracteres de la cadena
              son letras.</strong>
            </p>

            <div className="relative mx-auto md:max-w-4xl mb-10">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class2Code[16]}
              />

              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt=""
                src="../img/pythonClass2/isalpha.webp"
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Capitalize()
            </h5>

            <p className="leading-relaxed mt-4 mb-4">
              El método capitalize() <strong>devuelve una copia de la cadena con el
              primer carácter en mayúscula y el resto en minúscula.</strong>
            </p>

            <div className="relative mx-auto md:max-w-4xl mb-10">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class2Code[17]}
              />

              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt=""
                src="../img/pythonClass2/capitalize.webp"
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">Center()</h5>

            <p className="leading-relaxed mt-4 mb-4">
              El método center() <strong>se utiliza para centrar una cadena dentro de un
              ancho determinado.</strong>
            </p>

            <div className="relative mx-auto md:max-w-4xl mb-10">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class2Code[18]}
              />

              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt=""
                src="../img/pythonClass2/center.webp"
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">Strip()</h5>

            <p className="leading-relaxed mt-4 mb-4">
              El método strip() <strong>elimina los espacios en blanco al inicio y al
              final. Para un solo lado se usa lstrip() o rstrip().</strong>
            </p>

            <div className="relative mx-auto md:max-w-4xl mb-10">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class2Code[19]}
              />

              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt=""
                src="../img/pythonClass2/strip.webp"
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">Count()</h5>

            <p className="leading-relaxed mt-4 mb-4">
              El método count() <strong>cuenta el número de apariciones de una subcadena
              dentro de una cadena.</strong>
            </p>

            <div className="relative mx-auto md:max-w-4xl mb-10">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class2Code[20]}
              />

              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt=""
                src="../img/pythonClass2/count.webp"
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Endswith()
            </h5>

            <p className="leading-relaxed mt-4 mb-4">
              El método endswith() <strong>verifica si una cadena termina con una
              subcadena específica.</strong>
            </p>

            <div className="relative mx-auto md:max-w-4xl mb-20">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class2Code[21]}
              />

              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt=""
                src="../img/pythonClass2/endswith.webp"
              />
            </div>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
export default PythonClass2Content7;
