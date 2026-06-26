function Education() {
  return (
    <section
      id="education"
      className="ml-72 bg-[#111827] text-white px-20 py-24"
    >
      <h2 className="text-5xl font-bold text-cyan-400">
        Education
      </h2>

      <div className="mt-12 space-y-8">

        <div className="bg-slate-800 p-8 rounded-xl border-l-4 border-cyan-400">
          <h3 className="text-2xl font-bold">
            B.Tech AI & ML
          </h3>

          <p className="text-gray-400 mt-2">
            ABC College | 2024 - 2028
          </p>

          <p className="mt-4 text-gray-300">
            Learning Artificial Intelligence,
            Machine Learning,
            Data Structures,
            React and Backend Development.
          </p>
        </div>

        <div className="bg-slate-800 p-8 rounded-xl border-l-4 border-cyan-400">
          <h3 className="text-2xl font-bold">
            Senior Secondary
          </h3>

          <p className="text-gray-400 mt-2">
            XYZ School | 2023
          </p>
        </div>

      </div>

    </section>
  );
}

export default Education;