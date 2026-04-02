"use client";

import { useState, useEffect } from "react";

// Icon Components
const MetaIcon = () => (
<div className="w-10 h-10 rounded-[30px] bg-[#1a1a1a] flex items-center justify-center overflow-hidden border border-white/5 shadow-inner">
    <img 
      src="/mmath.svg" // Asegúrate de que el nombre coincida con el archivo en /public
      alt="Matemath" 
      className="w-17 h-17 object-contain p-21" // Ajustamos a w-7 para que el logo destaque más que el favicon
    />
  </div>
);

const ClubIcon = () => (
<div className="w-10 h-10 rounded-[30px] bg-[#1a1a1a] flex items-center justify-center overflow-hidden border border-white/5 shadow-inner">
    <img 
      src="/clubbicon.svg" // Asegúrate de que el nombre coincida con el archivo en /public
      alt="Matemath" 
      className="w-17 h-17 object-contain p-31" // Ajustamos a w-7 para que el logo destaque más que el favicon
    />
  </div>
);

const WhatsAppIcon = () => (
<div className="w-10 h-10 rounded-[30px] bg-[#1a1a1a] flex items-center justify-center overflow-hidden border border-white/5 shadow-inner">
    <img 
      src="/vet.png" // Asegúrate de que el nombre coincida con el archivo en /public
      alt="Vet" 
      className="w-17 h-17 object-contain p-21" // Ajustamos a w-7 para que el logo destaque más que el favicon
    />
  </div>
);
const InstagramIcon = () => (
<div className="w-10 h-10 rounded-[20px] bg-[#1a1a1a] flex items-center justify-center overflow-hidden border border-white/5 shadow-inner">
    <img 
      src="/awshuawei.svg" // Asegúrate de que el nombre coincida con el archivo en /public
      alt="Vet" 
      className="w-17 h-17 object-contain p-21" // Ajustamos a w-7 para que el logo destaque más que el favicon
    />
  </div>
);

interface ProjectDetail {
  id: string;
  iconType: "meta" | "club" | "whatsapp" | "instagram" | "github";
  title: string;
  year: string;
  role: string;
  description: string;
  fullDescription: string;
  impact: string;
  keywords: string;
  buttons?: { label: string; type: "primary" | "secondary"; url?: string }[];
  images?: string[];
  viewLink: string | null;
  isConfidential?: boolean;
}

