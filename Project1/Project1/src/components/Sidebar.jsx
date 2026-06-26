import myPhoto from "../assets/image.png";
import { motion } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Sidebar() {
  return (
    <motion.aside
      className="fixed left-0 top-0 w-72 h-screen bg-slate-900 p-6 text-white"
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <img
          src={myPhoto}
          alt="Shanny Sharma"
          className="w-36 h-36 rounded-full mx-auto border-4 border-cyan-400"
        />

        <h2 className="text-3xl font-bold mt-5">
          Shanny Sharma
        </h2>

        <p className="text-gray-400 mt-2">
          AI & ML Student
        </p>
      </div>

      <div className="flex justify-center gap-5 text-2xl mt-6">
        <FaGithub className="cursor-pointer hover:text-cyan-400 duration-300" />
        <FaLinkedin className="cursor-pointer hover:text-cyan-400 duration-300" />
      </div>

      <nav className="mt-12">
        <ul className="space-y-6 text-lg">

          <li className="flex items-center gap-3 hover:text-cyan-400 hover:translate-x-2 duration-300 cursor-pointer">
            <FaHome /> Home
          </li>

          <li className="flex items-center gap-3 hover:text-cyan-400 hover:translate-x-2 duration-300 cursor-pointer">
            <FaUser /> About
          </li>

          <li className="flex items-center gap-3 hover:text-cyan-400 hover:translate-x-2 duration-300 cursor-pointer">
            <FaCode /> Skills
          </li>

          <li className="flex items-center gap-3 hover:text-cyan-400 hover:translate-x-2 duration-300 cursor-pointer">
            <FaProjectDiagram /> Projects
          </li>

          <li className="flex items-center gap-3 hover:text-cyan-400 hover:translate-x-2 duration-300 cursor-pointer">
            <FaEnvelope /> Contact
          </li>

        </ul>
      </nav>
    </motion.aside>
  );
}

export default Sidebar;