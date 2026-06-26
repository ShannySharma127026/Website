function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "Python",
    "C++",
    "Machine Learning",
    "Git"
  ];

  return (

    <section
      id="skills"
      className="ml-72 bg-[#0F172A] text-white px-20 py-24"
    >

      <h2 className="text-5xl font-bold text-cyan-400">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-14">

        {skills.map((skill, index) => (

          <div
            key={index}
            className="bg-slate-800 rounded-xl p-6 text-center hover:bg-cyan-500 duration-300 cursor-pointer"
          >

            <h3 className="text-xl font-semibold">
              {skill}
            </h3>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Skills;