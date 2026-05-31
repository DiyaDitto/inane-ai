import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import {
  getCurrentAffairs,
  deleteCurrentAffair,
} from "../services/currentAffairService";

function AdminCurrentAffairs() {

  const [articles,
    setArticles] =
    useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles =
    async () => {

      try {

        const data =
          await getCurrentAffairs();

        setArticles(data);

      } catch (error) {

        console.log(error);

      }

    };

  const handleDelete =
    async (id) => {

      const confirmDelete =
        window.confirm(
          "Delete this article?"
        );

      if (!confirmDelete)
        return;

      try {

        await deleteCurrentAffair(id);

        fetchArticles();

      } catch (error) {

        console.log(error);

      }

    };

  return (
    <AdminLayout>

      <div className="flex justify-between items-center">

        <h1 className="text-4xl font-bold">
          Manage Current Affairs
        </h1>

        <Link
          to="/admin/upload-current-affair"
          className="bg-purple-600 px-6 py-3 rounded-xl"
        >
          Add Article
        </Link>

      </div>

      <div className="mt-8 bg-slate-900 p-6 rounded-2xl">

        <table className="w-full">

          <thead>

            <tr>

              <th>Title</th>

              <th>Category</th>

              <th>Date</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {articles.map(
              (article) => (

                <tr
                  key={article._id}
                >

                  <td>
                    {article.title}
                  </td>

                  <td>
                    {article.category}
                  </td>

                  <td>
                    {new Date(
                      article.date
                    ).toLocaleDateString()}
                  </td>

                  <td>

                    <Link
                      to={`/admin/current-affairs/edit/${article._id}`}
                      className="bg-yellow-500 px-4 py-2 rounded-lg mr-2"
                    >
                      Edit
                    </Link>

                    <button
                      className="bg-red-600 px-4 py-2 rounded-lg"
                      onClick={() =>
                        handleDelete(
                          article._id
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

export default AdminCurrentAffairs;