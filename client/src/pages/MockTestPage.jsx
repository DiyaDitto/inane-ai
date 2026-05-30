import { useEffect, useState } from "react";
import { getQuestions } from "../services/questionService";
import { saveResult } from "../services/resultService";

function MockTestPage() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [reviewQuestions, setReviewQuestions] = useState([]);
  const [score, setScore] = useState(null);
  const [timeLeft, setTimeLeft] = useState(1800);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await getQuestions();
        setQuestions(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchQuestions();
  }, []);

  const handleSubmit = async () => {
    let correct = 0;

    questions.forEach((question) => {
      if (answers[question._id] === question.answer) {
        correct++;
      }
    });

    const accuracy = Number(
      (
        (correct / questions.length) *
        100
      ).toFixed(2)
    );

    try {
      const result = await saveResult({
        score: correct,
        totalQuestions: questions.length,
        accuracy,
      });

      console.log(result);

      setScore(correct);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (score !== null) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [score, answers, questions]);

  const handleOptionClick = (option) => {
    setAnswers({
      ...answers,
      [questions[currentQuestion]._id]:
        option,
    });
  };

  const toggleReview = () => {
    const id =
      questions[currentQuestion]._id;

    if (reviewQuestions.includes(id)) {
      setReviewQuestions(
        reviewQuestions.filter(
          (item) => item !== id
        )
      );
    } else {
      setReviewQuestions([
        ...reviewQuestions,
        id,
      ]);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(
      seconds / 60
    );

    const secs = seconds % 60;

    return `${mins}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white text-2xl">
        Loading Questions...
      </div>
    );
  }

  if (score !== null) {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-8">
        <h1 className="text-4xl font-bold">
          Test Result
        </h1>

        <div className="bg-slate-900 mt-8 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold">
            Score: {score} /{" "}
            {questions.length}
          </h2>

          <p className="mt-4 text-xl">
            Accuracy:{" "}
            {(
              (score /
                questions.length) *
              100
            ).toFixed(2)}
            %
          </p>

          <p className="mt-2 text-xl">
            Correct Answers: {score}
          </p>

          <p className="mt-2 text-xl">
            Wrong Answers:{" "}
            {questions.length -
              score}
          </p>
        </div>
      </div>
    );
  }

  const question =
    questions[currentQuestion];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      <div className="flex justify-between items-center">

        <h1 className="text-4xl font-bold">
          Mock Test
        </h1>

        <div className="bg-red-600 px-5 py-3 rounded-xl font-bold text-lg">
          {formatTime(timeLeft)}
        </div>

      </div>

      <div className="flex flex-wrap gap-3 mt-8">

        {questions.map((q, index) => {
          let bg = "bg-slate-700";

          if (
            reviewQuestions.includes(
              q._id
            )
          ) {
            bg = "bg-yellow-500";
          }

          if (answers[q._id]) {
            bg = "bg-green-600";
          }

          if (
            currentQuestion === index
          ) {
            bg = "bg-purple-600";
          }

          return (
            <button
              key={q._id}
              onClick={() =>
                setCurrentQuestion(
                  index
                )
              }
              className={`w-12 h-12 rounded-lg font-bold ${bg}`}
            >
              {index + 1}
            </button>
          );
        })}

      </div>

      <div className="bg-slate-900 mt-8 p-8 rounded-2xl">

        <h2 className="text-xl font-semibold">
          Question{" "}
          {currentQuestion + 1} /{" "}
          {questions.length}
        </h2>

        <p className="mt-6 text-lg">
          {question.question}
        </p>

        <div className="mt-6 space-y-3">

          {question.options.map(
            (option) => (
              <button
                key={option}
                onClick={() =>
                  handleOptionClick(
                    option
                  )
                }
                className={`w-full text-left p-4 rounded-xl transition ${
                  answers[
                    question._id
                  ] === option
                    ? "bg-purple-600"
                    : "bg-slate-800 hover:bg-slate-700"
                }`}
              >
                {option}
              </button>
            )
          )}

        </div>

      </div>

      <div className="flex flex-wrap gap-4 mt-8">

        <button
          onClick={() =>
            setCurrentQuestion(
              Math.max(
                currentQuestion - 1,
                0
              )
            )
          }
          disabled={
            currentQuestion === 0
          }
          className="bg-slate-800 px-6 py-3 rounded-xl disabled:opacity-50"
        >
          Previous
        </button>

        <button
          onClick={toggleReview}
          className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold"
        >
          {reviewQuestions.includes(
            question._id
          )
            ? "Remove Review"
            : "Mark For Review"}
        </button>

        {currentQuestion ===
        questions.length - 1 ? (
          <button
            onClick={
              handleSubmit
            }
            className="bg-green-600 px-6 py-3 rounded-xl"
          >
            Submit Test
          </button>
        ) : (
          <button
            onClick={() =>
              setCurrentQuestion(
                currentQuestion + 1
              )
            }
            className="bg-purple-600 px-6 py-3 rounded-xl"
          >
            Next
          </button>
        )}

      </div>

    </div>
  );
}

export default MockTestPage;