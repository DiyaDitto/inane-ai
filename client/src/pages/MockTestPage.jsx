import DashboardLayout from "../layouts/DashboardLayout";
import { useState } from "react";

function MockTestPage() {
  const questions = [
    {
      id: 1,
      question: "What is 25% of 200?",
      options: ["40", "50", "60", "70"],
      answer: "50",
    },
    {
      id: 2,
      question: "What is the square root of 144?",
      options: ["10", "11", "12", "13"],
      answer: "12",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <DashboardLayout>
      <div className="text-white">

        <h1 className="text-4xl font-bold mb-6">
          SSC Mock Test
        </h1>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

          <div className="flex justify-between mb-6">
            <h2 className="text-xl font-semibold">
              Question {currentQuestion + 1} of {questions.length}
            </h2>

            <div className="bg-purple-600 px-4 py-2 rounded-lg">
              20:00
            </div>
          </div>

          <h3 className="text-2xl mb-8">
            {questions[currentQuestion].question}
          </h3>

          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="w-full text-left bg-slate-800 hover:bg-slate-700 p-4 rounded-xl"
              >
                {option}
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-8">

            <button
              onClick={() =>
                setCurrentQuestion((prev) =>
                  prev > 0 ? prev - 1 : prev
                )
              }
              className="bg-slate-800 px-6 py-3 rounded-xl"
            >
              Previous
            </button>

            <button
              onClick={() =>
                setCurrentQuestion((prev) =>
                  prev < questions.length - 1
                    ? prev + 1
                    : prev
                )
              }
              className="bg-purple-600 px-6 py-3 rounded-xl"
            >
              Next
            </button>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default MockTestPage;