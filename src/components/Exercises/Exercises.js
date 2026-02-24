import React from "react";

const Exercises = ({ data }) => {
  const difficultyStyles = {
    Fácil: "bg-green-100 text-green-700 border-green-200",
    Medio: "bg-orange-100 text-orange-700 border-orange-200",
    Difícil: "bg-red-100 text-red-700 border-red-200",
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 mb-20 px-3">
      <div
        class="bg-cyan-50 border-l-4 border-cyan-600 p-4 rounded-r-lg mt-20"
        x-file-name="LessonItem"
        x-line-number="173"
        x-component="div"
        x-id="LessonItem_173"
        x-dynamic="false"
      >
        <p
          class="text-cyan-900 font-medium"
          x-file-name="LessonItem"
          x-line-number="174"
          x-component="p"
          x-id="LessonItem_174"
          x-dynamic="false"
        >
          💪 ¡Practica lo aprendido! Completa estos ejercicios para reforzar tus
          conocimientos.
        </p>
      </div>
      <div className="space-y-6">
        {data.exercises.map((exercise, index) => (
          <div
            key={index}
            className="rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow p-6 space-y-4"
          >
            <div className="flex justify-end">
              {exercise.difficulty && (
                <span
                  className={`text-xs px-2.5 py-0.5 rounded-md border font-semibold ${difficultyStyles[exercise.difficulty]}`}
                >
                  {exercise.difficulty}
                </span>
              )}
            </div>
            <div className="inline-flex gap-3">
              <h2 className="text-lg font-semibold">{index + 1}.</h2>
              <p className="text-gray-700 leading-relaxed">
                {exercise.description
                  .split("\n")
                  .map((line, index) => (
                    <span key={index} className="block mb-2">
                      {line}
                    </span>
                  ))}
              </p>
            </div>
            {exercise.hint && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm text-yellow-900">
                💡 <span className="font-semibold">Pista:</span> {exercise.hint}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercises;
