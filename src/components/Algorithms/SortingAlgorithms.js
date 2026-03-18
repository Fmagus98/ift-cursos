import { SortingAlgorithmsContent } from "./SortingAlgorithmsContent";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpDown } from "lucide-react";

const SortingAlgorithms = () => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="py-14 px-6 bg-gradient-to-br from-cyan-600 to-cyan-700 text-white">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/algorithms"
            className="inline-flex items-center gap-2 mb-8 text-sm font-medium hover:bg-white/20 px-4 py-2 rounded-md transition"
          >
            <ArrowLeft size={18} />
            Volver a Algoritmos
          </Link>
          <div className="text-center space-y-4">
            <div className="mb-4 inline-flex h-32 w-32 items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
              {<ArrowUpDown className="w-20 h-20" />}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Algoritmos de Ordenamiento
            </h1>
            <p className="text-cyan-100 text-lg">
              Visualiza cómo funcionan los diferentes algoritmos
            </p>
          </div>
        </div>
      </section>
      <SortingAlgorithmsContent />
    </div>
  );
};

export default SortingAlgorithms;
