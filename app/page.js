"use client";

import { useState, useRef, useEffect } from "react";
import { AppProvider, useApp } from "@/lib/app-context";
import { TranslationProvider, useTranslation } from "@/lib/translation-context";
import Sidebar from "@/components/sidebar";
import LandingPage from "@/components/landing-page";
import { LoginPage, SignupPage } from "@/components/auth-pages";
import OnboardingPage from "@/components/onboarding-page";
import HomePage from "@/components/home-page";
import AboutPage from "@/components/about-page";
import MyTasksPage from "@/components/my-tasks-page";
import { ProjectsPage, ProjectDetailPage } from "@/components/projects-page";
import GoalsPage from "@/components/goals-page";
import InboxPage from "@/components/inbox-page";
import PortfoliosPage from "@/components/portfolios-page";
import ReportingPage from "@/components/reporting-page";
import SettingsPage from "@/components/settings-page";
import { AddTaskPage, AddProjectPage, AddGoalPage } from "@/components/form-pages";
import Chatbot from "@/components/chatbot";
import { SettingsBar } from "@/components/settings-toggles";

/* Notification Dropdown Component */
function NotificationDropdown({ onClose }) {
  const { notifications, markNotificationRead, markAllNotificationsRead, deleteNotification, setCurrentPage } = useApp();
  const { t, theme } = useTranslation();
  const ref = useRef(null);
  const unreadCount = notifications.filter((n) => !n.read).length;
  const isDark = theme === "dark";

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose]);

  return (
    <div ref={ref} className={`absolute right-0 top-12 w-96 rounded-xl shadow-2xl z-50 animate-scale-in overflow-hidden glass-strong ${
      isDark ? "bg-[hsl(220,15%,14%)] border border-[hsl(220,12%,22%)]" : "bg-white border border-[hsl(210,25%,88%)]"
    }`}>
      <div className={`flex items-center justify-between px-4 py-3 border-b ${isDark ? "border-[hsl(220,12%,20%)]" : "border-[hsl(210,25%,90%)]"}`}>
        <h3 className={`text-sm font-semibold ${isDark ? "text-[hsl(210,20%,92%)]" : "text-[hsl(220,25%,15%)]"}`}>
          {t("notifications")} {unreadCount > 0 && <span className="ml-1 text-xs text-[hsl(210,80%,56%)]">({unreadCount} new)</span>}
        </h3>
        <div className="flex items-center gap-2">
          {unreadCount > 0 && (
            <button onClick={markAllNotificationsRead} className="text-xs text-[hsl(210,80%,56%)] hover:underline">
              {t("markAllRead")}
            </button>
          )}
          <button
            onClick={() => { setCurrentPage("inbox"); onClose(); }}
            className={`text-xs ${isDark ? "text-[hsl(215,15%,55%)] hover:text-[hsl(210,20%,85%)]" : "text-[hsl(220,15%,55%)] hover:text-[hsl(220,25%,20%)]"}`}
          >
            {t("viewAll")}
          </button>
        </div>
      </div>
      <div className="max-h-80 overflow-y-auto">
        {notifications.length === 0 ? (
          <div className={`py-10 text-center text-sm ${isDark ? "text-[hsl(215,15%,45%)]" : "text-[hsl(220,15%,55%)]"}`}>{t("noNotifications")}</div>
        ) : (
          notifications.slice(0, 8).map((n) => (
            <div
              key={n.id}
              className={`flex items-start gap-3 px-4 py-3 border-b transition-colors ${
                isDark 
                  ? `border-[hsl(220,12%,20%)] hover:bg-[hsl(220,15%,16%)] ${!n.read ? "bg-[hsl(210,80%,56%,0.04)]" : ""}`
                  : `border-[hsl(210,25%,92%)] hover:bg-[hsl(210,30%,96%)] ${!n.read ? "bg-[hsl(210,85%,50%,0.04)]" : ""}`
              }`}
            >
              {!n.read && <div className="w-2 h-2 rounded-full bg-[hsl(210,80%,56%)] mt-2 flex-shrink-0" />}
              {n.read && <div className="w-2 flex-shrink-0" />}
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                style={{ backgroundColor: n.color }}
              >
                {n.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-xs font-medium mb-0.5 ${!n.read ? (isDark ? "text-[hsl(210,20%,95%)]" : "text-[hsl(220,25%,15%)]") : (isDark ? "text-[hsl(210,20%,75%)]" : "text-[hsl(220,20%,40%)]")}`}>{n.title}</p>
                <p className={`text-xs truncate ${isDark ? "text-[hsl(215,15%,50%)]" : "text-[hsl(220,15%,55%)]"}`}>{n.message}</p>
                <p className={`text-[10px] mt-1 ${isDark ? "text-[hsl(215,15%,40%)]" : "text-[hsl(220,15%,60%)]"}`}>{n.time}</p>
              </div>
              <div className="flex items-center gap-1 flex-shrink-0">
                {!n.read && (
                  <button
                    onClick={() => markNotificationRead(n.id)}
                    title="Mark as read"
                    className={`p-1 rounded transition-colors ${isDark ? "hover:bg-[hsl(220,15%,22%)]" : "hover:bg-[hsl(210,25%,90%)]"}`}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="hsl(210,80%,56%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </button>
                )}
                <button
                  onClick={() => deleteNotification(n.id)}
                  title="Dismiss"
                  className={`p-1 rounded transition-colors ${isDark ? "hover:bg-[hsl(220,15%,22%)]" : "hover:bg-[hsl(210,25%,90%)]"}`}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={isDark ? "hsl(215,15%,50%)" : "hsl(220,15%,55%)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

/* Three Dots More Menu Component */
function MoreMenu({ onClose }) {
  const { setCurrentPage, logout } = useApp();
  const { t, theme } = useTranslation();
  const ref = useRef(null);
  const isDark = theme === "dark";

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose]);

  const items = [
    { label: t("newTask"), icon: "M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11", page: "add-task" },
    { label: t("newProject"), icon: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z", page: "add-project" },
    { label: t("newGoal"), icon: "M12 2a10 10 0 110 20 10 10 0 010-20zm0 4a6 6 0 100 12 6 6 0 000-12zm0 4a2 2 0 110 4 2 2 0 010-4z", page: "add-goal" },
    { divider: true },
    { label: t("settings"), icon: "M12 15a3 3 0 100-6 3 3 0 000 6z", page: "settings" },
    { label: t("about"), icon: "M12 2a10 10 0 110 20 10 10 0 010-20zM12 16v-4M12 8h.01", page: "about" },
    { divider: true },
    { label: t("logout"), icon: "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9", danger: true },
  ];

  return (
    <div ref={ref} className={`absolute right-0 top-12 w-52 rounded-xl shadow-2xl z-50 animate-scale-in overflow-hidden py-1 glass-strong ${
      isDark ? "bg-[hsl(220,15%,14%)] border border-[hsl(220,12%,22%)]" : "bg-white border border-[hsl(210,25%,88%)]"
    }`}>
      {items.map((item, i) =>
        item.divider ? (
          <div key={i} className={`my-1 border-t ${isDark ? "border-[hsl(220,12%,20%)]" : "border-[hsl(210,25%,90%)]"}`} />
        ) : (
          <button
            key={item.label}
            onClick={() => {
              if (item.danger) { logout(); }
              else { setCurrentPage(item.page); }
              onClose();
            }}
            className={`flex items-center gap-3 w-full px-4 py-2 text-sm transition-colors ${
              item.danger
                ? "text-[hsl(0,72%,60%)] hover:bg-[hsl(0,72%,51%,0.08)]"
                : isDark
                ? "text-[hsl(210,20%,85%)] hover:bg-[hsl(220,15%,18%)]"
                : "text-[hsl(220,25%,20%)] hover:bg-[hsl(210,30%,96%)]"
            }`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d={item.icon} />
            </svg>
            {item.label}
          </button>
        )
      )}
    </div>
  );
}

/* Search Overlay */
function SearchOverlay({ onClose }) {
  const { tasks, projects, setCurrentPage, setCurrentProject } = useApp();
  const { t, theme } = useTranslation();
  const [query, setQuery] = useState("");
  const ref = useRef(null);
  const inputRef = useRef(null);
  const isDark = theme === "dark";

  useEffect(() => {
    inputRef.current?.focus();
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const results = query.trim().length > 0 ? [
    ...tasks.filter((t) => t.name.toLowerCase().includes(query.toLowerCase())).map((t) => ({ type: "task", item: t })),
    ...projects.filter((p) => p.name.toLowerCase().includes(query.toLowerCase())).map((p) => ({ type: "project", item: p })),
  ] : [];

  return (
    <div className={`fixed inset-0 z-50 flex items-start justify-center pt-24 backdrop-blur-sm ${isDark ? "bg-[hsl(220,15%,5%,0.7)]" : "bg-[hsl(210,30%,50%,0.2)]"}`} onClick={onClose}>
      <div ref={ref} onClick={(e) => e.stopPropagation()} className={`w-full max-w-xl rounded-xl shadow-2xl overflow-hidden animate-scale-in glass-strong ${
        isDark ? "bg-[hsl(220,15%,14%)] border border-[hsl(220,12%,22%)]" : "bg-white border border-[hsl(210,25%,88%)]"
      }`}>
        <div className={`flex items-center gap-3 px-4 py-3 border-b ${isDark ? "border-[hsl(220,12%,20%)]" : "border-[hsl(210,25%,90%)]"}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={isDark ? "hsl(215,15%,50%)" : "hsl(220,15%,55%)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`${t("search")} tasks, projects...`}
            className={`flex-1 bg-transparent text-sm focus:outline-none ${isDark ? "text-[hsl(210,20%,90%)] placeholder-[hsl(215,15%,40%)]" : "text-[hsl(220,25%,15%)] placeholder-[hsl(220,15%,55%)]"}`}
          />
          <kbd className={`text-[10px] px-1.5 py-0.5 rounded border ${isDark ? "text-[hsl(215,15%,45%)] bg-[hsl(220,15%,20%)] border-[hsl(220,12%,28%)]" : "text-[hsl(220,15%,55%)] bg-[hsl(210,30%,94%)] border-[hsl(210,25%,85%)]"}`}>ESC</kbd>
        </div>
        <div className="max-h-72 overflow-y-auto">
          {query.trim().length === 0 ? (
            <div className={`py-8 text-center text-sm ${isDark ? "text-[hsl(215,15%,45%)]" : "text-[hsl(220,15%,55%)]"}`}>Type to search tasks and projects</div>
          ) : results.length === 0 ? (
            <div className={`py-8 text-center text-sm ${isDark ? "text-[hsl(215,15%,45%)]" : "text-[hsl(220,15%,55%)]"}`}>No results found for &quot;{query}&quot;</div>
          ) : (
            results.map((r, i) => (
              <button
                key={i}
                onClick={() => {
                  if (r.type === "task") setCurrentPage("my-tasks");
                  else { setCurrentProject(r.item); setCurrentPage("project-detail"); }
                  onClose();
                }}
                className={`flex items-center gap-3 w-full px-4 py-3 transition-colors border-b text-left ${
                  isDark 
                    ? "hover:bg-[hsl(220,15%,18%)] border-[hsl(220,12%,20%)]"
                    : "hover:bg-[hsl(210,30%,96%)] border-[hsl(210,25%,92%)]"
                }`}
              >
                <div className={`w-7 h-7 rounded flex items-center justify-center text-xs font-bold text-white ${r.type === "task" ? "bg-[hsl(210,80%,56%)]" : "bg-[hsl(280,65%,60%)]"}`}>
                  {r.type === "task" ? "T" : "P"}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm truncate ${isDark ? "text-[hsl(210,20%,88%)]" : "text-[hsl(220,25%,20%)]"}`}>{r.item.name}</p>
                  <p className={`text-xs ${isDark ? "text-[hsl(215,15%,50%)]" : "text-[hsl(220,15%,55%)]"}`}>{r.type === "task" ? "Task" : "Project"}</p>
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

function AppContent() {
  const { currentPage, user, sidebarCollapsed, notifications, onboardingComplete } = useApp();
  const { theme, t } = useTranslation();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;
  const isDark = theme === "dark";

  // Unauthenticated pages
  if (!user) {
    return (
      <>
        {currentPage === "login" && <LoginPage />}
        {currentPage === "signup" && <SignupPage />}
        {currentPage === "about" && <AboutPage />}
        {currentPage !== "login" && currentPage !== "signup" && currentPage !== "about" && <LandingPage />}
        <Chatbot />
      </>
    );
  }

  // Onboarding (after signup/login but before entering the app)
  if (!onboardingComplete && currentPage === "onboarding") {
    return (
      <>
        <OnboardingPage />
        <Chatbot />
      </>
    );
  }

  // Authenticated pages with sidebar
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "inbox":
        return <InboxPage />;
      case "my-tasks":
        return <MyTasksPage />;
      case "projects":
        return <ProjectsPage />;
      case "project-detail":
        return <ProjectDetailPage />;
      case "portfolios":
        return <PortfoliosPage />;
      case "goals":
        return <GoalsPage />;
      case "reporting":
        return <ReportingPage />;
      case "about":
        return <AboutPage />;
      case "settings":
        return <SettingsPage />;
      case "add-task":
        return <AddTaskPage />;
      case "add-project":
        return <AddProjectPage />;
      case "add-goal":
        return <AddGoalPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className={`flex min-h-screen transition-colors duration-300 ${isDark ? "bg-[hsl(220,15%,13%)]" : "bg-[hsl(210,40%,98%)]"}`}>
      <Sidebar />
      <main
        className="flex-1 overflow-y-auto transition-all duration-300"
        style={{
          marginLeft: sidebarCollapsed ? "4rem" : "15rem",
        }}
      >
        {/* Top header bar */}
        <header className={`sticky top-0 z-30 flex items-center justify-between px-8 py-4 backdrop-blur-xl border-b glass ${
          isDark ? "bg-[hsl(220,15%,13%,0.85)] border-[hsl(220,12%,18%)]" : "bg-[hsl(210,40%,98%,0.85)] border-[hsl(210,25%,90%)]"
        }`}>
          <div className="flex items-center gap-3">
            <h2 className={`text-sm font-medium capitalize ${isDark ? "text-[hsl(215,15%,55%)]" : "text-[hsl(220,15%,45%)]"}`}>
              {currentPage.replace(/-/g, " ")}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {/* Settings Bar (Language & Theme) */}
            <SettingsBar />
            
            {/* Search */}
            <button
              onClick={() => setShowSearch(true)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm w-56 transition-all ${
                isDark
                  ? "bg-[hsl(220,15%,16%)] border border-[hsl(220,12%,22%)] text-[hsl(215,15%,40%)] hover:border-[hsl(220,12%,28%)]"
                  : "bg-white border border-[hsl(210,25%,88%)] text-[hsl(220,15%,55%)] hover:border-[hsl(210,25%,80%)] shadow-sm"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              {t("search")}...
              <kbd className={`ml-auto text-[10px] px-1.5 py-0.5 rounded border ${isDark ? "bg-[hsl(220,15%,20%)] border-[hsl(220,12%,28%)]" : "bg-[hsl(210,30%,94%)] border-[hsl(210,25%,85%)]"}`}>/</kbd>
            </button>

            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => { setShowNotifications(!showNotifications); setShowMoreMenu(false); }}
                className={`relative p-2 rounded-lg transition-colors ${isDark ? "hover:bg-[hsl(220,15%,18%)]" : "hover:bg-[hsl(210,30%,94%)]"}`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={isDark ? "hsl(215,15%,55%)" : "hsl(220,15%,50%)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 106 8c0 7-3 9-3 9h18s-3-2-3-9z" />
                  <path d="M13.73 21a2 2 0 01-3.46 0" />
                </svg>
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 min-w-[16px] h-4 flex items-center justify-center text-[10px] font-bold text-white bg-[hsl(0,72%,51%)] rounded-full px-1">
                    {unreadCount}
                  </span>
                )}
              </button>
              {showNotifications && <NotificationDropdown onClose={() => setShowNotifications(false)} />}
            </div>

            {/* Three Dots Menu */}
            <div className="relative">
              <button
                onClick={() => { setShowMoreMenu(!showMoreMenu); setShowNotifications(false); }}
                className={`p-2 rounded-lg transition-colors ${isDark ? "hover:bg-[hsl(220,15%,18%)]" : "hover:bg-[hsl(210,30%,94%)]"}`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={isDark ? "hsl(215,15%,55%)" : "hsl(220,15%,50%)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" />
                </svg>
              </button>
              {showMoreMenu && <MoreMenu onClose={() => setShowMoreMenu(false)} />}
            </div>
          </div>
        </header>
        <div className="p-8">
          {renderPage()}
        </div>
      </main>

      {/* Search Overlay */}
      {showSearch && <SearchOverlay onClose={() => setShowSearch(false)} />}
      
      {/* Chatbot */}
      <Chatbot />
    </div>
  );
}

export default function Page() {
  return (
    <TranslationProvider>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </TranslationProvider>
  );
}
