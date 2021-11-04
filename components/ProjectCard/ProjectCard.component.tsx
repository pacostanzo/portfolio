import { FunctionComponent, useState } from 'react';
import { IProject } from '../../types/Project';
import Image from 'next/image';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { fadeInUp, stagger } from '../../types/animations';
import { motion } from 'framer-motion';

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail: null | Number;
  setShowDetail: (id: Number | null) => void;
}> = ({
  project: {
    name,
    image_path,
    deployed_url,
    github_url,
    description,
    key_techs,
    id,
  },
  setShowDetail,
  showDetail,
}) => {
  // TODO scroll to top
  return (
    <>
      <Image
        width="300"
        height="150"
        src={image_path}
        layout="responsive"
        alt={name}
        onClick={() => setShowDetail(id)}
        className="cursor-pointer"
        quality={10}
      />

      <p className="my-2 text-center">{name}</p>

      {showDetail === id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 md:p-10 text-black bg-gray-100 rounded-lg md:p-10 dark:bg-dark-100 dark:text-gray-100 md:grid-cols-2 gap-x-12 rounded-lg">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div
              className="border-4 border-green-800 dark:border-gray-100 "
              variants={fadeInUp}
            >
              <Image
                src={image_path}
                alt={name}
                className="overflow-hidden"
                layout="responsive"
                width={300}
                height={150}
              />
            </motion.div>
            <motion.div
              className="flex justify-center my-4 space-x-3"
              variants={fadeInUp}
            >
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 rounded-sm dark:bg-dark-500"
                target="_blank"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 rounded-sm dark:bg-dark-500"
                target="_blank"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium md:text-2xl "
            >
              {name}
            </motion.h2>
            <motion.h3
              variants={fadeInUp}
              className="my-3 text-base font-medium"
            >
              {description}
            </motion.h3>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {key_techs.map((value, i) => (
                <span
                  key={i}
                  className="p-1 px-2 my-1 bg-gray-300 rounded-sm dark:bg-dark-500"
                >
                  {value}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
            onClick={() => setShowDetail(null)}
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
