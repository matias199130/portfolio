import React from "react";
import { TypeAnimation } from "react-type-animation";
import hero from "../assets/images/hero.png";
function Hero() {
  const social_media = ["logo-instagram", "logo-facebook", "logo-linkedin"];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col item-center"
    >
      <div className="flex-1 flex items-center justify-center ">
        <img
          src={hero}
          alt=""
          className="md:w-11/12 object-cover h-full scale-75"
        />
      </div>
      <div className="flex-1 justify-center items-center py-60">
        <div className="md:text-left text-center items-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hola!
              <br />
            </span>
            Aqui quien les habla es <span  className="text-cyan-600" >Matias Romero</span>
          </h1>
          <TypeAnimation
            sequence={[
              "Desarrollador Front-End",
              1000,
              "Desarrollador Back-End",
              1000,
              "Desarrollador Full-Stack",
              2000,
            ]}
            //  Continuing previous Text
            className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600"
            wrapper="div"
            repeat={Infinity}
          />
          <button className="btn-primary mt-5">Contactame!</button>
          <div className="mt-8 text-3xl flex item-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
