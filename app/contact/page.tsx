"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(data.error || "Failed to send message.");
      }
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-950 px-6 py-20 text-white">
      <section className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
            Get In Touch
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
            Let&apos;s <span className="text-blue-500">Talk.</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400 md:text-xl">
            Have a project idea, opportunity or question? Send me a message
            and let&apos;s start a conversation.
          </p>
        </div>

        {/* Contact Content */}
        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          {/* Information */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                Contact Me
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Let&apos;s Build Something
              </h2>

              <p className="mt-5 leading-8 text-gray-400">
                Whether you need a personal website, business website or a
                custom web application, I&apos;m interested in discussing new
                ideas and opportunities.
              </p>

              {/* Contact Details */}
              <div className="mt-10 space-y-7">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-600">
                    Email
                  </p>

                  <p className="mt-2 text-gray-300">
                    toxylltechgit@gmail.com
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-600">
                    Location
                  </p>

                  <p className="mt-2 text-gray-300">Kenya</p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-600">
                    Availability
                  </p>

                  <p className="mt-2 leading-7 text-gray-300">
                    Open to projects, collaborations and development
                    opportunities.
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 border-t border-gray-800 pt-8">
                <p className="text-sm font-semibold text-gray-400">
                  Find Me Online
                </p>

                <div className="mt-4 flex gap-4">
                  <a
                    href="https://github.com/Toxyll"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium text-gray-300 transition hover:border-blue-500 hover:text-blue-400"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href="https://linkedin.com/in/toxyll-undefined-7a26b9435"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium text-gray-300 transition hover:border-blue-500 hover:text-blue-400"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8 md:p-10">
              <div className="mb-8">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                  Send a Message
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  Tell Me About Your Idea
                </h2>

                <p className="mt-3 text-gray-500">
                  Fill in the form below and I&apos;ll receive your message by
                  email.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    rows={7}
                    required
                    className="w-full resize-none rounded-lg border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {/* Status */}
                {status && (
                  <div className="rounded-lg border border-gray-700 bg-gray-950 px-4 py-3 text-center text-sm text-gray-300">
                    {status}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="mt-16">
          <div className="rounded-3xl border border-blue-500/20 bg-blue-600/10 px-8 py-14 text-center md:px-16">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
              Start Something New
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Ready to Turn an Idea Into Reality?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">
              I&apos;m always interested in learning, building and working on
              meaningful technology projects.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/projects"
                className="rounded-lg border border-gray-700 px-8 py-3 font-semibold text-white transition duration-300 hover:border-blue-500 hover:bg-gray-900"
              >
                View My Projects
              </Link>

              <Link
                href="/resume"
                className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700"
              >
                View My Resume
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}