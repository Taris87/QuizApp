import React, { useState } from "react";
import { Quiz, Question } from "../types/quiz";
import { saveCustomQuiz, updateCustomQuiz } from "../services/quizService";
import { PlusCircle, Save, Trash } from "lucide-react";

interface CreateQuizProps {
  onQuizCreated: () => void;
  editQuiz?: Quiz;
}

export const CreateQuiz: React.FC<CreateQuizProps> = ({
  onQuizCreated,
  editQuiz,
}) => {
  const [title, setTitle] = useState(editQuiz?.title || "");
  const [questions, setQuestions] = useState<Question[]>(
    editQuiz?.questions || []
  );
  const [currentQuestion, setCurrentQuestion] = useState({
    text: "",
    options: ["", "", "", ""],
    correctAnswer: 0,
    description: "",
  });

  const addQuestion = () => {
    if (!currentQuestion.text || currentQuestion.options.some((opt) => !opt)) {
      alert("Bitte fülle alle Felder aus");
      return;
    }

    const newQuestion: Question = {
      id: `custom-${Date.now()}`,
      text: currentQuestion.text + " ?",
      options: currentQuestion.options,
      correctAnswer: currentQuestion.correctAnswer,
      description: currentQuestion.description,
    };

    setQuestions([...questions, newQuestion]);
    setCurrentQuestion({
      text: "",
      options: ["", "", "", ""],
      correctAnswer: 0,
      description: "",
    });
  };

  const removeQuestion = (index: number) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const saveQuiz = () => {
    if (!title || questions.length === 0) {
      alert("Bitte gib einen Titel ein und füge mindestens eine Frage hinzu");
      return;
    }

    const quiz: Quiz = {
      id: editQuiz?.id || `custom-${Date.now()}`,
      title,
      questions,
    };

    if (editQuiz) {
      updateCustomQuiz(quiz);
    } else {
      saveCustomQuiz(quiz);
    }

    setTitle("");
    setQuestions([]);
    onQuizCreated();
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">
        {editQuiz ? "Quiz bearbeiten" : "Neues Quiz erstellen"}
      </h2>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Quiz-Titel
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-lg"
          placeholder="z.B. JavaScript Grundlagen"
        />
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Neue Frage hinzufügen</h3>
        <input
          type="text"
          placeholder="Frage"
          value={currentQuestion.text}
          onChange={(e) =>
            setCurrentQuestion({ ...currentQuestion, text: e.target.value })
          }
          className="w-full p-2 border rounded-lg mb-4"
        />

        {currentQuestion.options.map((option, index) => (
          <div key={index} className="mb-2 flex items-center">
            <input
              type="text"
              placeholder={`Option ${index + 1}`}
              value={option}
              onChange={(e) => {
                const newOptions = [...currentQuestion.options];
                newOptions[index] = e.target.value;
                setCurrentQuestion({ ...currentQuestion, options: newOptions });
              }}
              className="flex-1 p-2 border rounded-lg mr-2"
            />
            <input
              type="radio"
              name="correctAnswer"
              checked={currentQuestion.correctAnswer === index}
              onChange={() =>
                setCurrentQuestion({ ...currentQuestion, correctAnswer: index })
              }
              className="ml-2"
              title={
                currentQuestion.correctAnswer === index
                  ? "Diese Antwort wurde als richtig Makiert"
                  : "Makiere die richtige Antwort"
              }
            />
          </div>
        ))}
        <input
          type="text"
          placeholder="Erklärung (optional)"
          value={currentQuestion.description}
          onChange={(e) =>
            setCurrentQuestion({
              ...currentQuestion,
              description: e.target.value,
            })
          }
          className="w-full p-2 border rounded-lg mb-4 break-words whitespace-normal overflow-hidden"
        />
        <button
          onClick={addQuestion}
          className="mt-4 flex items-center justify-center w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
          <PlusCircle className="h-5 w-5 mr-2" />
          Frage hinzufügen
        </button>
        <button
          onClick={saveQuiz}
          disabled={questions.length === 0 || !title}
          className="mt-6 w-full flex items-center justify-center bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400">
          <Save className="h-5 w-5 mr-2" />
          {editQuiz ? "Quiz aktualisieren" : "Quiz speichern"}
        </button>
      </div>

      {questions.length > 0 && (
  <div className="mt-8 border-t pt-6">
    <h3 className="text-lg font-semibold mb-4">Hinzugefügte Fragen</h3>
    {questions.map((question, index) => (
      <div
        key={question.id}
        className="mb-4 p-4 border rounded-lg bg-gray-50">
        <div className="flex justify-between items-start">
          <div className="flex-1 max-w-full"> 
            <p className="font-medium">{question.text}</p>
            <ul className="mt-2 space-y-1">
              {question.options.map((option, optIndex) => (
                <li
                  key={optIndex}
                  className={
                    optIndex === question.correctAnswer
                      ? "text-green-600 font-medium"
                      : ""
                  }>
                  {option}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-gray-600 break-words whitespace-normal overflow-hidden max-w-[calc(100%-2rem)]">{question.description}</p>
          </div>
          <button
            onClick={() => removeQuestion(index)}
            className="mr-0 text-red-600 hover:text-red-700 ">
            <span className="sr-only">Frage löschen</span>
            <Trash className="h-5 w-5" />
          </button>
        </div>
      </div>
    ))}
  </div>
)}
    </div>
  );
};
