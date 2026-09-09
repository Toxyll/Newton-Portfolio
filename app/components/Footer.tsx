import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold transition hover:text-blue-400"
            >
              Newton<span className="text-blue-500">.</span>
            </Link>

            <p className="mt-4 max-w-sm leading-7 text-gray-400">
              Information Technology student and aspiring full-stack web
              developer building modern and useful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold">Quick Links</h2>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="/"
                className="text-gray-400 transition hover:text-blue-400"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-gray-400 transition hover:text-blue-400"
              >
                About
              </Link>

              <Link
                href="/services"
                className="text-gray-400 transition hover:text-blue-400"
              >
                Services
              </Link>

              <Link
                href="/projects"
                className="text-gray-400 transition hover:text-blue-400"
              >
                Projects
              </Link>

              <Link
                href="/resume"
                className="text-gray-400 transition hover:text-blue-400"
              >
                Resume
              </Link>

              <Link
                href="/contact"
                className="text-gray-400 transition hover:text-blue-400"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h2 className="text-lg font-semibold">Connect With Me</h2>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="https://github.com/Toxyll"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-blue-400"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/toxyll-undefined-7a26b9435"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-blue-400"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Newton Toxyll. All rights reserved.
          </p>

          <p className="mt-2 text-sm text-gray-600">
            Built with Next.js, React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}