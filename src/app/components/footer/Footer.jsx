"use client";

import Link from "next/link";
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full max-w-[1320px] mx-auto px-4 mb-8 mt-20">
      <div
        className="
          rounded-3xl
          border border-white/20
          dark:border-white/30
          bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(139,92,246,0.1),transparent_35%),rgba(255,255,255,0.9)]
          dark:bg-[#030b2e]/90
          backdrop-blur-xl
          shadow-[0_10px_30px_rgba(30,64,175,0.12)]
          dark:shadow-[0_0_30px_rgba(255,255,255,0.15)]
          text-slate-800
          dark:text-slate-100
          p-8
          md:p-12
          transition-all
          duration-300
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-between">

          {/* ================= LEFT: LOGO & BIO ================= */}
          <div className="space-y-3 text-center md:text-left">
            <Link
              href="/"
              className="
                text-2xl
                font-bold
                tracking-wide
                text-slate-500
                dark:text-cyan-300
                hover:text-primary
                dark:hover:text-cyan-200
                transition-colors
                duration-300
              "
            >
              Nazmul Hossain
            </Link>

            <p className="text-sm text-gray-600 dark:text-slate-300 max-w-sm">
              Building modern, responsive, and user-friendly web applications
              using React, Next.js, and Tailwind CSS.
            </p>
          </div>

          {/* ================= CENTER: QUICK LINKS ================= */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <Link
              href="/"
              className="
                text-slate-500
                dark:text-slate-200
                hover:text-primary
                dark:hover:text-cyan-300
                transition-colors
                duration-300
              "
            >
              Home
            </Link>

            <Link
              href="/about"
              className="
               text-slate-500
                dark:text-slate-200
                hover:text-primary
                dark:hover:text-cyan-300
                transition-colors
                duration-300
              "
            >
              About
            </Link>

            <Link
              href="/skills"
              className="
                text-slate-500
                dark:text-slate-200
                hover:text-primary
                dark:hover:text-cyan-300
                transition-colors
                duration-300
              "
            >
              Skills
            </Link>

            <Link
              href="/projects"
              className="
                text-slate-500
                dark:text-slate-200
                hover:text-primary
                dark:hover:text-cyan-300
                transition-colors
                duration-300
              "
            >
              Projects
            </Link>

            <Link
              href="/contact"
              className="
                text-slate-500
                dark:text-slate-200
                hover:text-primary
                dark:hover:text-cyan-300
                transition-colors
                duration-300
              "
            >
              Contact
            </Link>
          </div>

          {/* ================= RIGHT: SOCIAL ICONS ================= */}
          <div className="flex justify-center md:justify-end gap-4">

            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                p-3
                rounded-full
                bg-white/50
                dark:bg-white/10
                text-slate-800
                dark:text-slate-200
                hover:bg-primary
                hover:text-white
                dark:hover:bg-cyan-400
                dark:hover:text-[#030b2e]
                transition-all
                duration-300
              "
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                p-3
                rounded-full
                bg-white/50
                dark:bg-white/10
                text-slate-800
                dark:text-slate-200
                hover:bg-primary
                hover:text-white
                dark:hover:bg-cyan-400
                dark:hover:text-[#030b2e]
                transition-all
                duration-300
              "
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                p-3
                rounded-full
             bg-white/50
                dark:bg-white/10
                text-slate-800
                dark:text-slate-200
                hover:bg-primary
                hover:text-white
                dark:hover:bg-cyan-400
                dark:hover:text-[#030b2e]
                transition-all
                duration-300
              "
              aria-label="Twitter"
            >
              <FaTwitter className="h-5 w-5" />
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                p-3
                rounded-full
             bg-white/50
                dark:bg-white/10
                text-slate-800
                dark:text-slate-200
                hover:bg-primary
                hover:text-white
                dark:hover:bg-cyan-400
                dark:hover:text-[#030b2e]
                transition-all
                duration-300
              "
              aria-label="Facebook"
            >
              <FaFacebook className="h-5 w-5" />
            </a>

          </div>
        </div>

        {/* ================= DIVIDER & COPYRIGHT ================= */}
        <div
          className="
            border-t
            border-gray-300/40
            dark:border-white/10
            mt-8
            pt-6
            text-center
            text-sm
            text-gray-600
            dark:text-slate-100
          "
        >
          <p>
            © {new Date().getFullYear()} Nazmul Hossain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;