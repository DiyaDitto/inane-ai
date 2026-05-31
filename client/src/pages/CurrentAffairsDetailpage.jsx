import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CurrentAffairDetailPage() {

  const { category } =
    useParams();

  const [articles,
    setArticles] =
    useState([]);

  useEffect(() => {

    fetchArticles();

  }, [category]);

  const fetchArticles =
    async () => {

      try {

        const res =
          await axios.get(
            `http://localhost:5000/api/current-affairs?category=${category}`
          );

        setArticles(
          res.data
        );

      } catch (error) {

        console.log(error);

      }

    };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold">
        {category}
      </h1>

      <div className="mt-8 space-y-4">

        {articles.map(
          (article) => (

            <div
              key={article._id}
              className="bg-slate-900 p-6 rounded-2xl"
            >

              <h2 className="text-xl font-bold">
                {article.title}
              </h2>

              <p className="text-slate-400 mt-2">
                {article.description}
              </p>

              <p className="text-sm text-purple-400 mt-4">
                {new Date(
                  article.date
                ).toLocaleDateString()}
              </p>

            </div>

          )
        )}

      </div>

    </div>
  );
}

export default CurrentAffairDetailPage;