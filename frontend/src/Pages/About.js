import React from "react";
//import { AnimatePresence, motion } from "framer-motion";
import HeroTitle from "../Component/HeroTitle";
//import { BeakerIcon } from "@heroicons/react/solid";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import Stars from "../Component/Stars";
import { Link } from "react-router-dom";
import { FaNode } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { IoLogoNpm, IoSparkles } from "react-icons/io5";
import { DiHeroku } from "react-icons/di";

const About = () => {
  return (
    <div>
      <section>
        <div className=" container px-6 pt-16 pb-12 mx-auto text-center duration-500 bg-gray-50 dark:bg-neutral-900">
          <div className="relative max-w-lg mx-auto">
              {/* <Stars /> */}
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

            <h1 className="text-md font-bold text-gray-800 dark:text-white md:text-lg mt-3 font-TheGirlNextDoor">
              A Archive For Unsaid Feelings
            </h1>

            <p className="indent-1 font-thin leading-9 relative text-justify pb-5 mt-16 text-gray-800 dark:text-gray-200">
              This archive is for those who want to share their feelings without
              directly sending them to anyone but with the given alias. You can
              put your name, nickname, or don't put it at all, whatever you
              want. Tagging someone is required. Whatever it may be. It can be
              the name of your dog, the name of your cat, a name of a person you
              love or hate the most. Just be aware that this archive is publicly
              open. You can say whatever you want, but if someone says something
              suspicious or doing something illegal. Just email us then we'll
              take care of it. You can also message us if you want us directly
              message your loved ones. Once you sumbit your message. It cannot
              be deleted. email us if you want to delete your message.
            </p>
          </div>
          <p className="relative mt-3 text-xs text-gray-400 ">
            No credit card required
          </p>
          <div className="relative flex justify-center items-center mt-6 -mx-2 p-14 ">
            <Link className="mx-2" to="#" aria-label="Twitter">
              <AiFillFacebook className="h-5 w-5 text-neutral-900 dark:text-white" />
            </Link>
            <Link className="mx-2" href="#" aria-label="Twitter">
              <AiFillTwitterCircle className="h-5 w-5 text-neutral-900 dark:text-white" />
            </Link>

            <Link className="mx-2" href="#" aria-label="Facebook">
              <AiFillInstagram className="h-5 w-5 text-neutral-900 dark:text-white" />
            </Link>

            <Link className="mx-2" href="#" aria-label="Linkden">
              <AiTwotoneMail className="h-5 w-5 text-neutral-900 dark:text-white" />
            </Link>

            <Link className="mx-2" href="#" aria-label="Github">
              <AiFillGithub className="h-5 w-5 text-neutral-900 dark:text-white" />
            </Link>
          </div>
          <div className="mx-auto w-1/4 justify-center mt-12 mb-16">
            <div className=" flex items-center justify-center space-x-3">
                <IoSparkles className="text-yellow-400" />
                <p className="font-Inter text-center dark:text-neutral-50"> build with  </p>
                <IoSparkles className="text-yellow-400" />
            </div>
            <div className=" flex items-center justify-evenly space-x-4 my-8 flex-wrap">
              <a
                href="https://nodejs.org/en/"
                rel="noreferrer"
                target={"_blank"}
              >
                <FaNode className="hover:scale-x-110 duration-300 hover:-translate-y-2 w-12 h-12 text-neutral-900 dark:text-neutral-500" />
              </a>
              <a
                href="https://tailwindcss.com/"
                rel="noreferrer"
                target={"_blank"}
              ><SiTailwindcss className="hover:scale-x-110 duration-300 hover:-translate-y-2 w-8 h-8 text-sky-600" /></a>
              <a
                href="https://reactjs.org/"
                rel="noreferrer"
                target={"_blank"}
              ><GrReactjs className="hover:scale-x-110 duration-300 hover:-translate-y-2 w-8 h-8 text-sky-400" /></a>
              
              <a
                href="https://www.mongodb.com/"
                rel="noreferrer"
                target={"_blank"}
              ><SiMongodb className="hover:scale-x-110 duration-300 hover:-translate-y-2 w-8 h-8 text-green-600" /></a>
              
              <a
                href="https://www.npmjs.com/"
                rel="noreferrer"
                target={"_blank"}
              ><IoLogoNpm className="hover:scale-x-110 duration-300 hover:-translate-y-2 w-12 h-12 text-orange-800" /></a>
              
              <a
                href="https://www.heroku.com/"
                rel="noreferrer"
                target={"_blank"}
              ><DiHeroku className="hover:scale-x-110 duration-300 hover:-translate-y-2 w-9 h-9 text-purple-700" /></a>
              
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default About;
