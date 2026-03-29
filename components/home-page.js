"use client";

import { useApp } from "@/lib/app-context";
import { useTranslation } from "@/lib/translation-context";

export default function HomePage() {
  const { user, tasks, projects, setCurrentPage, setCurrentProject } = useApp();
  const { t, theme } = useTranslation();
  const isDark = theme === "dark";
  
  const myTasks = tasks.filter((t) => t.assignee === "You");
  const todoTasks = myTasks.filter((t) => t.section === "To do");
  const doingTasks = myTasks.filter((t) => t.section === "Doing");
  const doneTasks = myTasks.filter((t) => t.section === "Done");

  const greeting = () => {
    const h = new Date().getHours();
    if (h < 12) return t("goodMorning") || "Good morning";
    if (h < 18) return t("goodAfternoon") || "Good afternoon";
    return t("goodEvening") || "Good evening";
  };

  return (
    <div className="animate-fade-in-3d">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className={`text-2xl font-bold mb-1 ${isDark ? "text-[hsl(210,20%,95%)]" : "text-[hsl(220,40%,10%)]"}`}>
          {greeting()}, {user?.name || "there"}
        </h1>
        <p className={isDark ? "text-[hsl(215,15%,55%)]" : "text-[hsl(220,25%,35%)]"}>
          {t("homeSubtitle") || "Here's what's happening across your projects."}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: t("totalTasks") || "Total Tasks", value: myTasks.length, color: "hsl(210,80%,56%)" },
          { label: t("todo") || "To Do", value: todoTasks.length, color: isDark ? "hsl(215,15%,55%)" : "hsl(220,30%,45%)" },
          { label: t("inProgress") || "In Progress", value: doingTasks.length, color: "hsl(38,92%,50%)" },
          { label: t("completed") || "Completed", value: doneTasks.length, color: "hsl(142,72%,42%)" },
        ].map((s, i) => (
          <div
            key={i}
            className={`rounded-xl border p-5 card-3d transition-colors ${
              isDark
                ? "bg-[hsl(220,15%,14%)] border-[hsl(220,12%,20%)]"
                : "bg-white border-[hsl(210,25%,88%)] shadow-sm"
            }`}
          >
            <p className={`text-sm mb-1 ${isDark ? "text-[hsl(215,15%,55%)]" : "text-[hsl(220,25%,40%)]"}`}>{s.label}</p>
            <p className="text-3xl font-bold" style={{ color: s.color }}>
              {s.value}
            </p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* My Tasks */}
        <div className={`lg:col-span-2 rounded-xl border overflow-hidden card-3d ${
          isDark
            ? "bg-[hsl(220,15%,14%)] border-[hsl(220,12%,20%)]"
            : "bg-white border-[hsl(210,25%,88%)] shadow-sm"
        }`}>
          <div className={`flex items-center justify-between px-5 py-4 border-b ${
            isDark ? "border-[hsl(220,12%,20%)]" : "border-[hsl(210,25%,90%)]"
          }`}>
            <h2 className={`text-base font-semibold ${isDark ? "text-[hsl(210,20%,92%)]" : "text-[hsl(220,40%,10%)]"}`}>
              {t("myTasks") || "My Tasks"}
            </h2>
            <button
              onClick={() => setCurrentPage("my-tasks")}
              className={`text-sm hover:underline ${isDark ? "text-[hsl(210,80%,56%)]" : "text-[hsl(210,90%,40%)]"}`}
            >
              {t("viewAll") || "View all"}
            </button>
          </div>
          <div className={`divide-y ${isDark ? "divide-[hsl(220,12%,20%)]" : "divide-[hsl(210,25%,92%)]"}`}>
            {myTasks.slice(0, 5).map((task) => (
              <div key={task.id} className={`flex items-center gap-4 px-5 py-3 transition-colors ${
                isDark ? "hover:bg-[hsl(220,15%,16%)]" : "hover:bg-[hsl(210,30%,97%)]"
              }`}>
                <button
                  onClick={() => {
                    /* toggle done */
                  }}
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    task.section === "Done"
                      ? "bg-[hsl(142,72%,42%)] border-[hsl(142,72%,42%)]"
                      : isDark
                        ? "border-[hsl(220,12%,30%)] hover:border-[hsl(210,80%,56%)]"
                        : "border-[hsl(210,25%,75%)] hover:border-[hsl(210,90%,45%)]"
                  }`}
                >
                  {task.section === "Done" && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </button>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm truncate ${
                    task.section === "Done"
                      ? isDark ? "text-[hsl(215,15%,45%)] line-through" : "text-[hsl(220,15%,55%)] line-through"
                      : isDark ? "text-[hsl(210,20%,88%)]" : "text-[hsl(220,35%,15%)]"
                  }`}>
                    {task.name}
                  </p>
                </div>
                <PriorityBadge priority={task.priority} isDark={isDark} />
                <StatusBadge status={task.status} isDark={isDark} />
                <span className={`text-xs flex-shrink-0 ${isDark ? "text-[hsl(215,15%,45%)]" : "text-[hsl(220,20%,50%)]"}`}>
                  {formatDate(task.dueDate)}
                </span>
              </div>
            ))}
            {myTasks.length === 0 && (
              <div className={`px-5 py-10 text-center text-sm ${isDark ? "text-[hsl(215,15%,45%)]" : "text-[hsl(220,20%,50%)]"}`}>
                {t("noTasksYet") || "No tasks assigned to you yet."}
              </div>
            )}
          </div>
        </div>

        {/* Projects */}
        <div className={`rounded-xl border overflow-hidden card-3d ${
          isDark
            ? "bg-[hsl(220,15%,14%)] border-[hsl(220,12%,20%)]"
            : "bg-white border-[hsl(210,25%,88%)] shadow-sm"
        }`}>
          <div className={`flex items-center justify-between px-5 py-4 border-b ${
            isDark ? "border-[hsl(220,12%,20%)]" : "border-[hsl(210,25%,90%)]"
          }`}>
            <h2 className={`text-base font-semibold ${isDark ? "text-[hsl(210,20%,92%)]" : "text-[hsl(220,40%,10%)]"}`}>
              {t("projects") || "Projects"}
            </h2>
            <button
              onClick={() => setCurrentPage("projects")}
              className={`text-sm hover:underline ${isDark ? "text-[hsl(210,80%,56%)]" : "text-[hsl(210,90%,40%)]"}`}
            >
              {t("viewAll") || "View all"}
            </button>
          </div>
          <div className={`divide-y ${isDark ? "divide-[hsl(220,12%,20%)]" : "divide-[hsl(210,25%,92%)]"}`}>
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => {
                  setCurrentProject(project);
                  setCurrentPage("project-detail");
                }}
                className={`w-full flex items-center gap-3 px-5 py-3 transition-colors text-left ${
                  isDark ? "hover:bg-[hsl(220,15%,16%)]" : "hover:bg-[hsl(210,30%,97%)]"
                }`}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: project.color }}
                >
                  {project.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm truncate ${isDark ? "text-[hsl(210,20%,88%)]" : "text-[hsl(220,35%,15%)]"}`}>
                    {project.name}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className={`flex-1 h-1.5 rounded-full overflow-hidden ${
                      isDark ? "bg-[hsl(220,12%,20%)]" : "bg-[hsl(210,25%,90%)]"
                    }`}>
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${project.progress}%`,
                          backgroundColor: project.color,
                        }}
                      />
                    </div>
                    <span className={`text-xs ${isDark ? "text-[hsl(215,15%,50%)]" : "text-[hsl(220,20%,45%)]"}`}>
                      {project.progress}%
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className={`mt-6 rounded-xl border overflow-hidden card-3d ${
        isDark
          ? "bg-[hsl(220,15%,14%)] border-[hsl(220,12%,20%)]"
          : "bg-white border-[hsl(210,25%,88%)] shadow-sm"
      }`}>
        <div className={`px-5 py-4 border-b ${isDark ? "border-[hsl(220,12%,20%)]" : "border-[hsl(210,25%,90%)]"}`}>
          <h2 className={`text-base font-semibold ${isDark ? "text-[hsl(210,20%,92%)]" : "text-[hsl(220,40%,10%)]"}`}>
            {t("recentActivity") || "Recent Activity"}
          </h2>
        </div>
        <div className={`divide-y ${isDark ? "divide-[hsl(220,12%,20%)]" : "divide-[hsl(210,25%,92%)]"}`}>
          {[
            { action: "created task", item: "Design homepage mockup", project: "Website Redesign", time: "2 hours ago" },
            { action: "completed task", item: "Social media content plan", project: "Marketing Campaign Q1", time: "5 hours ago" },
            { action: "updated project", item: "Mobile App Development", project: "", time: "1 day ago" },
            { action: "added goal", item: "Launch redesigned website", project: "", time: "2 days ago" },
          ].map((a, i) => (
            <div key={i} className={`flex items-center gap-3 px-5 py-3 ${
              isDark ? "hover:bg-[hsl(220,15%,16%)]" : "hover:bg-[hsl(210,30%,97%)]"
            } transition-colors`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                isDark ? "bg-[hsl(210,80%,56%,0.12)]" : "bg-[hsl(210,90%,45%,0.1)]"
              }`}>
                <span className={`text-sm font-semibold ${isDark ? "text-[hsl(210,80%,56%)]" : "text-[hsl(210,90%,40%)]"}`}>
                  {user?.name?.charAt(0)?.toUpperCase() || "U"}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm ${isDark ? "text-[hsl(210,20%,85%)]" : "text-[hsl(220,30%,25%)]"}`}>
                  <span className={`font-medium ${isDark ? "text-[hsl(210,20%,92%)]" : "text-[hsl(220,40%,10%)]"}`}>
                    {user?.name || "You"}
                  </span>{" "}
                  {a.action}{" "}
                  <span className={`font-medium ${isDark ? "text-[hsl(210,80%,65%)]" : "text-[hsl(210,90%,40%)]"}`}>
                    {a.item}
                  </span>
                  {a.project && (
                    <span className={isDark ? "text-[hsl(215,15%,50%)]" : "text-[hsl(220,20%,45%)]"}>
                      {" "}in {a.project}
                    </span>
                  )}
                </p>
              </div>
              <span className={`text-xs flex-shrink-0 ${isDark ? "text-[hsl(215,15%,45%)]" : "text-[hsl(220,20%,50%)]"}`}>
                {a.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PriorityBadge({ priority, isDark = true }) {
  const styles = {
    High: "bg-[hsl(0,72%,51%,0.15)] text-[hsl(0,72%,50%)]",
    Medium: "bg-[hsl(38,92%,50%,0.15)] text-[hsl(38,92%,40%)]",
    Low: "bg-[hsl(210,80%,56%,0.15)] text-[hsl(210,80%,45%)]",
  };
  const darkStyles = {
    High: "bg-[hsl(0,72%,51%,0.15)] text-[hsl(0,72%,65%)]",
    Medium: "bg-[hsl(38,92%,50%,0.15)] text-[hsl(38,92%,60%)]",
    Low: "bg-[hsl(210,80%,56%,0.15)] text-[hsl(210,80%,65%)]",
  };
  const currentStyles = isDark ? darkStyles : styles;
  return (
    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${currentStyles[priority] || currentStyles.Low}`}>
      {priority}
    </span>
  );
}

export function StatusBadge({ status, isDark = true }) {
  const styles = {
    "On track": isDark ? "bg-[hsl(142,72%,42%,0.15)] text-[hsl(142,72%,55%)]" : "bg-[hsl(142,72%,42%,0.15)] text-[hsl(142,72%,30%)]",
    "At risk": isDark ? "bg-[hsl(38,92%,50%,0.15)] text-[hsl(38,92%,60%)]" : "bg-[hsl(38,92%,50%,0.15)] text-[hsl(38,92%,35%)]",
    "Off track": isDark ? "bg-[hsl(0,72%,51%,0.15)] text-[hsl(0,72%,65%)]" : "bg-[hsl(0,72%,51%,0.15)] text-[hsl(0,72%,40%)]",
  };
  return (
    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${styles[status] || ""}`}>
      {status}
    </span>
  );
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  const now = new Date();
  const diff = Math.ceil((d - now) / (1000 * 60 * 60 * 24));
  if (diff === 0) return "Today";
  if (diff === 1) return "Tomorrow";
  if (diff < 0) return `${Math.abs(diff)}d overdue`;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
