import React from "react";

const About = () => { 
  return (
    <div
      name="presentation"
      id="about"
      className="w-full h-auto bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                Presentation
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
              Automating HAProxy using Ansible over AWS. 

              </p>
            </div>
            <div>
              <p className=" text-2xl font-mono">HAProxy Conf 2022 | Paris, France | Nov 2022.</p>
              <p>
                {" "}
                 {/* <br/> */}
                Received an invitation to Paris and presented the topic, Ansible for configuring HAProxy with dynamic inventory over bare metal and AWS by setting up dynamic inventories in Ansible
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;