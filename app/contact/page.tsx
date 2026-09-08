"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSubmitted(false);
    setError("");
    setSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <section className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
            Get In Touch
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Let&apos;s Talk
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Have a project idea, question or opportunity? Send me a message
            and I&apos;ll get back to you.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-5">
          <div className="rounded-2xl bg-gray-900 p-8 text-white md:col-span-2">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-400">
              Contact Information
            </p>

            <h2 className="mt-4 text-2xl font-bold">
              Let&apos;s build something together.
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              I&apos;m always interested in new projects, ideas and
              opportunities to learn and create.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <p className="text-sm text-gray-500">Role</p>
                <p className="mt-1 font-medium">Web Developer in Progress</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Focus</p>
                <p className="mt-1 font-medium">Full-Stack Web Development</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Availability</p>
                <p className="mt-1 font-medium text-blue-400">
                  Open to opportunities
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:col-span-3 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-semibold text-gray-800"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-semibold text-gray-800"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-semibold text-gray-800"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or question..."
                  rows={6}
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>

            {submitted && (
              <p className="mt-6 rounded-lg bg-green-50 p-4 text-center font-semibold text-green-700">
                Message sent successfully! 🎉
              </p>
            )}

            {error && (
              <p className="mt-6 rounded-lg bg-red-50 p-4 text-center font-semibold text-red-700">
                {error}
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}