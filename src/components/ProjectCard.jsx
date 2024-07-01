import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import projectItems from "../data/project-items";
import Reveal from "./Reveal";
import LogoButton from "./LogoButton";
import { faGithub, faInternetExplorer } from "@fortawesome/free-brands-svg-icons";

export default function ProjectCard() {
  const [selectedItemId, setSelectedItemId] = useState(null);

  let selectedItem = null;
  if (selectedItemId) {
    selectedItem = projectItems.find((item) => item.id === selectedItemId);
  }

  useEffect(() => {
    if (selectedItemId) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [selectedItemId]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectItems.map((item) => {
          return (
            <motion.div
              key={item.id}
              layoutId={item.id}
              onClick={() => setSelectedItemId(item.id)}
              className="w-full p-4 cursor-pointer bg-slate-900 bg-opacity-50 lg:bg-transparent hover:bg-slate-900 hover:bg-opacity-50 rounded-2xl"
            >
              <motion.div className="bg-gray-700 w-full aspect-[16/9] rounded-2xl overflow-hidden relative mb-4">
                <motion.div
                  initial={{ x: "-50%", y: "5%" }}
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  className="w-[85%] aspect-[16/9] absolute bottom-0 left-1/2 rounded-lg overflow-hidden"
                >
                  <Reveal>
                    <motion.img
                      className="object-cover w-full h-full object-top"
                      src={item.imgLink}
                    ></motion.img>
                  </Reveal>
                </motion.div>
              </motion.div>
              <motion.div className="px-4 pt-4">
                <div className="flex items-center mb-4">
                  <Reveal>
                    <motion.p className="text-white text-2xl font-bold">{item.title}</motion.p>
                  </Reveal>
                  <hr className="ms-4 flex-1"></hr>
                </div>
                <Reveal>
                  <motion.p className="text-primary-color mb-4">
                    {item.techsUsed.join(", ")}
                  </motion.p>
                </Reveal>
                <Reveal>
                  <motion.p className="mb-4 clamp-text">{item.description}</motion.p>
                </Reveal>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedItemId && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full z-20 backdrop-blur bg-black bg-opacity-20 py-8 overflow-auto"
            onClick={() => setSelectedItemId(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              layoutId={selectedItemId}
              className="mx-4 md:w-[40rem] rounded-2xl overflow-hidden md:mx-auto"
            >
              <motion.img
                className="w-full aspect-[16/9] object-cover object-top"
                src={selectedItem.imgLink}
              ></motion.img>
              <motion.div className="bg-slate-900 px-8 pt-12 pb-8">
                <motion.p className="text-white text-2xl font-bold mb-4">
                  {selectedItem.title}
                </motion.p>
                <motion.p className="text-primary-color mb-4">
                  {selectedItem.techsUsed.join(", ")}
                </motion.p>
                <motion.p className="mb-4">{selectedItem.description}</motion.p>
                <motion.p className="text-white text-2xl font-bold mb-4">Project Links.</motion.p>
                <div className="flex gap-4 items-center mb-4 text-primary-color h-6">
                  {selectedItem.github && (
                    <LogoButton icon={faGithub} href={selectedItem.github} text="source code" />
                  )}
                  {selectedItem.liveSite && (
                    <LogoButton
                      icon={faInternetExplorer}
                      href={selectedItem.liveSite}
                      text="live site"
                    />
                  )}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
