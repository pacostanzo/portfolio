import { NextPage } from 'next';
import { motion } from 'framer-motion';
import { ServiceCard } from '../components';
import { services } from '../public/data/about';
import { routeFade, stagger, fadeInUp } from '../types/animations';

const About: NextPage = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1 "
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h6 className="my-3 text-base font-medium">
        I'm a Computer Engineering student at the University of Buenos Aires,
        currently working as a full stack developer at{' '}
        <a
          href="https://southend.com.ar/en/home-eng/"
          className="text-green-800 font-bold"
          target="_blank"
        >
          {' '}
          Southend Corp
        </a>
        , researching, planning and developing different scalable solutions that
        bring value to SAP Ariba / FieldGlass clients. I'm passionate about the
        web and the software development.
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          What I am doing
        </h4>

        <motion.div
          className="grid gap-6 my-3 md:grid-cols-2"
          variants={stagger}
          animate="animate"
          initial="initial"
        >
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <motion.div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
              variants={fadeInUp}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
export default About;
