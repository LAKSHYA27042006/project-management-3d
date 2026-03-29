"use client";

import { useState } from "react";
import { useApp } from "@/lib/app-context";
import { useTranslation } from "@/lib/translation-context";
import { SettingsBar } from "@/components/settings-toggles";

function SocialLoginButtons({ onSocial, isDark }) {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-3 mb-6">
      <button
        type="button"
        onClick={() => onSocial("google")}
        className={`w-full flex items-center justify-center gap-3 py-2.5 rounded-lg text-sm transition-all btn-3d ${
          isDark
            ? "bg-[hsl(220,15%,14%)] border border-[hsl(220,12%,22%)] text-[hsl(210,20%,85%)] hover:bg-[hsl(220,15%,18%)] hover:border-[hsl(220,12%,28%)]"
            : "bg-white border border-[hsl(210,25%,88%)] text-[hsl(220,25%,20%)] hover:bg-[hsl(210,30%,96%)] hover:border-[hsl(210,25%,82%)] shadow-sm"
        }`}
      >
        <svg width="18" height="18" viewBox="0 0 48 48">
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        </svg>
        Continue with Google
      </button>
      <button
        type="button"
        onClick={() => onSocial("linkedin")}
        className={`w-full flex items-center justify-center gap-3 py-2.5 rounded-lg text-sm transition-all btn-3d ${
          isDark
            ? "bg-[hsl(220,15%,14%)] border border-[hsl(220,12%,22%)] text-[hsl(210,20%,85%)] hover:bg-[hsl(220,15%,18%)] hover:border-[hsl(220,12%,28%)]"
            : "bg-white border border-[hsl(210,25%,88%)] text-[hsl(220,25%,20%)] hover:bg-[hsl(210,30%,96%)] hover:border-[hsl(210,25%,82%)] shadow-sm"
        }`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A66C2">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
        Continue with LinkedIn
      </button>
      <div className="relative my-5">
        <div className="absolute inset-0 flex items-center">
          <div className={`w-full border-t ${isDark ? "border-[hsl(220,12%,22%)]" : "border-[hsl(210,25%,88%)]"}`} />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className={`px-3 ${isDark ? "bg-[hsl(220,15%,8%)] text-[hsl(215,15%,45%)]" : "bg-[hsl(210,40%,98%)] text-[hsl(220,15%,55%)]"}`}>
            {t("orContinueWith")}
          </span>
        </div>
      </div>
    </div>
  );
}

