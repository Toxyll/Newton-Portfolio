import Link from "next/link";

export default function Home() {
  const projects = [
    {
      number: "01",
      title: "My First Website",
      description:
        "A responsive personal website built with Next.js, React and Tailwind CSS.",
      technologies: ["Next.js", "React", "Tailwind CSS"],
    },
    {
      number: "02",
      title: "Business Website",
      description:
        "A modern website concept designed to help a business showcase its services and connect with customers.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      number: "03",
      title: "Future Web App",
      description:
        "A future web application that I will build as I continue developing my full-stack development skills.",
      technologies: ["React", "Next.js", "Database"],
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Git",
    "GitHub",
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-950 px-6 py-24 text-white md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
              Web Developer in Progress
            </p>

            <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
              Hi, I&apos;m{" "}
              <span className="text-blue-500">Newton Toxyll.</span>
            </h1>

            <h2 className="mt-6 text-2xl font-semibold text-gray-300 md:text-4xl">
              I Build Modern Websites & Web Applications
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl">
              I&apos;m an Information Technology student passionate about web
              development. I build responsive, interactive and useful digital
              experiences while continuously improving my skills.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/projects"
                className="rounded-lg bg-blue-600 px-7 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
              >
                View My Projects
              </Link>

              <Link
                href="/contact"
                className="rounded-lg border border-gray-700 px-7 py-3 text-center font-semibold text-white transition hover:bg-gray-800"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid max-w-3xl gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
              <p className="text-3xl font-bold text-blue-400">8+</p>
              <p className="mt-2 text-sm text-gray-400">Technologies</p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
              <p className="text-3xl font-bold text-blue-400">3+</p>
              <p className="mt-2 text-sm text-gray-400">Projects</p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
              <p className="text-3xl font-bold text-blue-400">∞</p>
              <p className="mt-2 text-sm text-gray-400">Ideas to Build</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
              My Work
            </p>

            <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Featured Projects
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Projects I have built or plan to build as I continue my journey
              as a web developer.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.number}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="text-sm font-bold text-blue-600">
                  {project.number}
                </span>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-block rounded-lg bg-black px-7 py-3 font-semibold text-white transition hover:bg-gray-800"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
            My Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Technologies I&apos;m Learning
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            I&apos;m continuously improving my skills by building real
            projects and learning modern web development technologies.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-gray-200 bg-white px-5 py-2 font-medium text-gray-700 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-blue-600 px-8 py-12 text-center md:px-16">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Have an Idea for a Website?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-blue-100">
            Whether it&apos;s a personal website, business website or web
            application, let&apos;s turn your idea into something real.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  );
}