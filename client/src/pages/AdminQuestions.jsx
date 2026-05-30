import {
  useEffect,
  useState,
} from "react";

import {
  getQuestions,
  createQuestion,
} from "../services/questionService";

function AdminQuestions() {

  const [questions,
    setQuestions] =
    useState([]);

  const [form,
    setForm] =
    useState({
      question: "",
      options: [
        "",
        "",
        "",
        "",
      ],
      answer: "",
      subject: "",
      difficulty:
        "Easy",
    });

  const fetchQuestions =
    async () => {
      try {

        const data =
          await getQuestions();

        setQuestions(
          data
        );

      } catch (error) {

        console.log(
          error
        );

      }
    };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleOptionChange =
    (
      index,
      value
    ) => {

        const updated =
            [
                     ...form.options,
      ];

      updated[index] =
        value;

      setForm({
        ...form,
        options: updated,
      });

    };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        await createQuestion(
          form
        );

        setForm({
          question: "",
          options: [
            "",
            "",
            "",
            "",
          ],
          answer: "",
          subject: "",
          difficulty:
            "Easy",
        });

        fetchQuestions();

        alert(
          "Question Added Successfully"
        );

      } catch (error) {

        console.log(
          error
        );

      }

    };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold">
        Admin Panel
      </h1>

      <div className="bg-slate-900 p-6 rounded-2xl mt-8">

        <h2 className="text-2xl font-bold mb-6">
          Add Question
        </h2>

        <form
          onSubmit={
            handleSubmit
          }
          className="space-y-4"
        >

          <input
            type="text"
            placeholder="Question"
            value={
              form.question
            }
            onChange={(e) =>
              setForm({
                ...form,
                question:
                  e.target.value,
              })
            }
            className="w-full p-4 rounded-xl bg-slate-800"
          />

          {form.options.map(
            (
              option,
              index
            ) => (
              <input
                key={index}
                type="text"
                placeholder={`Option ${
                  index + 1
                }`}
                value={option}
                onChange={(e) =>
                  handleOptionChange(
                    index,
                    e.target.value
                  )
                }
                className="w-full p-4 rounded-xl bg-slate-800"
              />
            )
          )}

          <input
            type="text"
            placeholder="Correct Answer"
            value={
              form.answer
            }
            onChange={(e) =>
              setForm({
                ...form,
                answer:
                  e.target.value,
              })
            }
            className="w-full p-4 rounded-xl bg-slate-800"
          />

          <input
            type="text"
            placeholder="Subject"
            value={
              form.subject
            }
            onChange={(e) =>
              setForm({
                ...form,
                subject:
                  e.target.value,
              })
            }
            className="w-full p-4 rounded-xl bg-slate-800"
          />

          <select
            value={
              form.difficulty
            }
            onChange={(e) =>
              setForm({
                ...form,
                difficulty:
                  e.target.value,
              })
            }
            className="w-full p-4 rounded-xl bg-slate-800"
          >

            <option>
              Easy
            </option>

            <option>
              Medium
            </option>

            <option>
              Hard
            </option>

          </select>

          <button
            type="submit"
            className="bg-purple-600 px-6 py-3 rounded-xl"
          >
            Add Question
          </button>

        </form>

      </div>

      <div className="mt-8 space-y-4">

        {questions.map(
          (question) => (
            <div
              key={
                question._id
              }
              className="bg-slate-900 p-6 rounded-2xl border border-slate-800"
            >

              <h2 className="font-bold">
                {
                  question.question
                }
              </h2>

              <p className="text-slate-400 mt-2">
                Subject:
                {" "}
                {
                  question.subject
                }
              </p>

              <p className="text-slate-400">
                Difficulty:
                {" "}
                {
                  question.difficulty
                }
              </p>

            </div>
          )
        )}

      </div>

    </div>
  );
}

export default AdminQuestions;