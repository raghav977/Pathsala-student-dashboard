import React from 'react';
import MyCourses from './MyCourses';
import Class from './Class';
import Notice from './Notice';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Courses = () => {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-6 flex flex-col p-6">
      <motion.div
        className="grid grid-rows-2 gap-8"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.div
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          <h1 className="text-left font-semibold w-full text-2xl mb-4">
            My Enrolled Courses
          </h1>
          <MyCourses />
        </motion.div>

        <motion.div
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          <h1 className="text-left font-semibold w-full text-2xl mb-4">
            Notices
          </h1>
          <Notice />
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col"
      >
        <h1 className="text-left font-semibold w-full text-2xl mb-4">
          Upcoming Classes
        </h1>
        <Class />
      </motion.div>
    </div>
  );
};

export default Courses;
