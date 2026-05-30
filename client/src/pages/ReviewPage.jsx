import DashboardLayout
from "../layouts/DashboardLayout";

function ReviewPage() {

  const questions = [
    {
      question:
        "2 + 2 = ?",
      yourAnswer: "5",
      correctAnswer: "4",
    },
  ];

  return (
    <DashboardLayout>

      <h1 className="text-4xl font-bold text-white mb-6">
        Review Answers
      </h1>

      {questions.map(
        (q, index) => (

        <div
          key={index}
          className="bg-slate-900 p-6 rounded-2xl mb-4"
        >

          <p className="text-white">
            {q.question}
          </p>

          <p className="text-red-400 mt-3">
            Your:
            {" "}
            {q.yourAnswer}
          </p>

          <p className="text-green-400">
            Correct:
            {" "}
            {q.correctAnswer}
          </p>

        </div>

      ))}
    </DashboardLayout>
  );
}

export default ReviewPage;