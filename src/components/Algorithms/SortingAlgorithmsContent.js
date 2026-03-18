import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpDown, ArrowLeft } from "lucide-react";
import { AlgorithmCard } from "./AlgorithmCard";
import { CodeBlock } from "./CodeBlock";
import { VisualizationControls } from "./VisualizationControls";
import { algorithmData } from "./algorithmData";
import { toast } from "sonner";

const algorithms = [
  { id: "bubbleSort", name: "Bubble Sort", icon: ArrowUpDown },
  { id: "quickSort", name: "Quick Sort", icon: ArrowUpDown },
  { id: "mergeSort", name: "Merge Sort", icon: ArrowUpDown },
  { id: "insertionSort", name: "Insertion Sort", icon: ArrowUpDown },
  { id: "selectionSort", name: "Selection Sort", icon: ArrowUpDown },
];

const generateRandomArray = (size = 10) => {
  return Array.from({ length: size }, (_, idx) => ({
    id: idx,
    value: Math.floor(Math.random() * 100) + 10,
  }));
};

export const SortingAlgorithmsContent = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(null);
  const [array, setArray] = useState(generateRandomArray());
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(2);
  const [comparingIds, setComparingIds] = useState([]);
  const [sortedIds, setSortedIds] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([]);
  const [pivotId, setPivotId] = useState(null);
  const [activeRange, setActiveRange] = useState(null);
  const [originalArray, setOriginalArray] = useState(generateRandomArray());

  const isPausedRef = useRef(false);

  const handleAlgorithmSelect = (algoId) => {
    setSelectedAlgorithm(algoId);
    handleReset();
  };

  const handleReset = () => {
    setIsPlaying(false);
    setSteps([]);
    setCurrentStep(0);

    const newArray = generateRandomArray();
    setOriginalArray(newArray);
    setArray(newArray);

    setComparingIds([]);
    setSortedIds([]);
    setPivotId(null);
    setActiveRange(null);
  };

  // Bubble Sort
  const generateBubbleSortSteps = (arr) => {
    const steps = [];
    const workArray = arr.map((item) => ({ ...item }));
    const n = workArray.length;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        steps.push({
          array: workArray.map((item) => ({ ...item })),
          comparing: [workArray[j].id, workArray[j + 1].id],
          sorted: workArray.slice(n - i).map((item) => item.id),
        });

        if (workArray[j].value > workArray[j + 1].value) {
          [workArray[j], workArray[j + 1]] = [workArray[j + 1], workArray[j]];
          steps.push({
            array: workArray.map((item) => ({ ...item })),
            comparing: [workArray[j].id, workArray[j + 1].id],
            sorted: workArray.slice(n - i).map((item) => item.id),
          });
        }
      }
    }

    steps.push({
      array: workArray.map((item) => ({ ...item })),
      comparing: [],
      sorted: workArray.map((item) => item.id),
    });

    return steps;
  };

  // Quick Sort
  const generateQuickSortSteps = (arr) => {
    const steps = [];
    const workArray = arr.map((item) => ({ ...item }));
    const sorted = [];

    const partition = (low, high) => {
      const pivotItem = workArray[high];
      const pivotValue = pivotItem.value;
      const pivotId = pivotItem.id;

      let i = low - 1;

      for (let j = low; j < high; j++) {
        steps.push({
          array: workArray.map((item) => ({ ...item })),
          comparing: [workArray[j].id, pivotId],
          sorted: [...sorted],
          pivot: pivotId,
          activeRange: { low, high },
        });

        if (workArray[j].value < pivotValue) {
          i++;
          [workArray[i], workArray[j]] = [workArray[j], workArray[i]];

          steps.push({
            array: workArray.map((item) => ({ ...item })),
            comparing: [workArray[i].id, workArray[j].id],
            sorted: [...sorted],
            pivot: pivotId,
            activeRange: { low, high },
          });
        }
      }

      // Swap final del pivote
      [workArray[i + 1], workArray[high]] = [workArray[high], workArray[i + 1]];

      const finalPivotId = workArray[i + 1].id;
      sorted.push(finalPivotId);

      steps.push({
        array: workArray.map((item) => ({ ...item })),
        comparing: [],
        sorted: [...sorted],
        pivot: finalPivotId,
        activeRange: { low, high },
      });

      return i + 1;
    };

    const quickSort = (low, high) => {
      if (low < high) {
        const pi = partition(low, high);
        quickSort(low, pi - 1);
        quickSort(pi + 1, high);
      }
    };

    quickSort(0, workArray.length - 1);

    steps.push({
      array: workArray.map((item) => ({ ...item })),
      comparing: [],
      sorted: workArray.map((item) => item.id),
    });

    return steps;
  };

  const generateMergeSortSteps = (arr) => {
    const steps = [];
    const workArray = arr.map((item) => ({ ...item }));

    const pushStep = (comparing = [], activeRange = null, sorted = []) => {
      steps.push({
        array: workArray.map((item) => ({ ...item })),
        comparing,
        activeRange,
        sorted,
      });
    };

    const merge = (left, mid, right) => {
      const leftArr = workArray.slice(left, mid + 1);
      const rightArr = workArray.slice(mid + 1, right + 1);

      let i = 0;
      let j = 0;

      const merged = [];

      // Comparaciones
      while (i < leftArr.length && j < rightArr.length) {
        pushStep([leftArr[i].id, rightArr[j].id], { low: left, high: right });

        if (leftArr[i].value <= rightArr[j].value) {
          merged.push(leftArr[i++]);
        } else {
          merged.push(rightArr[j++]);
        }
      }

      while (i < leftArr.length) {
        merged.push(leftArr[i++]);
      }

      while (j < rightArr.length) {
        merged.push(rightArr[j++]);
      }

      // 🔥 Ahora recién copiamos al workArray
      for (let k = 0; k < merged.length; k++) {
        workArray[left + k] = merged[k];

        pushStep([], { low: left, high: right });
      }
    };

    const mergeSort = (left, right) => {
      if (left >= right) return;

      const mid = Math.floor((left + right) / 2);

      mergeSort(left, mid);
      mergeSort(mid + 1, right);
      merge(left, mid, right);
    };

    mergeSort(0, workArray.length - 1);

    // STEP FINAL → todo verde
    steps.push({
      array: workArray.map((item) => ({ ...item })),
      comparing: [],
      activeRange: null,
      sorted: workArray.map((item) => item.id),
    });

    return steps;
  };

  // Insertion Sort
  const generateInsertionSortSteps = (arr) => {
    const steps = [];
    const workArray = arr.map((item) => ({ ...item }));
    const n = workArray.length;

    for (let i = 1; i < n; i++) {
      const key = workArray[i];
      let j = i - 1;

      steps.push({
        array: workArray.map((item) => ({ ...item })),
        comparing: [key.id],
        sorted: workArray.slice(0, i).map((item) => item.id),
      });

      while (j >= 0 && workArray[j].value > key.value) {
        steps.push({
          array: workArray.map((item) => ({ ...item })),
          comparing: [workArray[j].id, key.id],
          sorted: [],
        });

        workArray[j + 1] = workArray[j];
        j--;

        steps.push({
          array: workArray.map((item) => ({ ...item })),
          comparing: [key.id],
          sorted: [],
        });
      }

      workArray[j + 1] = key;
      steps.push({
        array: workArray.map((item) => ({ ...item })),
        comparing: [key.id],
        sorted: workArray.slice(0, i + 1).map((item) => item.id),
      });
    }

    steps.push({
      array: workArray.map((item) => ({ ...item })),
      comparing: [],
      sorted: workArray.map((item) => item.id),
    });

    return steps;
  };

  // Selection Sort
  const generateSelectionSortSteps = (arr) => {
    const steps = [];
    const workArray = arr.map((item) => ({ ...item }));
    const n = workArray.length;

    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;

      for (let j = i + 1; j < n; j++) {
        steps.push({
          array: workArray.map((item) => ({ ...item })),
          comparing: [workArray[minIdx].id, workArray[j].id],
          sorted: workArray.slice(0, i).map((item) => item.id),
        });

        if (workArray[j].value < workArray[minIdx].value) {
          minIdx = j;
        }
      }

      if (minIdx !== i) {
        [workArray[i], workArray[minIdx]] = [workArray[minIdx], workArray[i]];
        steps.push({
          array: workArray.map((item) => ({ ...item })),
          comparing: [workArray[i].id, workArray[minIdx].id],
          sorted: workArray.slice(0, i + 1).map((item) => item.id),
        });
      }

      steps.push({
        array: workArray.map((item) => ({ ...item })),
        comparing: [],
        sorted: workArray.slice(0, i + 1).map((item) => item.id),
      });
    }

    steps.push({
      array: workArray.map((item) => ({ ...item })),
      comparing: [],
      sorted: workArray.map((item) => item.id),
    });

    return steps;
  };

  const generateSteps = () => {
    switch (selectedAlgorithm) {
      case "bubbleSort":
        return generateBubbleSortSteps(originalArray);
      case "quickSort":
        return generateQuickSortSteps(originalArray);
      case "mergeSort":
        return generateMergeSortSteps(originalArray);
      case "insertionSort":
        return generateInsertionSortSteps(originalArray);
      case "selectionSort":
        return generateSelectionSortSteps(originalArray);
      default:
        return [];
    }
  };

  const handlePlay = () => {
    if (!selectedAlgorithm) {
      toast.error("Selecciona un algoritmo primero");
      return;
    }

    const generatedSteps = generateSteps();

    if (generatedSteps.length === 0) return;

    setSteps(generatedSteps);
    setCurrentStep(0);

    // Set primer estado
    const firstStep = generatedSteps[0];
    setArray(firstStep.array);
    setComparingIds(firstStep.comparing);
    setSortedIds(firstStep.sorted);
    setPivotId(firstStep.pivot || null);
    setActiveRange(firstStep.activeRange || null);

    setIsPlaying(true);
  };

  const handlePause = () => {
    isPausedRef.current = true;
    setIsPlaying(false);
  };

  const handleStep = () => {
    if (!selectedAlgorithm) {
      toast.error("Selecciona un algoritmo primero");
      return;
    }

    const allSteps = steps.length > 0 ? steps : generateSteps();
    if (allSteps.length === 0) return;

    setSteps(allSteps);

    if (currentStep < allSteps.length - 1) {
      const nextStep = currentStep + 1;
      const stepData = allSteps[nextStep];

      setArray(stepData.array);
      setComparingIds(stepData.comparing);
      setSortedIds(stepData.sorted);
      setPivotId(stepData.pivot || null);
      setActiveRange(stepData.activeRange || null);

      setCurrentStep(nextStep);
    } else {
      toast.info("El algoritmo ya terminó");
    }
  };

  useEffect(() => {
    if (!isPlaying || steps.length === 0) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(interval);
          setIsPlaying(false);
          toast.success("¡Array ordenado correctamente!");
          return prev;
        }

        const next = prev + 1;
        const stepData = steps[next];

        setArray(stepData.array);
        setComparingIds(stepData.comparing);
        setSortedIds(stepData.sorted);
        setPivotId(stepData.pivot || null);
        setActiveRange(stepData.activeRange || null);

        return next;
      });
    }, 1000 / speed);

    return () => clearInterval(interval);
  }, [isPlaying, speed, steps]);

  return (
    <div className="h-full flex flex-col" data-testid="sorting-page">
      {!selectedAlgorithm ? (
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 font-heading">
              Selecciona un Algoritmo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {algorithms.map((algo) => {
                const data = algorithmData.sorting[algo.id];
                return (
                  <AlgorithmCard
                    key={algo.id}
                    title={algo.name}
                    description={data.description}
                    icon={algo.icon}
                    onClick={() => handleAlgorithmSelect(algo.id)}
                    testId={`algo-${algo.id}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-hidden grid grid-cols-1 xl:grid-cols-12 gap-6 p-6">
          {/* Left Panel - Info and Code */}
          <div
            className="xl:col-span-5 flex flex-col gap-6 overflow-y-auto"
            data-testid="info-panel"
          >
            <div className="space-y-4">
              <button
                onClick={() => setSelectedAlgorithm(null)}
                data-testid="back-button"
                className="bg-cyan-500 text-white inline-flex items-center gap-2 mb-8 text-sm font-medium hover:bg-gray-400 px-4 py-2 rounded-md transition"
              >
                <ArrowLeft size={18} />
                Volver
              </button>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold font-heading">
                  {algorithmData.sorting[selectedAlgorithm].title}
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {algorithmData.sorting[selectedAlgorithm].description}
              </p>
              {/* Explanation */}
              <div>
                <h3 className="text-lg font-semibold mb-3 font-heading">
                  ¿Cómo funciona?
                </h3>
                <ul className="space-y-2">
                  {algorithmData.sorting[selectedAlgorithm].explanation.map(
                    (point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-cyan-600 dark:text-cyan-400 mt-1">
                          •
                        </span>
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>

            {/* Code Block */}
            <div>
              <h3 className="text-lg font-semibold mb-3 font-heading">
                Implementación en Python
              </h3>
              <CodeBlock
                code={algorithmData.sorting[selectedAlgorithm].code}
                language="python"
                title={`${algorithmData.sorting[selectedAlgorithm].title}.py`}
              />
            </div>
          </div>

          {/* Right Panel - Visualization */}
          <div
            className="xl:col-span-7 flex flex-col"
            data-testid="visualization-panel"
          >
            <div className="relative flex-1 bg-gray-100 rounded-xl border border-border flex items-end justify-center p-8 min-h-[500px]">
              {/* Bars */}
              <div className="flex items-end justify-center gap-2 w-full h-full">
                <AnimatePresence mode="popLayout">
                  {array.map((item, index) => {
                    const isSorted = sortedIds.includes(item.id);
                    const isComparing = comparingIds.includes(item.id);

                    return (
                      <motion.div
                        key={item.id}
                        data-testid={`bar-${item.id}`}
                        layout
                        initial={false}
                        animate={{
                          height: `${(item.value / 110) * 100}%`,
                          backgroundColor: isSorted
                            ? "#10b981"
                            : item.id === pivotId
                              ? "#f59e0b"
                              : isComparing
                                ? "#0891b2"
                                : activeRange &&
                                    index >= activeRange.low &&
                                    index <= activeRange.high
                                  ? "#94a3b8"
                                  : "#64748b",
                        }}
                        transition={{
                          layout: {
                            type: "spring",
                            stiffness: 350,
                            damping: 25,
                          },
                          backgroundColor: { duration: 0.3 },
                          height: {
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          },
                        }}
                        className="flex-1 rounded-t-md flex flex-col items-center justify-end relative"
                      >
                        {/* Valor siempre visible arriba */}
                        <div className="absolute -top-8 text-lg font-bold text-black">
                          {item.value}
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Controls */}
              <VisualizationControls
                isPlaying={isPlaying}
                onPlay={handlePlay}
                onPause={handlePause}
                onReset={handleReset}
                onStep={handleStep}
                speed={speed}
                onSpeedChange={setSpeed}
              />
            </div>

            {/* Legend */}
            <div className="mt-4 flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-slate-500" />
                <span className="text-muted-foreground">Sin ordenar</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-cyan-600" />
                <span className="text-muted-foreground">Comparando</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-amber-500" />
                <span className="text-muted-foreground">
                  Pivote (Quick Sort)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-emerald-500" />
                <span className="text-muted-foreground">Ordenado</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
