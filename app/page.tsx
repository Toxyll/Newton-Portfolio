import Link from "next/link";

export default function Home() {
  const projects = [
    {
      number: "01",
      title: "My Portfolio Website",
      description:
        "A modern personal portfolio built to showcase my development skills, projects and journey in Information Technology.",
      technologies: ["Next.js", "React", "TypeScript"],
    },
    {
      number: "02",
      title: "Contact Form System",
      description:
        "A functional contact system that allows visitors to submit messages which are processed through an API and delivered by email.",
      technologies: ["Next.js", "API", "Nodemailer"],
    },
    {
      number: "03",
      title: "Business Website",
      description:
        "A professional website concept designed to help businesses showcase their services and connect with customers online.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ];

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Git",
    "GitHub",
  ];

  return (
    <main className="bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-gray-800 px-6 py-24 md:py-32">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
              Available for opportunities & projects
            </div>

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
              Information Technology Student
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Hi, I&apos;m{" "}
              <span className="text-blue-500">Newton Toxyll.</span>
            </h1>

            <h2 className="mt-6 max-w-3xl text-2xl font-semibold leading-relaxed text-gray-300 md:text-4xl">
              I Build Modern Websites & Web Applications
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl">
              I&apos;m an Information Technology student passionate about web
              development. I build responsive, interactive and useful digital
              experiences while continuously improving my development skills.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/projects"
                className="rounded-lg bg-blue-600 px-7 py-3 text-center font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20"
              >
                View My Projects
              </Link>

              <Link
                href="/contact"
                className="rounded-lg border border-gray-700 px-7 py-3 text-center font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-gray-900"
              >
                Let&apos;s Talk
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid max-w-3xl gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-gray-800 bg-gray-900/80 p-6 backdrop-blur">
                <p className="text-3xl font-bold text-blue-400">10+</p>
                <p className="mt-2 text-sm text-gray-400">
                  Technologies
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-gray-900/80 p-6 backdrop-blur">
                <p className="text-3xl font-bold text-blue-400">3+</p>
                <p className="mt-2 text-sm text-gray-400">Projects</p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-gray-900/80 p-6 backdrop-blur">
                <p className="text-3xl font-bold text-blue-400">∞</p>
                <p className="mt-2 text-sm text-gray-400">
                  Ideas to Build
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="border-b border-gray-800 bg-gray-900 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
              About Me
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Learning by Building
            </h2>
          </div>

          <div>
            <p className="leading-8 text-gray-400">
              I&apos;m currently pursuing a Bachelor of Science in Information
              Technology at the University of Embu. My main focus is web
              development, where I&apos;m learning how to build modern
              interfaces and complete web applications.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              I believe the best way to improve as a developer is by building
              real projects, solving problems and continuously experimenting
              with new technologies.
            </p>

            <Link
              href="/about"
              className="mt-7 inline-block font-semibold text-blue-400 transition hover:text-blue-300"
            >
              Learn More About Me →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="border-b border-gray-800 bg-gray-950 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
              My Work
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Featured Projects
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">
              A selection of projects I have built and projects currently
              forming part of my development journey.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group rounded-2xl border border-gray-800 bg-gray-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-blue-400">
                    {project.number}
                  </span>

                  <span className="text-xs uppercase tracking-wider text-gray-600">
                    Project
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-block rounded-lg border border-gray-700 px-7 py-3 font-semibold text-white transition hover:border-blue-500 hover:bg-gray-900"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-b border-gray-800 bg-gray-900 px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
            My Stack
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Technologies I&apos;m Learning
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            I&apos;m continuously expanding my technical skills through
            practical projects and hands-on development.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-gray-700 bg-gray-950 px-5 py-2 font-medium text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-950 px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-blue-500/20 bg-blue-600/10 px-8 py-14 text-center md:px-16">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
            Let&apos;s Work Together
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Have an Idea for a Website?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            Whether it&apos;s a personal website, business website or web
            application, let&apos;s turn your idea into something real.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Get In Touch
            </Link>

            <Link
              href="/resume"
              className="rounded-lg border border-gray-700 px-8 py-3 font-semibold text-white transition duration-300 hover:border-blue-500 hover:bg-gray-900"
            >
              View My Resume
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}