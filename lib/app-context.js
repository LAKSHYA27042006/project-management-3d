"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";

const AppContext = createContext(null);

const defaultUser = null;

const defaultProjects = [
  {
    id: "p1",
    name: "Website Redesign",
    color: "#4573d2",
    members: ["You", "Alice", "Bob"],
    status: "On track",
    progress: 65,
    description: "Complete overhaul of the company website",
  },
  {
    id: "p2",
    name: "Mobile App Development",
    color: "#aa62e3",
    members: ["You", "Charlie"],
    status: "At risk",
    progress: 40,
    description: "Build iOS and Android mobile application",
  },
  {
    id: "p3",
    name: "Marketing Campaign Q1",
    color: "#e8842c",
    members: ["You", "Diana", "Eve"],
    status: "On track",
    progress: 80,
    description: "Q1 marketing campaign planning and execution",
  },
  {
    id: "p4",
    name: "Data Migration",
    color: "#4ecbc4",
    members: ["You", "Frank"],
    status: "Off track",
    progress: 20,
    description: "Migrate legacy data to new system",
  },
];

const defaultTasks = [
  {
    id: "t1",
    name: "Design homepage mockup",
    projectId: "p1",
    assignee: "You",
    dueDate: "2026-02-10",
    priority: "High",
    status: "On track",
    section: "To do",
    description: "Create wireframes and mockups for the new homepage",
  },
  {
    id: "t2",
    name: "Set up CI/CD pipeline",
    projectId: "p1",
    assignee: "Alice",
    dueDate: "2026-02-12",
    priority: "Medium",
    status: "On track",
    section: "Doing",
    description: "Configure automated deployment pipeline",
  },
  {
    id: "t3",
    name: "Write API documentation",
    projectId: "p2",
    assignee: "Bob",
    dueDate: "2026-02-15",
    priority: "Low",
    status: "At risk",
    section: "To do",
    description: "Document all API endpoints for the mobile app",
  },
  {
    id: "t4",
    name: "User authentication module",
    projectId: "p2",
    assignee: "You",
    dueDate: "2026-02-09",
    priority: "High",
    status: "Off track",
    section: "Doing",
    description: "Implement login and registration functionality",
  },
  {
    id: "t5",
    name: "Social media content plan",
    projectId: "p3",
    assignee: "Diana",
    dueDate: "2026-02-08",
    priority: "Medium",
    status: "On track",
    section: "Done",
    description: "Create content calendar for social media",
  },
  {
    id: "t6",
    name: "Database schema design",
    projectId: "p4",
    assignee: "Frank",
    dueDate: "2026-02-20",
    priority: "High",
    status: "At risk",
    section: "To do",
    description: "Design the new database schema for migration",
  },
  {
    id: "t7",
    name: "Review competitor analysis",
    projectId: "p3",
    assignee: "Eve",
    dueDate: "2026-02-11",
    priority: "Low",
    status: "On track",
    section: "To do",
    description: "Analyze competitor marketing strategies",
  },
  {
    id: "t8",
    name: "Performance optimization",
    projectId: "p1",
    assignee: "You",
    dueDate: "2026-02-14",
    priority: "Medium",
    status: "On track",
    section: "To do",
    description: "Optimize page load times and performance metrics",
  },
];

const defaultGoals = [
  {
    id: "g1",
    name: "Launch redesigned website",
    status: "On track",
    progress: 65,
    timePeriod: "Q1 2026",
    team: "Engineering",
    owner: "You",
  },
  {
    id: "g2",
    name: "Reach 10k mobile app downloads",
    status: "At risk",
    progress: 30,
    timePeriod: "Q2 2026",
    team: "Product",
    owner: "Charlie",
  },
  {
    id: "g3",
    name: "Increase conversion rate by 20%",
    status: "On track",
    progress: 55,
    timePeriod: "Q1 2026",
    team: "Marketing",
    owner: "Diana",
  },
];

