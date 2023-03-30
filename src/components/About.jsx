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
              Hola, mi nombre es Matías, y soy un aspirante a desarrollador front-end. Estoy muy emocionado de ingresar al mundo del desarrollo de software y aplicar mi pasión por la creación de experiencias web atractivas y de alta calidad.<br/>

He completado el bootcamp de programación en Soy Henry, donde he aprendido habilidades en el desarrollo de aplicaciones web utilizando HTML, CSS, JavaScript, y frameworks como React. También he trabajado con herramientas como Tailwind CSS y Material UI para mejorar el diseño de las interfaces de usuario.<br/>
<br/>
Aunque no tengo experiencia laboral previa en el mundo del desarrollo de software, he completado varios proyectos personales para poner en práctica mis habilidades y demostrar mi capacidad para trabajar en equipo. Estoy motivado para aprender y enfrentar nuevos desafíos que me permitan seguir desarrollando mis habilidades.<br/>
<br/>
En mi portafolio, encontrarás algunos ejemplos de proyectos en los que he trabajado y que reflejan mi enfoque en el desarrollo front-end. Si bien todavía estoy en el comienzo de mi carrera como desarrollador, estoy comprometido a trabajar arduamente para alcanzar mis metas y convertirme en un desarrollador exitoso y altamente calificado.<br/>
<br/>
Si está buscando un aspirante a desarrollador con una pasión por el desarrollo de software y la creación de experiencias web, no dude en ponerse en contacto conmigo. Estoy dispuesto a aprender y comprometido a hacer una contribución positiva a cualquier equipo de desarrollo en el que me involucre.<br/>
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
              <a href="./src/assets/Curriculum Programacion actualizado.pdf" download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 -top-28 max-w-sm aboutImg ">
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
