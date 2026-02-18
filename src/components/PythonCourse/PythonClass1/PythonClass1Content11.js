import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";
import CopyButton from "../../CopyButton/CopyButton";
import { class1Code } from "../classCode";

const PythonClass1Content11 = ({ onComplete }) => {
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
                onComplete("class1content11");
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
                  11. Ejecución del primer programa
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
              Crea un proyecto en Visual Studio Code
            </h5>
            <p className="leading-relaxed mt-4 mb-4">
              1_ Para ejecutar nuestro primer programa primero debemos ubicarnos
              en la carpeta en donde queremos tener nuestro programa, para esto
              debemos ir a <strong>open folder</strong> ó{" "}
              <strong>Abrir carpeta</strong>
            </p>
            <img
              className="w-75 mt-4 d-block mx-auto border-content"
              alt=""
              src="../img/pythonClass1/p1.webp"
            />
            <p className="leading-relaxed mt-4 mb-4">
              2_ Nos aparecerá una pantalla en donde podemos indicarle en que
              carpeta queremos crear nuestro programa, luego irnos a la carpeta
              deseada vamos a tocar <strong>Seleccionar carpeta</strong>
            </p>
            <img
              className="w-75 mt-4 d-block mx-auto border-content"
              alt=""
              src="../img/pythonClass1/p2.webp"
            />
            <div className="flex flex-wrap items-center gap-2 mt-4 mb-4 leading-relaxed">
              <p className="leading-relaxed mt-4 mb-4">
                3_ Luego de seleccionar la carpeta veremos que en la parte{" "}
                <strong>superior izquierda</strong> nos aparecerá el nombre de
                la carpeta seleccionada y en el lado derecho tendremos varios
                items, el primer item nos dejará que podamos{" "}
                <strong>crear un archivo</strong>
                <img
                  className="inline w-6 mx-1 align-middle border-content rounded-lg"
                  alt=""
                  src="../img/pythonClass1/crearArchivo.webp"
                />
                , el segundo nos dejará que podamos{" "}
                <strong>crear una carpeta</strong>{" "}
                <img
                  className="inline w-6 mx-1 align-middle border-content rounded-lg"
                  alt=""
                  src="../img/pythonClass1/crearCarpeta.webp"
                />
                , el tercero <strong>refresca la carpeta</strong>{" "}
                <img
                  className="inline w-6 mx-1 align-middle border-content rounded-lg"
                  alt=""
                  src="../img/pythonClass1/refrescar.webp"
                />
                , el cuarto item nos dejará{" "}
                <strong>contraer o plegar una carpeta</strong>{" "}
                <img
                  className="inline w-6 mx-1 align-middle border-content rounded-lg"
                  alt=""
                  src="../img/pythonClass1/desplegable.webp"
                />
                . En este caso usaremos{" "}
                <strong>el primer item para crear un archivo</strong>{" "}
                <img
                  className="inline w-6 mx-1 align-middle border-content rounded-lg"
                  alt=""
                  src="../img/pythonClass1/crearArchivo.webp"
                />
                .
              </p>
            </div>
            <img
              className="w-75 mt-4 d-block mx-auto border-content"
              alt=""
              src="../img/pythonClass1/p3.webp"
            />
            <p className="mt-4 mb-4 text-break mx-auto w-75">
              4_ Al crear el archivo le debemos escribir el nombre deseado para
              el archivo seguido de un <strong>.py</strong> para indicar al
              programa de que es un archivo de python, por ejemplo:{" "}
              <strong>index.py</strong>
            </p>
            <img className="w-75" alt="" src="../img/pythonClass1/p4.webp" />
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Crea un proyecto en Pycharm
            </h5>
            <p className="leading-relaxed mt-4 mb-4">
              Si tienes <strong>Pycharm</strong> en vez de{" "}
              <strong>Visual Studio Code</strong> sigue estos pasos, en caso
              contrario omite esta parte.
            </p>
            <p className="leading-relaxed mt-4 mb-4">
              <strong>1.</strong>Abre Pycharm y selecciona <strong>Open</strong>
              .
            </p>
            <img
              className="w-75 mt-4 d-block border-content"
              alt=""
              src="../img/pythonClass1/pych7.webp"
            />
            <p className="leading-relaxed mt-4 mb-4">
              <strong>2.</strong>Selecciona la carpeta de tu escritorio{" "}
              <strong>(Desktop)</strong> y selecciona el logo de una carpeta.
            </p>
            <img
              className="w-75 mt-4 d-block border-content"
              alt=""
              src="../img/pythonClass1/pych8.webp"
            />
            <p className="leading-relaxed mt-4 mb-4">
              <strong>3.</strong>Escribí el nombre de la carpeta que deseas
              crear en en escritorio <strong>(en este caso es "Clase1")</strong>{" "}
              y selecciona<strong>OK</strong>.
            </p>
            <img
              className="w-75 mt-4 d-block border-content"
              alt=""
              src="../img/pythonClass1/pych9.webp"
            />
            <p className="mt-4 mb-4 text-break mx-auto w-75">
              {" "}
              <strong>4.</strong>Selecciona<strong>OK</strong>.
            </p>
            <img
              className="w-75 d-block d-block border-content"
              alt=""
              src="../img/pythonClass1/pych10.webp"
            />
            <p className="leading-relaxed mt-4 mb-4">
              {" "}
              <strong>5.</strong> Selecciona<strong>Close</strong>.
            </p>
            <img
              className="w-75 mt-4 d-block mx-auto border-content"
              alt=""
              src="../img/pythonClass1/pych11.webp"
            />
            <p className="leading-relaxed mt-4 mb-4">
              <strong>6.</strong> Ahora debemos crear el archivo de python, para
              hacerlo haz
              <strong>click derecho</strong> con el mouse a la carpeta que
              creaste<strong>(Clase1)</strong>y dirigete a
              <strong>New/Pyhon File</strong>.
            </p>
            <img
              className="w-75 mt-4 d-block mx-auto border-content"
              alt=""
              src="../img/pythonClass1/pych12.webp"
            />
            <p className="mt-4 mb-4 text-break mx-auto w-75">
              <strong>7.</strong> Escribe el nombre del archivo de python{" "}
              <strong>(en este caso es "programa1")</strong> y selecciona{" "}
              <strong>OK</strong>.
            </p>
            <img
              className="w-75 d-block d-block mx-auto border-content"
              alt=""
              src="../img/pythonClass1/pych13.webp"
            />
            <p className="mt-4 mb-4 text-break mx-auto w-75">
              Cuando quieras ejecutar el programa debes abrir la terminal y
              ejecutar, para esto debes hacer<strong>click derecho</strong>con
              el mouse al archivo de python que creaste y dirigirte a
              <strong>open to terminal</strong>.
            </p>
            <img
              className="w-75 d-block d-block mx-auto border-content"
              alt=""
              src="../img/pythonClass1/pych14.webp"
            />
            <p className="mt-4 mb-4 text-break mx-auto w-75">
              Al abrir la terminal escribe dentro<strong>python</strong>seguido
              del nombre del archivo, en este caso es
              <strong>python programa1.py</strong>.
            </p>
            <img
              className="w-75 d-block d-block mx-auto border-content"
              alt=""
              src="../img/pythonClass1/pych15.webp"
            />
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Salida de datos - print()
            </h5>
            <p className="leading-relaxed mt-4 mb-4">
              Existen diferentes formas de comunicarnos con nuestros scripts de
              Python con el objetivo de poder representar la información que el
              script nos quiere mostrar o poder ingresar alguna acción al
              programa por medio del teclado u otra entrada, en este contenido
              veremos las instrucciones de entradas y salidas de python más
              comunes que usaremos a lo largo del curso.
            </p>
            <p className="mt-4 mb-4 text-break mx-auto w-75">
              <strong>Salida de datos:</strong>La función{" "}
              <strong>print()</strong> es sin duda una de las instrucciones más
              sencillas y que usaremos en el curso, ya que nos permite mostrar
              información por consola como mensajes, números o valores de una
              variable. para su uso solo le pasamos en los argumentos lo que
              deseamos mostrar en consola.
            </p>
            <p className="mt-4 mb-4 text-break mx-auto w-75">
              Al seleccionar el archivo de python, se nos va abrir una pestaña
              en donde vamos a poder empezar a escribir código.
              <br />
              Para empezar a probar la función <strong>print</strong>
              escribiremos por ejemplo:
              <strong>
                print("Bienvenido al curso de introducción de python")
              </strong>
              , al escribir esto veremos un punto blanco al lado de la pestaña,
              esto nos indica que escribimos en el archivo de python pero no
              está guardado, para guardarlo debemos presionar
              <strong>Ctrl + S</strong>
            </p>
            <div className="relative group">
              <CopyButton code={class1Code[0]}></CopyButton>
              <img className="" alt="" src="../img/pythonClass1/p5.webp" />
            </div>
            <p className="mt-4 mb-4 text-break mx-auto w-75">
              Para ejecutar el programa debemos escribir en la terminal{" "}
              <strong>python</strong>
              seguido del nombre del archivo que queramos ejecutar, por ejemplo:
              python <strong>index.py</strong>. Al ejecutar nos mostrará en la
              terminal lo que escribimos en el <strong>print()</strong>.
            </p>
            <div className="relative group">
              <CopyButton code={class1Code[1]}></CopyButton>
              <img className="" alt="" src="../img/pythonClass1/p6.webp" />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Comentarios - #, """ """
            </h5>
            <p className="mt-4 mb-4 text-break mx-auto w-75">
              Un comentario es una porción de texto que se incluye en el código
              fuente, pero que no se ejecuta como parte del programa, estos
              comentarios se utilizan para documentar el código y proporcionar
              información adicional sobre lo que hace cada línea o sección de
              código.
              <br />
              Cuando Python encuentra un símbolo <strong>#</strong> en el código
              fuente, ignora todo lo que sigue en esa línea, incluido el propio{" "}
              <strong>#</strong> y cualquier texto que lo siga. Por lo tanto, el
              uso de <strong>#</strong> permite a los programadores incluir
              notas y explicaciones en el código fuente sin afectar el
              funcionamiento del programa, tambiém si querés escribir en varias
              lineas de codigo podes encerrar el mensaje entre 3 comillas
              simples o dobles <strong>""" """</strong>,{" "}
              <strong>''' '''</strong>
            </p>
            <div className="relative group">
              <CopyButton code={class1Code[2]}></CopyButton>
              <img className="" alt="" src="../img/pythonClass1/p7.webp" />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Entrada de datos - input()
            </h5>
            <p className="mt-4 mb-4 text-break mx-auto w-75">
              La función <strong>input()</strong> permite obtener información en la terminal
              desde el teclado, al momento de ejecutarse esta línea en la
              consola esperara que ingresemos el texto que necesitemos y demos
              un enter para continuar y guardar el valor capturado en una
              variable de programa.
            </p>
            <p className="leading-relaxed mt-4 mb-4">
              En este ejemplo vamos a indicarle al usuario que escriba su nombre
              escribiendo: <strong>input("Escribe tu nombre: ")</strong>. Veremos que cuando
              ejecutamos el programa nos aparecerá este mismo mensaje en la
              terminal, dejándonos poder escribir el nombre.
            </p>
            <div className="relative mx-auto md:max-w-4xl">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class1Code[3]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt=""
                src="../img/pythonClass1/p8.webp"
              />
            </div>
            <p className="leading-relaxed mt-10 mb-4">
              En este caso escribiremos <strong>Rodrigo</strong> dentro de la terminal donde indica <strong>input("Escribe tu nombre: ")</strong>, este input se convertirá en el dato que ingresemos y pasará a formato string<strong>"Rodrigo"</strong>.
            </p>
             <div className="relative mx-auto md:max-w-4xl">
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt=""
                src="../img/pythonClass1/p9.webp"
              />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 mt-4">
              Función len()
            </h5>
            <p className="mt-4 text-break mx-auto w-75">
              La función <strong>len()</strong> permite obtener la longitud de caracteres que
              existen dentro del paréntesis.
            </p>
            <p className="leading-relaxed mt-4 mb-4">
              Por ejemplo si queremos mostrar en pantalla cuántos caracteres
              tiene la palabra <strong>"programación"</strong>, debemos usar un input y dentro la
              funcion len(): <strong>input(len("Programación"))</strong>, esto nos retornará la
              cantidad de caracteres que hay.
            </p>
            <div className="relative mx-auto md:max-w-4xl">
              <CopyButton
                className="absolute top-3 right-3 z-10"
                code={class1Code[4]}
              />
              <img
                className="w-full"
                style={{ borderRadius: "1rem" }}
                alt=""
                src="../img/pythonClass1/p10.webp"
              />
            </div>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
export default PythonClass1Content11;
