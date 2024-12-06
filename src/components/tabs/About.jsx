import React from "react";


const About = () => (
  
  <div>
    <p className="pb-2">
      Hola, soy Javi, un apasionado desarrollador web. Me considero autodidacta
      y proactivo, siempre en busca de crear soluciones eficientes. Mi enfoque
      está en aprender de manera continua y enfrentar desafíos de forma
      creativa, optimizando procesos para obtener resultados de calidad.
    </p>

    <div className="flex flex-col gap-5 max-w-2xl mx-auto">
  <div className="flex w-full justify-between gap-5">
    <div className="w-[35%] rounded-md overflow-hidden">
      <img
        src="/profile.jpeg"
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
    <div className="w-[65%] rounded-md overflow-hidden">
      <img
        src="/profile.jpeg"
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
  </div>
  <div className="flex w-full justify-between gap-5">
    <div className="w-[65%] rounded-md overflow-hidden">
      <img
        src="/profile.jpeg"
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
    <div className="w-[35%] rounded-md overflow-hidden">
      <img
        src="/profile.jpeg"
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>



  </div>
);

export default About;
