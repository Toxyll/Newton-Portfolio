import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "Personal Portfolio Website",
      description:
        "A modern responsive portfolio website built to showcase my skills, projects and development journey as an Information Technology student and aspiring full-stack developer.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      status: "Completed",
      featured: true,
      github: "https://github.com/Toxyll/Newton-Portfolio",
      live: "https://newton-portfolio-eta.vercel.app",
    },
    {
      number: "02",
      title: "Functional Contact Form System",
      description:
        "A working contact system that allows visitors to submit messages through the portfolio and have them processed through an API and email service.",
      technologies: ["Next.js", "Node.js", "API", "Nodemailer"],
      status: "Completed",
      featured: false,
      github: "",
      live: "",
    },
    {
      number: "03",
      title: "Business Website",
      description:
        "A professional business website concept designed to showcase services, provide useful information and help businesses establish an online presence.",
      technologies: ["HTML", "CSS", "JavaScript"],
      status: "In Progress",
      featured: false,
      github: "",
      live: "",
    },
    {
      number: "04",
      title: "Full-Stack Web Application",
      description:
        "A future application combining a modern frontend with APIs, authentication, database functionality and backend services.",
      technologies: ["React", "Next.js", "API", "Database"],
      status: "Coming Soon",
      featured: false,
      github: "",
      live: "",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-950 px-6 py-20 text-white">
      <section className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
            My Work
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
            My <span className="text-blue-500">Projects</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400 md:text-xl">
            A collection of projects I have built, projects currently in
            development and ideas I plan to turn into real applications.
          </p>
        </div>

        {/* Featured Project */}
        <section className="mt-16">
          <div className="overflow-hidden rounded-3xl border border-blue-500/30 bg-gray-900 shadow-2xl shadow-blue-500/5">
            <div className="grid md:grid-cols-2">
              {/* Preview */}
              <div className="relative min-h-[320px] overflow-hidden border-b border-gray-800 bg-gray-950 md:border-b-0 md:border-r">
                <div className="flex items-center gap-2 border-b border-gray-800 bg-gray-900 px-5 py-4">
                  <span className="h-3 w-3 rounded-full bg-red-500/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <span className="h-3 w-3 rounded-full bg-green-500/70" />

                  <div className="ml-3 flex-1 rounded-md border border-gray-800 bg-gray-950 px-3 py-1 text-xs text-gray-600">
                    newton-portfolio-eta.vercel.app
                  </div>
                </div>

                <div className="flex min-h-[270px] items-center justify-center bg-gradient-to-br from-gray-950 via-blue-950/40 to-gray-950 px-8">
                  <div className="text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
                      Featured Project
                    </p>

                    <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                      Newton Portfolio
                    </h2>

                    <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-blue-500" />
                  </div>
                </div>
              </div>

              {/* Featured Content */}
              <div className="p-8 md:p-10">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-bold text-blue-400">
                    PROJECT 01
                  </span>

                  <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                    Completed
                  </span>
                </div>

                <h2 className="mt-6 text-3xl font-bold md:text-4xl">
                  Personal Portfolio Website
                </h2>

                <p className="mt-5 leading-8 text-gray-400">
                  A complete developer portfolio built to present my
                  technical skills, projects, resume and development journey
                  in a professional way.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {projects[0].technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={projects[0].live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-lg bg-blue-600 px-5 py-3 text-center font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    View Live ↗
                  </a>

                  <a
                    href={projects[0].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-lg border border-gray-700 px-5 py-3 text-center font-semibold text-white transition duration-300 hover:border-blue-500 hover:bg-gray-800"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Projects */}
        <section className="mt-16">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
                Other Work
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                More Projects
              </h2>
            </div>

            <p className="max-w-xl leading-7 text-gray-500">
              These projects represent my continued learning and progression
              toward full-stack development.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {projects.slice(1).map((project) => (
              <article
                key={project.number}
                className="group flex flex-col rounded-2xl border border-gray-800 bg-gray-900 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10"
              >
                {/* Project Number */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-blue-400">
                    {project.number}
                  </span>

                  <span className="rounded-full border border-gray-700 bg-gray-950 px-3 py-1 text-xs text-gray-500">
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-6 text-2xl font-bold transition group-hover:text-blue-400">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-4 flex-1 leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-gray-700 bg-gray-950 px-3 py-1 text-xs font-medium text-gray-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* GitHub CTA */}
        <section className="mt-20">
          <div className="rounded-3xl border border-gray-800 bg-gray-900 px-8 py-12 text-center md:px-16">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
              Explore My Code
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              More Projects Are Coming
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-400">
              I&apos;m continuously learning and building new projects. As my
              skills grow, this portfolio will continue to evolve with more
              real-world applications.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://github.com/Toxyll"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20"
              >
                Visit My GitHub ↗
              </a>

              <Link
                href="/contact"
                className="rounded-lg border border-gray-700 px-8 py-3 font-semibold text-white transition duration-300 hover:border-blue-500 hover:bg-gray-800"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}