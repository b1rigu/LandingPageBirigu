import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ProjectCard() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <div class="grid grid-cols-2 gap-4">
        <motion.div layoutId={20} onClick={() => setSelectedId(20)} className="w-full">
          <motion.div className="bg-gray-700 h-72 rounded-2xl overflow-hidden relative mb-4">
            <motion.div
              initial={{ x: "-50%" }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-4/5 aspect-[16/9] absolute -bottom-12 left-1/2 rounded-lg overflow-hidden"
            >
              <motion.img
                className="object-cover w-full h-full object-top"
                src="https://steam-portfolio-demo.vercel.app/project-imgs/example-project.jpg"
              ></motion.img>
            </motion.div>
          </motion.div>
          <motion.p className="text-white text-2xl font-bold mb-4">Example Project</motion.p>
          <motion.p className="text-primary-color mb-4">Typescript</motion.p>
          <motion.p className="mb-4">
            Example Project Description. Example Project Description. Example Project Description.
            Example Project Description. Example Project Description. Example Project Description.
            Example Project Description. Example Project Description. Example Project Description.
            Example Project Description.
          </motion.p>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div className="fixed top-0 left-0 w-full h-full z-10 backdrop-blur bg-black bg-opacity-20 py-8">
            <motion.div
              layoutId={selectedId}
              className="w-[40rem] rounded-2xl overflow-hidden mx-auto"
            >
              <motion.img
                className="w-full object-cover"
                src="https://steam-portfolio-demo.vercel.app/project-imgs/example-project.jpg"
              ></motion.img>
              <motion.div className="bg-slate-900 px-8 pt-12 pb-8">
                <motion.p className="text-white text-2xl font-bold mb-4">Example Project</motion.p>
                <motion.p className="text-primary-color mb-4">Typescript</motion.p>
                <motion.p className="mb-4">
                  Example Project Description. Example Project Description. Example Project
                  Description. Example Project Description. Example Project Description. Example
                  Project Description. Example Project Description. Example Project Description.
                  Example Project Description. Example Project Description.
                </motion.p>
                <motion.p className="text-white text-2xl font-bold mb-4">Project Links.</motion.p>
                <motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
