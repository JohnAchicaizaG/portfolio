import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  

  // Lista de redes sociales con sus respectivos enlaces e íconos
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/JohnAchicaizaG", icon: <FaGithub />, label: "Visitar mi GitHub" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/jachicaizag92", icon: <FaLinkedin />, label: "Ver mi perfil en LinkedIn" },
    { name: "Email", url: "mailto:jachicaiza@outlook.com", icon: <FaEnvelope />, label: "Enviarme un correo electrónico" }
  ];

  return (
    <footer 
      className="bg-black py-6 px-9"
      role="contentinfo" 
      lang={i18n.language} 
      aria-labelledby="footer-title"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-gray-300">
        
        {/* Texto de derechos reservados */}
        <p id="footer-title" className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} {t('footer')}
        </p>

        {/* Navegación de redes sociales */}
        <nav aria-label="Redes sociales" className="mt-4 md:mt-0">
          <ul className="flex space-x-6">
            {socialLinks.map(({ name, url, icon, label }) => (
              <li key={name}>
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all 
                    focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-white p-2 rounded-lg"
                  aria-label={label}
                >
                  {/* Ícono con ocultación para lectores de pantalla */}
                  <span aria-hidden="true" className="text-xl">{icon}</span>
                  <span className="sr-only">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </footer>
  );
};

export default Footer;