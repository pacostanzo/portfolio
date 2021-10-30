import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { GiTie } from 'react-icons/gi';
import { GoLocation } from 'react-icons/go';
import Image from 'next/image';

const profileData = {
  imageSrc: '/public/images/me.jpeg',
  name: 'Pablo',
  surname: 'Costanzo',
  title: 'Software Developer',
  location: 'Buenos Aires, Argentina',
  mail: 'costanzopa@gmail.com',
};

const Sidebar = () => {
  return (
    <>
      <Image
        src="/images/me.jpeg"
        alt="avatar"
        className=" mx-auto border rounded-full "
        height="256px"
        width="256px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green-600">{profileData.name}</span>{' '}
        <span className="text-gray-600"> {profileData.surname}</span>
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        {}
      </p>
      {/* Resume */}
      <a
        href="/assets/Curriculum vitae.pdf"
        download="Curriculum vitae.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      >
        <GiTie className="w-6 h-6 text-gray-600" />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-gray-600 md:w-full">
        <a href="https://twitter.com/pacostanzo" target="_blank">
          <AiFillTwitterCircle className="w-8 h-8 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
        </a>
        <a
          href="https://www.linkedin.com/in/pablo-costanzo-288313169/"
          target="_blank"
        >
          <AiFillLinkedin
            className="w-8 h-8 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            target="_blank"
          />
        </a>
        <a href="https://github.com/costanzopa">
          <AiFillGithub className="w-8 h-8 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" />{' '}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5  bg-gray-200 dark:bg-dark-200 dark:bg-black-500 "
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>{profileData.location}</span>
        </div>
        <p className="my-2 "> {profileData.mail} </p>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-green-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        onClick={() => window.open(`mailto:${profileData.mail}`)}
      >
        Email me
      </button>
      <button
        onClick={() => console.log('Change Theme')}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-green-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      >
        {/* //TODO remove bg black */}
        Toggle Theme
      </button>
    </>
  );
};

export default Sidebar;
