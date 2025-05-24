import { motion } from "motion/react";

import { MdOutlineRestaurantMenu, MdBungalow } from "react-icons/md";
import { Link } from "@tanstack/react-router";
export function HeroSection() {
  return (
    <section className="App  customImg">
      <div className="py-4 px-4 mx-auto w-full text-center lg:py-16 lg:px-12">
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="mb-4 text-6xl font-extrabold tracking-tight leading-none text-white  lg:text-7xl "
        >
          ¿Buscas sabor y relax?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
          className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 "
        >
          Bienvenidos al Restaurante y Balneario Los Cenizaros, un lugar donde
          la naturaleza y la hospitalidad se encuentran para ofrecerte una
          experiencia única y relajante.
        </motion.p>
        <div className="flex flex-row mb-8 lg:mb-16 space-y-4 gap-4 justify-center sm:space-y-0 sm:space-x-4">
          <motion.div
            className="w-1/2 lg:w-1/6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.7 }}
          >
            <Link
              to="/menu"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-green-700 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 w-full gap-2"
            >
              ver Menú
            <MdOutlineRestaurantMenu className="w-5 h-5"/>
            </Link>
          </motion.div>
          <motion.div
            className="w-1/2 lg:w-1/6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.9 }}
          >
            <Link
              to="/hosting"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-green-300 hover:bg-green-600 focus:ring-4 focus:ring-green-300 w-full gap-2"
            >
              Hospedaje
              <MdBungalow className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
