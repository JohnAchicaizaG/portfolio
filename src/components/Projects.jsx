import { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import PortfolioCard from "./PortfolioCard";
import { useTranslation } from "react-i18next";
import { FaReact, FaVuejs, FaAngular } from "react-icons/fa";
import { SiAstro } from "react-icons/si";
import Slider from "react-slick";

const Projects = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);

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
        return <FaReact className="text-3xl" />;
      case "Vue":
        return <FaVuejs className="text-3xl" />;
      case "Angular":
        return <FaAngular className="text-3xl" />;
      case "Astro":
        return <SiAstro className="text-3xl" />;
      default:
        return null;
    }
  };

  const projects = [

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
    },
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
      id: 4,
      title: t("projects.fastmeals.title"),
      description: t("projects.fastmeals.description"),
      cover: t("projects.fastmeals.cover"),
      technologies: t("projects.fastmeals.technologies", { returnObjects: true }),
      contributions: t("projects.fastmeals.contributions", { returnObjects: true }),
      images: t("projects.fastmeals.images", { returnObjects: true }),
      projectLink: t("projects.fastmeals.projectLink"),
      nameButton: t("projects.fastmeals.nameButton"),
      stack: "Astro"
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  return (
    <section id="projects" className="py-24 bg-[#16263D] text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-2xl lg:text-5xl font-bold text-center mb-10">
          {t("projects.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg shadow-lg p-6 relative group transition-transform transform hover:scale-105"
              tabIndex="0"
              role="article"
            >
              <div className="relative w-full h-40 lg:h-56 rounded-md overflow-hidden mt-7">
                <img src={project.cover} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-all duration-500"></div>
              </div>

              <h3 className="text-xl lg:text-2xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-300 mt-2 text-base lg:text-lg">{project.description}</p>

              <button
                onClick={() => setSelectedProject(project)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
              >
                <FaExternalLinkAlt className="text-xl lg:text-2xl hover:cursor-pointer" />
              </button>
              <div className="absolute top-1 left-4 mt-2">{getStackIcon(project.stack)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL MEJORADO CON CARRUSEL */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-md p-6">
          <div className="relative w-full max-w-5xl bg-[#2B4368] rounded-lg shadow-xl flex flex-col md:flex-row">
            {/* 📸 Carrusel de imágenes */}
            <div className="w-full md:w-1/2 p-9">
              <Slider {...sliderSettings}>
                {selectedProject.images.map((img, index) => (
                  <div key={index}>
                    <img src={img} alt={`${selectedProject.title} - ${index}`} className="rounded-md w-full h-auto" />
                  </div>
                ))}
              </Slider>
            </div>

            {/* 📝 Información del proyecto */}
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>

              {/* 📌 Lista de Contribuciones con Scroll */}
              <div className="mt-2 h-45 overflow-y-auto pr-2">
                <h4 className="text-lg font-semibold text-white">📌 {t("projects.modal_contributions")}</h4>
                <ul className="text-gray-300 text-sm list-disc ml-4 mt-2 space-y-2">
                  {selectedProject.contributions.map((contribution, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-400">✔</span> {contribution}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 🛠️ Tecnologías Utilizadas (Siempre visibles) */}
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-white">🚀 {t("projects.modal_technologies")}</h4>
                <ul className="text-gray-300 text-sm list-disc ml-4 mt-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>

            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 text-white hover:text-gray-300 transition duration-200 text-2xl">
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;