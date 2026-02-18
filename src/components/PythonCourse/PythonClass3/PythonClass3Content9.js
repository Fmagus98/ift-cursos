import * as Accordion from "@radix-ui/react-accordion";
import { Download } from "lucide-react";


const Pythonclass3Content9 = () => {
  return (
    <Accordion.Root type="single" collapsible className="w-full">
      <Accordion.Item
        value="item-1"
        className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md bg-white"
      >
        <Accordion.Trigger className="group w-full p-4 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors text-left">
          <a
            download="class3.py"
            href="/pythonClassFile/class3.py"
            target="_blank"
          >
            <div className="flex items-center gap-4 flex-1">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-cyan-100 transition-colors">
            <Download className="w-6 h-6 text-gray-700" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-semibold text-gray-900">
                    9. Descarga Contenido de la clase 3
                  </h4>
                </div>
              </div>
            </div>
          </a>
        </Accordion.Trigger>
      </Accordion.Item>
    </Accordion.Root>
  );
};
export default Pythonclass3Content9
