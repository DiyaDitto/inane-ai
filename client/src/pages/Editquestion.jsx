import { useParams } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";

function EditQuestion() {

  const { id } = useParams();

  return (
    <AdminLayout>

      <h1 className="text-4xl font-bold">
        Edit Question
      </h1>

      <p className="mt-4">
        Question ID: {id}
      </p>

    </AdminLayout>
  );
}

export default EditQuestion;