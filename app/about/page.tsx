import Link from "next/link";

export default function About() {
  const technologies = [
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
    <main className="min-h-screen bg-white px-6 py-20">
      <section className="mx-auto max-w-5xl">
        {/* Introduction */}
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
            About Me
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Hi, I&apos;m Newton Toxyll.
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            I&apos;m an Information Technology student with a strong interest
            in web development and technology. I enjoy learning how modern
            websites and applications work and turning ideas into real
            digital experiences.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            My journey into web development involves learning by building
            projects, solving problems and continuously improving my
            technical skills. I believe the best way to become a better
            developer is to keep creating and experimenting with real
            applications.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            My goal is to become a professional full-stack web developer
            capable of building modern, reliable and useful applications for
            individuals, businesses and organizations.
          </p>
        </div>

        {/* Current Learning */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Currently Learning
            </p>

            <h2 className="mt-3 text-2xl font-bold text-gray-900">
              Building My Developer Skills
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              I&apos;m currently focusing on modern frontend and full-stack
              development using React and Next.js. I&apos;m also learning how
              to work with APIs, databases, authentication and backend
              technologies.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              My Goal
            </p>

            <h2 className="mt-3 text-2xl font-bold text-gray-900">
              Become a Full-Stack Developer
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              I want to progress from building simple websites to creating
              complete applications with professional frontend interfaces,
              powerful backend systems and databases.
            </p>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Technologies I Use
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 font-medium text-gray-700"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-gray-900 px-8 py-10 text-center">
          <h2 className="text-3xl font-bold text-white">
            Let&apos;s Build Something
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
            I&apos;m always interested in learning, building new projects and
            exploring ideas in technology.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  );
}