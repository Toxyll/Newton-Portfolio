import Link from "next/link";

export default function Services() {
  const services = [
    {
      number: "01",
      title: "Web Development",
      description:
        "Building modern, responsive and user-friendly websites for individuals, businesses and organizations.",
      features: [
        "Responsive design",
        "Modern technologies",
        "Mobile-friendly layouts",
      ],
    },
    {
      number: "02",
      title: "UI Design",
      description:
        "Creating clean and attractive user interfaces that provide a simple and enjoyable experience across different devices.",
      features: [
        "Clean layouts",
        "User-friendly interfaces",
        "Responsive designs",
      ],
    },
    {
      number: "03",
      title: "Website Maintenance",
      description:
        "Updating, improving and maintaining websites to keep them secure, functional and up to date.",
      features: [
        "Content updates",
        "Performance improvements",
        "Technical support",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <section className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
            What I Do
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
            My Services
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            I build digital solutions that are modern, responsive and
            designed to solve real-world problems.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.number}
              className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-blue-600">
                  {service.number}
                </span>

                <span className="text-2xl text-gray-300 transition group-hover:text-blue-600">
                  →
                </span>
              </div>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">
                {service.title}
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                {service.description}
              </p>

              <div className="mt-7 border-t border-gray-100 pt-6">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Includes
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <span className="text-blue-600">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call To Action */}
        <div className="mt-16 rounded-3xl bg-gray-900 px-8 py-12 text-center md:px-16">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
            Have a Project?
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Let&apos;s Build Something Great
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-300">
            Have an idea for a website or web application? I&apos;d love to
            hear about it and explore how we can turn the idea into reality.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}