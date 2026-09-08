import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-gray-900"
            >
              Newton<span className="text-blue-600">.</span>
            </Link>

            <p className="mt-2 text-sm text-gray-500">
              Web Developer in Progress
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
            >
              About
            </Link>

            <Link
              href="/services"
              className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
            >
              Services
            </Link>

            <Link
              href="/projects"
              className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
            >
              Projects
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
            >
              Contact
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2026 Newton Toxyll. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}