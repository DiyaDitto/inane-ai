import { useState } from "react";

function SearchPage() {

  const [search, setSearch] =
    useState("");

  const data = [
    "Quantitative Aptitude",
    "Reasoning",
    "English",
    "General Awareness",
    "Current Affairs",
    "SSC CGL",
    "SSC CHSL",
    "SSC GD",
    "SSC MTS",
    "Percentage",
    "Profit and Loss",
    "Coding Decoding",
    "Blood Relations",
  ];

  const filteredData =
    data.filter((item) =>
      item
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold">
        Search
      </h1>

      <p className="text-slate-400 mt-2">
        Search Subjects, PYQs and Topics
      </p>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full mt-6 p-4 rounded-xl bg-slate-900 border border-slate-800"
      />

      <div className="mt-8 space-y-3">

        {filteredData.map(
          (item, index) => (

            <div
              key={index}
              className="bg-slate-900 p-4 rounded-xl border border-slate-800"
            >
              {item}
            </div>

          )
        )}

      </div>

    </div>
  );
}

export default SearchPage;