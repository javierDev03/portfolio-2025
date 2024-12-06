import React from "react";

export default function experience() {
  return (
    <div className="flex flex-col gap-5 ">
      <p className="text-left">
        Actualmente tengo un poco más de dos año de experiencia en el sector de
        la programación, y este es mi currículum.
      </p>
      <hr className="#A3A3A3" />
      <div className="flex flex-col gap-10 ">
        <div className="flex flex-col gap-5 text-left">
          <div className="flex flex-col">
            <h3 className="geist-bold text-xl">SoftMotrix</h3>
            <p className="#A3A3A3 text-md]">
              Desarrollador FrontEnd, 2022-2023
            </p>
          </div>

          <ul className="flex flex-col gap-2 list-disc p-5">
            <li>
              Diseñé y desarrollé landing pages personalizadas para diversos
              negocios, mejorando su presencia digital y captación de clientes
              mediante interfaces atractivas, funcionales y adaptadas a sus
              necesidades.
            </li>
            <li>
              Utilicé tecnologías modernas como HTML, CSS, JavaScript y
              frameworks como React y Tailwind Css para crear experiencias de
              usuario impactantes.
            </li>
          </ul>
          <p>
            En SoftMotrix, me especialicé en el maquetado web y diseño
            responsivo, creando landing pages personalizadas. Esto permitió
            mejorar la presencia digital de los negocios y optimizar la
            captación de clientes, mientras perfeccionaba mis habilidades en
            desarrollo de interfaces atractivas, funcionales y adaptadas a
            diferentes dispositivos.
          </p>
        </div>
        <hr className="#A3A3A3" />
        <div className="flex flex-col gap-3 text-left">
          <div className="flex flex-col">
            <h3 className="geist-bold text-xl">FreeLancer</h3>
            <p className="#A3A3A3 text-md]">
              Desarrollador FullStack, Marzo 2023 – Actualidad
            </p>
          </div>
          <p>
            Comencé mi carrera como desarrollador frontend, lo que me dio una
            sólida base en la creación de interfaces atractivas. Posteriormente,
            expandí mis habilidades al backend. Esta transición me permitió
            desarrollar soluciones completas, optimizando procesos y mejorando
            la eficiencia operativa en diversos proyectos.
          </p>
          <ul className="flex flex-col gap-2 list-disc p-5">
            <li>
              Implementé un sistema de agricultura de precisión utilizando
              Kinect para escaneo, resolviendo problemas de medición manual
              mediante la automatización de la recolección de datos en Java y su
              posterior envío en formato JSON a un ESP32. Esto permitió
              optimizar el análisis en Excel y mejorar la eficiencia operativa.
            </li>
            <li>
              Desarrollé un sistema de gestión para veterinarias, mejorando la
              organización administrativa al integrar módulos para clientes,
              mascotas, y servicios, y facilitando la administración de
              información.
            </li>
            <li>
              Realicé proyectos IoT, implementando soluciones basadas en
              tecnologías web y plataformas como ESP32 para monitoreo y control
              de dispositivos.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