const projects: ProjectDetail[] = [
  {
    id: "quick-connect",
    iconType: "meta",
    title: "Plataforma de Matemath",
    year: "",
    role: "Full-Stack Developer",
    description: "Modernización de arquitectura legacy — Migración total de WordPress a React.",
    fullDescription: "Lideré la reingeniería integral de la plataforma educativa, migrando un sistema monolítico en WordPress hacia una arquitectura desacoplada con React y Node.js. El enfoque principal fue eliminar la deuda técnica y mejorar la experiencia de aprendizaje digital.",
    impact: "Reducción del 60% en los tiempos de carga (LCP) y optimización de la escalabilidad del lado del servidor, permitiendo el soporte concurrente de miles de estudiantes sin degradación de performance.",
    keywords: "Legacy Migration · React Architecture · Performance Optimization · Web Vitals · Scalable UI.",
    buttons: [
      { label: "Ver", type: "primary", url: "https://www.matemathweb.com/" },
    ],
    images: ["/mmath2.svg", "/mmath1.svg", "/gifmmath.gif"],
    viewLink: "Más Detalles",
  },
  {
    id: "whatsapp",
    iconType: "whatsapp",
    title: "Sistema de Gestión Clínica",
    year: "",
    role: "Backend & Database Architect",
    description: "Arquitectura Full-Stack para gestión de clínicas veterinarias bajo el ecosistema .NET.",
    fullDescription: "Diseño y desarrollo de un ecosistema Full-Stack robusto bajo .NET y SQL Server para la gestión crítica de servicios veterinarios. Implementé una arquitectura de capas que asegura la integridad de los datos y la automatización de flujos médicos complejos.",
    impact: "Implementación exitosa de un sistema de persistencia con transaccionalidad garantizada, reduciendo errores en registros clínicos en un 40% y mejorando la latencia en consultas complejas de bases de datos.",
    keywords: ".NET Core · SQL Server · Entity Framework · Transactional Integrity · System Design · Backend Engineering.",
    buttons: [
      { label: "Repositorio", type: "primary", url: "https://github.com/marlonayaladev/Sistema-Vet" },
    ],
    images: ["/vet1.png", "/vet2.png", "vet3.png", "/vet4.png"],
    viewLink: "Más Detalles",
  },
  {
    id: "messaging-sharing",
    iconType: "club",
    title: "Club — Red Social Universitaria",
    year: "",
    role: "Lead designer",
    description: "Arquitectura reactiva para interacciones sociales en tiempo real.",
    fullDescription: "",
    impact: "",
    keywords: "",
    viewLink: null,
    isConfidential: true,
  },
  {
    id: "public-sharing",
    iconType: "instagram",
    title: "Cloud Infrastructure & AI Services (Huawei)",
    year: "",
    role: "Cloud Solutions Engineer (Candidate) · 2026",
    description: "Implementación de soluciones escalables y servicios inteligentes en entornos de nube.",
    fullDescription: "specialización activa en el diseño de arquitecturas escalables y servicios de Inteligencia Artificial sobre nubes híbridas. El enfoque actual se centra en la migración de microservicios y la implementación de modelos de aprendizaje automático para la optimización de procesos operativos.",
    impact: "Desarrollo de entornos de prueba con auto-escalado y alta disponibilidad, integrando servicios de cómputo elástico para garantizar un SLA (Acuerdo de Nivel de Servicio) del 99.9% en aplicaciones críticas.",
    keywords: "Cloud Computing · AWS Ecosystem · Huawei Cloud · AI Integration · Infrastructure as Code · DevOps Pipeline..",
  
    images: ["/certificado.jpg"],
    viewLink: "Más Detalles",
  },
];

const socialLinks = [
  {
    id: "linkedin",
    url: "https://www.linkedin.com/in/marlon-ayala/",
    alt: "LinkedIn",
  },
  {
    id: "github",
    url: "https://github.com/marlonayaladev",
    alt: "GitHub",
  },
  {
    id: "resume",
    url: "https://drive.google.com/file/d/1oZ5xOUcg6PDKtLgUfCHNjqNNXQaWm4Xl/view?usp=sharing",
    alt: "Resume",
  },
];

const LinkedInSocialIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GithubIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const InstagramSocialIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const ResumeDownloadIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    {/* Silueta de documento/hoja de vida */}
    <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
    {/* Flecha de descarga integrada */}
    <path d="M8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"/>
  </svg>
);

const getProjectIcon = (iconType: string) => {
  switch (iconType) {
    case "meta":
      return <MetaIcon />;
    case "club":
      return <ClubIcon />;
    case "whatsapp":
      return <WhatsAppIcon />;
    case "instagram":
      return <InstagramIcon />;
    case "github":
      return <GithubIcon />;
    default:
      return <MetaIcon />;
  }
};

