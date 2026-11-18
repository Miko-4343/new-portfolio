"use client";

import { site } from "@/lib/content";

// No backend: submitting opens the visitor's email app with the message filled in.
export default function ContactForm() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = `Portfolio message from ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="name">name</label>
        <input id="name" name="name" placeholder="Your name" required />
      </div>
      <div className="field">
        <label htmlFor="email">email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@company.com"
          required
        />
      </div>
      <div className="field">
        <label htmlFor="message">message</label>
        <textarea
          id="message"
          name="message"
          placeholder="What are you working on?"
          required
        />
      </div>
      <div className="form-foot">
        <button type="submit" className="btn btn-primary">
          [ send message ]
        </button>
      </div>
    </form>
  );
}
