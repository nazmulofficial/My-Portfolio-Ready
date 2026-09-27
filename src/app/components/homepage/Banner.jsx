"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import hBanner from "@/app/assets/Hero banner.png";
import myImage from "@/app/assets/my-image.png";
import { TypeAnimation } from "react-type-animation";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaNodeJs,
  FaPython,
  FaFigma,
  FaWordpress,
  FaNpm,
  FaGitlab,
  FaDocker,
  FaCode,
  FaWind,
} from "react-icons/fa6";

import { VscVscode } from "react-icons/vsc";

/* =========================================
    TECHNOLOGIES
========================================= */

const technologies = [
  { name: "HTML5", icon: FaHtml5, color: "group-hover:text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "group-hover:text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "group-hover:text-yellow-400" },
  { name: "React", icon: FaReact, color: "group-hover:text-cyan-400" },
  { name: "Next.js", icon: FaCode, color: "group-hover:text-white" },
  { name: "Tailwind CSS", icon: FaWind, color: "group-hover:text-teal-400" },
  { name: "Node.js", icon: FaNodeJs, color: "group-hover:text-green-500" },
  { name: "Python", icon: FaPython, color: "group-hover:text-yellow-300" },
  { name: "Git", icon: FaGitAlt, color: "group-hover:text-orange-600" },
  { name: "GitHub", icon: FaGithub, color: "group-hover:text-white" },
  { name: "VS Code", icon: VscVscode, color: "group-hover:text-blue-400" },
  { name: "Figma", icon: FaFigma, color: "group-hover:text-pink-500" },
  { name: "WordPress", icon: FaWordpress, color: "group-hover:text-sky-600" },
  { name: "NPM", icon: FaNpm, color: "group-hover:text-red-500" },
  { name: "GitLab", icon: FaGitlab, color: "group-hover:text-orange-500" },
  { name: "Docker", icon: FaDocker, color: "group-hover:text-blue-400" },
];

/* =========================================
    BANNER
========================================= */

