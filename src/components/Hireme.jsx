import React from "react";
import hireMe from "../assets/images/hireme.png";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Contrata <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">¿Tienes algún trabajo?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            ¿Quieres algún trabajo mío?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            Mas alla de mi poco conocimiento y mi constante entrenamiento y capacitacion estoy preparado para ingresar al maravilloso mundo de la programacion dentro de una empresa idonea y que quiera mis servicios como programador.
          </p>
          <button className="btn-primary mt-10">Di Hola!</button>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-28 -top-10 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;
