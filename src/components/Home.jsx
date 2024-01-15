import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
// import me from '../assets/me.png';
import { Link } from "react-scroll"; 


const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#0a192f]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
      <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Gursimar Singh
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          I'm a DevOps Engineer
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
        Languages like Python, Java R, Ruby, and C/C++ are my tools of choice. My expertise stretches across DevOps, Cloud Computing, Machine Learning and Web, Spring Boot, Gradle & Quantum Computing. Particularly, I'm fascinated by quantum tech's potential to revolutionize our universe's understanding. Further, a skilled tech writer.
        </p>
        <div>
          <Link
            to="skills"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};
export default Home;