import { motion } from 'framer-motion';
import { useState } from 'react';
import { fadeInUp, routeFade, stagger } from '../types/animations';
import { ProjectCard, ProjectNavbar } from '../components';
import { projects as projectsData } from '../public/data/project';
import { Category } from '../types/Category';

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState('all');
  const [showDetail, setShowDetail] = useState<null | Number>(null);

  const handleFilterCategory = (category: Category | 'all') => {
    if (category === 'all') {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );

    setProjects(newArray);
    setActive(category);
  };

  return (
    <motion.div
      className="px-5 py-2 overflow-y-scroll "
      style={{ height: '65vh' }}
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ProjectNavbar
        handlerFilterCategory={handleFilterCategory}
        active={active}
      />
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative grid grid-cols-12 gap-4 my-3"
      >
        {projects.map((project) => (
          <motion.div
            variants={fadeInUp}
            key={project.id}
            className="col-span-12 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 sm:col-span-6 lg:col-span-4"
          >
            <ProjectCard
              project={project}
              key={project.id}
              setShowDetail={setShowDetail}
              showDetail={showDetail}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
