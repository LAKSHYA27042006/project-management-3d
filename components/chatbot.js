"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "@/lib/translation-context";
import { useApp } from "@/lib/app-context";

export default function Chatbot() {
  const { t, getPreLoginQA, getPostLoginQA, theme } = useTranslation();
  const { user } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showQuestions, setShowQuestions] = useState(true);
  const messagesEndRef = useRef(null);

  const qa = user ? getPostLoginQA() : getPreLoginQA();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Reset messages when auth state changes
  useEffect(() => {
    setMessages([]);
    setShowQuestions(true);
  }, [user]);

  const handleQuestionClick = (question, answer) => {
    setMessages((prev) => [
      ...prev,
      { type: "user", text: question },
      { type: "bot", text: answer },
    ]);
    setShowQuestions(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");

    // Find matching question
    const match = qa.find(
      (item) =>
        item.q.toLowerCase().includes(userMessage.toLowerCase()) ||
        userMessage.toLowerCase().includes(item.q.toLowerCase().split(" ").slice(0, 3).join(" "))
    );

    const botResponse = match
      ? match.a
      : user
      ? "I'm sorry, I don't have information about that. Please try selecting from the suggested questions or contact our support team for more help."
      : "I'm sorry, I don't have information about that. Please try selecting from the suggested questions or sign up to get started!";

    setMessages((prev) => [
      ...prev,
      { type: "user", text: userMessage },
      { type: "bot", text: botResponse },
    ]);
    setShowQuestions(false);
  };

  const handleShowQuestions = () => {
    setShowQuestions(true);
  };

  const isDark = theme === "dark";

  return (
    <div className="chatbot-container">
      {/* Chatbot Window */}
      {isOpen && (
        <div
          className={`chatbot-window glass-strong animate-scale-in ${
            isDark ? "bg-[hsl(220,15%,12%)]" : "bg-white"
          }`}
          style={{
            boxShadow: isDark
              ? "0 25px 50px -12px hsla(0, 0%, 0%, 0.5), 0 0 40px hsla(210, 80%, 56%, 0.1)"
              : "0 25px 50px -12px hsla(210, 50%, 30%, 0.3), 0 0 40px hsla(210, 85%, 50%, 0.1)",
          }}
        >
          {/* Header */}
          <div
            className={`flex items-center justify-between px-4 py-3 ${
              isDark
                ? "bg-gradient-to-r from-[hsl(210,80%,50%)] to-[hsl(280,65%,55%)]"
                : "bg-gradient-to-r from-[hsl(210,85%,50%)] to-[hsl(280,70%,55%)]"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">{t("chatbotTitle")}</h3>
                <p className="text-white/70 text-xs">
                  {user ? "Logged in" : "Guest"}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div
            className={`h-72 overflow-y-auto p-4 ${
              isDark ? "bg-[hsl(220,15%,10%)]" : "bg-[hsl(210,40%,98%)]"
            }`}
          >
            {messages.length === 0 && showQuestions ? (
              <div className="space-y-2">
                <p
                  className={`text-xs font-medium mb-3 ${
                    isDark ? "text-[hsl(215,15%,55%)]" : "text-[hsl(220,15%,45%)]"
                  }`}
                >
                  {user ? "Common questions:" : "Frequently asked:"}
                </p>
                {qa.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuestionClick(item.q, item.a)}
                    className={`w-full text-left p-3 rounded-lg text-xs transition-all hover:scale-[1.01] ${
                      isDark
                        ? "bg-[hsl(220,15%,16%)] hover:bg-[hsl(220,15%,20%)] text-[hsl(210,20%,85%)] border border-[hsl(220,12%,22%)]"
                        : "bg-white hover:bg-[hsl(210,30%,96%)] text-[hsl(220,25%,20%)] border border-[hsl(210,25%,88%)] shadow-sm"
                    }`}
                  >
                    {item.q}
                  </button>
                ))}
              </div>
            ) : (
              <>
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`mb-3 flex ${
                      msg.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] p-3 rounded-xl text-xs leading-relaxed ${
                        msg.type === "user"
                          ? isDark
                            ? "bg-[hsl(210,80%,50%)] text-white"
                            : "bg-[hsl(210,85%,50%)] text-white"
                          : isDark
                          ? "bg-[hsl(220,15%,18%)] text-[hsl(210,20%,85%)] border border-[hsl(220,12%,22%)]"
                          : "bg-white text-[hsl(220,25%,20%)] border border-[hsl(210,25%,88%)] shadow-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
                {!showQuestions && (
                  <button
                    onClick={handleShowQuestions}
                    className={`mt-2 text-xs font-medium ${
                      isDark
                        ? "text-[hsl(210,80%,60%)] hover:text-[hsl(210,80%,70%)]"
                        : "text-[hsl(210,85%,50%)] hover:text-[hsl(210,85%,40%)]"
                    }`}
                  >
                    Show suggested questions
                  </button>
                )}
              </>
            )}
          </div>

          {/* Input Area */}
          <form
            onSubmit={handleSubmit}
            className={`p-3 border-t ${
              isDark
                ? "bg-[hsl(220,15%,12%)] border-[hsl(220,12%,20%)]"
                : "bg-white border-[hsl(210,25%,90%)]"
            }`}
          >
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t("askQuestion")}
                className={`flex-1 px-3 py-2 rounded-lg text-sm outline-none transition-all ${
                  isDark
                    ? "bg-[hsl(220,15%,16%)] border border-[hsl(220,12%,22%)] text-[hsl(210,20%,90%)] placeholder-[hsl(215,15%,40%)] focus:border-[hsl(210,80%,56%)] focus:shadow-[0_0_0_1px_hsl(210,80%,56%)]"
                    : "bg-[hsl(210,40%,98%)] border border-[hsl(210,25%,88%)] text-[hsl(220,25%,15%)] placeholder-[hsl(220,15%,55%)] focus:border-[hsl(210,85%,50%)] focus:shadow-[0_0_0_1px_hsl(210,85%,50%)]"
                }`}
              />
              <button
                type="submit"
                className={`p-2.5 rounded-lg transition-all btn-3d ${
                  isDark
                    ? "bg-[hsl(210,80%,50%)] hover:bg-[hsl(210,80%,45%)] text-white"
                    : "bg-[hsl(210,85%,50%)] hover:bg-[hsl(210,85%,45%)] text-white"
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
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`chatbot-button btn-3d ${
          isDark
            ? "bg-gradient-to-br from-[hsl(210,80%,50%)] to-[hsl(280,65%,55%)]"
            : "bg-gradient-to-br from-[hsl(210,85%,50%)] to-[hsl(280,70%,55%)]"
        }`}
        style={{
          boxShadow: isDark
            ? "0 10px 40px -10px hsla(210, 80%, 50%, 0.5), 0 0 20px hsla(210, 80%, 56%, 0.2)"
            : "0 10px 40px -10px hsla(210, 85%, 50%, 0.4), 0 0 20px hsla(210, 85%, 50%, 0.15)",
        }}
      >
        {isOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        )}
      </button>
    </div>
  );
}
