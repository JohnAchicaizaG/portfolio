import { IoCodeSlashSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Actualizar el título de la página dinámicamente
  useEffect(() => {
    document.title = t("title_page"); // Cambia el título dinámicamente
  }, [i18n.language]); // Se ejecuta cuando cambia el idioma

  // Cargar el idioma desde localStorage solo si cambia el valor
  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "en";
    if (savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n.language]);

  // Cambiar idioma y guardarlo en localStorage
  const changeLanguage = (lng) => {
    if (lng !== i18n.language) {
      localStorage.setItem("language", lng);
      i18n.changeLanguage(lng);
    }
  };

  return (
    <header 
      className="fixed top-0 w-full z-50 bg-white/30 bg-opacity-50 backdrop-blur-lg"
      lang={i18n.language} // Soporte multilingüe dinámico
    >
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo con enlace a la página de inicio */}
        <a
          href="/"
          className="text-gray-900 font-bold text-3xl transition-transform transform hover:scale-105"
          aria-label="Ir a la página de inicio"
        >
          <IoCodeSlashSharp />
        </a>

        {/* Menú de navegación para pantallas grandes */}
        <nav className="hidden lg:flex space-x-6" aria-label="Navegación principal" role="navigation">
          <a
            href="#projects"
            className="text-gray-900 hover:text-blue-800 focus-visible:ring-2 focus-visible:ring-blue-500 transition-transform transform hover:scale-105"
            aria-label="Ir a la sección de proyectos"
          >
            {t("projects_")}
          </a>
          <a
            href="#about"
            className="text-gray-900 hover:text-blue-800 focus-visible:ring-2 focus-visible:ring-blue-500 transition-transform transform hover:scale-105"
            aria-label="Ir a la sección sobre mí"
          >
            {t("about")}
          </a>
          <a
            href="#tests"
            className="text-gray-900 hover:text-blue-800 focus-visible:ring-2 focus-visible:ring-blue-500 transition-transform transform hover:scale-105"
            aria-label="Ir a la sección pruebas técnicas"
          >
            {t("tests")}
          </a>
        </nav>

        {/* Selector de idioma accesible */}
        <select
          className="border border-black dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-1 rounded-lg cursor-pointer focus:ring-2 focus:ring-blue-500"
          value={i18n.language}
          onChange={(e) => changeLanguage(e.target.value)}
          aria-label="Seleccionar idioma"
        >
          <option value="es-ES">🇪🇨 ES</option>
          <option value="en-US">🇺🇸 EN</option>
        </select>

        {/* Botón de menú móvil accesible */}
        <button
          className="lg:hidden text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Abrir menú de navegación"
          aria-haspopup="true"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Menú desplegable para dispositivos móviles */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-white/30 w-full shadow-md absolute top-full left-0" aria-label="Menú móvil">
          <a
            href="#projects"
            className="block py-2 px-4 text-gray-900 hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Ir a la sección de proyectos"
            onClick={() => setIsMobileMenuOpen(false)} // Cierra el menú al hacer clic
          >
            {t("projects_")}
          </a>
          <a
            href="#about"
            className="block py-2 px-4 text-gray-900 hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Ir a la sección sobre mí"
            onClick={() => setIsMobileMenuOpen(false)} // Cierra el menú al hacer clic
          >
            {t("about")}
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;