const defaultNotifications = [
  {
    id: 1,
    type: "task_assigned",
    title: "New task assigned to you",
    message: "Alice assigned \"Design homepage mockup\" to you in Website Redesign.",
    time: "2 hours ago",
    read: false,
    avatar: "A",
    color: "hsl(210,80%,56%)",
  },
  {
    id: 2,
    type: "comment",
    title: "New comment on your task",
    message: "Bob commented on \"Set up CI/CD pipeline\": \"Looks good, let's deploy to staging first.\"",
    time: "4 hours ago",
    read: false,
    avatar: "B",
    color: "hsl(142,72%,42%)",
  },
  {
    id: 3,
    type: "status_update",
    title: "Project status updated",
    message: "Mobile App Development status changed from \"On track\" to \"At risk\".",
    time: "6 hours ago",
    read: true,
    avatar: "C",
    color: "hsl(38,92%,50%)",
  },
  {
    id: 4,
    type: "due_soon",
    title: "Task due tomorrow",
    message: "\"User authentication module\" is due tomorrow.",
    time: "8 hours ago",
    read: true,
    avatar: "!",
    color: "hsl(0,72%,51%)",
  },
  {
    id: 5,
    type: "mention",
    title: "You were mentioned",
    message: "Diana mentioned you in Marketing Campaign Q1.",
    time: "1 day ago",
    read: true,
    avatar: "D",
    color: "hsl(280,65%,60%)",
  },
  {
    id: 6,
    type: "completed",
    title: "Task completed",
    message: "Eve completed \"Social media content plan\" in Marketing Campaign Q1.",
    time: "1 day ago",
    read: true,
    avatar: "E",
    color: "hsl(142,72%,42%)",
  },
];

// Helper to get stored users from localStorage
const getStoredUsers = () => {
  if (typeof window === "undefined") return {};
  try {
    const stored = localStorage.getItem("projectflow-users");
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

// Helper to save users to localStorage
const saveStoredUsers = (users) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem("projectflow-users", JSON.stringify(users));
  } catch {
    // Ignore storage errors
  }
};

