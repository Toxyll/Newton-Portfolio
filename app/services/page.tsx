import Link from "next/link";

export default function Services() {
  const services = [
    {
      number: "01",
      title: "Website Development",
      description:
        "I build responsive and modern websites designed to provide a smooth experience across phones, tablets and computers.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      number: "02",
      title: "React Development",
      description:
        "I create interactive interfaces using reusable React components and modern frontend development practices.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
    },
    {
      number: "03",
      title: "Next.js Development",
      description:
        "I build modern web applications using Next.js, with structured projects, responsive interfaces and scalable components.",
      technologies: ["Next.js", "React", "TypeScript"],
    },
    {
      number: "04",
      title: "Business Websites",
      description:
        "I create professional websites that help businesses showcase their services, establish an online presence and connect with customers.",
      technologies: ["Next.js", "React", "Tailwind CSS"],
    },
    {
      number: "05",
      title: "Website Improvements",
      description:
        "I can help improve existing websites by fixing interface issues, updating content and making pages more responsive and user-friendly.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      number: "06",
      title: "Web Application Development",
      description:
        "I am developing my skills toward building complete web applications with APIs, authentication, databases and backend functionality.",
      technologies: ["Next.js", "API", "Node.js"],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-950 px-6 py-20 text-white">
      <section className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
            What I Do
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
            My <span className="text-blue-500">Services</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400 md:text-xl">
            I use my growing development skills to create modern websites and
            digital solutions for individuals, businesses and organizations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-2xl border border-gray-800 bg-gray-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-blue-400">
                  {service.number}
                </span>

                <span className="text-xs uppercase tracking-widest text-gray-600">
                  Service
                </span>
              </div>

              <h2 className="mt-7 text-2xl font-bold transition group-hover:text-blue-400">
                {service.title}
              </h2>

              <p className="mt-4 leading-7 text-gray-400">
                {service.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {service.technologies.map((technology) => (
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

        {/* Development Journey */}
        <section className="mt-20">
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8 md:p-12">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
                  My Approach
                </p>

                <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                  From Idea to Digital Experience
                </h2>

                <p className="mt-5 leading-8 text-gray-400">
                  I focus on understanding what a project needs before
                  building it. My goal is to create interfaces that are
                  responsive, easy to use and structured for future
                  improvements.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
                <div className="rounded-xl border border-gray-800 bg-gray-950 p-5">
                  <p className="font-bold text-blue-400">01</p>
                  <p className="mt-2 font-semibold">Understand</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Understand the idea and requirements.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-800 bg-gray-950 p-5">
                  <p className="font-bold text-blue-400">02</p>
                  <p className="mt-2 font-semibold">Build</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Design and develop the solution.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-800 bg-gray-950 p-5">
                  <p className="font-bold text-blue-400">03</p>
                  <p className="mt-2 font-semibold">Improve</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Test, refine and improve the experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16">
          <div className="rounded-3xl border border-blue-500/20 bg-blue-600/10 px-8 py-14 text-center md:px-16">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
              Let&apos;s Work Together
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Have a Project in Mind?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">
              Whether you need a personal website, business website or web
              application, let&apos;s discuss your idea and turn it into
              something real.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20"
              >
                Start a Conversation
              </Link>

              <Link
                href="/projects"
                className="rounded-lg border border-gray-700 px-8 py-3 font-semibold text-white transition duration-300 hover:border-blue-500 hover:bg-gray-900"
              >
                View My Work
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}