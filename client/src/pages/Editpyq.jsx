import { useParams } from "react-router-dom";
import { useState } from "react";
import AdminLayout from "../layouts/AdminLayout";

function EditPYQ() {

  const { id } = useParams();

  const [formData, setFormData] =
    useState({
      exam: "",
      year: "",
      question: "",
      answer: "",
      subject: "",
      topic: "",
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(
      "Update PYQ:",
      id,
      formData
    );

  };

  return (
    <AdminLayout>

      <h1 className="text-4xl font-bold">
        Edit PYQ
      </h1>

      <p className="text-slate-400 mt-2">
        PYQ ID: {id}
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-4"
      >

        <input
          type="text"
          name="exam"
          placeholder="Exam"
          value={formData.exam}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-slate-900"
        />

        <input
          type="number"
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-slate-900"
        />

        <textarea
          name="question"
          placeholder="Question"
          value={formData.question}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-slate-900"
        />

        <input
          type="text"
          name="answer"
          placeholder="Answer"
          value={formData.answer}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-slate-900"
        />

        <button
          type="submit"
          className="bg-purple-600 px-6 py-3 rounded-xl"
        >
          Update PYQ
        </button>

      </form>

    </AdminLayout>
  );
}

export default EditPYQ;