const Banner = () => {
  const [showTechnologies, setShowTechnologies] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(1280);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = viewportWidth < 640;
  const isTablet = viewportWidth >= 640 && viewportWidth < 1024;

  const orbitRadius = isMobile ? 155 : isTablet ? 195 : 245;
  const orbitSize = isMobile ? 350 : isTablet ? 440 : 560;
  const orbitRingSize = isMobile ? 270 : isTablet ? 340 : 420;
  const innerRingSize = isMobile ? 210 : isTablet ? 275 : 330;

  const orbitIconSize = isMobile
    ? "h-11 w-11"
    : isTablet
      ? "h-14 w-14"
      : "h-16 w-16";
  const orbitIconText = isMobile
    ? "text-base"
    : isTablet
      ? "text-xl"
      : "text-2xl";

  return (
    <section className="relative w-full px-4 pt-10">
      {/* Standard CSS injection to force spin animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes spin-gradient {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-gradient 3.5s linear infinite;
          }
        `,
        }}
      />

      {/* =========================================
          HERO
      ========================================= */}
      <div className="hero-bg relative mx-auto min-h-[600px] h-[calc(100vh-5rem)] max-w-7xl overflow-hidden rounded-4xl">
        {/* BACKGROUND IMAGE */}
        <Image
          src={hBanner}
          alt="Developer workspace"
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover object-center opacity-20"
        />

        {/* DARK BLUE OVERLAY */}
        <div className="absolute inset-0 bg-[#030b2e]/80" />

        {/* BLUE GLOW */}
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-blue-600/50 blur-[120px]" />

        {/* PURPLE GLOW */}
        <div className="absolute right-[-100px] top-[-100px] h-[450px] w-[450px] rounded-full bg-violet-600/40 blur-[130px]" />

        {/* BOTTOM CYAN GLOW */}
        <div className="absolute bottom-[-150px] left-1/3 h-[400px] w-[500px] rounded-full bg-cyan-500/30 blur-[130px]" />

        {/* DECORATIVE CIRCLES */}
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border border-indigo-500/40" />
        <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full border border-blue-400/20" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full border border-blue-500/30" />

        {/* SMALL DOTS */}
        <div className="absolute right-16 top-1/4 grid grid-cols-5 gap-3 opacity-40">
          {Array.from({ length: 25 }).map((_, index) => (
            <span key={index} className="h-1 w-1 rounded-full bg-blue-400" />
          ))}
        </div>

        {/* HORIZONTAL LIGHT */}
        <div className="absolute left-0 top-1/4 h-px w-40 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

        {/* HERO CONTENT */}
        <div className="absolute inset-0 z-10 flex items-center px-6 md:px-10 lg:px-16">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-10 md:flex-row">
            {/* LEFT CONTENT */}
            <div className="max-w-2xl text-center text-white md:text-left">
              <p className="animate-fade-down mb-4 text-lg font-medium tracking-wide text-blue-300">
                Hello, I'm
              </p>

              <h1 className="animate-fade-up bg-gradient-to-r from-cyan-400 via-indigo-300 to-pink-500 bg-clip-text text-4xl font-bold text-transparent drop-shadow-[0_0_25px_rgba(99,102,241,0.5)] md:text-5xl lg:text-6xl">
                Nazmul Hossain
              </h1>

              {/* ANIMATED ROLE */}
              <div className="animate-fade-up-delay mt-4 flex h-12 items-center justify-center text-2xl font-semibold text-cyan-300 drop-shadow-[0_0_15px_rgba(6,182,212,0.6)] md:justify-start md:text-3xl">
                <TypeAnimation
                  sequence={[
                    "Junior Web Developer specializing in frontend development",
                    2500,
                    "Junior Web Developer with experience in Node.js, Express.js, and MongoDB",
                    2500,
                    "Specializing in React, Angular, and modern JavaScript technologies",
                    2500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>

              <p className="animate-fade-up-delay-2 mt-5 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
                I build modern, responsive and user-friendly web applications
                using React, Next.js and modern web technologies.
              </p>

              {/* ACTION BUTTONS */}
              <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                <a
                  href="#projects"
                  className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-indigo-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="rounded-lg border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/20"
                >
                  Contact Me
                </a>

                {/* CIRCULAR TECH STACK BUTTON */}
                <div className="ml-6 flex flex-col items-center justify-center md:ml-8 lg:ml-10">
                  <button
                    type="button"
                    onClick={() => setShowTechnologies(!showTechnologies)}
                    aria-label="Show technologies"
                    className="group relative flex h-[72px] w-[72px] items-center justify-center rounded-full"
                  >
                    <span
                      className={`absolute inset-0 rounded-full border transition-all duration-700 ${
                        showTechnologies
                          ? "scale-125 border-cyan-300/80 opacity-100 shadow-[0_0_30px_rgba(34,211,238,0.5)]"
                          : "scale-100 border-cyan-400/60 opacity-100"
                      }`}
                    />
                    <span
                      className={`absolute inset-[6px] rounded-full border transition-all duration-700 ${
                        showTechnologies
                          ? "rotate-180 scale-110 border-indigo-400/80"
                          : "rotate-0 scale-100 border-blue-400/50"
                      }`}
                    />
                    <span
                      className={`absolute inset-[12px] rounded-full transition-all duration-500 ${
                        showTechnologies
                          ? "bg-cyan-400/20 shadow-[0_0_35px_rgba(34,211,238,0.7)]"
                          : "bg-blue-500/10 shadow-[0_0_25px_rgba(59,130,246,0.4)]"
                      }`}
                    />
                    <VscVscode
                      className={`relative z-10 text-[36px] transition-all duration-500 ${
                        showTechnologies
                          ? "rotate-180 scale-110 text-cyan-300"
                          : "text-blue-400 group-hover:scale-110 group-hover:text-cyan-300"
                      }`}
                    />
                    {!showTechnologies && (
                      <span className="absolute inset-0 rounded-full border border-cyan-400/40 animate-ping" />
                    )}
                  </button>

                  <span
                    className={`mt-2 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.22em] transition-all duration-300 ${
                      showTechnologies ? "text-cyan-300" : "text-cyan-400/80"
                    }`}
                  >
                    {showTechnologies ? "Hide Skills" : "My Tech Stack"}
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: PROFILE + ORBIT */}
            <div className="relative flex shrink-0 items-center justify-center">
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: `${orbitSize}px`,
                  height: `${orbitSize}px`,
                }}
              >
                <div
                  className={`absolute left-1/2 top-1/2 rounded-full border border-cyan-400/20 transition-all duration-700 ${
                    showTechnologies
                      ? "scale-100 opacity-100"
                      : "scale-75 opacity-0"
                  }`}
                  style={{
                    width: `${orbitRingSize}px`,
                    height: `${orbitRingSize}px`,
                    transform: "translate(-50%, -50%)",
                  }}
                />
                <div
                  className={`absolute left-1/2 top-1/2 rounded-full border border-indigo-400/20 transition-all duration-700 ${
                    showTechnologies
                      ? "scale-100 opacity-100"
                      : "scale-75 opacity-0"
                  }`}
                  style={{
                    width: `${orbitRingSize - 80}px`,
                    height: `${orbitRingSize - 80}px`,
                    transform: "translate(-50%, -50%)",
                  }}
                />

                {/* FLOATING TECHNOLOGIES */}
                {technologies.slice(0, 12).map((tech, index) => {
                  const TechIcon = tech.icon;
                  const angle = (index / 12) * 360 - 90;
                  const x = Math.cos((angle * Math.PI) / 180) * orbitRadius;
                  const y = Math.sin((angle * Math.PI) / 180) * orbitRadius;

                  return (
                    <div
                      key={tech.name}
                      className="absolute left-1/2 top-1/2 transition-all duration-700 ease-out"
                      style={{
                        transform: showTechnologies
                          ? `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                          : "translate(-50%, -50%)",
                        opacity: showTechnologies ? 1 : 0,
                      }}
                    >
                      <div
                        className={`group relative flex ${orbitIconSize} items-center justify-center rounded-full border border-white/20 bg-[#07133f]/95 text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.3)] backdrop-blur-md transition-all duration-300 hover:scale-125 hover:border-cyan-300 hover:text-white hover:shadow-[0_0_35px_rgba(34,211,238,0.6)]`}
                      >
                        <TechIcon className={orbitIconText} />
                        <span className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/90 px-2 py-1 text-[10px] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          {tech.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* PROFILE IMAGE WITH ROTATING NEON BORDER */}
              <div className="relative z-10 p-[4px] h-64 w-64 md:h-[332px] md:w-[332px] lg:h-[420px] lg:w-[420px] rounded-full overflow-hidden flex items-center justify-center">
                {/* Rotating Gradient Background Layer */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 animate-spin-slow blur-[1px]" />

                {/* Inner Container holding the actual image */}
                <div className="relative h-[calc(100%-6px)] w-[calc(100%-6px)] overflow-hidden rounded-full bg-[#030b2e]">
                  <Image
                    src={myImage}
                    alt="Nazmul Hossain"
                    fill
                    priority
                    sizes="(max-width: 768px) 256px, (max-width: 1024px) 332px, 420px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          TECHNOLOGIES & TOOLS ABOVE FOOTER (Responsive: 4 on mobile, 5 on tablet, 8 on desktop - Centered)
      ========================================= */}
      <div className="mx-auto mt-6 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#020817]/80 px-4 py-8 shadow-xl backdrop-blur-xl sm:px-6">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Technologies & Tools
          </p>
        </div>

        {/* Centered Grid: grid-cols-4 (mobile) -> sm:grid-cols-5 (tablet) -> lg:grid-cols-8 (desktop) */}
        <div className="mx-auto grid w-fit max-w-full grid-cols-4 justify-items-center gap-x-6 gap-y-8 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-8 sm:gap-x-8 sm:gap-y-10">
          {technologies.map((tech) => {
            const TechIcon = tech.icon;

            return (
              <div
                key={tech.name}
                className="group flex w-[70px] flex-col items-center justify-center text-center sm:w-[80px]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] sm:h-16 sm:w-16">
                  {/* Inactive color is red-light (text-red-400), on hover it switches to tech.color */}
                  <TechIcon
                    className={`text-2xl text-red-400 transition-all duration-300 sm:text-3xl ${tech.color}`}
                  />
                </div>

                <span className="mt-2 w-full text-center text-[10px] font-medium leading-tight text-gray-400 transition-all duration-300 group-hover:text-white sm:text-xs">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Banner;
