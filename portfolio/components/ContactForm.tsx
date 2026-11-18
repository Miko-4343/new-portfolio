"use client";

import { useState, useRef } from "react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const data = new FormData(e.currentTarget);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    try {
      const res = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        const msg = Array.isArray(errorData?.message)
          ? errorData.message[0]
          : errorData?.message || "Something went wrong. Please try again.";
        setStatus({ type: "error", text: msg });
        return;
      }

      setStatus({ type: "success", text: "Message successfully sent." });
      formRef.current?.reset();
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        text: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form ref={formRef} className="form" onSubmit={onSubmit}>
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

      <div className="privacy-box">
        <p>
          When you submit this form, I collect your name, email, and message
          only to respond to your inquiry. I do not store your information
          permanently or share it with third parties. You can withdraw your
          consent at any time by contacting me at <b>contact@kosmiha.eu</b>
          [cite: 2].
        </p>

        <label htmlFor="privacy" className="privacy-check">
          <input id="privacy" name="privacy" type="checkbox" required />
          <span>I have read and agree to the privacy policy above</span>
        </label>
      </div>

      {status && (
        <p
          role="status"
          className={`form-status ${status.type === "error" ? "is-error" : "is-success"}`}
        >
          {status.text}
        </p>
      )}

      <div className="form-foot">
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "[ sending... ]" : "[ send message ]"}
        </button>
      </div>
    </form>
  );
}
