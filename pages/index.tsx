import { NextPage } from 'next';
import { ServiceCard } from '../components';
import { services } from '../public/data/about';

const About: NextPage = () => {
  // console.log(services);

  return (
    <div className="flex flex-col flex-grow px-6 pt-1 ">
      <h6 className="my-3 text-base font-medium">
        I am a Computer Engineering student at the University of Buenos Aires,
        currently working as a full stack developer at{' '}
        <a
          href="https://southend.com.ar/en/home-eng/"
          className="text-green-800 font-bold"
          target="_blank"
        >
          {' '}
          Southend Corp
        </a>{' '}
        , researching, planning and developing different scalable solutions that
        provide value to SAP Ariba / FieldGlass clients. I am passionate about
        software development and learning new technologies that this discipline
        brings.
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          What I am doing
        </h4>

        <div className="grid gap-6 my-3 md:grid-cols-2">
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default About;