const getSocialIcon = (id: string) => {
  switch (id) {
    case "linkedin":
      return <LinkedInSocialIcon />;
    case "instagram":
      return <InstagramSocialIcon />;
    case "resume":
      return <ResumeDownloadIcon />;
    case "github":
      return <GithubIcon />;
    default:
      return null;
  }
};

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeSoonProject, setActiveSoonProject] = useState<string | null>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [fastLoadMode] = useState(true); // Modo de carga rápida activado por defecto

  const prefetchImage = (src?: string) => {
    if (!src) return;
    const img = new Image();
    img.src = src;
  };

  const openModal = (projectId: string) => {
    const project = projects.find((p) => p.id === projectId);
    if (project && project.viewLink) {
      setActiveModal(projectId);
      setCurrentImageIndex(0);
      setIsImageLoaded(false);

      if (fastLoadMode && project.images?.length) {
        project.images.forEach((src) => prefetchImage(src));
      }
    }
  };

  const handleProjectClick = (project: ProjectDetail) => {
    if (project.viewLink) {
      openModal(project.id);
      return;
    }

    if (project.isConfidential) {
      setActiveSoonProject(project.id);
      setTimeout(() => setActiveSoonProject(null), 1000);
    }
  };

  const closeModal = () => {
    setActiveModal(null);
    setCurrentImageIndex(0);
  };

  const activeProject = projects.find((p) => p.id === activeModal);
  const totalImages = activeProject?.images?.length || 0;

  useEffect(() => {
    setIsImageLoaded(false);

    if (!fastLoadMode || !activeProject?.images) return;

    prefetchImage(activeProject.images[currentImageIndex]);
    prefetchImage(activeProject.images[currentImageIndex + 1]);
    prefetchImage(activeProject.images[currentImageIndex - 1]);
  }, [activeProject, currentImageIndex, fastLoadMode]);

  const goToPreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
      setIsImageLoaded(false);
    }
  };

  const goToNextImage = () => {
    if (currentImageIndex < totalImages - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const hasPreviousImage = currentImageIndex > 0;
  const hasNextImage = currentImageIndex < totalImages - 1;
  const currentMedia = activeProject?.images?.[currentImageIndex];
  const isVideo = currentMedia?.endsWith('.mp4') || currentMedia?.endsWith('.webm') || currentMedia?.endsWith('.mov');

  return (
    <>
      <div className="portfolio-container">
        <div className="background-gradient" />

        {/* Floating Hero Image */}
        <div className="hero-image-container">
          <img
            src="/modelo.png"
            alt="Hero"
            className="hero-image"
          />
        </div>

        <main className="content-grid">
          <section className="left-column xl:py-[99px]">
            <div className="intro-content">
              <h1 className="greeting">Hola, Soy Marlon.</h1>

              <div className="role-location">
                <p>Software Engineer | Universidad de Lima.</p>
                <p>Lima, Perú</p>
              </div>

              <div className="bio-text">
                <p>
                  Arquitecto de soluciones especializado en la modernización de sistemas críticos — de arquitecturas monolíticas a ecosistemas a gran escala.
                </p>
                <p>
                  Mi trabajo se centra en el desarrollo Full-Stack, donde la integridad transaccional y la alta disponibilidad de datos son la prioridad.
                </p>
                <p>
                  Especialista en el ciclo de vida de desarrollo (SDLC) para traducir requerimientos complejos en aplicaciones escalables y de alto rendimiento.
                </p>
              </div>
            </div>
          </section>

          <section className="right-column xl:py-[0px]">
            <h2 className="section-title xl:text-[16px] xl:m-[0px] xl:px-[0px] xl:py-[4px] rounded-[0px]">Projects</h2>

            <div className="project-list">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="project-card"
                  onClick={() => handleProjectClick(project)}
                  style={{ cursor: project.viewLink ? "pointer" : "pointer" }}
                >
                  <div className="card-glass-bg" />
                  <div className="card-content rounded-[25px] xl:my-[0px] xl:py-[8px]">
                    <div className="card-header">
                      <div className="card-title-group xl:my-[0px] xl:p-[0px]">
                        <div className="project-icon">
                          {getProjectIcon(project.iconType)}
                        </div>
                        <h3>{project.title}</h3>
                      </div>
                      <span className="year">{project.year}</span>
                    </div>

                    <div className="card-body">
                      <p className="project-desc">{project.description}</p>
                      {project.viewLink ? (
                        <span className="view-link">{project.viewLink} ↗</span>
                      ) : (
                        <p className={`view-link note ${project.id === activeSoonProject ? "coming-soon-highlight" : ""}`}>
                          Próximamente · Confidencial
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>

        <div className="social-links-container">
          <div className="social-links">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                {getSocialIcon(link.id)}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xl transition-all duration-300 ${
          activeModal ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeModal}
      >
        {/* Modal Card */}
        <div 
          className={`relative w-full max-w-5xl bg-black/20 backdrop-blur-lg border border-white/20 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row transform transition-all duration-300 ${
            activeModal ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`} 
          onClick={(e) => e.stopPropagation()}
        >
          {/* Botón Cerrar - Posición Absoluta */}
          <button 
            type="button" 
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-zinc-400 hover:text-white transition-colors z-20" 
            onClick={closeModal}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          {activeProject && (
            <>
              {/* Columna Izquierda: Contenido (55%) */}
              <div className="w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-center">
                
                <div className="mb-6">
                  {getProjectIcon(activeProject.iconType)}
                </div>

                <h2 className="text-3xl font-semibold text-white tracking-tight mb-2">
                  {activeProject.title}
                </h2>
                <p className="text-sm text-zinc-400 mb-8 font-medium">
                  {activeProject.role} · {activeProject.year}
                </p>

                <p className="text-sm text-zinc-300 mb-8 leading-relaxed">
                  {activeProject.fullDescription}
                </p>

                {activeProject.impact && (
                  <div className="mb-6">
                    <h3 className="text-xs font-medium text-zinc-500 mb-2 uppercase tracking-wider">Impact</h3>
                    <p className="text-sm text-zinc-300 leading-relaxed">{activeProject.impact}</p>
                  </div>
                )}

                {activeProject.keywords && (
                  <div className="mb-10">
                    <h3 className="text-xs font-medium text-zinc-500 mb-2 uppercase tracking-wider">Keywords</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">{activeProject.keywords}</p>
                  </div>
                )}

                {/* Botones */}
                {activeProject.buttons && (
                  <div className="flex flex-wrap gap-4 mt-auto">
                    {activeProject.buttons.map((button, index) => (
                      <a
                        key={index}
                        href={button.url || "#"}
                        target={button.url ? "_blank" : undefined}
                        rel={button.url ? "noopener noreferrer" : undefined}
                        className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all inline-block ${
                          button.type === "primary" 
                            ? "bg-[#0088FF] hover:bg-[#0077EE] text-white shadow-[0_0_15px_rgba(0,136,255,0.3)]" 
                            : "bg-transparent border border-[#0088FF]/30 text-[#0088FF] hover:bg-[#0088FF]/10"
                        }`}
                      >
                        {button.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Columna Derecha: Imagen/Mockup (45%) */}
              {activeProject && activeProject.images && activeProject.images.length > 0 && (
                <div className="w-full md:w-[45%] flex items-center justify-center p-8 bg-zinc-900/40 border-l border-white/5 relative">
                  {/* Botón Anterior */}
                  {hasPreviousImage && (
                    <button
                      type="button"
                      onClick={goToPreviousImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 bg-white/10 hover:bg-white/20 rounded-full text-white border border-white/20 transition-all hover:scale-110 z-10"
                      aria-label="Imagen anterior"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                    </button>
                  )}

                  {isVideo ? (
                    <video
                      src={currentMedia}
                      controls
                      onCanPlay={() => setIsImageLoaded(true)}
                      className={`max-h-[500px] w-auto object-contain drop-shadow-2xl rounded-3xl transition-all duration-500 ease-out ${isImageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                    />
                  ) : (
                    <img
                      src={currentMedia}
                      alt={`${activeProject.title} - Media ${currentImageIndex + 1}`}
                      loading="eager"
                      onLoad={() => setIsImageLoaded(true)}
                      className={`max-h-[500px] w-auto object-contain drop-shadow-2xl rounded-3xl transition-all duration-500 ease-out ${isImageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                    />
                  )}

                  {/* Botón Siguiente */}
                  {hasNextImage && (
                    <button
                      type="button"
                      onClick={goToNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 bg-white/10 hover:bg-white/20 rounded-full text-white border border-white/20 transition-all hover:scale-110 z-10"
                      aria-label="Imagen siguiente"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                  )}

                  {/* Indicador de posición */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {activeProject.images.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1.5 w-1.5 rounded-full transition-all ${
                          index === currentImageIndex ? "bg-white w-4" : "bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
