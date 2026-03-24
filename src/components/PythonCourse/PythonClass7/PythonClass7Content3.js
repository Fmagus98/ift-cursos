import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";
import { class7Code } from "../classCode";
import CopyButton from "../../CopyButton/CopyButton";

const PythonClass7Content2 = ({ onComplete, completed }) => {
  const done = completed?.includes(2);

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
                onComplete();
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
                  3. Métodos de archivos en python
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
            <p className="text-break mx-auto w-75 mt-4">
              En Python es posible realizar operaciones de lectura y escritura
              de archivos utilizando funciones y métodos incorporados en el
              lenguaje. Estas herramientas permiten crear, leer, modificar y
              eliminar archivos.
            </p>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              open() – Abrir archivos
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              La función <strong>open()</strong> se utiliza para abrir un
              archivo. Recibe principalmente dos parámetros: el nombre del
              archivo y el modo en el que se abrirá (por ejemplo: lectura{" "}
              <strong>"r"</strong>, escritura <strong>"w"</strong>, agregado{" "}
              <strong>"a"</strong>, etc.).
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class7Code[12]}
              />
              <img
                className="w-full"
                alt="open ejemplo"
                src="../../../img/pythonClass7/open.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              read() – Leer archivos
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              El método <strong>read()</strong> permite leer el contenido de un
              archivo. Puede utilizarse para leer todo el contenido o una
              cantidad específica de caracteres.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class7Code[13]}
              />
              <img
                className="w-full"
                alt="read ejemplo"
                src="../../../img/pythonClass7/read.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              write() – Escribir archivos
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              El método <strong>write()</strong> se utiliza para escribir datos
              en un archivo. Permite guardar texto o información formateada
              dentro del archivo.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class7Code[14]}
              />
              <img
                className="w-full"
                alt="write ejemplo"
                src="../../../img/pythonClass7/write.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Modo append ("a") – Agregar contenido
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              El modo <strong>"a"</strong> (append) permite agregar contenido a
              un archivo existente sin sobrescribir la información previa.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class7Code[15]}
              />
              <img
                className="w-full"
                alt="append ejemplo"
                src="../../../img/pythonClass7/adjunto.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              close() – Cerrar archivos
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              El método <strong>close()</strong> se utiliza para cerrar un
              archivo una vez que hemos terminado de trabajar con él. Es
              importante cerrar los archivos para liberar recursos del sistema.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class7Code[16]}
              />
              <img
                className="w-full"
                alt="close ejemplo"
                src="../../../img/pythonClass7/close.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              os.rename() – Renombrar archivos
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              Para renombrar un archivo se utiliza el módulo <strong>os</strong>
              y su método <strong>rename()</strong>, que permite cambiar el
              nombre de un archivo existente.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class7Code[17]}
              />
              <img
                className="w-full"
                alt="rename ejemplo"
                src="../../../img/pythonClass7/rename.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              os.remove() – Eliminar archivos
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              Para eliminar un archivo se utiliza el módulo <strong>os</strong>y
              el método <strong>remove()</strong>, que borra el archivo
              especificado.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class7Code[18]}
              />
              <img
                className="w-full"
                alt="remove ejemplo"
                src="../../../img/pythonClass7/remove.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default PythonClass7Content2;
