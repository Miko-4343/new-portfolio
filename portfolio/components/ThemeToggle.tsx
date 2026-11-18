"use client";

export default function ThemeToggle() {
  function flip() {
    const next =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button type="button" className="toggle" onClick={flip} aria-label="Toggle theme">
      theme
    </button>
  );
}
