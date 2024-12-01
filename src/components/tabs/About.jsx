import React from "react";


const About = () => (
  
  <div>
    <p className="pb-2">
      Hola, soy Javi, un apasionado desarrollador web. Me considero autodidacta
      y proactivo, siempre en busca de crear soluciones eficientes. Mi enfoque
      está en aprender de manera continua y enfrentar desafíos de forma
      creativa, optimizando procesos para obtener resultados de calidad.
    </p>

    <div className="flex flex-col gap-5">
        <div className="flex w-[100%] justify-between gap-5">
          <img
            src="/public/profile.jpeg"
            alt=""
            className="w-[35%] rounde-md"
          />
          <img
            src="/public/profile.jpeg"
            alt=""
            className="w-[65%] rounded-md"
          />
        </div>
        <div className="flex w-[100%] justify-between gap-5">
          <img
            src="/public/profile.jpeg"
            alt=""
            className="w-[65%] rounded-md"
          />
          <img
            src="/public/profile.jpeg"
            alt=""
            className="w-[35%] rounde-md"
          />
        </div>
      </div>

  </div>
);

export default About;
