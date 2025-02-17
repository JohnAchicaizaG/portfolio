import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { Stars, shaderMaterial } from "@react-three/drei";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TypeWriterEffect from "react-typewriter-effect";
import * as THREE from "three";
import { useTranslation } from "react-i18next";

// Shader personalizado para efecto de energía 🔥💙
const EnergyShaderMaterial = shaderMaterial(
  { time: 2, color: new THREE.Color(0x66CCFF) },
  /* Vertex Shader */
  `
  varying vec2 vUv;
  uniform float time;
  
  void main() {
    vUv = uv;
    vec3 pos = position;
    pos.x += sin(time + pos.y * 3.0) * 0.05;
    pos.y += cos(time + pos.x * 3.0) * 0.05;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
  `,
  /* Fragment Shader */
  `
  varying vec2 vUv;
  uniform float time;
  uniform vec3 color;

  void main() {
    float glow = sin(time * 3.0 + vUv.y * 5.0) * 0.5 + 0.5;
    vec3 finalColor = mix(color, vec3(0.0, 0.78, 0.58), glow);
    gl_FragColor = vec4(finalColor, 1.0);
  }
  `
);
extend({ EnergyShaderMaterial });

const InteractiveBackground = () => {
  const meshRef = useRef();
  const materialRef = useRef();
  const scale = window.innerWidth < 768 ? [1.5, 1.9, 1.6] : [2.6, 2.2, 1.6];

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = clock.getElapsedTime() % 100;
    }
  });

  return (
    <mesh ref={meshRef} scale={scale}>
      <sphereGeometry args={[1, 64, 35]} />
      <energyShaderMaterial ref={materialRef} attach="material" />
    </mesh>
  );
};

const Hero = () => {
  const { t, i18n } = useTranslation();
  const [phrases, setPhrases] = useState([]);

  // 🔥 Actualiza las frases cuando cambia el idioma
  useEffect(() => {
    setPhrases(t("phrases_hero_section", { returnObjects: true }));
  }, [i18n.language, t]); // ✅ Se ejecuta cada vez que cambia el idioma

  return (
    <section
      className="relative w-full h-screen bg-[#17263D] text-white"
      role="banner"
      lang={i18n.language}
      aria-labelledby="hero-title"
    >
      {/* Fondo Animado con Three.js */}
      <Canvas className="absolute inset-0 w-full h-full" aria-hidden="true">
        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={100} depth={50} count={5000} factor={3} speed={1} />
        <InteractiveBackground />
      </Canvas>

      {/* Contenido principal centrado sobre el Canvas */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        {/* Título principal con referencia de accesibilidad */}
        <h1 id="hero-title" className="text-4xl font-bold" style={{ color: "#17263D" }}>
          {t("title_hero_section")}
        </h1>

        {/* Efecto de máquina de escribir */}
        <h2 className="mt-4 text-lg flex justify-center items-center">
          <TypeWriterEffect
          key={i18n.language}
            textStyle={{
              fontFamily: "Roboto, sans-serif",
              color: "#E3F2FD",  
              fontWeight: 900,
              fontSize: "1.2em",
              textShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)",
              WebkitTextStroke: "0.4px #C0C0C0",
            }}
            startDelay={1000}
            cursorColor="#3F3D56"
            multiText={phrases} // ✅ Se actualiza dinámicamente
            multiTextDelay={1000}
            typeSpeed={10}
            multiTextLoop
          />
        </h2>

        {/* Íconos de redes sociales */}
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="https://github.com/JohnAchicaizaG"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:text-blue-500 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-white p-2 rounded-lg"
            style={{ color: "#17263D" }}
            aria-label="Perfil de GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jachicaizag92"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:text-blue-500 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-white p-2 rounded-lg"
            style={{ color: "#17263D" }}
            aria-label="Perfil de LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;