export function LoginPage() {
  const { login, loginWithSocial, setCurrentPage } = useApp();
  const { t, theme } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isDark = theme === "dark";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    login(email, password);
  };

  return (
    <div className={`min-h-screen flex particle-bg transition-colors duration-300 ${
      isDark ? "bg-[hsl(220,15%,8%)]" : "bg-[hsl(210,40%,98%)] colorful-bg"
    }`}>
      {/* Left panel */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md animate-fade-in-3d">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setCurrentPage("landing")}
              className={`flex items-center gap-2 text-sm transition-colors ${
                isDark ? "text-[hsl(215,15%,55%)] hover:text-[hsl(210,20%,85%)]" : "text-[hsl(220,15%,45%)] hover:text-[hsl(220,25%,20%)]"
              }`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
              </svg>
              {t("back")}
            </button>
            <SettingsBar />
          </div>

          <div className="flex items-center gap-2 mb-8">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[hsl(210,80%,56%)] to-[hsl(280,65%,55%)] flex items-center justify-center btn-3d">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 17l10-10M12 7l10 10M2 7l10 10M12 17l10-10" />
              </svg>
            </div>
            <span className={`font-bold text-xl ${isDark ? "text-[hsl(210,20%,95%)]" : "text-[hsl(220,25%,15%)]"}`}>{t("appName")}</span>
          </div>

          <h1 className={`text-3xl font-bold mb-2 ${isDark ? "text-[hsl(210,20%,95%)]" : "text-[hsl(220,25%,15%)]"}`}>{t("welcomeBack")}</h1>
          <p className={`mb-8 ${isDark ? "text-[hsl(215,15%,55%)]" : "text-[hsl(220,15%,45%)]"}`}>{t("loginSubtitle")}</p>

          {error && (
            <div className="bg-[hsl(0,72%,51%,0.12)] border border-[hsl(0,72%,51%,0.3)] text-[hsl(0,72%,65%)] text-sm px-4 py-3 rounded-lg mb-6 animate-fade-in">
              {error}
            </div>
          )}

          <SocialLoginButtons onSocial={loginWithSocial} isDark={isDark} />

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className={`block text-sm font-medium mb-1.5 ${isDark ? "text-[hsl(210,20%,80%)]" : "text-[hsl(220,20%,35%)]"}`}>{t("email")}</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={`w-full px-4 py-2.5 rounded-lg text-sm transition-all ${
                  isDark
                    ? "bg-[hsl(220,15%,14%)] border border-[hsl(220,12%,22%)] text-[hsl(210,20%,90%)] placeholder-[hsl(215,15%,40%)] focus:border-[hsl(210,80%,56%)] focus:ring-1 focus:ring-[hsl(210,80%,56%)] focus:shadow-[0_0_20px_hsla(210,80%,56%,0.2)]"
                    : "bg-white border border-[hsl(210,25%,88%)] text-[hsl(220,25%,15%)] placeholder-[hsl(220,15%,55%)] focus:border-[hsl(210,85%,50%)] focus:ring-1 focus:ring-[hsl(210,85%,50%)] focus:shadow-[0_0_20px_hsla(210,85%,50%,0.15)]"
                } focus:outline-none`}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-1.5 ${isDark ? "text-[hsl(210,20%,80%)]" : "text-[hsl(220,20%,35%)]"}`}>{t("password")}</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className={`w-full px-4 py-2.5 pr-10 rounded-lg text-sm transition-all ${
                    isDark
                      ? "bg-[hsl(220,15%,14%)] border border-[hsl(220,12%,22%)] text-[hsl(210,20%,90%)] placeholder-[hsl(215,15%,40%)] focus:border-[hsl(210,80%,56%)] focus:ring-1 focus:ring-[hsl(210,80%,56%)] focus:shadow-[0_0_20px_hsla(210,80%,56%,0.2)]"
                      : "bg-white border border-[hsl(210,25%,88%)] text-[hsl(220,25%,15%)] placeholder-[hsl(220,15%,55%)] focus:border-[hsl(210,85%,50%)] focus:ring-1 focus:ring-[hsl(210,85%,50%)] focus:shadow-[0_0_20px_hsla(210,85%,50%,0.15)]"
                  } focus:outline-none`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 ${isDark ? "text-[hsl(215,15%,45%)] hover:text-[hsl(210,20%,80%)]" : "text-[hsl(220,15%,55%)] hover:text-[hsl(220,25%,30%)]"}`}
                >
                  {showPassword ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" /></svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                  )}
                </button>
              </div>
              <div className="flex justify-end mt-1.5">
                <button type="button" className={`text-xs hover:underline ${isDark ? "text-[hsl(210,80%,56%)]" : "text-[hsl(210,85%,45%)]"}`}>{t("forgotPassword")}</button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2.5 bg-gradient-to-r from-[hsl(210,80%,56%)] to-[hsl(280,65%,55%)] hover:from-[hsl(210,80%,48%)] hover:to-[hsl(280,65%,48%)] text-white rounded-lg font-semibold text-sm transition-all btn-3d"
            >
              {t("login")}
            </button>
          </form>

          <p className={`mt-6 text-sm text-center ${isDark ? "text-[hsl(215,15%,50%)]" : "text-[hsl(220,15%,45%)]"}`}>
            {t("noAccount")}{" "}
            <button onClick={() => setCurrentPage("signup")} className={`font-medium hover:underline ${isDark ? "text-[hsl(210,80%,56%)]" : "text-[hsl(210,85%,45%)]"}`}>
              {t("signup")}
            </button>
          </p>
        </div>
      </div>

      {/* Right panel - decorative */}
      <div className={`hidden lg:flex flex-1 items-center justify-center border-l ${
        isDark ? "bg-[hsl(220,15%,10%)] border-[hsl(220,12%,15%)]" : "bg-[hsl(210,35%,96%)] border-[hsl(210,25%,90%)]"
      }`}>
        <div className="text-center px-12 animate-float-slow">
          <div className={`w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8 border card-3d ${
            isDark ? "bg-[hsl(210,80%,56%,0.08)] border-[hsl(210,80%,56%,0.15)]" : "bg-[hsl(210,85%,50%,0.08)] border-[hsl(210,85%,50%,0.2)]"
          }`}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={isDark ? "hsl(210,80%,56%)" : "hsl(210,85%,50%)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
            </svg>
          </div>
          <h2 className={`text-2xl font-bold mb-3 ${isDark ? "text-[hsl(210,20%,90%)]" : "text-[hsl(220,25%,15%)]"}`}>Manage work, hit deadlines</h2>
          <p className={`max-w-sm leading-relaxed ${isDark ? "text-[hsl(215,15%,50%)]" : "text-[hsl(220,15%,45%)]"}`}>Join thousands of teams using ProjectFlow to streamline their project management.</p>
        </div>
      </div>
    </div>
  );
}

export function SignupPage() {
  const { signup, loginWithSocial, setCurrentPage } = useApp();
  const { t, theme } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isDark = theme === "dark";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    signup(name, email, password);
  };

  return (
    <div className={`min-h-screen flex particle-bg transition-colors duration-300 ${
      isDark ? "bg-[hsl(220,15%,8%)]" : "bg-[hsl(210,40%,98%)] colorful-bg"
    }`}>
      {/* Left panel */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md animate-fade-in-3d">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setCurrentPage("landing")}
              className={`flex items-center gap-2 text-sm transition-colors ${
                isDark ? "text-[hsl(215,15%,55%)] hover:text-[hsl(210,20%,85%)]" : "text-[hsl(220,15%,45%)] hover:text-[hsl(220,25%,20%)]"
              }`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
              </svg>
              {t("back")}
            </button>
            <SettingsBar />
          </div>

          <div className="flex items-center gap-2 mb-8">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[hsl(210,80%,56%)] to-[hsl(280,65%,55%)] flex items-center justify-center btn-3d">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 17l10-10M12 7l10 10M2 7l10 10M12 17l10-10" />
              </svg>
            </div>
            <span className={`font-bold text-xl ${isDark ? "text-[hsl(210,20%,95%)]" : "text-[hsl(220,25%,15%)]"}`}>{t("appName")}</span>
          </div>

          <h1 className={`text-3xl font-bold mb-2 ${isDark ? "text-[hsl(210,20%,95%)]" : "text-[hsl(220,25%,15%)]"}`}>{t("createAccount")}</h1>
          <p className={`mb-8 ${isDark ? "text-[hsl(215,15%,55%)]" : "text-[hsl(220,15%,45%)]"}`}>{t("signupSubtitle")}</p>

          {error && (
            <div className="bg-[hsl(0,72%,51%,0.12)] border border-[hsl(0,72%,51%,0.3)] text-[hsl(0,72%,65%)] text-sm px-4 py-3 rounded-lg mb-6 animate-fade-in">
              {error}
            </div>
          )}

          <SocialLoginButtons onSocial={loginWithSocial} isDark={isDark} />

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className={`block text-sm font-medium mb-1.5 ${isDark ? "text-[hsl(210,20%,80%)]" : "text-[hsl(220,20%,35%)]"}`}>{t("fullName")}</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className={`w-full px-4 py-2.5 rounded-lg text-sm transition-all ${
                  isDark
                    ? "bg-[hsl(220,15%,14%)] border border-[hsl(220,12%,22%)] text-[hsl(210,20%,90%)] placeholder-[hsl(215,15%,40%)] focus:border-[hsl(210,80%,56%)] focus:ring-1 focus:ring-[hsl(210,80%,56%)] focus:shadow-[0_0_20px_hsla(210,80%,56%,0.2)]"
                    : "bg-white border border-[hsl(210,25%,88%)] text-[hsl(220,25%,15%)] placeholder-[hsl(220,15%,55%)] focus:border-[hsl(210,85%,50%)] focus:ring-1 focus:ring-[hsl(210,85%,50%)] focus:shadow-[0_0_20px_hsla(210,85%,50%,0.15)]"
                } focus:outline-none`}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-1.5 ${isDark ? "text-[hsl(210,20%,80%)]" : "text-[hsl(220,20%,35%)]"}`}>{t("email")}</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={`w-full px-4 py-2.5 rounded-lg text-sm transition-all ${
                  isDark
                    ? "bg-[hsl(220,15%,14%)] border border-[hsl(220,12%,22%)] text-[hsl(210,20%,90%)] placeholder-[hsl(215,15%,40%)] focus:border-[hsl(210,80%,56%)] focus:ring-1 focus:ring-[hsl(210,80%,56%)] focus:shadow-[0_0_20px_hsla(210,80%,56%,0.2)]"
                    : "bg-white border border-[hsl(210,25%,88%)] text-[hsl(220,25%,15%)] placeholder-[hsl(220,15%,55%)] focus:border-[hsl(210,85%,50%)] focus:ring-1 focus:ring-[hsl(210,85%,50%)] focus:shadow-[0_0_20px_hsla(210,85%,50%,0.15)]"
                } focus:outline-none`}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-1.5 ${isDark ? "text-[hsl(210,20%,80%)]" : "text-[hsl(220,20%,35%)]"}`}>{t("password")}</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  className={`w-full px-4 py-2.5 pr-10 rounded-lg text-sm transition-all ${
                    isDark
                      ? "bg-[hsl(220,15%,14%)] border border-[hsl(220,12%,22%)] text-[hsl(210,20%,90%)] placeholder-[hsl(215,15%,40%)] focus:border-[hsl(210,80%,56%)] focus:ring-1 focus:ring-[hsl(210,80%,56%)] focus:shadow-[0_0_20px_hsla(210,80%,56%,0.2)]"
                      : "bg-white border border-[hsl(210,25%,88%)] text-[hsl(220,25%,15%)] placeholder-[hsl(220,15%,55%)] focus:border-[hsl(210,85%,50%)] focus:ring-1 focus:ring-[hsl(210,85%,50%)] focus:shadow-[0_0_20px_hsla(210,85%,50%,0.15)]"
                  } focus:outline-none`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 ${isDark ? "text-[hsl(215,15%,45%)] hover:text-[hsl(210,20%,80%)]" : "text-[hsl(220,15%,55%)] hover:text-[hsl(220,25%,30%)]"}`}
                >
                  {showPassword ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" /></svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                  )}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2.5 bg-gradient-to-r from-[hsl(210,80%,56%)] to-[hsl(280,65%,55%)] hover:from-[hsl(210,80%,48%)] hover:to-[hsl(280,65%,48%)] text-white rounded-lg font-semibold text-sm transition-all btn-3d"
            >
              {t("signup")}
            </button>
          </form>

          <p className={`mt-4 text-xs text-center leading-relaxed ${isDark ? "text-[hsl(215,15%,40%)]" : "text-[hsl(220,15%,55%)]"}`}>
            By creating an account, you agree to our Terms of Service and Privacy Policy.
          </p>

          <p className={`mt-4 text-sm text-center ${isDark ? "text-[hsl(215,15%,50%)]" : "text-[hsl(220,15%,45%)]"}`}>
            {t("hasAccount")}{" "}
            <button onClick={() => setCurrentPage("login")} className={`font-medium hover:underline ${isDark ? "text-[hsl(210,80%,56%)]" : "text-[hsl(210,85%,45%)]"}`}>
              {t("login")}
            </button>
          </p>
        </div>
      </div>

      {/* Right panel - decorative */}
      <div className={`hidden lg:flex flex-1 items-center justify-center border-l ${
        isDark ? "bg-[hsl(220,15%,10%)] border-[hsl(220,12%,15%)]" : "bg-[hsl(210,35%,96%)] border-[hsl(210,25%,90%)]"
      }`}>
        <div className="text-center px-12 animate-float-slow">
          <div className={`w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8 border card-3d ${
            isDark ? "bg-[hsl(210,80%,56%,0.08)] border-[hsl(210,80%,56%,0.15)]" : "bg-[hsl(210,85%,50%,0.08)] border-[hsl(210,85%,50%,0.2)]"
          }`}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={isDark ? "hsl(210,80%,56%)" : "hsl(210,85%,50%)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
          </div>
          <h2 className={`text-2xl font-bold mb-3 ${isDark ? "text-[hsl(210,20%,90%)]" : "text-[hsl(220,25%,15%)]"}`}>Start collaborating today</h2>
          <p className={`max-w-sm leading-relaxed ${isDark ? "text-[hsl(215,15%,50%)]" : "text-[hsl(220,15%,45%)]"}`}>Create your free account and invite your team to start organizing projects in minutes.</p>
        </div>
      </div>
    </div>
  );
}
