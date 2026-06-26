function About() {
  return (
    <section
      id="about"
      className="ml-72 bg-[#111827] text-white px-20 py-24"
    >
      <h2 className="text-5xl font-bold text-cyan-400">
        About Me
      </h2>

      <p className="mt-8 text-gray-300 text-xl leading-10 max-w-4xl">
        Hello! I'm <span className="text-cyan-400">Shanny Sharma</span>.
        I am an AI & ML student who enjoys building modern websites,
        learning Machine Learning, solving DSA problems, and creating
        backend applications.
      </p>

      <div className="grid grid-cols-2 gap-8 mt-14">

        <div className="bg-slate-800 rounded-xl p-8">
          <h3 className="text-4xl font-bold text-cyan-400">
            15+
          </h3>

          <p className="mt-3 text-gray-300">
            Projects Completed
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-8">
          <h3 className="text-4xl font-bold text-cyan-400">
            2+
          </h3>

          <p className="mt-3 text-gray-300">
            Years Learning
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;