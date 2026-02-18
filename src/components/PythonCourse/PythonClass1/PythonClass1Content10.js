import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";

const PythonClass1Content10 = ({ onComplete }) => {
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
                onComplete("class1content10");
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
                  10. Herramientas de Visual Studio Code (IDE)
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
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Extensiones en Visual Studio Code
            </h5>
            <p className="leading-relaxed mt-4 mb-4">
              En nuestro Visual Studio Code tenemos bastantes herramientas que
              nos falicitará a la hora de programar en python, unas de ellas son
              las extensiones descargables que se nos va a proporcionar en el
              programa.
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-4 mb-4 leading-relaxed">
              <p className="leading-relaxed mt-4 mb-4">
                Para descargar extensiones tendremos que ir a la barra que está
                en la parte superior izquierda y tocamos el logo indicado en la
                imagen.
                <img
                  className="inline w-6 mx-1 align-middle border-content rounded-lg"
                  alt=""
                  src="../img/pythonClass1/extension.webp"
                />
              </p>
            </div>
            <img
              className="md:max-w-4xl"
              alt=""
              src="../img/pythonClass1/ext1.webp"
            />
            <p className="leading-relaxed mt-4 mb-4">
              Al tocar el logo veremos que tenemos un <strong>buscador</strong>{" "}
              para buscar extensiones, un apartado llamado{" "}
              <strong>installed</strong> donde tendrémos todas las extensiones
              que instalamos y un apartado llamado <strong>recommended</strong>
              donde vamos a tener extensiones que podría servirnos al utilizar
              un lenguaje en especial.
            </p>
            <img
              className="md:max-w-4xl"
              alt=""
              src="../img/pythonClass1/ext2.webp"
            />
            <h5 className="font-semibold text-gray-900 mb-2 mt-10">
              Lista de extensiones que utilizaremos en python
            </h5>
            <p className="leading-relaxed mt-4 mb-4">
              En el buscador de las extensiones instalaremos lo siguiente:
            </p>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">•</span>
                <p className="leading-relaxed">
                  <strong>CPython:</strong>
                  Es la implementación más común de Python y está escrita en C.
                  CPython es la implementación predeterminada de Python y es
                  utilizada por la mayoría de los programadores de Python.
                </p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">•</span>
                <p className="leading-relaxed">
                  <strong>Spanish Language Pack for Visual Studio Code:</strong>{" "}
                  Esta extensión nos facilitará toda la interfaz de usuario de
                  visual studio code a español
                </p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">•</span>
                <p className="leading-relaxed">
                  <strong>Python:</strong> les proporcionará autocompletado
                  avanzado,Análisis estático de código y detección de errores.
                </p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">•</span>
                <p className="leading-relaxed">
                  <strong>Python Environment Manager:</strong> Gestiona entornos
                  virtuales de Python y seleccionar qué entorno virtual se va a
                  utilizar en un proyecto de Python en particular.
                </p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">•</span>
                <p className="leading-relaxed">
                  <strong>Python indent:</strong> Indentación automática para
                  facilitar la lectura del códigoUna mala indentación puede
                  hacer que el código sea difícil de leer y entender, lo que a
                  su vez puede llevar a errores y problemas en el código.
                </p>
              </li>
            </ul>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Terminal - Python
            </h5>
            <p className="leading-relaxed mt-4 mb-4">
              Empecemos a utilizar visual studio code para verificar que se
              instaló correctamente python, si nos vamos a la parte superior del
              programa veremos unos tres puntos<strong>...</strong>, presionalo
              con click izquierdo y ve a<strong>Terminal/New terminal</strong> ó
              simplemente presiona <strong>CTRL</strong> +{" "}
              <strong>Shift ⇧</strong> + <strong>Ñ</strong>
            </p>
            <img
              className="md:max-w-4xl"
              alt=""
              src="../img/pythonClass1/t1.webp"
            />
            <p className="leading-relaxed mt-4 mb-4">
              Observamos que se abrirá la terminal en la parte inferior del
              programa, dentro de la terminal te mostrará la dirección en donde
              se está ejecutando la terminal.
            </p>
            <img
              className="md:max-w-4xl"
              alt=""
              src="../img/pythonClass1/t2.webp"
            />
            <p className="leading-relaxed mt-4 mb-4">
              Si escribimos en la terminal <strong>python</strong> y le damos
              <strong>Enter ↩</strong> , nos mostrará la versión que estamos
              utilizando si está instalado.
            </p>
            <img
              className="md:max-w-4xl"
              alt=""
              src="../img/pythonClass1/t3.webp"
            />
            <p className="leading-relaxed mt-4 mb-4">
              Para finalizar el proceso de ejecución que muestra la version de
              python escribiremos <strong>exit()</strong>y le damos
              <strong>Enter ↩</strong>.
            </p>
            <img
              className="md:max-w-4xl"
              alt=""
              src="../img/pythonClass1/t4.webp"
            />
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Terminal - Pip
            </h5>
            <p className="leading-relaxed mt-4 mb-4 ">
              Ya vimos que podemos ver la version de python escribiendo python,
              ahora empezaremos a ver pip.
              <br />
              <strong>Pip</strong> es un sistema de gestión de paquetes
              utilizado en Python para instalar y administrar bibliotecas y
              paquetes de terceros que no están incluidos en la biblioteca
              estándar de Python.
              <br />
              <br />
              El nombre <strong>Pip</strong> se deriva de la frase{" "}
              <strong>Pip Installs Packages</strong> (Pip instala paquetes) y se
              utiliza para instalar, actualizar y desinstalar paquetes Python y
              sus dependencias, si escribimos <strong>pip --version</strong> en
              la terminal nos mostrará la versión del administrador de paquetes.
            </p>
            <img
              className="md:max-w-4xl"
              alt=""
              src="../img/pythonClass1/t5.webp"
            />
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
export default PythonClass1Content10;
