import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PYQYearPage() {

  const {
    exam,
    year,
  } = useParams();

  const [pyqs,
    setPyqs] =
    useState([]);

  useEffect(() => {

    fetchPYQs();

  }, [exam, year]);

  const fetchPYQs =
    async () => {

      try {

        const res =
          await axios.get(
            `http://localhost:5000/api/pyqs?exam=${exam}&year=${year}`
          );

        setPyqs(
          res.data
        );

      } catch (error) {

        console.log(error);

      }

    };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold">
        {exam}
      </h1>

      <h2 className="text-2xl text-purple-400 mt-2">
        {year} PYQs
      </h2>

      <div className="mt-8 space-y-4">

        {pyqs.map((pyq) => (

          <div
            key={pyq._id}
            className="bg-slate-900 p-6 rounded-xl"
          >

            <h3 className="font-bold text-lg">
              {pyq.question}
            </h3>

            <div className="mt-4 space-y-2">

              {pyq.options.map(
                (
                  option,
                  index
                ) => (

                  <div
                    key={index}
                    className="bg-slate-800 p-3 rounded-lg"
                  >
                    {option}
                  </div>

                )
              )}

            </div>

            <div className="mt-4 text-green-400">
              Answer:
              {" "}
              {pyq.answer}
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default PYQYearPage;