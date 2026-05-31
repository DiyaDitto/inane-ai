import { useParams } from "react-router-dom";
import { useState } from "react";
import AdminLayout from "../layouts/AdminLayout";

function EditCurrentAffair() {

  const { id } = useParams();

  const [formData, setFormData] =
    useState({
      title: "",
      description: "",
      category: "",
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
      "Update Current Affair:",
      id,
      formData
    );

  };

  return (
    <AdminLayout>

      <h1 className="text-4xl font-bold">
        Edit Current Affair
      </h1>

      <p className="text-slate-400 mt-2">
        Article ID: {id}
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-4"
      >

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-slate-900"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-slate-900"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-slate-900"
        />

        <button
          type="submit"
          className="bg-purple-600 px-6 py-3 rounded-xl"
        >
          Update Article
        </button>

      </form>

    </AdminLayout>
  );
}

export default EditCurrentAffair;