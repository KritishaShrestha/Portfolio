import React, { useState } from "react";

const CONTACT_EMAIL =
  (import.meta as { env?: { VITE_CONTACT_EMAIL?: string } }).env
    ?.VITE_CONTACT_EMAIL || "kritishashrestha2004@gmail.com";

type FormState = {
  name: string;
  email: string;
  scope: string;
  message: string;
};

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    scope: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!CONTACT_EMAIL?.trim()) {
      setStatus("error");
      setStatusMessage(
        "Set VITE_CONTACT_EMAIL in your environment to receive form messages.",
      );
      return;
    }

    setStatus("sending");
    setStatusMessage("Submitting your request...");

    const subject = `QA Support Request - ${form.scope}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Testing Scope: ${form.scope}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            _subject: subject,
            message: body,
            _captcha: "false",
            _template: "table",
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Form endpoint returned a non-success response.");
      }

      setStatus("success");
      setStatusMessage("Your request has been sent successfully.");
      setForm({
        name: "",
        email: "",
        scope: "",
        message: "",
      });
    } catch {
      const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
      setStatus("success");
      setStatusMessage(
        "Could not submit in browser. Opened your mail app as fallback.",
      );
    }
  };

  const labelClass =
    "text-xs md:text-sm font-semibold uppercase tracking-[0.12em] text-slate-600 dark:text-slate-500";
  const fieldClass =
    "w-full pb-3 bg-transparent border-0 border-b border-slate-400/70 dark:border-slate-600 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-500 focus:outline-none focus:border-slate-900 dark:focus:border-slate-300 transition-colors";

  return (
    <section
      id="contact"
      className="h-[100svh] flex items-center bg-white dark:bg-slate-900/50 transition-colors"
    >
      <div className="max-w-5xl w-full mx-auto px-5 md:px-6 mt-8 md:mt-14">
        <div className="rounded-[1.6rem] overflow-hidden border border-slate-200 dark:border-transparent shadow-[0_24px_70px_-38px_rgba(15,23,42,0.45)] dark:shadow-[0_28px_80px_-42px_rgba(96,165,250,0.16)] bg-white dark:bg-slate-900">
          <div className="grid lg:grid-cols-[0.95fr_1.35fr]">
            <div className="relative px-7 py-6 md:px-10 md:py-7 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:bg-gradient-to-br dark:from-slate-800 dark:via-[#1e293b] dark:to-slate-950 text-slate-900 dark:text-white lg:border-r border-transparent dark:lg:border-transparent">
              <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_20%_15%,rgba(148,163,184,0.14),transparent_42%),radial-gradient(circle_at_85%_80%,rgba(99,102,241,0.12),transparent_42%)]" />
              <div className="relative z-10 flex min-h-full flex-col">
                <div className="flex-1 flex items-center">
                  <div className="w-full">
                    <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-[1.1]">
                      Let's{" "}
                      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        connect.
                      </span>
                    </h2>
                    <p className="mt-4 text-slate-600 dark:text-slate-400 font-light text-base md:text-md max-w-md leading-relaxed">
                      Have a product you'd like tested with care? Share a few
                      details, and I&apos;ll help you improve quality through
                      clear test planning, thoughtful bug reporting, and
                      release-ready validation.
                    </p>
                  </div>
                </div>
                <div className="pt-8">
                  <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                    Available for freelance and full-time positions
                  </p>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-slate-900 px-7 py-6 md:px-10 md:py-7 lg:border-l lg:border-slate-200 dark:lg:border-transparent"
            >
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-3">
                    <label className={labelClass}>Your Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className={fieldClass}
                      // placeholder="John Doe"
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <label className={labelClass}>Email Address</label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className={fieldClass}
                      // placeholder="john@example.com"
                      type="email"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className={labelClass}>Testing Scope</label>
                  <input
                    name="scope"
                    value={form.scope}
                    onChange={handleChange}
                    className={fieldClass}
                    // placeholder="Web app, mobile app, API, or end-to-end flow"
                    type="text"
                    required
                  />
                </div>

                <div className="space-y-3">
                  <label className={labelClass}>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className={`${fieldClass} min-h-16 resize-y`}
                    // placeholder="Tell me what you'd like tested, any current issues, your environment, and your timeline..."
                    rows={3}
                    required
                  ></textarea>
                </div>

                <button
                  className="w-full py-3.5 bg-slate-800 dark:bg-slate-100 text-white dark:text-slate-900 rounded-xl font-bold transition-all hover:bg-slate-700 dark:hover:bg-white hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-2"
                  type="submit"
                  disabled={status === "sending"}
                >
                  {status === "sending"
                    ? "Preparing Your Message..."
                    : "Send Message"}
                  {status !== "sending" && (
                    <span className="material-symbols-outlined text-xl rotate-[-30deg] -translate-y-0.5">
                      send
                    </span>
                  )}
                </button>

                {status !== "idle" && (
                  <p
                    className={`text-sm text-center ${
                      status === "error"
                        ? "text-rose-600 dark:text-rose-400"
                        : "text-emerald-600 dark:text-emerald-400"
                    }`}
                  >
                    {statusMessage}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
