import { Link } from "react-router-dom";
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
                onComplete("class1content7");
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
                  7. Instalación de Python
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
            <p className="leading-relaxed mt-4 mb-4">
              <strong>1.</strong> Dirígete a
              <strong>
                <Link
                  to="https://www.python.org/downloads"
                  target="_blank"
                  className="text-info"
                >
                  https://www.python.org/downloads
                </Link>
              </strong>
              y selecciona <strong>Downloads</strong>
            </p>
            <img
              className="md:max-w-4xl"
              style={{ borderRadius: "1rem" }}
              alt=""
              src="../img/pythonClass1/python1.webp"
            ></img>
            <p className="leading-relaxed mt-4 mb-4">
              <strong>2.</strong> Luego iremos a <strong>All releases</strong>
            </p>
            <img
              className="md:max-w-4xl"
              style={{ borderRadius: "1rem" }}
              alt=""
              src="../img/pythonClass1/python2.webp"
            ></img>
            <p className="leading-relaxed mt-4 mb-4">
              <strong>3.</strong> Buscamos la versión más reciente o alguna
              versión <strong>superior o igual a 3.8</strong>, aunque lo más
              recomendable es que instalen <strong>3.10</strong> en adelante y
              tocamos <strong>download</strong>
            </p>
            <img
              className="md:max-w-4xl"
              style={{ borderRadius: "1rem" }}
              alt=""
              src="../img/pythonClass1/python3.webp"
            ></img>
            <p className="leading-relaxed mt-4 mb-4">
              <strong>4.</strong> Elegimos el sistema operativo que utilizamos
              en nuestro dispositivo y la arquitectura que tengamos sea{" "}
              <strong>64 bits(86x_64 / x64) ó 32 bits(86x)</strong>. <br /> Si
              no sabes cual descargar, ve al punto{" "}
              <strong>6. ¿Que arquitectura tengo en mi PC?</strong>
            </p>
            <img
              className="md:max-w-4xl"
              style={{ borderRadius: "1rem" }}
              alt=""
              src="../img/pythonClass1/python4.webp"
            ></img>
            <p className="leading-relaxed mt-4 mb-4">
              <strong>5.</strong> Al instalar selecciona{" "}
              <strong>add python 3.8 to PATH</strong> y{" "}
              <strong>install now</strong>
            </p>
            <img
              className="md:max-w-4xl"
              style={{ borderRadius: "1rem" }}
              alt=""
              src="../img/pythonClass1/python5.webp"
            ></img>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
export default PythonClass1Content5;
