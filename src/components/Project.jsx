import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Navigation } from "swiper";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import "swiper/css";
import "swiper/css/navigation";


function Project() {
  const projects = [
    {
      img: project1,
      name: "Tecno-Lern",
      github_link:
        "https://github.com/No-Country/TechnoLearn-C9-27-T-JavaReact",
      live_link: "https://www.youtube.com/watch?v=4RHPMM4r72E",
    },
    {
      img: project2,
      name: "Henry Flow",
      github_link:
        "https://github.com/matias199130/Overflow-Frontend?organization=matias199130&organization=matias199130",
      live_link: "https://www.youtube.com/watch?v=MKNEWVxGDAM",
    },
    {
      img: project3,
      name: "PI Dogs",
      github_link: "https://github.com/matias199130/PI-dogs",
      live_link: "https://www.youtube.com/watch?v=s04lSfk_Jaw",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
        Mis <span className="text-cyan-600">Proyectos</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Trabajos en los que participe!</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto justify-center items-center relative">
        <div className="lg:w-2/3 w-full m-10">
          <Swiper
            effect={"cards"}
            slidesPerview={1.2}
            spaceBetween={10}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            navigation={true}
            modules={[EffectCards, Autoplay, Navigation]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl ">
                  <img
                    src={project_info.img}
                    alt="imagen"
                    className="rounded-lg w-96 h-48"
                  />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          {/*   <img src={project_person} alt="" /> */}
        </div>
      </div>
    </section>
  );
}

export default Project;
