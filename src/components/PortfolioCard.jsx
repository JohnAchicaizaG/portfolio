import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaTools, FaCode, FaProjectDiagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const PortfolioCard = ({ images, title, technologies, contributions, projectLink, nameButton }) => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  return (
    <div 
      className="bg-[#2B4368]  text-white flex flex-col lg:flex-row w-[80vw] pt-6 max-h-[100vh] h-auto mx-auto rounded-lg md:p-8 overflow-hidden"
      lang="es"
    >
      {/* Carrusel de Imágenes */}
      <div className="lg:w-1/2 w-full flex items-center justify-center">
        <div className="w-full">
          <Slider {...settings} className="w-full aspect-video" aria-live="polite">
            {images.map((img, index) => (
              <div key={index} className="w-full h-full flex items-center justify-center p-4">
                <img 
                  src={img} 
                  alt={`${title} - Imagen ${index + 1}`} 
                  className="rounded-lg w-full h-auto object-contain shadow-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      
      {/* Sección de Contenido con Scroll Interno */}
      <div className="lg:w-1/2 w-full flex flex-col mt-12 h-auto ">
        
        {/* Título Fijo */}
        <div className="pt-6 px-6 sm:p-2 flex-shrink-0">
          <h2 className="text-1xl sm:text-3xl font-bold">{title}</h2>
        </div>

        {/* Contenedor Scrollable */}
        <div className="px-6 flex-grow overflow-y-auto h-[30vh] sm:max-h-[30vh]  md:max-h-[38vh] lg:h-[80vh] xl:h-[80vh] bg-[#263e62] shadow-lg">
          {/* Tecnologías utilizadas */}
          <div>
            <h3 className="text-xs sm:text-xl font-semibold mb-3 flex items-center gap-2 mt-6">
              <FaTools /> {t("projects.modal_technologies")}
            </h3>
            <p className="text-gray-400 text-xs sm:text-lg">{technologies.join(", ")}</p>
          </div>

          {/* Responsabilidades */}
          <div className="py-4 ">
            <h3 className="text-xs sm:text-xl font-semibold mb-3 flex items-center gap-2 mt-4">
              <FaCode /> {t("projects.modal_contributions")}
            </h3>
            <ul className="text-gray-400 text-xs sm:text-lg space-y-2 list-disc list-inside">
              {contributions.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Botón Fijo */}
        <div className=" bg-[#2B4368] flex-shrink-0 justify-center flex w-full p-6">
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center mr-2 ml-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 shadow-md text-sm sm:text-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={`Abrir el proyecto ${title} en una nueva pestaña`}
          >
            <FaProjectDiagram className="mb-3 mr-2" /> {nameButton}
          </a>
        </div>

      </div>
    </div>
  );
};

export default PortfolioCard;