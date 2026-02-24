import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";
import { class5Code } from "../classCode";
import CopyButton from "../../CopyButton/CopyButton";

const PythonClass5Content2 = ({ onComplete }) => {
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
                onComplete("class3content3");
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
                  3. Funciones en listas
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
           <p className="text-break mx-auto w-75 mb-4">
  Además de tener métodos para utilizar en listas, también tenemos funciones que nos ayudan a la hora de manipular datos.<br></br>Aquí te explicaré algunos de ellos:
</p>

<h5 className="font-semibold text-gray-900 mb-2 mt-4">
  len()
</h5>
<p className="text-break mx-auto w-75 mb-4">
  len()<strong>devuelve la cantidad de elementos que contiene la lista.</strong>
</p>
 <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"code={class5Code[12]} />
  <img
    className="w-full"
    alt="len lista"
    src="../img/pythonClass5/list13.webp"
    style={{ borderRadius: "1rem" }}
  />
</div>

<h5 className="font-semibold text-gray-900 mb-2 mt-4">
  max()
</h5>
<p className="text-break mx-auto w-75 mb-4">
 max()<strong>devuelve el valor del elemento más alto de la lista.</strong>
</p>
 <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"code={class5Code[13]} />
  <img
    className="w-full"
    alt="max lista"
    src="../img/pythonClass5/list14.webp"
    style={{ borderRadius: "1rem" }}
  />
</div>

<h5 className="font-semibold text-gray-900 mb-2 mt-4">
  min()
</h5>
<p className="text-break mx-auto w-75 mb-4">
  min()<strong>devuelve el valor del elemento más bajo de la lista.</strong>
</p>
 <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"code={class5Code[14]} />
  <img
    className="w-full"
    alt="min lista"
    src="../img/pythonClass5/list15.webp"
    style={{ borderRadius: "1rem" }}
  />
</div>

<h5 className="font-semibold text-gray-900 mb-2 mt-4">
  sum()
</h5>
<p className="text-break mx-auto w-75 mb-4">
  sum()<strong>devuelve la sumatoria de todos los elementos de la lista.</strong> 
</p>
 <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"code={class5Code[15]} />
  <img
    className="w-full"
    alt="sum lista"
    src="../img/pythonClass5/list16.webp"
    style={{ borderRadius: "1rem" }}
  />
</div>

<h5 className="font-semibold text-gray-900 mb-2 mt-4">
  sort() / sorted() / reverse
</h5>
<p className="text-break mx-auto w-75 mb-4">
  sort()<strong> ordena los elementos de la lista de forma ascendente y modifica la lista original.</strong><br />
  sorted()<strong> crea una nueva lista ordenada de forma ascendente sin modificar la original.</strong><br />
  Si deseas ordenar la lista en orden descendente, puedes utilizar el argumento <strong>reverse=True</strong> en <strong>sort()</strong> o <strong>sorted()</strong>.
</p>
 <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"code={class5Code[16]} />
  <img
    className="w-full"
    alt="sort lista"
    src="../img/pythonClass5/list17.webp"
    style={{ borderRadius: "1rem" }}
  />
</div>

 <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"code={class5Code[17]} />
  <img
    className="w-full"
    alt="sorted reverse lista"
    src="../img/pythonClass5/list18.webp"
    style={{ borderRadius: "1rem" }}
  />
</div>

<h5 className="font-semibold text-gray-900 mb-2 mt-4">
  reversed()
</h5>
<p className="text-break mx-auto w-75 mb-4">
  reversed()<strong>devuelve los elementos de la lista en orden inverso sin modificar la lista original.</strong>
</p>
 <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"code={class5Code[18]} />
  <img
    className="w-full"
    alt="reversed lista"
    src="../img/pythonClass5/list19.webp"
    style={{ borderRadius: "1rem" }}
  />
</div>
             </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default PythonClass5Content2;
