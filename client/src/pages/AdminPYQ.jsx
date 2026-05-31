import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import {
  getPYQs,
  deletePYQ,
} from "../services/pyqService";

function AdminPYQ() {

  const [pyqs, setPyqs] =
    useState([]);

  useEffect(() => {
    fetchPYQs();
  }, []);

  const fetchPYQs =
    async () => {

      try {

        const data =
          await getPYQs();

        setPyqs(data);

      } catch (error) {

        console.log(error);

      }

    };

  const handleDelete =
    async (id) => {

      const confirmDelete =
        window.confirm(
          "Delete this PYQ?"
        );

      if (!confirmDelete)
        return;

      try {

        await deletePYQ(id);

        fetchPYQs();

      } catch (error) {

        console.log(error);

      }

    };

  return (
    <AdminLayout>

      <div className="flex justify-between items-center">

        <h1 className="text-4xl font-bold">
          Manage PYQs
        </h1>

        <Link
          to="/admin/upload-pyq"
          className="bg-purple-600 px-6 py-3 rounded-xl"
        >
          Add PYQ
        </Link>

      </div>

      <div className="mt-8 bg-slate-900 p-6 rounded-2xl">

        <table className="w-full">

          <thead>

            <tr>

              <th>Exam</th>

              <th>Year</th>

              <th>Question</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {pyqs.map(
              (pyq) => (

                <tr
                  key={pyq._id}
                >

                  <td>{pyq.exam}</td>

                  <td>{pyq.year}</td>

                  <td>{pyq.question}</td>

                  <td>

                    <Link
                      to={`/admin/pyqs/edit/${pyq._id}`}
                      className="bg-yellow-500 px-4 py-2 rounded-lg mr-2"
                    >
                      Edit
                    </Link>

                    <button
                      className="bg-red-600 px-4 py-2 rounded-lg"
                      onClick={() =>
                        handleDelete(
                          pyq._id
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

export default AdminPYQ;