import React from "react";

const Experience = () => {
  const exp = [
    {
      name: "ResolveQ (Holkoi LLC), USA, Remote",
      role: "Software Developer",
      date: "Jul23 – Dec23",
      desc: ["Spearheaded the research and implementation of a cost-effective and secure SSL certificate, achieving an 85% reduction in expenses.","Optimized Java codebase by identifying and rectifying critical errors, enhancing overall efficiency.","Upgraded a legacy Gradle project from version 5 to a newer version to resolve build errors and address deprecated functionalities, enhancing the build efficiency and project maintainability."]
    },
    {
      name: "Pepper Content, India, Remote",
      role: "Senior DevOps Writer",
      date: "Jun22 – Jul22",
      desc: ["Conducted in-depth research and authored the article comparing features, pros and cons, use cases, cost benefits, scalability, observability, and cardinality of InfluxDB and Thanos, with a focus on time-series data management."],
    },
    {
      name: "OmniTiim, USA, Remote",
      role: "DevOps Consultant",
      date: "Jul22 – Sep22",
      desc: ["Developed and implemented the backend for an online video streaming service using Amazon Web Services, resulting in improved performance and user experience.","Deployed containers on Google Cloud Platform using the Cloud Run service, resulting in cost savings and increased serverless efficiency.","Constructed Terraform module to setup Ansible Tower in the Amazon Web Services cloud platform."],
    },
    {
      name: "Kickback Space, USA, Remote",
      role: "Software Engineer Intern",
      date: "Feb22 – Jun22 ",
      desc: ["Collaborated on the platform API and generated scripts for authentication module, communication activities such as email, notifiers, user profile and invitation modules in Ruby.","Refactored error classes into modules to improve codebase organization & readability.","Primed legacy code and improved naming conventions for error class names, keys and messages."],
    },
  ];
  return (
    <div name="exp" className="h-auto w-full bg-[#0a192f]">
      <section className="bg-[#0a192f] text-gray-300 px-5 py-32" >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
      <div className=' w-full flex justify-center items-center mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Professional Experience</p>
       </div>
      </div>
        <div className="">
          {exp.map((item) => {
            return (
            //   w-full max-w-6xl mx-auto px-4 md:px-6 py-24
                <div class="flex justify-center divide-y divide-slate-200 [&>*]:py-6">
                  <div class="w-full max-w-3xl mx-auto">
                    <div class="-my-6">
                      {/* Company name */}
                      <div class="relative pl-8 sm:pl-32 py-6 ">
                        {/* Job title */}
                        <div class="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
                          {item.name}
                        </div>
                        {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                        <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                          <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-24 h-9 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                            {item.date}
                          </time>
                          <div class="text-xl font-bold text-slate-400">
                            {item.role}
                          </div>
                        </div>
                        {/* <!-- Content --> */}
                        <div class="text-slate-500">
                          {item.desc.map((expr,i)=>(
                              <li key={i}>{expr}</li>
                          ))}</div>
                      </div>
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
export default Experience;
