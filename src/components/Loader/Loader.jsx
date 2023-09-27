import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="h-screen bg-[#141414]">
      <div className="w-[95%] mx-auto pt-32">
        <div className="flex flex-col gap-2 justify-center items-center block lg:hidden">
          <div className="flex flex-col items-center justify-center custom-shadow-lg border-gray-500 rounded-[10px] w-[80%] h-[470px]">
            <motion.div
              animate={{ opacity: [0, 1] }}
              transition={{ delay: 0.1, duration: 1.5, repeat: Infinity }}
              className="z-50 w-[200px] h-[80px] rounded bg-gray-500 mt-auto"
            />
            <div className="w-full flex justify-between gap-4 px-4">
              <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{ delay: 0.2, duration: 1.5, repeat: Infinity }}
                className="w-full h-10 rounded bg-gray-500 mt-20 mb-4"
              />
              <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{ delay: 0.2, duration: 1.5, repeat: Infinity }}
                className="w-full h-10 rounded bg-gray-500 mt-20 mb-4"
              />
            </div>
          </div>
        </div>
        <div className="animate-pulse bg-gray-500 h-6 w-36 rounded mb-4 mt-12 lg:mt-0"></div>
        <div className="flex gap-3">
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 0.1, duration: 1.5, repeat: Infinity }}
            className="z-50  hidden lg:block  h-[200px] lg:h-[130px] w-[230px] 2xl:w-[230px] 3xl:w-[300px] 4xl:w-[390px] rounded bg-gray-500"
          />
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 0.2, duration: 1.5, repeat: Infinity }}
            className=" hidden lg:block  h-[200px] lg:h-[130px] w-[230px] 2xl:w-[230px] 3xl:w-[300px] 4xl:w-[390px] rounded bg-gray-500"
          />
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 0.3, duration: 1.5, repeat: Infinity }}
            className=" hidden lg:block  h-[200px] lg:h-[130px] w-[230px] 2xl:w-[230px] 3xl:w-[300px] 4xl:w-[390px] rounded bg-gray-500"
          />
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 0.4, duration: 1.5, repeat: Infinity }}
            className="hidden lg:block h-[200px] lg:h-[130px] w-[230px] 2xl:w-[230px] 3xl:w-[300px] 4xl:w-[390px] rounded bg-gray-500"
          />
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 0.5, duration: 1.5, repeat: Infinity }}
            className="h-[200px] lg:h-[130px] w-[230px] 2xl:w-[230px] 3xl:w-[300px] 4xl:w-[390px] rounded bg-gray-500"
          />
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 0.6, duration: 1.5, repeat: Infinity }}
            className="h-[200px] lg:h-[130px] w-[230px] 2xl:w-[230px] 3xl:w-[300px] 4xl:w-[390px] rounded bg-gray-500"
          />
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 0.7, duration: 1.5, repeat: Infinity }}
            className="h-[200px] lg:h-[130px] w-[230px] 2xl:w-[230px] 3xl:w-[300px] 4xl:w-[390px] rounded bg-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
