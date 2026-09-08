"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b bg-white">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Newton<span className="text-blue-600">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-6 md:flex">
            <Link
              href="/"
              className="font-medium text-gray-700 transition hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="font-medium text-gray-700 transition hover:text-blue-600"
            >
              About
            </Link>

            <Link
              href="/services"
              className="font-medium text-gray-700 transition hover:text-blue-600"
            >
              Services
            </Link>

            <Link
              href="/projects"
              className="font-medium text-gray-700 transition hover:text-blue-600"
            >
              Projects
            </Link>

            <Link
              href="/contact"
              className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-800 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mt-4 flex flex-col gap-4 border-t pt-4 md:hidden">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-gray-700"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-gray-700"
            >
              About
            </Link>

            <Link
              href="/services"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-gray-700"
            >
              Services
            </Link>

            <Link
              href="/projects"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-gray-700"
            >
              Projects
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-blue-600"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}