import React, { useState } from "react";
import HeroTitle from "../Component/HeroTitle";
import { AnimatePresence, motion } from "framer-motion";

import { CgOptions } from "react-icons/cg";

import LetterModal from "../Component/LetterModal"

const Home = () => {
  const [filterValue, setFilterValue] = useState("to");
  const [toggleFilter, setToggleFilter] = useState(false);

  const untogleFilter = () => {
    setToggleFilter(false);
  };

  return (
    <>
      <LetterModal />
      <section className="flex items-center h-2/6 md:h-1/2 ">
        <HeroTitle
          title={"Unsaid Feelings"}
          styleclass={
            "font-MajorMonoDisplay text-xl sm:text-2xl md:text-3xl lg:text-5xl text-gray-800 dark:text-gray-200"
          }
          mode={0}
          duration={{ start: 1, end: 3 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
        />
      </section>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
        className="flex justify-center items-center my-4"
      >
        <div className="flex items-center  w-4/6 md:w-1/3 relative">
          <input
            type="text"
            placeholder={filterValue}
            onClick={(e) => untogleFilter()}
            onKeyDown={(e) => untogleFilter()}
            className="mr-2 py-2 px-1 w-full tracking-widest outline-none text-gray-800 dark:text-gray-300 font-TheGirlNextDoor text-lg bg-transparent border-b-2 border-gray-600 dark:border-gray-400"
          ></input>
          <div className="relative ">
            <button
              onClick={() => setToggleFilter(!toggleFilter)}
              className="p-4 duration-500 bg-gray-50 hover:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 rounded-md"
            >
              <CgOptions className=" h-4 w-4 dark:text-gray-300" />
            </button>
            <AnimatePresence>
              {toggleFilter && (
                <motion.div
                  drag
                  dragConstraints={{
                    top: -50,
                    left: 0,
                    right: 50,
                    bottom: 0
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute z-10 w-44 text-base border filter backdrop-blur-lg border-gray-100 dark:border-neutral-700 rounded divide-y divide-gray-100 "
                >
                  <ul
                    className="py-1 font-Yomogi"
                    aria-labelledby="dropdownButton"
                  >
                    {["to", "from", "written"].map((fltr, idx) => (
                      <li key={idx}>
                        <p
                          onClick={() => setFilterValue(fltr)}
                          className={`cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:font-semibold dark:text-gray-200 dark:hover:text-white ${
                            fltr === filterValue && "font-semibold"
                          }`}
                        >
                          {fltr}
                        </p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <p className="text-sm absolute -bottom-8 text-center text-gray-800 dark:text-gray-300 font-Yomogi">
            Did someone write for you?
          </p>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
