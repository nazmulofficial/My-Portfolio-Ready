"use client";

import React, { useEffect, useState } from "react";

import {
  FaLaptopCode,
  FaJs,
  FaReact,
  FaPalette,
  FaPenRuler,
  FaGithub,
  FaCloudArrowUp,

  // Frontend technology icons
  FaHtml5,
  FaCss3Alt,
  FaCode,
  FaWind,

  // Other technology icons
  FaBolt,
  FaServer,
  FaFileCode,
  FaPuzzlePiece,
  FaRoute,
  FaPenNib,
  FaImage,
  FaFont,
  FaTrademark,
  FaShirt,
  FaPrint,
  FaBagShopping,
  FaFileExport,
  FaVectorSquare,
  FaObjectGroup,
  FaDesktop,
  FaUsers,
  FaMobileScreen,
  FaGitAlt,
  FaCodeBranch,
  FaCodePullRequest,
  FaCodeCommit,
  FaFolderOpen,
  FaArrowsRotate,
} from "react-icons/fa6";

/* =========================================
   ICON MAP
========================================= */

const iconMap = {
  // Skill icons
  FaLaptopCode,
  FaJs,
  FaReact,
  FaPalette,
  FaPenRuler,
  FaGithub,
  FaCloudArrowUp,

  // Frontend icons
  FaHtml5,
  FaCss3Alt,
  FaCode,
  FaReact,
  FaWind,

  // Other icons
  FaBolt,
  FaServer,
  FaFileCode,
  FaPuzzlePiece,
  FaReact,
  FaRoute,
  FaPenNib,
  FaImage,
  FaFont,
  FaTrademark,
  FaShirt,
  FaPrint,
  FaBagShopping,
  FaFileExport,
  FaVectorSquare,
  FaObjectGroup,
  FaDesktop,
  FaUsers,
  FaMobileScreen,
  FaGitAlt,
  FaCodeBranch,
  FaCodePullRequest,
  FaCodeCommit,
  FaFolderOpen,
  FaArrowsRotate,
};

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  /* =========================================
     FETCH DATA
  ========================================= */

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("/data.json");

        if (!response.ok) {
          throw new Error("Failed to fetch data.json");
        }

        const data = await response.json();

        setSkills(data.skills || []);
      } catch (error) {
        console.error("Error fetching skills:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  /* =========================================
     LOADING
  ========================================= */

  if (loading) {
    return (
      <section
        id="skills"
        className="px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl text-center">
          <span
            className="loading loading-spinner loading-lg"
            style={{
              color: "var(--accent-color)",
            }}
          />
        </div>
      </section>
    );
  }

  /* =========================================
     MAIN
  ========================================= */

  return (
    <section
      id="skills"
      className="relative px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border shadow-xl"
        style={{
          background: "var(--section-bg)",
          borderColor: "var(--border-color)",
        }}
      >
        {/* =========================================
            BACKGROUND GLOW
        ========================================= */}

        <div
          className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full blur-3xl"
          style={{
            background: "var(--glow-blue)",
          }}
        />

        <div
          className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full blur-3xl"
          style={{
            background: "var(--glow-purple)",
          }}
        />

        {/* =========================================
            CONTENT
        ========================================= */}

        <div className="relative z-10 p-6 sm:p-10 lg:p-14">

          {/* =========================================
              HEADER
          ========================================= */}

          <div className="mx-auto mb-12 max-w-2xl text-center">

            <span
              className="text-sm font-semibold uppercase tracking-[0.25em]"
              style={{
                color: "var(--accent-color)",
              }}
            >
              My Expertise
            </span>

            <h2
              className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl"
              style={{
                color: "var(--heading-color)",
              }}
            >
              Skills & Technologies
            </h2>

            <p
              className="mt-4 text-sm leading-7 sm:text-base"
              style={{
                color: "var(--text-color)",
              }}
            >
              Technologies and tools I use to build modern,
              responsive and creative digital experiences.
            </p>
          </div>

          {/* =========================================
              SKILLS GRID
          ========================================= */}

          <div className="grid gap-6 md:grid-cols-2">

            {skills.map((skill) => {
              const SkillIcon = iconMap[skill.icon];

              return (
                <div
                  key={skill.id}
                  className="group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    background: "var(--card-bg)",
                    borderColor: "var(--border-color)",
                  }}
                >

                  {/* =================================
                      SKILL HEADER
                  ================================= */}

                  <div className="flex items-start gap-4">

                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                      style={{
                        background: "var(--accent-soft)",
                        color: "var(--accent-color)",
                      }}
                    >
                      {SkillIcon && (
                        <SkillIcon className="text-2xl" />
                      )}
                    </div>

                    <div className="min-w-0">

                      <h3
                        className="text-xl font-bold"
                        style={{
                          color: "var(--heading-color)",
                        }}
                      >
                        {skill.category}
                      </h3>

                      <p
                        className="mt-2 text-sm leading-6"
                        style={{
                          color: "var(--text-color)",
                        }}
                      >
                        {skill.description}
                      </p>

                    </div>
                  </div>

                  {/* =================================
                      TECHNOLOGIES
                  ================================= */}

                  <div className="mt-6">

                    <p
                      className="mb-3 text-xs font-semibold uppercase tracking-wider"
                      style={{
                        color: "var(--muted-color)",
                      }}
                    >
                      Technologies
                    </p>

                    {/* 2 COLUMNS */}

                    <div className="grid grid-cols-2 gap-2">

                      {skill.technologies?.map((technology) => {

                        const TechIcon =
                          iconMap[technology.icon];

                        return (
                          <div
                            key={technology.name}
                            className="flex min-h-[44px] items-center gap-2 rounded-xl border px-3 py-2 transition-all duration-300 hover:-translate-y-0.5"
                            style={{
                              background:
                                "var(--accent-soft)",
                              borderColor:
                                "var(--border-color)",
                            }}
                          >

                            {/* ICON */}

                            {TechIcon && (
                              <TechIcon
                                className="shrink-0 text-base"
                                style={{
                                  color:
                                    "var(--accent-color)",
                                }}
                              />
                            )}

                            {/* NAME */}

                            <span
                              className="truncate text-xs font-medium sm:text-sm"
                              style={{
                                color:
                                  "var(--heading-color)",
                              }}
                            >
                              {technology.name}
                            </span>

                          </div>
                        );
                      })}

                    </div>
                  </div>

                </div>
              );
            })}

          </div>

          {/* =========================================
              BOTTOM CARD
          ========================================= */}

          <div
            className="mt-8 rounded-2xl border p-6 text-center"
            style={{
              background: "var(--card-bg)",
              borderColor: "var(--border-color)",
            }}
          >

            <div
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{
                background: "var(--accent-soft)",
                color: "var(--accent-color)",
              }}
            >
              <FaCode className="text-2xl" />
            </div>

            <h3
              className="mt-4 text-xl font-bold"
              style={{
                color: "var(--heading-color)",
              }}
            >
              Code Meets Creativity
            </h3>

            <p
              className="mx-auto mt-2 max-w-2xl text-sm leading-6"
              style={{
                color: "var(--text-color)",
              }}
            >
              I combine frontend development and creative
              design to create modern, responsive and visually
              engaging digital experiences.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;