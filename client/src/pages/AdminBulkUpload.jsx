import { useState } from "react";
import axios from "axios";
import AdminLayout from "../layouts/AdminLayout";

function AdminBulkUpload() {

  const [jsonData, setJsonData] =
    useState("");

  const handleUpload =
    async () => {

      try {

        const parsedData =
          JSON.parse(jsonData);

        const response =
          await axios.post(
            "http://localhost:5000/api/questions/bulk-upload",
            parsedData
          );

        alert(
          response.data.message
        );

      } catch (error) {

        console.log(error);

        alert(
          "Invalid JSON"
        );

      }

    };

  return (
    <AdminLayout>

      <h1 className="text-4xl font-bold">
        Bulk Upload Questions
      </h1>

      <textarea
        rows="20"
        value={jsonData}
        onChange={(e) =>
          setJsonData(
            e.target.value
          )
        }
        placeholder="Paste JSON here..."
        className="w-full mt-6 p-4 rounded-xl bg-slate-900 text-white"
      />

      <button
        onClick={handleUpload}
        className="mt-4 bg-purple-600 px-6 py-3 rounded-xl"
      >
        Upload Questions
      </button>

    </AdminLayout>
  );
}

export default AdminBulkUpload;