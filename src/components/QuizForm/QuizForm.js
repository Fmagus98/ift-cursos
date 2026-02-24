import { useState } from "react";

const QuizForm = ({ questions, onDone }) => {
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState([]);

  const handleChange = (value, index) => {
    setUserAnswers({ ...userAnswers, [index]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let tempScore = 0;
    let tempFeedback = [];

    questions.forEach((question, index) => {
      if (userAnswers[index] === question.answer) {
        tempScore += 1;
      } else {
        tempFeedback.push({
          question: question.question,
          userAnswer: userAnswers[index],
          correctAnswer: question.answer,
        });
      }
    });

    setScore(tempScore);
    setFeedback(tempFeedback);
    setShowResults(true);

    if (onDone) {
      onDone();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6 px-3 sm:px-6 md:px-10">
        <div className="rounded-xl bg-card text-card-foreground mt-6">
          <div className="space-y-10">
            {questions.map((question, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-[10px] sm:text-xs font-semibold bg-cyan-100 text-cyan-700 border-cyan-200 mt-1">
                    {index + 1}
                  </div>
                  <p
                    className="font-semibold text-sm sm:text-base md:text-lg text-gray-900 flex-1 break-words"
                    dangerouslySetInnerHTML={{
                      __html: question.question
                        .replace(/\n/g, "<br/>")
                    }}
                  />
                </div>
                <div className="grid gap-2 ml-11 space-y-3">
                  {question.options.map((option, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={option}
                        checked={userAnswers[index] === option}
                        onChange={() => handleChange(option, index)}
                        className="h-4 w-4 accent-cyan-600"
                        required
                      />

                      <label
                        className="font-medium text-sm sm:text-base text-gray-900 flex-1 break-words"
                        dangerouslySetInnerHTML={{
                          __html: option
                            .replace(/\n/g, "<br/>")
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {!showResults && (
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md text-sm sm:text-base md:text-lg shadow"
                >
                  Enviar respuestas
                </button>
              </div>
            )}
          </div>
        </div>
      </form>

      {showResults && (
        <div className="mt-12 border-t pt-8">
          <h5 className="font-semibold text-gray-900 mb-4">Resultados</h5>

          <p className="text-lg mb-4">
            Puntaje: <strong>{score}</strong> / {questions.length}
          </p>

          {feedback.length > 0 ? (
            <div className="space-y-4">
              <h5 className="font-semibold text-red-600">Errores</h5>

              {feedback.map((item, index) => (
                <div key={index} className="p-4 border rounded-xl bg-red-50">
                  <p className="font-medium text-gray-900">{item.question}</p>

                  <p className="mt-2 text-gray-700">
                    <strong>Tu respuesta:</strong>{" "}
                    {item.userAnswer || "No respondida"}
                  </p>

                  <p className="text-gray-700">
                    <strong>Correcta:</strong> {item.correctAnswer}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-green-600 font-medium">
              ¡Felicidades! Todas tus respuestas son correctas.
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default QuizForm;