// Helper to get current session from localStorage
const getStoredSession = () => {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem("projectflow-session");
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

// Helper to save session to localStorage
const saveStoredSession = (session) => {
  if (typeof window === "undefined") return;
  try {
    if (session) {
      localStorage.setItem("projectflow-session", JSON.stringify(session));
    } else {
      localStorage.removeItem("projectflow-session");
    }
  } catch {
    // Ignore storage errors
  }
};

export function AppProvider({ children }) {
  const [user, setUser] = useState(defaultUser);
  const [projects, setProjects] = useState(defaultProjects);
  const [tasks, setTasks] = useState(defaultTasks);
  const [goals, setGoals] = useState(defaultGoals);
  const [notifications, setNotifications] = useState(defaultNotifications);
  const [currentPage, setCurrentPage] = useState("landing");
  const [currentProject, setCurrentProject] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  const [userProfile, setUserProfile] = useState({
    role: "",
    workFunction: "",
    useCase: "",
    tools: [],
    teamSize: "",
    projectLayout: "",
  });
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize from localStorage on mount
  useEffect(() => {
    const session = getStoredSession();
    if (session && session.user && session.email) {
      const users = getStoredUsers();
      const storedUser = users[session.email];
      if (storedUser && storedUser.onboardingComplete) {
        // User has completed onboarding before, restore session
        setUser(session.user);
        setUserProfile(storedUser.profile || {});
        setOnboardingComplete(true);
        setCurrentPage("home");
      } else if (storedUser) {
        // User exists but hasn't completed onboarding
        setUser(session.user);
        setCurrentPage("onboarding");
      }
    }
    setIsInitialized(true);
  }, []);

  const login = useCallback((email, password) => {
    const users = getStoredUsers();
    const existingUser = users[email];
    
    const newUser = { name: email.split("@")[0], email, avatar: null };
    setUser(newUser);
    saveStoredSession({ user: newUser, email });
    
    if (existingUser && existingUser.onboardingComplete) {
      // User has completed onboarding before, skip to home
      setUserProfile(existingUser.profile || {});
      setOnboardingComplete(true);
      setCurrentPage("home");
    } else {
      // New user or user hasn't completed onboarding
      setCurrentPage("onboarding");
      setOnboardingComplete(false);
    }
  }, []);

  const loginWithSocial = useCallback((provider) => {
    const names = { google: "Google User", linkedin: "LinkedIn User" };
    const emails = { google: "user@gmail.com", linkedin: "user@linkedin.com" };
    const email = emails[provider] || "user@example.com";
    
    const users = getStoredUsers();
    const existingUser = users[email];
    
    const newUser = { name: names[provider] || "User", email, avatar: null, provider };
    setUser(newUser);
    saveStoredSession({ user: newUser, email });
    
    if (existingUser && existingUser.onboardingComplete) {
      // User has completed onboarding before, skip to home
      setUserProfile(existingUser.profile || {});
      setOnboardingComplete(true);
      setCurrentPage("home");
    } else {
      // New user or user hasn't completed onboarding
      setCurrentPage("onboarding");
      setOnboardingComplete(false);
    }
  }, []);

  const signup = useCallback((name, email, password) => {
    const users = getStoredUsers();
    const existingUser = users[email];
    
    const newUser = { name, email, avatar: null };
    setUser(newUser);
    saveStoredSession({ user: newUser, email });
    
    if (existingUser && existingUser.onboardingComplete) {
      // User has completed onboarding before, skip to home
      setUserProfile(existingUser.profile || {});
      setOnboardingComplete(true);
      setCurrentPage("home");
    } else {
      // New user - go to onboarding
      setCurrentPage("onboarding");
      setOnboardingComplete(false);
    }
  }, []);

  const completeOnboarding = useCallback((profileData) => {
    setUserProfile((prev) => ({ ...prev, ...profileData }));
    setOnboardingComplete(true);
    setCurrentPage("home");
    
    // Save to localStorage so this user won't see onboarding again
    if (user && user.email) {
      const users = getStoredUsers();
      users[user.email] = {
        ...users[user.email],
        onboardingComplete: true,
        profile: { ...userProfile, ...profileData },
      };
      saveStoredUsers(users);
    }
  }, [user, userProfile]);

  const logout = useCallback(() => {
    setUser(null);
    // Don't reset onboarding status - it's stored per user in localStorage
    setOnboardingComplete(false);
    setUserProfile({ role: "", workFunction: "", useCase: "", tools: [], teamSize: "", projectLayout: "" });
    setCurrentPage("landing");
    saveStoredSession(null);
  }, []);

  const addTask = useCallback((task) => {
    const newTask = { ...task, id: "t" + Date.now() };
    setTasks((prev) => [...prev, newTask]);
    setNotifications((prev) => [
      { id: Date.now(), type: "task_created", title: "Task created", message: `You created "${task.name}".`, time: "Just now", read: false, avatar: "Y", color: "hsl(210,80%,56%)" },
      ...prev,
    ]);
  }, []);

  const updateTask = useCallback((id, updates) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updates } : t))
    );
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks((prev) => {
      const task = prev.find((t) => t.id === id);
      if (task) {
        setNotifications((n) => [
          { id: Date.now(), type: "task_deleted", title: "Task deleted", message: `You deleted "${task.name}".`, time: "Just now", read: false, avatar: "Y", color: "hsl(0,72%,51%)" },
          ...n,
        ]);
      }
      return prev.filter((t) => t.id !== id);
    });
  }, []);

  const addProject = useCallback((project) => {
    const newProject = { ...project, id: "p" + Date.now() };
    setProjects((prev) => [...prev, newProject]);
    setNotifications((prev) => [
      { id: Date.now(), type: "project_created", title: "Project created", message: `You created project "${project.name}".`, time: "Just now", read: false, avatar: "Y", color: "hsl(142,72%,42%)" },
      ...prev,
    ]);
  }, []);

  const addGoal = useCallback((goal) => {
    setGoals((prev) => [...prev, { ...goal, id: "g" + Date.now() }]);
  }, []);

  const markNotificationRead = useCallback((id) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  }, []);

  const markAllNotificationsRead = useCallback(() => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }, []);

  const deleteNotification = useCallback((id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  // Don't render children until initialized to prevent hydration mismatch
  if (!isInitialized) {
    return null;
  }

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        login,
        loginWithSocial,
        signup,
        logout,
        projects,
        setProjects,
        addProject,
        tasks,
        setTasks,
        addTask,
        updateTask,
        deleteTask,
        goals,
        setGoals,
        addGoal,
        notifications,
        setNotifications,
        markNotificationRead,
        markAllNotificationsRead,
        deleteNotification,
        currentPage,
        setCurrentPage,
        currentProject,
        setCurrentProject,
        sidebarCollapsed,
        setSidebarCollapsed,
        onboardingComplete,
        completeOnboarding,
        userProfile,
        setUserProfile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
