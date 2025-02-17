import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { FaFileDownload } from "react-icons/fa";

const AboutMe = () => {
  const { t, i18n } = useTranslation();
  const [resumeFile, setResumeFile] = useState("/resume-en.pdf");

  // Actualiza el archivo del currículum cuando cambia el idioma
  useEffect(() => {
    const savedLang = localStorage.getItem("language") || i18n.language;
    setResumeFile(savedLang.startsWith("es") ? "/resume-es.pdf" : "/resume-en.pdf");
  }, [i18n.language]);

  return (
    <section 
      className="py-16 bg-[#F9FAFB] dark:bg-gray-900 border-gray-300 dark:border-gray-700"
      lang={i18n.language}
      aria-labelledby="about-title"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 pb-24">
        <motion.h2 
          id="about-title" 
          className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("about")}
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          <motion.div
            className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-lg border-4 border-gray-300 dark:border-gray-700"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img 
              src="../../public/assets/profile-avatar.jpeg" 
              alt={t("profile_picture_alt")} 
              className="w-full h-full object-cover"
              loading="lazy" 
              role="img" 
            />
          </motion.div>

          <motion.div
            className="max-w-2xl text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-lg text-gray-900 dark:text-gray-300">
              {t("about_me")}
            </p>
            <p className="text-lg mt-4 text-gray-800 dark:text-gray-300">
              {t("about_me_part2")}
            </p>
            
            <motion.a
              href={resumeFile}
              download
              className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1A2B47] hover:bg-[#13203A] text-white font-semibold rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <FaFileDownload className="text-lg" /> {t("download_resume")}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
