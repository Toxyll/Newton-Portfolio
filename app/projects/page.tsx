export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "My First Website",
      description:
        "A responsive personal website built while learning Next.js, React and Tailwind CSS.",
      technologies: ["Next.js", "React", "Tailwind CSS"],
    },
    {
      number: "02",
      title: "Business Website",
      description:
        "A modern website concept designed to help a business present its services and connect with customers.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      number: "03",
      title: "Future Project",
      description:
        "A new web application that I will build as I continue developing my full-stack development skills.",
      technologies: ["React", "Next.js", "Database"],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <section className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
            My Work
          </p>

          <h1 className="mt-4 text-5xl font-bold text-gray-900 md:text-6xl">
            My Projects
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Here are some of the projects I have built or plan to build as I
            continue my journey as a web developer.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.number}
              className="rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <span className="text-sm font-bold text-blue-600">
                {project.number}
              </span>

              <h2 className="mt-6 text-2xl font-bold text-gray-900">
                {project.title}
              </h2>

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
      </section>
    </main>
  );
}