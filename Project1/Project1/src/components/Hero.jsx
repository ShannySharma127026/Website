import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="ml-72 min-h-screen flex items-center px-20 bg-[#0F172A] text-white">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-cyan-400 text-3xl">
          Hello 👋
        </h3>

        <h1 className="text-7xl font-bold mt-5 leading-tight">
          I'm <br />
          <span className="text-white">
            Shanny Sharma
          </span>
        </h1>

        <TypeAnimation
          sequence={[
            "AI & ML Student",
            2000,
            "React Developer",
            2000,
            "Backend Developer",
            2000,
            "Python Programmer",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="text-4xl text-cyan-400 mt-6 font-bold"
        />

        <p className="text-gray-400 mt-8 max-w-xl leading-9 text-xl">
          Passionate about Artificial Intelligence,
          Machine Learning, Backend Development,
          and Data Structures & Algorithms.
        </p>

        <div className="mt-10 flex gap-5">
          <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl hover:scale-110 duration-300">
            Download CV
          </button>

          <button className="border border-cyan-400 hover:bg-cyan-500 px-8 py-4 rounded-xl hover:scale-110 duration-300">
            Hire Me
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;