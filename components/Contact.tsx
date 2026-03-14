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

  return (
    <section
      id="contact"
      className="h-[100svh] overflow-hidden py-10 md:py-12 flex items-center bg-slate-50 dark:bg-slate-900/50 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 h-full w-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center w-full">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-5 text-slate-900 dark:text-white tracking-tight">
              Let&apos;s Connect
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-light text-lg max-w-xl leading-relaxed">
              Have a product you'd like tested with care? Share a few details,
              and I&apos;ll help you improve quality through clear test
              planning, thoughtful bug reporting, and release-ready validation.
            </p>
      
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm max-h-full overflow-auto lg:mt-20"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-1">
                  Your Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600 text-slate-900 dark:text-white"
                  placeholder="John Doe"
                  type="text"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-1">
                  Email Address
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600 text-slate-900 dark:text-white"
                  placeholder="john@example.com"
                  type="email"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-1">
                Testing Scope
              </label>
              <input
                name="scope"
                value={form.scope}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600 text-slate-900 dark:text-white"
                placeholder="Web app, mobile app, API, or end-to-end flow"
                type="text"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-1">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600 text-slate-900 dark:text-white"
                placeholder="Tell me what you'd like tested, any current issues, your environment, and your timeline..."
                rows={4}
                required
              ></textarea>
            </div>
            <button
              className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold transition-all hover:bg-slate-800 dark:hover:bg-slate-200 hover:shadow-xl active:scale-[0.98]"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending"
                ? "Preparing Your Message..."
                : "Send Message"}
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
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
