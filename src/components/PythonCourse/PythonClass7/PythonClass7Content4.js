import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";
import { class7Code } from "../classCode";
import CopyButton from "../../CopyButton/CopyButton";

const PythonClass7Content4 = ({ onComplete }) => {
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
                onComplete("class3content4");
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
                  4. Métodos de archivos en python(csv)
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
              En Python también es posible trabajar con archivos CSV (Comma
              Separated Values) para leer, escribir y modificar datos
              estructurados. Para ello, debemos importar el módulo{" "}
              <strong>csv</strong>.
            </p>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Leer un archivo CSV
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              El método <strong>csv.DictReader()</strong> se utiliza para leer
              archivos CSV y convertir cada fila en un diccionario. Las claves
              del diccionario corresponden a los nombres de las columnas, y los
              valores a los datos de cada fila.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class7Code[19]}
              />
              <img
                className="w-full"
                alt="dictreader ejemplo"
                src="../img/pythonClass7/dictReader.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Buscar un dato en un CSV
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              Para encontrar una fila por el valor de una columna, podemos
              utilizar <strong>csv.DictReader()</strong> y recorrer los
              registros hasta localizar el dato correspondiente.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class7Code[20]}
              />
              <img
                className="w-full"
                alt="buscar csv ejemplo"
                src="../img/pythonClass7/dictReaderFind.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Añadir un dato en un CSV
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              Para agregar un nuevo registro, se crea un nuevo diccionario con
              los datos ingresados y luego se sobrescribe el archivo con la
              información actualizada. Se utilizan{" "}
              <strong>csv.DictReader()</strong> y{" "}
              <strong>csv.DictWriter()</strong>
              para manipular los datos en formato de diccionario.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class7Code[21]}
              />
              <img
                className="w-full"
                alt="agregar csv ejemplo"
                src="../img/pythonClass7/writeCsv.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Eliminar un dato en un CSV
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              Para eliminar un registro, se filtran los datos excluyendo el ID
              proporcionado por el usuario y luego se vuelve a escribir el
              archivo con la información actualizada. Se recomienda utilizar{" "}
              <strong>csv.DictReader()</strong> y
              <strong>csv.DictWriter()</strong> para mantener la estructura
              correcta.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class7Code[22]}
              />
              <img
                className="w-full"
                alt="eliminar csv ejemplo"
                src="../img/pythonClass7/deleteCsv.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Actualizar un dato en un CSV
            </h5>
            <p className="text-break mx-auto w-75 mb-4">
              Para actualizar un registro, se busca el ID correspondiente, se
              modifican los valores necesarios y luego se sobrescribe el archivo
              con los datos actualizados. Nuevamente,{" "}
              <strong>csv.DictReader()</strong> y
              <strong>csv.DictWriter()</strong> facilitan el manejo de los
              datos.
            </p>
            <div className="relative md:max-w-4xl mb-8">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class7Code[23]}
              />
              <img
                className="w-full"
                alt="actualizar csv ejemplo"
                src="../img/pythonClass7/updateCsv.webp"
                style={{ borderRadius: "1rem" }}
              />
            </div>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default PythonClass7Content4;