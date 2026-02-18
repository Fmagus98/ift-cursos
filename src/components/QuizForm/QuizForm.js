import * as RadioGroup from "@radix-ui/react-radio-group";
import * as Accordion from "@radix-ui/react-accordion";
import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";

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
    <section>
      <h5 className="font-semibold text-gray-900 mb-2 mt-10 text-xl">
        Refuerza tus conocimientos
      </h5>
      <p className="leading-relaxed mt-4 mb-6 text-gray-700">
        Completa este formulario para revisar y afianzar los conceptos claves de
        esta clase.
        <br></br>
        Lee cada pregunta antes de responder.
      </p>
      <form onSubmit={handleSubmit} className="space-y-8">
        <Accordion.Root type="multiple" className="space-y-4">
          {questions.map((question, index) => (
            <Accordion.Item
              key={index}
              value={`item-${index}`}
              className="border rounded-xl shadow-sm"
            >
              <Accordion.Header>
                <Accordion.Trigger className="w-full text-left px-5 py-4 font-medium text-gray-900 hover:bg-gray-50 rounded-xl">
                  Pregunta {index + 1}
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-5 pb-6 pt-2">
                <h5
                  className="font-semibold text-gray-900 mb-2 mt-6"
                  dangerouslySetInnerHTML={{
                    __html: question.question
                      .replace(/\n/g, "<br/>")
                      .replace(/ /g, "&nbsp;"),
                  }}
                />
                <RadioGroup.Root
                  className="space-y-3 mt-4"
                  value={userAnswers[index]}
                  onValueChange={(value) => handleChange(value, index)}
                  required
                >
                  {question.options.map((option, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 border rounded-lg hover:bg-gray-50"
                    >
                      <RadioGroup.Item
                        value={option}
                        id={`q${index}-${i}`}
                        className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center data-[state=checked]:border-blue-600"
                      >
                        <RadioGroup.Indicator className="w-3 h-3 bg-blue-600 rounded-full" />
                      </RadioGroup.Item>

                      <label
                        htmlFor={`q${index}-${i}`}
                        className="text-gray-700 leading-relaxed cursor-pointer"
                        dangerouslySetInnerHTML={{
                          __html: option
                            .replace(/\n/g, "<br/>")
                            .replace(/ /g, "&nbsp;"),
                        }}
                      />
                    </div>
                  ))}
                </RadioGroup.Root>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
        {!showResults ? (
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full"
          >
            Enviar
          </button>
        ) : (
          null
        )}
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
                  <p className="flex items-center gap-2 font-medium text-gray-900">
                    <XCircle size={18} className="text-red-500" />
                    {item.question}
                  </p>

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
            <div className="flex items-center gap-2 text-green-600 font-medium">
              <CheckCircle2 />
              ¡Felicidades! Todas tus respuestas son correctas.
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default QuizForm;
