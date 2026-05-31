import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import {
  getQuestions,
  deleteQuestion,
} from "../services/questionService";

function AdminQuestions() {

  const [questions, setQuestions] =
    useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions =
    async () => {
      try {

        const data =
          await getQuestions();

        setQuestions(data);

      } catch (error) {

        console.log(error);

      }
    };

  const handleDelete =
    async (id) => {

      const confirmDelete =
        window.confirm(
          "Are you sure you want to delete this question?"
        );

      if (!confirmDelete)
        return;

      try {

        await deleteQuestion(id);

        fetchQuestions();

      } catch (error) {

        console.log(error);

      }
    };

  return (
    <AdminLayout>

      <div className="flex justify-between items-center">

        <h1 className="text-4xl font-bold text-white">
          Manage Questions
        </h1>

        <Link
          to="/admin/upload"
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl"
        >
          Add Question
        </Link>

      </div>

      <div className="mt-8 overflow-x-auto bg-slate-900 rounded-2xl p-6">

        <table className="w-full text-left">

          <thead>

            <tr className="border-b border-slate-700">

              <th className="pb-4">
                Question
              </th>

              <th className="pb-4">
                Subject
              </th>

              <th className="pb-4">
                Difficulty
              </th>

              <th className="pb-4">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {questions.map(
              (question) => (

                <tr
                  key={question._id}
                  className="border-b border-slate-800"
                >

                  <td className="py-4">
                    {question.question}
                  </td>

                  <td className="py-4">
                    {question.subject}
                  </td>

                  <td className="py-4">
                    {question.difficulty}
                  </td>

                  <td className="py-4">

                    <Link
                      to={`/admin/questions/edit/${question._id}`}
                      className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg mr-2"
                    >
                      Edit
                    </Link>

                    <button
                      className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
                      onClick={() =>
                        handleDelete(
                          question._id
                        )
                      }
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              )
            )}

          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
}

export default AdminQuestions;