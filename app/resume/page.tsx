import Link from "next/link";

export default function Resume() {
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
    "Responsive Web Design",
    "API Integration",
    "Basic Backend Development",
    "IT Troubleshooting",
  ];

  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A modern responsive portfolio website built to showcase my skills, projects and development journey.",
      technologies: "Next.js • React • TypeScript • Tailwind CSS",
    },
    {
      title: "Functional Contact Form System",
      description:
        "A functional contact system that allows visitors to submit messages through a website and have them processed through an API and email service.",
      technologies: "Next.js • Node.js • API Routes • Nodemailer",
    },
    {
      title: "Business Website",
      description:
        "A professional business website concept designed to showcase services and help businesses establish an online presence.",
      technologies: "HTML • CSS • JavaScript",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-950 px-6 py-20 text-white">
      <section className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8 md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
                Resume
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
                Newton <span className="text-blue-500">Obara Ongori</span>
              </h1>

              <p className="mt-4 text-xl font-medium text-gray-300">
                Information Technology Student | Aspiring Full-Stack Web
                Developer
              </p>

              <div className="mt-6 flex flex-col gap-2 text-sm text-gray-400 sm:flex-row sm:flex-wrap sm:gap-x-6">
                <span>📍 Kenya</span>
                <span>📞 +254 708 702 201</span>
                <span>✉️ toxylltechgit@gmail.com</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <a
                  href="https://github.com/Toxyll"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 transition hover:text-blue-300"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://linkedin.com/in/toxyll-undefined-7a26b9435"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 transition hover:text-blue-300"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Link
                href="/projects"
                className="rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
              >
                View Projects
              </Link>

              <a
                href="#"
                className="rounded-lg border border-gray-700 px-6 py-3 text-center font-semibold text-gray-300 transition hover:border-blue-500 hover:bg-gray-800 hover:text-white"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Professional Profile */}
        <section className="mt-10">
          <SectionTitle title="Professional Profile" />

          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8">
            <p className="leading-8 text-gray-400">
              I am an Information Technology student at the University of Embu
              with a strong interest in web development and software
              engineering. I enjoy building responsive, interactive and
              user-focused digital experiences while continuously improving my
              technical skills.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              My current development focus includes React, Next.js, TypeScript,
              Tailwind CSS, JavaScript, Node.js, APIs and Git/GitHub. I learn
              primarily through practical projects and hands-on problem
              solving.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              My long-term goal is to become a professional full-stack web
              developer capable of designing and developing reliable,
              scalable and useful web applications.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="mt-10">
          <SectionTitle title="Education" />

          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8">
            <div className="flex flex-col justify-between gap-2 md:flex-row">
              <div>
                <h3 className="text-xl font-bold">
                  Bachelor of Science in Information Technology
                </h3>

                <p className="mt-2 text-gray-400">University of Embu</p>
              </div>

              <span className="text-sm font-semibold text-blue-400">
                2023 – Present
              </span>
            </div>

            <p className="mt-5 leading-7 text-gray-400">
              Currently pursuing a Bachelor&apos;s degree with a focus on
              information technology, software development and practical
              computing skills.
            </p>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mt-10">
          <SectionTitle title="Technical Skills" />

          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 transition hover:border-blue-500 hover:bg-blue-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mt-10">
          <SectionTitle title="Industrial Attachment Experience" />

          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8">
            <div className="flex flex-col justify-between gap-2 md:flex-row">
              <div>
                <h3 className="text-xl font-bold">
                  IT Industrial Attachment Trainee
                </h3>

                <p className="mt-2 text-gray-400">Huduma Centre Embu</p>
              </div>

              <span className="text-sm font-semibold text-blue-400">
                May 2026 – August 2026
              </span>
            </div>

            <ul className="mt-6 space-y-3 text-gray-400">
              <li>
                • Worked with computer-based systems and digital platforms used
                in service delivery.
              </li>

              <li>
                • Assisted with data entry, document processing and digital
                record management.
              </li>

              <li>
                • Supported clients while using computer systems and digital
                service platforms.
              </li>

              <li>
                • Gained practical experience in basic IT troubleshooting and
                technical support.
              </li>

              <li>
                • Worked across Pension, ID & NPR, NTSA, SHA, Customer Care and
                KRA service sections.
              </li>

              <li>
                • Developed practical skills in information handling,
                communication and technology-supported service delivery.
              </li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mt-10">
          <SectionTitle title="Selected Projects" />

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-gray-800 bg-gray-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <h3 className="text-xl font-bold">{project.title}</h3>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                <p className="mt-5 text-sm font-medium text-blue-400">
                  {project.technologies}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Career Objective */}
        <section className="mt-10">
          <SectionTitle title="Career Objective" />

          <div className="rounded-2xl border border-blue-500/20 bg-blue-600/10 p-8">
            <p className="leading-8 text-gray-300">
              To gain professional experience in web development and software
              engineering while continuously improving my technical skills. I
              aim to contribute to real-world projects and develop reliable,
              responsive and user-focused digital solutions.
            </p>
          </div>
        </section>

        {/* References */}
        <section className="mt-10">
          <SectionTitle title="References" />

          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8">
            <p className="text-gray-400">
              References are available upon request.
            </p>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-3xl border border-gray-800 bg-gray-900 px-8 py-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
            Let&apos;s Connect
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Interested in Working With Me?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
            I&apos;m open to opportunities, collaborations, internships and
            projects that allow me to grow as a developer.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mb-5">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
        {title}
      </p>

      <div className="mt-3 h-1 w-12 rounded-full bg-blue-500"></div>
    </div>
  );
}