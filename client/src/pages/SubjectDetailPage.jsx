import { useParams } from "react-router-dom";

function SubjectDetailPage() {

  const { subject } =
    useParams();

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold">
        {subject}
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        <div className="bg-slate-900 p-6 rounded-2xl">
          Notes
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          Practice Questions
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          Topic Test
        </div>

      </div>

    </div>
  );
}

export default SubjectDetailPage;