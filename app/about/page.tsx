import Link from "next/link";

export default function About() {
  const technologies = [
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

  const strengths = [
    {
      number: "01",
      title: "Problem Solving",
      description:
        "I enjoy breaking problems into smaller parts, understanding how systems work and finding practical solutions.",
    },
    {
      number: "02",
      title: "Continuous Learning",
      description:
        "Technology is constantly changing, so I continuously learn new tools, concepts and development techniques.",
    },
    {
      number: "03",
      title: "Learning by Building",
      description:
        "I improve my development skills by turning what I learn into practical projects and working applications.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-950 px-6 py-20 text-white">
      <section className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
            About Me
          </p>

          <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Building My Journey as a{" "}
            <span className="text-blue-500">Developer.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">
            I&apos;m Newton Toxyll, an Information Technology student at the
            University of Embu with a strong interest in web development and
            software engineering.
          </p>
        </div>

        {/* Introduction */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              Who I Am
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              An IT Student With a Passion for Technology
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              I am currently pursuing a Bachelor of Science in Information
              Technology at the University of Embu. My main area of interest
              is web development, where I enjoy creating modern and responsive
              websites and applications.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              I&apos;m particularly interested in understanding how frontend
              interfaces, APIs, backend systems and databases work together to
              create complete digital solutions.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              My Approach
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Learn. Build. Improve.
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              I believe practical experience is one of the best ways to
              become a better developer. Instead of only learning theory, I
              focus on applying what I learn by building real projects.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              Every project gives me an opportunity to solve problems,
              understand new concepts and improve the way I write and
              structure code.
            </p>
          </div>
        </div>

        {/* Strengths */}
        <section className="mt-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
              What Drives Me
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              My Development Mindset
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {strengths.map((strength) => (
              <article
                key={strength.number}
                className="rounded-2xl border border-gray-800 bg-gray-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <span className="text-sm font-bold text-blue-400">
                  {strength.number}
                </span>

                <h3 className="mt-6 text-2xl font-bold">
                  {strength.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {strength.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Current Learning */}
        <section className="mt-16">
          <div className="rounded-3xl border border-blue-500/20 bg-blue-600/10 p-8 md:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
              Currently Learning
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Moving Toward Full-Stack Development
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-gray-400">
              My current focus is on strengthening my frontend development
              skills while gradually expanding into backend development. I am
              learning how to build applications using React and Next.js and
              how to connect them with APIs, databases and backend services.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-gray-800 bg-gray-950/70 p-5">
                <p className="font-semibold">Frontend</p>
                <p className="mt-2 text-sm text-gray-500">
                  React, Next.js & Tailwind
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-gray-950/70 p-5">
                <p className="font-semibold">Programming</p>
                <p className="mt-2 text-sm text-gray-500">
                  JavaScript & TypeScript
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-gray-950/70 p-5">
                <p className="font-semibold">Backend</p>
                <p className="mt-2 text-sm text-gray-500">
                  Node.js, APIs & databases
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-gray-950/70 p-5">
                <p className="font-semibold">Tools</p>
                <p className="mt-2 text-sm text-gray-500">
                  Git, GitHub & VS Code
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mt-16">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
            My Stack
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Technologies I Work With
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            These are some of the technologies I currently use or am actively
            learning through practical development.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-gray-700 bg-gray-900 px-5 py-2 font-medium text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* Goals */}
        <section className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              Short-Term Goal
            </p>

            <h2 className="mt-4 text-2xl font-bold">
              Become Stronger Through Real Projects
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              My immediate goal is to continue building practical projects,
              strengthen my frontend and backend skills and gain experience
              working with real-world development workflows.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              Long-Term Goal
            </p>

            <h2 className="mt-4 text-2xl font-bold">
              Become a Professional Full-Stack Developer
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              I aim to become a professional developer capable of designing
              and building reliable, scalable and user-focused web
              applications from frontend to backend.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16">
          <div className="rounded-3xl border border-gray-800 bg-gray-900 px-8 py-12 text-center md:px-16">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
              Let&apos;s Connect
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Have a Project or Opportunity?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-400">
              I&apos;m open to learning opportunities, collaborations,
              internships and projects that allow me to grow as a developer.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20"
              >
                Contact Me
              </Link>

              <Link
                href="/projects"
                className="rounded-lg border border-gray-700 px-8 py-3 font-semibold text-white transition duration-300 hover:border-blue-500 hover:bg-gray-800"
              >
                View My Projects
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}