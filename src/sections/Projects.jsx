import { useState } from "react";
import ecom from "../assets/ecom.png";
import ecomapi from "../assets/ecomapi.png";
import cv from "../assets/cv.png";
import portfo from "../assets/cvvv.png";
import RevealOnScroll from "../Ui/RevealOnScroll";

function Projects() {
  const [nestjs] = useState([
    {
      image: cv,
      name: "Gestion Cv",
      brief:
        "Gestion de cv, CRUD complet authentification, authorisation gestion des roles, guards",
    },
  ]);

  const [portfolio] = useState([
    {
      image: portfo,
      name: "Portfolio",
      brief:
        "Portfolio React Js, Aws codepipeline",
    },
  ]);

  const [postgres] = useState([
    {
      image: ecomapi,
      name: "E-commerce Api",
      brief: "Ecommerce api nestjs",
    },
  ]);

  const [projects] = useState([
    {
      image: ecom,
      name: "E-commerce App",
      brief: "Développement d'un site ecommerce",
    },
  ]);
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center font-mono justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center ">
            Projets
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolio.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl flex flex-col items-center text-center border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all hover:bg-cyan-900 "
              >
                <h3 className="font-semibold text-xl mb-4">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.brief} </p>
                <div className="flex flex-wrap sm:items-center gap-2 mb-4">
                  {["ReactJs", "Aws codepipeline", "Aws codedeploy", "Aws s3"].map(
                    (tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition "
                      >
                        {tech}
                      </span>
                    )
                  )}
                  <div className="flex flex-col text-center my-5 py-3 justify-center gap-3 border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)]  cursor-pointer rounded-xl ">
                    <p className="text-gray-200">View Project</p>
                    <a
                      href="https://github.com/camou92/personal_portfolio_aws_cicd.git"
                      target="blank"
                      className="flex justify-between items-center font-bold text-blue-400 transition-colors hover:text-white"
                    >
                      {" "}
                      <img src={project.image} alt={`${project.name}Image `} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          {nestjs.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl flex flex-col items-center text-center border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all hover:bg-cyan-900 "
              >
                <h3 className="font-semibold text-xl mb-4">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.brief} </p>
                <div className="flex flex-wrap sm:items-center gap-2 mb-4">
                  {["NestJs", "TypeOrm", "Mysql", "Docker"].map(
                    (tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition "
                      >
                        {tech}
                      </span>
                    )
                  )}
                  <div className="flex flex-col text-center my-5 py-3 justify-center gap-3 border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)]  cursor-pointer rounded-xl ">
                    <p className="text-gray-200">View Project</p>
                    <a
                      href="https://github.com/camou92/gestion_cv_nestjs.git"
                      target="blank"
                      className="flex justify-between items-center font-bold text-blue-400 transition-colors hover:text-white"
                    >
                      {" "}
                      <img src={project.image} alt={`${project.name}Image `} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
            {nestjs.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl flex flex-col items-center text-center border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all hover:bg-cyan-900 "
              >
                <h3 className="font-semibold text-xl mb-4">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.brief} </p>
                <div className="flex flex-wrap sm:items-center gap-2 mb-4">
                  {["NestJs", "TypeOrm", "Mysql", "Docker"].map(
                    (tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition "
                      >
                        {tech}
                      </span>
                    )
                  )}
                  <div className="flex flex-col text-center my-5 py-3 justify-center gap-3 border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)]  cursor-pointer rounded-xl ">
                    <p className="text-gray-200">View Project</p>
                    <a
                      href="https://github.com/camou92/gestion_cv_nestjs.git"
                      target="blank"
                      className="flex justify-between items-center font-bold text-blue-400 transition-colors hover:text-white"
                    >
                      {" "}
                      <img src={project.image} alt={`${project.name}Image `} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
            {postgres.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl flex flex-col items-center text-center border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all hover:bg-cyan-900 "
              >
                <h3 className="font-semibold text-xl mb-4">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.brief} </p>
                <div className="flex flex-wrap sm:items-center gap-2 mb-4">
                  {["NestJs", "TypeOrm", "Postgresql", "Docker"].map(
                    (tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition "
                      >
                        {tech}
                      </span>
                    )
                  )}
                  <div className="flex flex-col text-center my-5 py-3 justify-center gap-3 border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)]  cursor-pointer rounded-xl ">
                    <p className="text-gray-200">View Project</p>
                    <a
                      href="https://github.com/camou92/ecommerce_api_nestjs.git"
                      target="blank"
                      className="flex justify-between items-center font-bold text-blue-400 transition-colors hover:text-white"
                    >
                      {" "}
                      <img src={project.image} alt={`${project.name}Image `} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl flex flex-col items-center text-center border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all hover:bg-cyan-900 "
              >
                <h3 className="font-semibold text-xl mb-4">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.brief} </p>
                <div className="flex flex-wrap sm:items-center gap-2 mb-4">
                  {["Wordpress"].map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition "
                    >
                      {tech}
                    </span>
                  ))}
                  <div className="flex flex-col text-center my-5 py-3 justify-center gap-3 border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)]  cursor-pointer rounded-xl ">
                    <p className="text-gray-200">View Project</p>
                    <a
                      href="https://mkfashionworld.com/"
                      target="blank"
                      className="flex justify-between items-center font-bold text-blue-400 transition-colors hover:text-white"
                    >
                      {" "}
                      <img src={project.image} alt={`${project.name}Image `} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Projects;
