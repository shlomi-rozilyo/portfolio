"use client";

import { Moon, Sun, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "./theme-provider";

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <img
      src="/whatsapp.svg"
      alt=""
      width={size}
      height={size}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    />
  );
}

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full">
      <div className="mx-auto max-w-[975px] px-6 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="flex items-start justify-between">
          {/* Left side — Name & Info */}
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl font-bold tracking-tight md:text-6xl"
              style={{ color: "var(--color-foreground)" }}
            >
              Shlomi Rozilyo
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-3 text-lg md:text-xl"
              style={{ color: "var(--color-muted)" }}
            >
              Senior Product Designer
              <span className="mx-2 opacity-40">·</span>
              Founding Designer @ Snyk
              <span className="mx-2 opacity-40">·</span>
              AI & Vibe Coding
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 flex items-center gap-4"
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200"
                style={{
                  color: "var(--color-muted)",
                  border: "1px solid var(--color-border)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--color-foreground)";
                  e.currentTarget.style.borderColor = "var(--color-muted)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--color-muted)";
                  e.currentTarget.style.borderColor = "var(--color-border)";
                }}
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200"
                style={{
                  color: "var(--color-muted)",
                  border: "1px solid var(--color-border)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--color-foreground)";
                  e.currentTarget.style.borderColor = "var(--color-muted)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--color-muted)";
                  e.currentTarget.style.borderColor = "var(--color-border)";
                }}
              >
                <WhatsAppIcon size={16} />
                WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Right side — Avatar & Theme Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-start gap-4"
          >
            {/* Avatar */}
            <div
              className="h-20 w-20 overflow-hidden rounded-full md:h-28 md:w-28"
              style={{ border: "2px solid var(--color-border)" }}
            >
              <img
                src="/avatar.png"
                alt="Shlomi Rozilyo"
                className="h-full w-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <div
                className="hidden h-full w-full items-center justify-center text-2xl font-bold md:text-3xl"
                style={{
                  backgroundColor: "var(--color-card)",
                  color: "var(--color-muted)",
                }}
              >
                SR
              </div>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="mt-1 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200"
              style={{
                border: "1px solid var(--color-border)",
                color: "var(--color-muted)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-foreground)";
                e.currentTarget.style.borderColor = "var(--color-muted)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--color-muted)";
                e.currentTarget.style.borderColor = "var(--color-border)";
              }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
