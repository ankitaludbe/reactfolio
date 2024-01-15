import React from "react";
import Ansible from "../images/ansible.jpg";
import App from "../images/python.jpg";
import Auto from "../images/automated.png";

const Projects = () => {
    const projects = [
        {
          img: Ansible,
          title: "Multi-Cloud Setup of Kubernetes using Ansible",
          desc: " Multi-Cloud Setup of Kubernetes using Ansible | Kubernetes, Ansible, AWS, Azure, GCP, Linux ",
          live: "https://devlogg.onrender.com/",
          code: "https://github.com/Coderamrin/devlog",
        },
        {
          img: App,
          title: "Text Chat App and Video Chat App using Python ",
          desc: "Text Chat App and Video Chat App using Python | Networking, Python, Linux",
          live: "https://uilogs.xyz/",
          code: "https://medium.com/geekculture/creating-video-chat-app-using-python-9da0a9c386ba",
        },
        {
          img: Auto,
          title: "Automated Data Deployment and Analysis Solution with Google Cloud and GitLab CI ",
          desc: "Automated Data Deployment and Analysis Solution with Google Cloud and GitLab CI",
          live: "https://build-10-css-projects.netlify.app/",
          code: "https://medium.com/google-cloud/from-data-chaos-to-data-insights-with-google-cloud-and-gitlab-ci-a-cutting-edge-solution-e8f5cc9f625c",
        },
        
      ]; 
// h-screen
  return (
    <div name="project" className="h-auto w-full bg-[#0a192f]">
    <section className="bg-[#0a192f] text-gray-300 px-5 py-32" id="projects">
    <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
      <div className=' w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Projects</p>
              <p className='py-4 text-2xl'>Navigate through a portfolio showcasing my expertise across a spectrum of technologies.</p>
          </div>

        <div></div>
      </div>

      <div className=" projects container mx-auto grid md:grid-cols-3 gap-10 ">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} className="h-[260px] w-[620px] rounded-lg" />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 hover:bg-[#0a192f]">
                <p className=" py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
    </div>
  );
};

export default Projects;
