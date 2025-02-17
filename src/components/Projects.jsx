import { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import PortfolioCard from "./PortfolioCard";
import { useTranslation } from "react-i18next";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";


const Projects = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);

  // 🔹 Bloquea el scroll del fondo cuando el modal está abierto para evitar desplazamientos no deseados
  useEffect(() => {
    if (selectedProject) {
      document.documentElement.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll");
    }
  }, [selectedProject]);


  const getStackIcon = (stack) => {
    switch (stack) {
      case "React":
        return <FaReact className=" text-2xl lg:text-3xl" />;
      case "Vue":
        return <FaVuejs className=" text-2xl lg:text-3xl" />;
      case "Angular":
        return <FaAngular className="text-2xl lg:text-3xl" />;
      default:
        return null;
    }
  };


  //  Lista de proyectos, obtenidos desde el archivo de traducción
  const projects = [
    {
      id: 1,
      title: t("projects.inventory.title"),
      description: t("projects.inventory.description"),
      cover: t("projects.inventory.cover"),
      technologies: t("projects.inventory.technologies", { returnObjects: true }),
      contributions: t("projects.inventory.contributions", { returnObjects: true }),
      images: t("projects.inventory.images", { returnObjects: true }),
      projectLink: t("projects.inventory.projectLink"),
      nameButton: t("projects.inventory.nameButton"),
      stack: "React"
    },
    {
      id: 2,
      title: t("projects.sirenagest.title"),
      description: t("projects.sirenagest.description"),
      cover: t("projects.sirenagest.cover"),
      technologies: t("projects.sirenagest.technologies", { returnObjects: true }),
      contributions: t("projects.sirenagest.contributions", { returnObjects: true }),
      images: t("projects.sirenagest.images", { returnObjects: true }),
      projectLink: t("projects.sirenagest.projectLink"),
      nameButton: t("projects.sirenagest.nameButton"),
      stack: "Vue"
    },
    {
      id: 3,
      title: t("projects.shareholders.title"),
      description: t("projects.shareholders.description"),
      cover: t("projects.shareholders.cover"),
      technologies: t("projects.shareholders.technologies", { returnObjects: true }),
      contributions: t("projects.shareholders.contributions", { returnObjects: true }),
      images: t("projects.shareholders.images", { returnObjects: true }),
      projectLink: t("projects.shareholders.projectLink"),
      nameButton: t("projects.shareholders.nameButton"),
      stack: "Angular"
    }
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-[#16263D] text-white"
      lang="es"
      aria-labelledby="projects-title"
    >
      {/*  Contenedor Principal */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24">

        {/*  Título de la sección con etiqueta semántica para SEO */}
        <h2 id="projects-title" className="text-2xl lg:text-5xl font-bold text-center mb-10">
          {t("projects.title")}
        </h2>

        {/*  Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg shadow-lg p-6 relative group transition-transform transform hover:scale-105"
              tabIndex="0" // Accesibilidad: permite navegación con teclado
              role="article" // SEO: define cada proyecto como un artículo individual
              aria-labelledby={`project-title-${project.id}`}
              aria-describedby={`project-desc-${project.id}`}
            >
              {/* 🖼 Contenedor de Imagen con Efecto */}
              <div className="relative w-full h-40 lg:h-56 mt-10 rounded-md overflow-hidden ">
                <img
                  src={project.cover}
                  alt={project.title} // Accesibilidad: descripción de la imagen
                  className="w-full h-full object-cover hover:grayscale-0 transition-all duration-500 m"
                  loading="lazy" // SEO: Mejora el rendimiento y reduce carga innecesaria
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-all duration-500"></div>
              </div>

              {/*  Título del Proyecto con ID para mejor accesibilidad */}
              <h3 id={`project-title-${project.id}`} className="text-xl lg:text-2xl font-semibold mt-4">
                {project.title}
              </h3>

              {/*  Descripción del Proyecto con ID para accesibilidad */}
              <p id={`project-desc-${project.id}`} className="text-gray-300 mt-2 text-base lg:text-lg">
                {project.description}
              </p>

              {/*  Botón para abrir el modal con detalles */}
              <button
                onClick={() => setSelectedProject(project)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
                aria-label={`Abrir información de ${project.title}`}
              >
                <FaExternalLinkAlt className="text-xl lg:text-2xl hover:cursor-pointer" />
              </button>
              <button
                className="absolute top-4  text-gray-400 hover:text-white transition"
                aria-label={`stack de ${project.title}`}
              >

                {getStackIcon(project.stack)}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Proyecto - Aparece cuando se selecciona un proyecto */}
      {selectedProject && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-md p-4"
          role="dialog"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div
            className="relative md:w-[90vw] lg:w-[90vw] xl:w-[80vw] max-h-[90vh] bg-[#2B4368] rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            {/*  Botón de Cierre del Modal */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute  z-10 top-3 right-4 text-white hover:text-gray-300 transition duration-200 text-2xl lg:text-3xl"
              aria-label="Cerrar modal"
            >
              <FaTimes />
            </button>
            {/*  Modal */}
            <div className=" ">
              <PortfolioCard {...selectedProject} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;