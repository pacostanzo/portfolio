import { Bar } from '../components';
import { languages, others } from '../public/data/skill';

const Resume = () => {
  return (
    <div className="px-6 py-2">
      <h5 className="my-3 text-2xl font-bold">Experience</h5>
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
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
        </div>
        <div>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Senior FullStack Developer
            </h5>
            <p className="font-semibold">Southend Corp S.A.</p>
            <p className="my-3">
              Research, planning and development of various scalable solutions
              that provide value to SAP Ariba / FieldGlass clients, through the
              use of Rest and SOAP APIs, intervening in the frontend, backend
              and infrastructure (React, Spring Boot with Docker and Cloud
              Foundry).
            </p>
          </div>
        </div>
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
    </div>
  );
};

export default Resume;
