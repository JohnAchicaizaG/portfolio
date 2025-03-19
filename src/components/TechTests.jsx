import React from "react";
import { useTranslation } from "react-i18next";
import { FaExternalLinkAlt, FaGithub, FaYoutube } from "react-icons/fa";

const TechTests = () => {
  const { t } = useTranslation();

  const tests = [
    {
      id: "task_manager",
      title: t("tech_tests.tests.task_manager.title"),
      description: t("tech_tests.tests.task_manager.description"),
      cover: t("tech_tests.tests.task_manager.cover"),
      technologies: t("tech_tests.tests.task_manager.technologies", { returnObjects: true }),
      video: t("tech_tests.tests.task_manager.video"),
      repo: t("tech_tests.tests.task_manager.repo"),
      repoback: t("tech_tests.tests.task_manager.repoback", ""),
      demo: t("tech_tests.tests.task_manager.demo"),
      nameButton: t("tech_tests.tests.task_manager.nameButton"),
      nameButtonGTF: t("tech_tests.tests.task_manager.nameButtonGTF", ""),
      nameButtonGTB: t("tech_tests.tests.task_manager.nameButtonGTB", ""),
      nameButtonYT: t("tech_tests.tests.task_manager.nameButtonYT")
    },
    {
      id: "booking_system",
      title: t("tech_tests.tests.booking_system.title"),
      description: t("tech_tests.tests.booking_system.description"),
      cover: t("tech_tests.tests.booking_system.cover"),
      technologies: t("tech_tests.tests.booking_system.technologies", { returnObjects: true }),
      video: t("tech_tests.tests.booking_system.video"),
      repo: t("tech_tests.tests.booking_system.repo"),
      demo: t("tech_tests.tests.booking_system.demo"),
      nameButton: t("tech_tests.tests.booking_system.nameButton"),
      nameButtonGTF: t("tech_tests.tests.booking_system.nameButtonGTF", ""),
      nameButtonGTB: t("tech_tests.tests.booking_system.nameButtonGTB", ""),
      nameButtonYT: t("tech_tests.tests.booking_system.nameButtonYT")
    }
  ];

  return (
    <section id="tests" className="py-16 bg-gray-900 text-white" aria-labelledby="tech-tests-title">
      <div className="container mx-auto px-4 md:px-10 lg:px-20 text-center">
        <h2 id="tech-tests-title" className="text-2xl lg:text-5xl font-bold mb-8">{t("tech_tests.title")}</h2>
        <p className="mb-12 text-gray-400">{t("tech_tests.description")}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tests.map((test) => (
            <div key={test.id} className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <img 
                src={test.cover} 
                alt={test.title} 
                className="rounded-md mb-4 w-full object-cover h-48 md:h-64 transition-opacity duration-300 hover:opacity-80" 
              />
              <h3 className="text-lg md:text-xl font-semibold mb-4">{test.title}</h3>
              <p className="text-gray-300 mb-4 text-left text-sm md:text-base">{test.description}</p>

              {/* Lista de tecnologías en formato responsive con animación */}
              <div className="flex flex-wrap justify-center gap-2 mb-4 text-xs md:text-sm">
                {test.technologies.map((tech, index) => (
                  <span key={index} className="bg-gray-700 text-gray-200 px-2 py-1 rounded-md transition-transform duration-300 hover:scale-110">{tech}</span>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-3 w-full text-center py-4">
                <a href={test.demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:underline text-xs md:text-sm cursor-pointer">
                  <FaExternalLinkAlt className="mr-2 text-amber-50" /> {test.nameButton}
                </a>
                {test.repo && test.nameButtonGTF && (
                  <a href={test.repo} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:underline text-xs md:text-sm cursor-pointer">
                    <FaGithub className="mr-2 text-amber-50" /> {test.nameButtonGTF}
                  </a>
                )}
                {test.repoback && test.nameButtonGTB && (
                  <a href={test.repoback} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:underline text-xs md:text-sm cursor-pointer">
                    <FaGithub className="mr-2 text-amber-50" /> {test.nameButtonGTB}
                  </a>
                )}
                {test.video && (
                  <a href={test.video} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:underline text-xs md:text-sm cursor-pointer">
                    <FaYoutube className="mr-2 text-amber-50" /> {test.nameButtonYT}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechTests;