"use client";

import { useApp } from "@/lib/app-context";
import { useTranslation } from "@/lib/translation-context";
import { SettingsBar } from "@/components/settings-toggles";

export default function LandingPage() {
  const { setCurrentPage } = useApp();
  const { t, theme } = useTranslation();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen particle-bg transition-colors duration-300 ${
        isDark ? "bg-[hsl(220,15%,8%)]" : "bg-[hsl(210,40%,98%)] colorful-bg"
      }`}
    >
      {/* Header */}
      <header
        className={`flex items-center justify-between px-8 py-5 border-b glass ${
          isDark ? "border-[hsl(220,12%,15%)]" : "border-[hsl(210,25%,90%)]"
        }`}
      >
        <div className="flex items-center gap-2 animate-slide-in-3d">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[hsl(210,80%,56%)] to-[hsl(280,65%,55%)] flex items-center justify-center btn-3d">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 17l10-10M12 7l10 10M2 7l10 10M12 17l10-10" />
            </svg>
          </div>
          <span className={`font-bold text-xl tracking-tight ${isDark ? "text-[hsl(210,20%,95%)]" : "text-[hsl(220,25%,15%)]"}`}>
            {t("appName")}
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => setCurrentPage("about")} className={`text-sm transition-colors ${isDark ? "text-[hsl(215,15%,60%)] hover:text-[hsl(210,20%,90%)]" : "text-[hsl(220,15%,45%)] hover:text-[hsl(220,25%,20%)]"}`}>
            {t("about")}
          </button>
          <a href="#features" className={`text-sm transition-colors ${isDark ? "text-[hsl(215,15%,60%)] hover:text-[hsl(210,20%,90%)]" : "text-[hsl(220,15%,45%)] hover:text-[hsl(220,25%,20%)]"}`}>
            {t("features")}
          </a>
          <a href="#pricing" className={`text-sm transition-colors ${isDark ? "text-[hsl(215,15%,60%)] hover:text-[hsl(210,20%,90%)]" : "text-[hsl(220,15%,45%)] hover:text-[hsl(220,25%,20%)]"}`}>
            {t("pricing")}
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <SettingsBar />
          <button
            onClick={() => setCurrentPage("login")}
            className={`px-4 py-2 text-sm transition-colors ${isDark ? "text-[hsl(210,20%,85%)] hover:text-[hsl(210,20%,95%)]" : "text-[hsl(220,20%,35%)] hover:text-[hsl(220,25%,15%)]"}`}
          >
            {t("login")}
          </button>
          <button
            onClick={() => setCurrentPage("signup")}
            className="px-5 py-2 text-sm bg-gradient-to-r from-[hsl(210,80%,56%)] to-[hsl(280,65%,55%)] hover:from-[hsl(210,80%,48%)] hover:to-[hsl(280,65%,48%)] text-white rounded-lg font-medium transition-all btn-3d"
          >
            {t("getStarted")}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-8 pt-24 pb-20 text-center perspective-container">
        <div className={`inline-block px-4 py-1.5 text-xs font-medium rounded-full mb-6 border animate-fade-in-3d glass ${
          isDark
            ? "bg-[hsl(210,80%,56%,0.12)] text-[hsl(210,80%,65%)] border-[hsl(210,80%,56%,0.2)]"
            : "bg-[hsl(210,85%,50%,0.1)] text-[hsl(210,85%,45%)] border-[hsl(210,85%,50%,0.2)]"
        }`}>
          {t("trustedBy")}
        </div>
        <h1 className={`text-5xl md:text-6xl font-bold leading-tight mb-6 text-balance animate-fade-in-3d stagger-1 ${isDark ? "text-[hsl(210,20%,95%)]" : "text-[hsl(220,40%,10%)]"}`}>
          {t("heroTitle")}
          <span className="gradient-text"> {t("heroHighlight")}</span>
        </h1>
        <p className={`text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-3d stagger-2 ${isDark ? "text-[hsl(215,15%,55%)]" : "text-[hsl(220,25%,35%)]"}`}>
          {t("heroSubtitle")}
        </p>
        <div className="flex items-center justify-center gap-4 animate-fade-in-3d stagger-3">
          <button
            onClick={() => setCurrentPage("signup")}
            className="px-8 py-3 bg-gradient-to-r from-[hsl(210,80%,56%)] to-[hsl(280,65%,55%)] hover:from-[hsl(210,80%,48%)] hover:to-[hsl(280,65%,48%)] text-white rounded-lg font-semibold text-base transition-all btn-3d animate-glow"
          >
            {t("startForFree")}
          </button>
          <button
            onClick={() => setCurrentPage("about")}
            className={`px-8 py-3 rounded-lg font-medium text-base border transition-all hover-lift ${
              isDark
                ? "bg-[hsl(220,15%,16%)] hover:bg-[hsl(220,15%,20%)] text-[hsl(210,20%,85%)] border-[hsl(220,12%,22%)]"
                : "bg-white hover:bg-[hsl(210,30%,96%)] text-[hsl(220,25%,20%)] border-[hsl(210,25%,88%)] shadow-sm"
            }`}
          >
            {t("learnMore")}
          </button>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="max-w-5xl mx-auto px-8 pb-20">
        <div className={`rounded-xl border overflow-hidden card-3d animate-fade-in-3d stagger-4 ${
          isDark
            ? "border-[hsl(220,12%,18%)] bg-[hsl(220,15%,12%)]"
            : "border-[hsl(210,25%,88%)] bg-white"
        }`}
        style={{
          boxShadow: isDark
            ? "0 25px 60px -15px hsla(0, 0%, 0%, 0.5), 0 0 40px hsla(210, 80%, 56%, 0.1)"
            : "0 25px 60px -15px hsla(210, 50%, 30%, 0.15), 0 0 40px hsla(210, 85%, 50%, 0.05)"
        }}
        >
          <div className={`flex items-center gap-2 px-4 py-3 border-b ${
            isDark ? "bg-[hsl(220,15%,10%)] border-[hsl(220,12%,18%)]" : "bg-[hsl(210,30%,96%)] border-[hsl(210,25%,90%)]"
          }`}>
            <div className="w-3 h-3 rounded-full bg-[hsl(0,72%,51%)]" />
            <div className="w-3 h-3 rounded-full bg-[hsl(38,92%,50%)]" />
            <div className="w-3 h-3 rounded-full bg-[hsl(142,72%,42%)]" />
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Todo Column */}
            <div className="animate-slide-in-3d stagger-1">
              <h3 className={`text-sm font-semibold mb-3 flex items-center gap-2 ${isDark ? "text-[hsl(210,20%,90%)]" : "text-[hsl(220,25%,20%)]"}`}>
                <span className="w-2 h-2 rounded-full bg-[hsl(210,80%,56%)]" />{t("todo")}
              </h3>
              {["Design homepage mockup", "Write API documentation", "Database schema design"].map((task, i) => (
                <div key={i} className={`rounded-lg p-3 mb-2 border interactive-card ${
                  isDark
                    ? "bg-[hsl(220,15%,16%)] border-[hsl(220,12%,20%)]"
                    : "bg-[hsl(210,40%,98%)] border-[hsl(210,25%,90%)]"
                }`}>
                  <p className={`text-sm ${isDark ? "text-[hsl(210,20%,85%)]" : "text-[hsl(220,25%,20%)]"}`}>{task}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                      i === 0
                        ? "bg-[hsl(0,72%,51%,0.15)] text-[hsl(0,72%,65%)]"
                        : i === 1
                        ? "bg-[hsl(38,92%,50%,0.15)] text-[hsl(38,92%,60%)]"
                        : "bg-[hsl(142,72%,42%,0.15)] text-[hsl(142,72%,55%)]"
                    }`}>
                      {[t("high"), t("medium"), t("low")][i]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {/* Doing Column */}
            <div className="animate-slide-in-3d stagger-2">
              <h3 className={`text-sm font-semibold mb-3 flex items-center gap-2 ${isDark ? "text-[hsl(210,20%,90%)]" : "text-[hsl(220,25%,20%)]"}`}>
                <span className="w-2 h-2 rounded-full bg-[hsl(38,92%,50%)]" />{t("doing")}
              </h3>
              {["Set up CI/CD pipeline", "User authentication module"].map((task, i) => (
                <div key={i} className={`rounded-lg p-3 mb-2 border interactive-card ${
                  isDark
                    ? "bg-[hsl(220,15%,16%)] border-[hsl(220,12%,20%)]"
                    : "bg-[hsl(210,40%,98%)] border-[hsl(210,25%,90%)]"
                }`}>
                  <p className={`text-sm ${isDark ? "text-[hsl(210,20%,85%)]" : "text-[hsl(220,25%,20%)]"}`}>{task}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[hsl(38,92%,50%,0.15)] text-[hsl(38,92%,60%)]">
                      {t("medium")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {/* Done Column */}
            <div className="animate-slide-in-3d stagger-3">
              <h3 className={`text-sm font-semibold mb-3 flex items-center gap-2 ${isDark ? "text-[hsl(210,20%,90%)]" : "text-[hsl(220,25%,20%)]"}`}>
                <span className="w-2 h-2 rounded-full bg-[hsl(142,72%,42%)]" />{t("done")}
              </h3>
              <div className={`rounded-lg p-3 mb-2 border interactive-card ${
                isDark
                  ? "bg-[hsl(220,15%,16%)] border-[hsl(220,12%,20%)]"
                  : "bg-[hsl(210,40%,98%)] border-[hsl(210,25%,90%)]"
              }`}>
                <p className={`text-sm ${isDark ? "text-[hsl(210,20%,85%)]" : "text-[hsl(220,25%,20%)]"}`}>Social media content plan</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[hsl(142,72%,42%,0.15)] text-[hsl(142,72%,55%)]">
                    {t("low")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-5xl mx-auto px-8 pb-24">
        <h2 className={`text-3xl font-bold text-center mb-4 text-balance animate-fade-in-3d ${isDark ? "text-[hsl(210,20%,95%)]" : "text-[hsl(220,25%,15%)]"}`}>
          {t("featuresTitle")}
        </h2>
        <p className={`text-center mb-12 max-w-lg mx-auto animate-fade-in-3d stagger-1 ${isDark ? "text-[hsl(215,15%,55%)]" : "text-[hsl(220,15%,45%)]"}`}>
          {t("featuresSubtitle")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: t("listView"), desc: t("listViewDesc"), icon: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" },
            { title: t("boardView"), desc: t("boardViewDesc"), icon: "M9 17H5a2 2 0 01-2-2V5a2 2 0 012-2h4m6 14h4a2 2 0 002-2V5a2 2 0 00-2-2h-4m-6 14v-4m0 0V7m0 6h6" },
            { title: t("timelineView"), desc: t("timelineViewDesc"), icon: "M17 3v18M7 3v18M3 7h4M3 12h4M3 17h4M13 7h4M13 12h4M13 17h4" },
            { title: t("calendarView"), desc: t("calendarViewDesc"), icon: "M19 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zM16 2v4M8 2v4M3 10h18" },
            { title: t("goalsStrategy"), desc: t("goalsStrategyDesc"), icon: "M12 2a10 10 0 110 20 10 10 0 010-20zm0 4a6 6 0 100 12 6 6 0 000-12zm0 4a2 2 0 110 4 2 2 0 010-4z" },
            { title: t("teamCollab"), desc: t("teamCollabDesc"), icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm14 10v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" },
          ].map((f, i) => (
            <div
              key={i}
              className={`rounded-xl border p-6 transition-all card-3d animate-fade-in-3d ${
                isDark
                  ? "bg-[hsl(220,15%,12%)] border-[hsl(220,12%,18%)] hover:border-[hsl(210,80%,56%,0.3)]"
                  : "bg-white border-[hsl(210,25%,88%)] hover:border-[hsl(210,85%,50%,0.3)] shadow-sm"
              }`}
              style={{ animationDelay: `${0.1 * (i + 1)}s` }}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                isDark ? "bg-[hsl(210,80%,56%,0.12)]" : "bg-[hsl(210,85%,50%,0.1)]"
              }`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={isDark ? "hsl(210,80%,56%)" : "hsl(210,85%,50%)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={f.icon} />
                </svg>
              </div>
              <h3 className={`text-base font-semibold mb-2 ${isDark ? "text-[hsl(210,20%,92%)]" : "text-[hsl(220,40%,10%)]"}`}>{f.title}</h3>
              <p className={`text-sm leading-relaxed ${isDark ? "text-[hsl(215,15%,55%)]" : "text-[hsl(220,30%,30%)]"}`}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing - Updated with Rupees */}
      <section id="pricing" className="max-w-5xl mx-auto px-8 pb-24">
        <h2 className={`text-3xl font-bold text-center mb-12 text-balance animate-fade-in-3d ${isDark ? "text-[hsl(210,20%,95%)]" : "text-[hsl(220,25%,15%)]"}`}>
          {t("pricingTitle")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: t("free"),
              price: "Rs 0",
              desc: t("forIndividuals"),
              features: [t("upTo5Projects"), t("basicTaskMgmt"), t("listBoardViews")],
            },
            {
              name: t("pro"),
              price: "Rs 999",
              desc: t("perUserMonth"),
              features: [t("unlimitedProjects"), t("allViews"), t("goalsReporting"), t("prioritySupport")],
              popular: true,
            },
            {
              name: t("enterprise"),
              price: t("custom"),
              desc: t("forLargeTeams"),
              features: [t("everythingInPro"), t("ssoSaml"), t("customIntegrations"), t("dedicatedSupport")],
            },
          ].map((p, i) => (
            <div
              key={i}
              className={`rounded-xl border p-6 card-3d animate-fade-in-3d ${
                p.popular
                  ? isDark
                    ? "border-[hsl(210,80%,56%)] bg-[hsl(210,80%,56%,0.06)]"
                    : "border-[hsl(210,85%,50%)] bg-[hsl(210,85%,50%,0.04)]"
                  : isDark
                  ? "border-[hsl(220,12%,18%)] bg-[hsl(220,15%,12%)]"
                  : "border-[hsl(210,25%,88%)] bg-white shadow-sm"
              }`}
              style={{ animationDelay: `${0.1 * (i + 1)}s` }}
            >
              {p.popular && (
                <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-4 ${
                  isDark
                    ? "text-[hsl(210,80%,56%)] bg-[hsl(210,80%,56%,0.12)]"
                    : "text-[hsl(210,85%,45%)] bg-[hsl(210,85%,50%,0.1)]"
                }`}>
                  {t("mostPopular")}
                </span>
              )}
              <h3 className={`text-xl font-bold ${isDark ? "text-[hsl(210,20%,95%)]" : "text-[hsl(220,25%,15%)]"}`}>{p.name}</h3>
              <div className="mt-2 mb-1">
                <span className={`text-3xl font-bold ${isDark ? "text-[hsl(210,20%,95%)]" : "text-[hsl(220,25%,15%)]"}`}>{p.price}</span>
              </div>
              <p className={`text-sm mb-6 ${isDark ? "text-[hsl(215,15%,55%)]" : "text-[hsl(220,30%,30%)]"}`}>{p.desc}</p>
              <ul className="space-y-3 mb-6">
                {p.features.map((f, j) => (
                  <li key={j} className={`flex items-center gap-2 text-sm ${isDark ? "text-[hsl(210,20%,80%)]" : "text-[hsl(220,35%,20%)]"}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(142,72%,42%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setCurrentPage("signup")}
                className={`w-full py-2.5 rounded-lg text-sm font-medium transition-all btn-3d ${
                  p.popular
                    ? "bg-gradient-to-r from-[hsl(210,80%,56%)] to-[hsl(280,65%,55%)] hover:from-[hsl(210,80%,48%)] hover:to-[hsl(280,65%,48%)] text-white"
                    : isDark
                    ? "bg-[hsl(220,15%,18%)] hover:bg-[hsl(220,15%,22%)] text-[hsl(210,20%,85%)] border border-[hsl(220,12%,22%)]"
                    : "bg-[hsl(210,30%,96%)] hover:bg-[hsl(210,30%,92%)] text-[hsl(220,25%,20%)] border border-[hsl(210,25%,88%)]"
                }`}
              >
                {t("getStarted")}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t py-12 px-8 ${isDark ? "border-[hsl(220,12%,15%)]" : "border-[hsl(210,25%,90%)]"}`}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[hsl(210,80%,56%)] to-[hsl(280,65%,55%)] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 17l10-10M12 7l10 10M2 7l10 10M12 17l10-10" />
                </svg>
              </div>
              <span className={`font-bold ${isDark ? "text-[hsl(210,20%,90%)]" : "text-[hsl(220,25%,15%)]"}`}>{t("appName")}</span>
            </div>
            <p className={`text-sm max-w-xs ${isDark ? "text-[hsl(215,15%,50%)]" : "text-[hsl(220,15%,45%)]"}`}>{t("footerDesc")}</p>
          </div>
          <div className="flex gap-16">
            <div>
              <h4 className={`text-sm font-semibold mb-3 ${isDark ? "text-[hsl(210,20%,85%)]" : "text-[hsl(220,25%,20%)]"}`}>{t("product")}</h4>
              <ul className="space-y-2">
                <li><a href="#features" className={`text-sm transition-colors ${isDark ? "text-[hsl(215,15%,50%)] hover:text-[hsl(210,20%,85%)]" : "text-[hsl(220,15%,45%)] hover:text-[hsl(220,25%,20%)]"}`}>{t("features")}</a></li>
                <li><a href="#pricing" className={`text-sm transition-colors ${isDark ? "text-[hsl(215,15%,50%)] hover:text-[hsl(210,20%,85%)]" : "text-[hsl(220,15%,45%)] hover:text-[hsl(220,25%,20%)]"}`}>{t("pricing")}</a></li>
              </ul>
            </div>
            <div>
              <h4 className={`text-sm font-semibold mb-3 ${isDark ? "text-[hsl(210,20%,85%)]" : "text-[hsl(220,25%,20%)]"}`}>{t("company")}</h4>
              <ul className="space-y-2">
                <li><button onClick={() => setCurrentPage("about")} className={`text-sm transition-colors ${isDark ? "text-[hsl(215,15%,50%)] hover:text-[hsl(210,20%,85%)]" : "text-[hsl(220,15%,45%)] hover:text-[hsl(220,25%,20%)]"}`}>{t("about")}</button></li>
                <li><button onClick={() => setCurrentPage("login")} className={`text-sm transition-colors ${isDark ? "text-[hsl(215,15%,50%)] hover:text-[hsl(210,20%,85%)]" : "text-[hsl(220,15%,45%)] hover:text-[hsl(220,25%,20%)]"}`}>{t("login")}</button></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`max-w-5xl mx-auto mt-8 pt-6 border-t ${isDark ? "border-[hsl(220,12%,15%)]" : "border-[hsl(210,25%,90%)]"}`}>
          <p className={`text-xs ${isDark ? "text-[hsl(215,15%,40%)]" : "text-[hsl(220,15%,55%)]"}`}>2026 {t("appName")}. {t("allRightsReserved")}</p>
        </div>
      </footer>
    </div>
  );
}
