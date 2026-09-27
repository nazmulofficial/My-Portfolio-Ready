"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const [theme, setTheme] = useState("dark");
  const [isAtTop, setIsAtTop] = useState(true);

  /* =====================================================
     LOAD THEME + SCROLL
  ===================================================== */

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme") || "dark";

    setTheme(savedTheme);

    document.documentElement.setAttribute(
      "data-theme",
      savedTheme
    );

    const handleScroll = () => {
      setIsAtTop(window.scrollY < 100);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =====================================================
     THEME TOGGLE
  ===================================================== */

  const handleToggle = () => {
    const newTheme =
      theme === "dark" ? "light" : "dark";

    setTheme(newTheme);

    document.documentElement.setAttribute(
      "data-theme",
      newTheme
    );

    localStorage.setItem("theme", newTheme);
  };

  /* =====================================================
     TEXT COLOR

     DARK MODE
     → Always white

     LIGHT MODE
     → Top: slate
     → Scrolled: lime
  ===================================================== */

  const textColorClass =
    theme === "dark"
      ? "text-white"
      : isAtTop
        ? "text-slate-800"
        : "text-[#3780ff]";

  /* =====================================================
     NAV LINKS
  ===================================================== */

  const links = (
    <>
      {/* HOME */}

      <li>
        <Link
          href="/"
          className={`
            rounded-lg
            px-3
            py-2
            font-medium
            transition-colors
            duration-300

            ${
              pathname === "/"
              ? "bg-primary/10 font-bold text-[#3780ff]"
                : `${textColorClass} hover:text-[#36365f]`
            }
          `}
        >
          Home
        </Link>
      </li>

      {/* ABOUT */}

      <li>
        <Link
          href="/about"
          className={`
            rounded-lg
            px-3
            py-2
            font-medium
            transition-colors
            duration-300

            ${
              pathname === "/about"
              ? "bg-primary/10 font-bold text-[#3780ff]"
                : `${textColorClass} hover:text-[#36365f]`
            }
          `}
        >
          About
        </Link>
      </li>

      {/* SKILLS */}

      <li>
        <Link
          href="/skills"
          className={`
            rounded-lg
            px-3
            py-2
            font-medium
            transition-colors
            duration-300

            ${
              pathname === "/skills"
             ? "bg-primary/10 font-bold text-[#3780ff]"
                : `${textColorClass} hover:text-[#36365f]`
            }
          `}
        >
          Skills
        </Link>
      </li>

      {/* PROJECTS */}

      <li>
        <Link
          href="/projects"
          className={`
            rounded-lg
            px-3
            py-2
            font-medium
            transition-colors
            duration-300

            ${
              pathname === "/projects"
               ? "bg-primary/10 font-bold text-[#3780ff]"
                : `${textColorClass} hover:text-[#36365f]`
            }
          `}
        >
          Projects
        </Link>
      </li>
    </>
  );

  return (
    <header
      className="
        sticky
        top-4
        z-50
        mx-auto
        max-w-[1320px]
        px-4
      "
    >
      <div
        className={`
          navbar
          rounded-2xl
          border
          backdrop-blur-xl
          shadow-[0_10px_40px_rgba(30,64,175,0.18)]
          transition-all
          duration-500

          ${
            theme === "dark"
              ? `
                border-white/10
                bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(139,92,246,0.10),transparent_35%),rgba(2,6,23,0.88)]
              `
              : `
                border-white/50
                bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.15),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(139,92,246,0.12),transparent_35%),rgba(255,255,255,0.88)]
              `
          }

          ${
            !isAtTop && theme === "light"
              ? `
                border-[#3780ff]/30
                shadow-[0_10px_40px_rgba(30,64,175,0.22)]
              `
              : ""
          }
        `}
      >

        {/* =================================================
            NAVBAR START
        ================================================= */}

        <div className="navbar-start">

          {/* MOBILE MENU */}

          <div className="dropdown">

            <div
              tabIndex={0}
              role="button"
              className={`
                btn
                btn-ghost
                lg:hidden
                transition-colors
                duration-300
                ${textColorClass}
                hover:text-[#3780ff]
              `}
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {/* MOBILE DROPDOWN */}

            <ul
              tabIndex={0}
              className="
                menu
                menu-sm
                dropdown-content
                z-[1]
                mt-3
                w-52
                rounded-box
                border
                border-base-300
                bg-base-100
                p-2
                text-slate-800
                shadow-xl
                dark:text-white
              "
            >
              {links}
            </ul>

          </div>

          {/* LOGO */}

          <Link
            href="/"
            className={`
              rounded-lg
              px-3
              py-2
              text-xl
              font-bold
              tracking-wide
              transition-colors
              duration-500

              ${textColorClass}

              hover:text-[#3780ff]
            `}
          >
            Nazmul Hossain
          </Link>

        </div>

        {/* =================================================
            DESKTOP MENU
        ================================================= */}

        <div className="navbar-center hidden lg:flex">

          <ul className="menu menu-horizontal gap-1 px-1">
            {links}
          </ul>

        </div>

        {/* =================================================
            NAVBAR END
        ================================================= */}

        <div className="navbar-end gap-2">

          {/* THEME BUTTON */}

          <button
            type="button"
            onClick={handleToggle}
            className={`
              btn
              btn-ghost
              btn-circle
              transition-all
              duration-300

              ${textColorClass}

              hover:bg-[#CCFF00]/10
              hover:text-[#3780ff]
            `}
            aria-label="Toggle Theme"
          >

            {theme === "dark" ? (

              /* SUN */

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="
                  h-5
                  w-5
                  text-yellow-400
                  transition-transform
                  duration-300
                "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="
                    M12 3v1
                    m0 16v1
                    m9-9h-1
                    M4 12H3
                    m15.364 6.364l-.707-.707
                    M6.343 6.343l-.707-.707
                    m12.728 0l-.707.707
                    M6.343 17.657l-.707.707
                    M16 12a4 4 0 11-8 0
                    4 4 0 018 0z
                  "
                />
              </svg>

            ) : (

              /* MOON */

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="
                  h-5
                  w-5
                  text-zinc-700
                  transition-transform
                  duration-300
                  dark:text-zinc-200
                "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="
                    M20.354 15.354
                    A9 9 0 018.646 3.646
                    9.003 9.003 0 0012 21
                    a9.003 9.003 0 008.354-5.646z
                  "
                />
              </svg>

            )}

          </button>

          {/* CONTACT */}

          <Link
            href="/contact"
            className="
              btn
              btn-sm
              border-0
              bg-[#3780ff]
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#d16d6d]
              hover:shadow-[0_0_25px_rgba(204,255,0,0.35)]
              sm:btn-md
            "
          >
            Contact
          </Link>

        </div>

      </div>
    </header>
  );
};

export default Navbar;