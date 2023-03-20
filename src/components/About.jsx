import React from "react";
import aboutImg from "../assets/images/about.png";
const About = () => {
  const info = [
    { text: "Años de experiencia", count: "01" },
    { text: "Proyectos completados", count: "03" },
  ];

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
         Conociendo <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">Pequeña reseña</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Desde el año 2022 empece a dar parte de mi vida a la
                programacion, ya que tenia trabajos comunes de produccion en
                empresas sin mucho futuro desde el 2018 que quede sin empleo me
                dedique a emplearme por mi cuenta interiorizandome en diferentes
                tipos de cosas pintura vehicular, hidrografia, reparacion de
                celulares, reparacion de electrodomesticos y actualmente dedico
                parte de mi tiempo a viajes particulares. Cuando me intereso la
                programacion me puse a ver videos por mi cuenta, pero encontre
                entre muchas propagandas un bootcamp que me ayudo a encaminar el
                conocimiento que tengo actualmente, y desde ese momento no pare
                de aprender y capacitarme, me gustaria poder ingresar a una
                empresa que me permita aportar mi conocimiento como tambien
                aprender mas, que para eso estoy ahora. Me gutaria crecer y
                hacer crecer a una empresa.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                    </h3>
                      <span className="text-cyan-600">+</span>{" "}
                      <span className="md:text-base text-xs">
                        {content.text}
                      </span>
                  </div>
                ))}
                    <h3 className="font-semibold text-white md:text-base text-xs">
                      A la espera de mi primer trabajo IT
                    </h3>
              </div>
              <br />
              <br />
              <a href="./src/assets/Code_a_program.pdf" download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt="about"
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
