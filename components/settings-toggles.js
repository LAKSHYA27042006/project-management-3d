"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "@/lib/translation-context";

export function LanguageToggle() {
  const { language, changeLanguage, languages, theme } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const currentLang = languages.find((l) => l.code === language);
  const isDark = theme === "dark";

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all hover-lift ${
          isDark
            ? "bg-[hsl(220,15%,16%)] border border-[hsl(220,12%,22%)] text-[hsl(210,20%,85%)] hover:border-[hsl(210,80%,56%,0.3)]"
            : "bg-white border border-[hsl(210,25%,88%)] text-[hsl(220,25%,20%)] hover:border-[hsl(210,85%,50%,0.3)] shadow-sm"
        }`}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
        <span>{currentLang?.nativeName || "English"}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <div
          className={`absolute top-full mt-2 right-0 min-w-[160px] rounded-xl overflow-hidden z-50 animate-scale-in glass-strong ${
            isDark
              ? "bg-[hsl(220,15%,14%)] border border-[hsl(220,12%,22%)]"
              : "bg-white border border-[hsl(210,25%,88%)]"
          }`}
          style={{
            boxShadow: isDark
              ? "0 20px 40px -10px hsla(0, 0%, 0%, 0.5)"
              : "0 20px 40px -10px hsla(210, 50%, 30%, 0.2)",
          }}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                changeLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                language === lang.code
                  ? isDark
                    ? "bg-[hsl(210,80%,56%,0.1)] text-[hsl(210,80%,65%)]"
                    : "bg-[hsl(210,85%,50%,0.1)] text-[hsl(210,85%,45%)]"
                  : isDark
                  ? "text-[hsl(210,20%,85%)] hover:bg-[hsl(220,15%,18%)]"
                  : "text-[hsl(220,25%,20%)] hover:bg-[hsl(210,30%,96%)]"
              }`}
            >
              <span className="text-base">{lang.nativeName}</span>
              <span
                className={`text-xs ${
                  isDark ? "text-[hsl(215,15%,50%)]" : "text-[hsl(220,15%,55%)]"
                }`}
              >
                ({lang.name})
              </span>
              {language === lang.code && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-auto"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useTranslation();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={`relative p-2.5 rounded-lg transition-all hover-lift overflow-hidden ${
        isDark
          ? "bg-[hsl(220,15%,16%)] border border-[hsl(220,12%,22%)] text-[hsl(38,92%,60%)] hover:border-[hsl(38,92%,50%,0.3)]"
          : "bg-white border border-[hsl(210,25%,88%)] text-[hsl(220,20%,30%)] hover:border-[hsl(210,85%,50%,0.3)] shadow-sm"
      }`}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {/* Sun Icon */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`absolute transition-all duration-300 ${
          isDark
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 rotate-90 scale-50"
        }`}
        style={{ top: "50%", left: "50%", transform: `translate(-50%, -50%) ${isDark ? "" : "rotate(90deg) scale(0.5)"}` }}
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>

      {/* Moon Icon */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-all duration-300 ${
          isDark
            ? "opacity-0 -rotate-90 scale-50"
            : "opacity-100 rotate-0 scale-100"
        }`}
      >
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    </button>
  );
}

export function SettingsBar() {
  return (
    <div className="flex items-center gap-2">
      <LanguageToggle />
      <ThemeToggle />
    </div>
  );
}
