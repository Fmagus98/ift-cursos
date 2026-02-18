import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Circle, CircleCheck, Clock, ChevronDown } from "lucide-react";
const PythonClass1Content5 = ({ onComplete }) => {
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
                onComplete("class1content5");
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
                  5. Python en el mercado laboral
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
            <h5 className="font-semibold text-gray-900 text-center mb-2 mt-4">
              Big Data
            </h5>
            <img
              className="md:max-w-lg2 mx-auto"
              style={{ borderRadius: "1rem" }}
              src="../img/pythonClass1/bd.webp"
              alt="binary"
            ></img>
            <p className="leading-relaxed mb-4 mt-4 max-w-lg mx-auto">
              El uso de Python está muy extendido en dos áreas: el análisis de
              datos y el big data. Su sencillez y su gran número de bibliotecas
              de procesamiento de datos hacen que Python sea ideal a la hora de
              analizar y gestionar una gran cantidad de datos en tiempo real.
            </p>
            <h5 className="font-semibold text-gray-900 text-center mb-2 mt-4">
              Data mining
            </h5>
            <img
              className="md:max-w-lg2 mx-auto"
              style={{ borderRadius: "1rem" }}
              src="../img/pythonClass1/dm.webp"
              alt="binary"
            ></img>
            <p className="leading-relaxed mb-4 mt-4 max-w-lg mx-auto">
              La minería de datos o data mining es un proceso que permite
              analizar grandes bases de datos con el objetivo de predecir
              futuras tendencias. Se trata de un proceso complejo al que Python
              puede ayudar, a través de la limpieza, organización de datos y del
              uso de algoritmos de aprendizaje automático que simplifica el
              análisis de datos.
            </p>
            <h5 className="font-semibold text-gray-900 text-center mb-2 mt-4">
              Data Science
            </h5>
            <img
              className="md:max-w-lg2 mx-auto"
              style={{ borderRadius: "1rem" }}
              src="../img/pythonClass1/ds.webp"
              alt="binary"
            ></img>
            <p className="leading-relaxed mb-4 mt-4 max-w-lg mx-auto">
              Los nuevos motores numéricos como “Pandas” o “NumPy”, Python están
              dejando atrás a MATLAB, lenguaje usado por científicos para
              trabajar con un gran número de datos. Python vuelve a destacar por
              su simplicidad y potencial para trabajar con un gran número de
              datos, el gran número de bibliotecas existentes, hacen que Python
              sea ideal para este tipo de tareas.
            </p>
            <h5 className="font-semibold text-gray-900 text-center mb-2 mt-4">
              Inteligencia Artificial
            </h5>
            <img
              className="md:max-w-lg2 mx-auto"
              style={{ borderRadius: "1rem" }}
              src="../img/pythonClass1/ia.webp"
              alt="binary"
            ></img>
            <p className="leading-relaxed mb-4 mt-4 max-w-lg mx-auto">
              Cada vez se habla más de la inteligencia artificial (IA). Gran
              parte de su avance se debe a Python. Su facilidad de escritura y
              su robustez han convertido a Python en el aliado perfecto de la
              IA. Su capacidad de plasmar ideas complejas en pocas líneas,
              unidas al gran número de frameworks existentes, han hecho que
              Python sea uno de los lenguajes de programación que están
              impulsando a la IA.
            </p>
            <h5 className="font-semibold text-gray-900 text-center mb-2 mt-4">
              Blockchain
            </h5>
            <img
              className="md:max-w-lg2 mx-auto"
              style={{ borderRadius: "1rem" }}
              src="../img/pythonClass1/bc.webp"
              alt="binary"
            ></img>
            <p className="leading-relaxed mb-4 mt-4 max-w-lg mx-auto">
              Blockchain es una tecnología de registro distribuido que se
              utiliza para registrar transacciones de manera segura y
              verificable. Consiste en un registro en línea que se actualiza de
              manera permanente y que está protegido mediante técnicas
              criptográficas.
            </p>
            <h5 className="font-semibold text-gray-900 text-center mb-2 mt-4">
              Machine learning
            </h5>
            <img
              className="md:max-w-lg2 mx-auto"
              style={{ borderRadius: "1rem" }}
              src="../img/pythonClass1/ml.webp"
              alt="binary"
            ></img>
            <p className="leading-relaxed mb-4 mt-4 max-w-lg mx-auto">
              El machine learning o aprendizaje automático es otra de las
              tecnologías que está cambiando el mundo tal y como lo conocemos.
              La robótica y la IA son ahora capaces de aprender por sí mismas a
              medida que van procesando datos. De esta forma, obtienen
              información relevante que le permite tomar las decisiones
              adecuadas. Por supuesto, Python es también muy eficaz en este
              campo, en el tratamiento de datos eficaz es esencial.
            </p>
            <h5 className="font-semibold text-gray-900 text-center mb-2 mt-4">
              Desarrollo Web
            </h5>
            <img
              className="md:max-w-lg2 mx-auto"
              style={{ borderRadius: "1rem" }}
              src="../img/pythonClass1/dw.webp"
              alt="binary"
            ></img>
            <p className="leading-relaxed mb-4 mt-4 max-w-lg mx-auto">
              Python permite desarrollar webs complejas con menos líneas de
              código, haciéndolas más ligeras y optimizadas. Django es uno de
              los frameworks de Python más populares de la actualidad, que puede
              ser utilizado para crear webs dinámicas y muy seguras. Python es
              empleado para hacer scraping, es decir, extraer información de
              sitios web, como hacen Netflix o Instagram.
            </p>
            <h5 className="font-semibold text-gray-900 text-center mb-2 mt-4">
              Videojuegos
            </h5>
            <img
              className="md:max-w-lg2 mx-auto"
              style={{ borderRadius: "1rem" }}
              src="../img/pythonClass1/g&g3d.webp"
              alt="binary"
            ></img>
            <p className="leading-relaxed mb-4 mt-4 max-w-lg mx-auto">
              Juegos como Battelfield 2 o los Sims 4, parte de su código está
              escrito en este lenguaje de programación. A través de librerías
              como Pygame o Panda 3D, podrás enfocar tu desempeño profesional
              aparte desarrollo gaming, pero hay otras tantas que están
              recogidas en wiki python. Pero Python no tiene la posibilidad de
              realizarlos al completo, por lo que te animamos a que descubras
              otros lenguajes para programar videojuegos, como Java o Lua.
            </p>
          </section>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
export default PythonClass1Content5;
