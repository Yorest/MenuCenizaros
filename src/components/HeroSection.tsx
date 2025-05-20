import { motion } from "motion/react"
export function HeroSection(){
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
              <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <motion.a
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ ease: "easeInOut", duration: 1, delay: 0.7 }}
                  href="/menu"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300"
                >
                  ver Menú
                  <svg
                    className="ml-2 -mr-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ ease: "easeInOut", duration: 1, delay: 0.9 }}
                  href="/hosting"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-green-300 hover:bg-green-600 focus:ring-4 focus:ring-green-300 "
                >
                  Hospedaje
                  <svg
                    className="ml-2 -mr-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </motion.a>
              </div>
            </div>
          </section>
    )
}