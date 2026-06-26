function Projects() {

  const data = [

    {
      title:"Portfolio Website",
      desc:"Modern React Portfolio",
    },

    {
      title:"Weather App",
      desc:"Weather API Project",
    },

    {
      title:"Todo App",
      desc:"Task Manager",
    }

  ];

  return (

    <section
      id="projects"
      className="ml-72 bg-[#0F172A] text-white px-20 py-24"
    >

      <h2 className="text-5xl font-bold text-cyan-400">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

        {data.map((item,index)=>(

          <div
            key={index}
            className="bg-slate-800 rounded-xl overflow-hidden hover:scale-105 duration-300"
          >

            <img
              src="https://picsum.photos/400/220"
              alt=""
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {item.desc}
              </p>

              <div className="flex gap-4 mt-6">

                <button className="bg-cyan-500 px-5 py-2 rounded-lg">
                  Live Demo
                </button>

                <button className="border border-cyan-400 px-5 py-2 rounded-lg">
                  GitHub
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Projects;