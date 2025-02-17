// src/components/TechCarousel.jsx
import Slider from "react-slick";


const technologies = [
  { name: "React", iconSrc: "/assets/react-min.svg", alt: "Logotipo de React" },
  { name: "Angular", iconSrc: "/assets/angular-min.svg", alt: "Logotipo de Angular" },
  { name: "Vue.js", iconSrc: "/assets/vue-min.svg", alt: "Logotipo de Vue.js" },
  { name: "NestJS", iconSrc: "/assets/nest-min.svg", alt: "Logotipo de NestJS" },
  { name: "Java", iconSrc: "/assets//springboot-min.svg", alt: "Logotipo de Spring Boot" },
  { name: ".NET", iconSrc: "/assets/net-min.svg", alt: "Logotipo de .NET" },
  { name: "PostgreSQL", iconSrc: "/assets/postgresql-min.svg", alt: "Logotipo de PostgreSQL" },
  { name: "SQL", iconSrc: "/assets/sql-server-min.svg", alt: "Logotipo de SQL Server" },
  { name: "Node.js", iconSrc: "/assets/nodejs-min.svg", alt: "Logotipo de Node.js" },
  { name: "Astro", iconSrc: "/assets/astro-min.svg", alt: "Logotipo de Astro" },
];

const TechCarousel = () => {
  const settings = {
    infinite: true,
    speed: 6000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <section
      id="about"
      aria-label="Carrusel de Tecnologías"
      className="relative w-full overflow-hidden bg-[#F9FAFB] dark:bg-gray-900"
      lang="es"
    >
      <Slider {...settings} className="w-full flex justify-center mt-6" aria-live="polite">
        {technologies.concat(technologies).map((tech, index) => (
          <div key={index} className="flex flex-col items-center mx-6 min-w-[110px] h-[230px] text-align bg-gray-50">
            <div className="bg-[#f2f3f4] p-4 rounded-lg shadow-lg flex flex-col items-center mr-4">
              <img
                src={tech.iconSrc}
                alt={tech.alt}
                className="w-12 h-12 text-center"
              />
              <h3 className="mt-2 text-lg text-center font-semibold text-gray-800 bg-gray-100">{tech.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TechCarousel;
