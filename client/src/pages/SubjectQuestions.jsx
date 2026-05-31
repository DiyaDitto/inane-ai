import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function SubjectQuestions() {

  const { subject } =
    useParams();

  const [questions,
    setQuestions] =
    useState([]);

  useEffect(() => {

    fetchQuestions();

  }, [subject]);

  const fetchQuestions =
    async () => {

      const res =
        await axios.get(
          `http://localhost:5000/api/questions?subject=${subject}`
        );

      setQuestions(
        res.data
      );

    };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold">
        {subject}
      </h1>

      <div className="mt-8">

        {questions.map((q) => (

          <div
            key={q._id}
            className="bg-slate-900 p-6 rounded-xl mb-4"
          >
          <h3 className="font-bold">
  {q.question}
</h3>

<div className="mt-4">

  {q.options.map(
    (option, index) => (

      <button
        key={index}
        className="block w-full text-left bg-slate-800 p-3 rounded-lg mt-2"
      >
        {option}
      </button>

    )
                    )}
                    <Link
  to={`/mock-test/${subject}`}
>
  Start Test
</Link>

</div>
          </div>

        ))}

      </div>

    </div>
  );
}

export default SubjectQuestions;