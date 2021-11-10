import { Bar } from '../components';

import { motion } from 'framer-motion';
import { fadeInUp, routeFade } from '../types/animations';
import { languages, others } from '../public/data/skill';

const Resume = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h5 className="my-3 text-2xl font-bold">Experience</h5>
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <div className="">
            <h5 className="my-2 text-xl font-bold">Analyst developer</h5>
            <p className="font-semibold">SouthEnd S.A.</p>
            <p className="my-3">
              Customization and development of Ariba modules for different
              clients by using the Java Programming language. Architecture
              design and development of the supplier management platform
              (Aquanima Network), based on Vaadin, Grails and Talend.
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Senior FullStack Developer
            </h5>
            <p className="font-semibold">Southend Corp S.A.</p>
            <p className="my-3">
              Research, planning and development of various scalable solutions
              that brings value to SAP Ariba / FieldGlass clients, using Rest
              and SOAP APIs, taking part in the frontend, backend and
              infrastructure (React, Spring Boot with Docker and Cloud Foundry).
            </p>
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">
            Libraries & Infrasctructure
          </h5>
          <div className="my-2">
            {others.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
