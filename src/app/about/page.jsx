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
  FaCode,
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
  // Main skill icons
  FaLaptopCode,
  FaJs,
  FaReact,
  FaPalette,
  FaPenRuler,
  FaGithub,
  FaCloudArrowUp,

  // Technology icons
  FaCode,
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
};

/* =========================================
   ABOUT COMPONENT
========================================= */

const About = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  /* =========================================
     FETCH DATA
  ========================================= */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");

        if (!response.ok) {
          throw new Error("Failed to fetch data.json");
        }

        const result = await response.json();

        setData(result);
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /* =========================================
     LOADING
  ========================================= */

  if (loading) {
    return (
      <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
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
     NO DATA
  ========================================= */

  if (!data) {
    return null;
  }

  const { about, skills = [] } = data;

  /* =========================================
     GRAPHIC DESIGN DATA
     Only category + description
  ========================================= */

  const graphicDesignSkill = skills.find(
    (skill) => skill.category === "Graphic Design",
  );

  /* =========================================
     RIGHT SIDE SKILLS
     Keep first 3 skills
  ========================================= */

  const skillPreview = skills.slice(0, 3);

  return (
    <section id="about" className="relative px-4 py-20 sm:px-6 lg:px-8">
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
          {/* =======================================
              HEADER
          ======================================= */}

          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span
              className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.25em]"
              style={{
                color: "var(--accent-color)",
              }}
            >
              About Me
            </span>

            <h2
              className="text-3xl font-bold sm:text-4xl lg:text-5xl"
              style={{
                color: "var(--heading-color)",
              }}
            >
              Know More About Me
            </h2>

            <p
              className="mt-4 text-sm leading-7 sm:text-base"
              style={{
                color: "var(--text-color)",
              }}
            >
              {about?.description}
            </p>
          </div>

          {/* =======================================
              ABOUT + SKILLS
          ======================================= */}

          <div className="grid gap-8 lg:grid-cols-2">
            {/* =======================================
                LEFT SIDE
                ABOUT CARD
            ======================================= */}

            <div
              className="rounded-2xl border p-6 sm:p-8"
              style={{
                background: "var(--card-bg)",
                borderColor: "var(--border-color)",
              }}
            >
              {/* ===================================
                  PROFILE
              =================================== */}

              <div className="flex items-center gap-4">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                  style={{
                    background: "var(--accent-soft)",
                    color: "var(--accent-color)",
                  }}
                >
                  <FaLaptopCode className="text-2xl" />
                </div>

                <div>
                  <h3
                    className="text-xl font-bold"
                    style={{
                      color: "var(--heading-color)",
                    }}
                  >
                    {about?.name}
                  </h3>

                  <p
                    className="text-sm"
                    style={{
                      color: "var(--accent-color)",
                    }}
                  >
                    {about?.role}
                  </p>
                </div>
              </div>

              {/* ===================================
                  TITLE
              =================================== */}

              <p
                className="mt-6 text-sm leading-7"
                style={{
                  color: "var(--text-color)",
                }}
              >
                {about?.title}
              </p>

              {/* ===================================
                  DESCRIPTION
              =================================== */}

              <p
                className="mt-4 text-sm leading-7"
                style={{
                  color: "var(--text-color)",
                }}
              >
                {about?.description}
              </p>

              {/* ===================================
                  STATS
              =================================== */}

              <div className="mt-8 grid grid-cols-3 gap-3">
                {/* Projects */}

                <div
                  className="rounded-xl border p-4 text-center"
                  style={{
                    background: "var(--accent-soft)",
                    borderColor: "var(--border-color)",
                  }}
                >
                  <h4
                    className="text-xl font-bold"
                    style={{
                      color: "var(--heading-color)",
                    }}
                  >
                    {about?.projects}
                  </h4>

                  <p
                    className="mt-1 text-xs"
                    style={{
                      color: "var(--muted-color)",
                    }}
                  >
                    Projects
                  </p>
                </div>

                {/* Technologies */}

                <div
                  className="rounded-xl border p-4 text-center"
                  style={{
                    background: "var(--accent-soft)",
                    borderColor: "var(--border-color)",
                  }}
                >
                  <h4
                    className="text-xl font-bold"
                    style={{
                      color: "var(--heading-color)",
                    }}
                  >
                    {about?.technologies}
                  </h4>

                  <p
                    className="mt-1 text-xs"
                    style={{
                      color: "var(--muted-color)",
                    }}
                  >
                    Technologies
                  </p>
                </div>

                {/* Passion */}

                <div
                  className="rounded-xl border p-4 text-center"
                  style={{
                    background: "var(--accent-soft)",
                    borderColor: "var(--border-color)",
                  }}
                >
                  <h4
                    className="text-xl font-bold"
                    style={{
                      color: "var(--heading-color)",
                    }}
                  >
                    100%
                  </h4>

                  <p
                    className="mt-1 text-xs"
                    style={{
                      color: "var(--muted-color)",
                    }}
                  >
                    Passion
                  </p>
                </div>
              </div>

              {/* =======================================
    EXPERTISE
======================================= */}

              <div className="mt-8">
                <span
                  className="text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{
                    color: "var(--accent-color)",
                  }}
                >
                  Expertise
                </span>

                <h3
                  className="mt-2 text-2xl font-bold"
                  style={{
                    color: "var(--heading-color)",
                  }}
                >
                  My Skills
                </h3>

                <p
                  className="mt-2 text-sm leading-6"
                  style={{
                    color: "var(--text-color)",
                  }}
                >
                  Technologies and tools I use to build modern digital
                  experiences.
                </p>

                {/* Skill List */}

                <div className="mt-6 space-y-6">
                  {/* ===============================
        GRAPHIC DESIGN
    =============================== */}

                  <div>
                    <div className="flex items-center gap-2">
                      <FaPalette
                        className="text-lg"
                        style={{
                          color: "var(--accent-color)",
                        }}
                      />

                      <h4
                        className="text-base font-bold"
                        style={{
                          color: "var(--heading-color)",
                        }}
                      >
                        Graphic Design
                      </h4>
                    </div>

                    <p
                      className="mt-2 text-sm"
                      style={{
                        color: "var(--text-color)",
                      }}
                    >
                      Creating clean and creative visual designs for brands,
                    </p>

                    <ul
                      className="mt-1 list-disc space-y-1 pl-8 text-sm"
                      style={{
                        color: "var(--text-color)",
                      }}
                    >
                      <li>social media</li>
                      <li>digital platforms.</li>
                    </ul>
                  </div>

                  {/* ===============================
        T-SHIRT DESIGN
    =============================== */}

                  <div>
                    <div className="flex items-center gap-2">
                      <FaShirt
                        className="text-lg"
                        style={{
                          color: "var(--accent-color)",
                        }}
                      />

                      <h4
                        className="text-base font-bold"
                        style={{
                          color: "var(--heading-color)",
                        }}
                      >
                        T-Shirt Design
                      </h4>
                    </div>

                    <p
                      className="mt-2 text-sm"
                      style={{
                        color: "var(--text-color)",
                      }}
                    >
                      Designing unique and print-ready T-shirt graphics for
                    </p>

                    <ul
                      className="mt-1 list-disc space-y-1 pl-8 text-sm"
                      style={{
                        color: "var(--text-color)",
                      }}
                    >
                      <li>POD stores</li>
                      <li>brands</li>
                      <li>online marketplaces.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* =======================================
                RIGHT SIDE
                SKILLS PREVIEW
            ======================================= */}

            <div>
              <div className="space-y-4">
                {skillPreview.map((skill) => {
                  const SkillIcon = iconMap[skill.icon];

                  return (
                    <div
                      key={skill.id}
                      className="rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                      style={{
                        background: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                      }}
                    >
                      {/* ===============================
                          SKILL HEADER
                      =============================== */}

                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                          style={{
                            background: "var(--accent-soft)",
                            color: "var(--accent-color)",
                          }}
                        >
                          {SkillIcon && <SkillIcon className="text-xl" />}
                        </div>

                        <div>
                          <h4
                            className="font-bold"
                            style={{
                              color: "var(--heading-color)",
                            }}
                          >
                            {skill.category}
                          </h4>

                          <p
                            className="mt-1 text-xs"
                            style={{
                              color: "var(--muted-color)",
                            }}
                          >
                            {skill.technologies?.length || 0} Technologies
                          </p>
                        </div>
                      </div>

                      {/* ===============================
                          DESCRIPTION
                      =============================== */}

                      <p
                        className="mt-4 text-xs leading-6"
                        style={{
                          color: "var(--text-color)",
                        }}
                      >
                        {skill.description}
                      </p>

                      {/* ===============================
                          TECHNOLOGY CARDS
                      =============================== */}

                      <div className="mt-4 grid grid-cols-2 gap-2">
                        {skill.technologies?.map((technology) => {
                          const TechIcon = iconMap[technology.icon] || FaCode;

                          return (
                            <div
                              key={technology.name}
                              className="flex min-h-[40px] items-center gap-2 rounded-xl border px-3 py-2 transition-all duration-300 hover:-translate-y-0.5"
                              style={{
                                background: "var(--accent-soft)",
                                borderColor: "var(--border-color)",
                              }}
                            >
                              <TechIcon
                                className="shrink-0 text-sm"
                                style={{
                                  color: "var(--accent-color)",
                                }}
                              />

                              <span
                                className="truncate text-xs font-medium sm:text-sm"
                                style={{
                                  color: "var(--heading-color)",
                                }}
                              >
                                {technology.name}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =========================================
              WHAT I DO
          ========================================= */}

          <div className="mt-12">
            <div className="mb-6 text-center">
              <span
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{
                  color: "var(--accent-color)",
                }}
              >
                Services
              </span>

              <h3
                className="mt-2 text-2xl font-bold"
                style={{
                  color: "var(--heading-color)",
                }}
              >
                What I Do
              </h3>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {/* =================================
                  WEB DEVELOPMENT
              ================================= */}

              <div
                className="rounded-2xl border p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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
                  <FaLaptopCode className="text-2xl" />
                </div>

                <h4
                  className="mt-4 font-bold"
                  style={{
                    color: "var(--heading-color)",
                  }}
                >
                  Web Development
                </h4>

                <p
                  className="mt-2 text-sm leading-6"
                  style={{
                    color: "var(--text-color)",
                  }}
                >
                  Modern and responsive websites using React, Next.js and
                  Tailwind CSS.
                </p>
              </div>

              {/* =================================
                  CREATIVE DESIGN
              ================================= */}

              <div
                className="rounded-2xl border p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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
                  <FaPalette className="text-2xl" />
                </div>

                <h4
                  className="mt-4 font-bold"
                  style={{
                    color: "var(--heading-color)",
                  }}
                >
                  Creative Design
                </h4>

                <p
                  className="mt-2 text-sm leading-6"
                  style={{
                    color: "var(--text-color)",
                  }}
                >
                  Clean visual designs, graphics and creative digital assets.
                </p>
              </div>

              {/* =================================
                  UI/UX
              ================================= */}

              <div
                className="rounded-2xl border p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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
                  <FaPenRuler className="text-2xl" />
                </div>

                <h4
                  className="mt-4 font-bold"
                  style={{
                    color: "var(--heading-color)",
                  }}
                >
                  UI/UX Design
                </h4>

                <p
                  className="mt-2 text-sm leading-6"
                  style={{
                    color: "var(--text-color)",
                  }}
                >
                  Simple, intuitive and responsive user interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
