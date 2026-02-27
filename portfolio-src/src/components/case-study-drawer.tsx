"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/projects";

interface CaseStudyDrawerProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  currentIndex: number;
  totalCount: number;
}

const MIN_WIDTH = 380;
const MAX_WIDTH_PERCENT = 92;
const DEFAULT_WIDTH_PERCENT = 70;

export function CaseStudyDrawer({
  project,
  isOpen,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  currentIndex,
  totalCount,
}: CaseStudyDrawerProps) {
  const [drawerWidth, setDrawerWidth] = useState<number | null>(null);
  const isDragging = useRef(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && drawerWidth === null) {
      setDrawerWidth(
        Math.max(
          MIN_WIDTH,
          Math.round(window.innerWidth * (DEFAULT_WIDTH_PERCENT / 100))
        )
      );
    }
  }, [isOpen, drawerWidth]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, hasPrev, hasNext, onPrev, onNext]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";

    const onMouseMove = (ev: MouseEvent) => {
      if (!isDragging.current) return;
      const newWidth = window.innerWidth - ev.clientX;
      const maxW = window.innerWidth * (MAX_WIDTH_PERCENT / 100);
      setDrawerWidth(Math.min(maxW, Math.max(MIN_WIDTH, newWidth)));
    };

    const onMouseUp = () => {
      isDragging.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }, []);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Desktop Drawer */}
          <motion.div
            ref={drawerRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 z-50 hidden h-full md:flex"
            style={{
              width: drawerWidth ?? "70vw",
              backgroundColor: "var(--color-background)",
              borderLeft: "1px solid var(--color-border)",
            }}
          >
            {/* Resize Handle */}
            <div
              onMouseDown={handleMouseDown}
              className="group relative flex w-5 flex-shrink-0 cursor-col-resize items-center justify-center"
              style={{ marginLeft: -10 }}
            >
              <div className="absolute inset-y-0 -left-2 -right-2" />
              <div
                className="flex items-center justify-center rounded-full transition-colors duration-150"
                style={{
                  width: 15,
                  height: 120,
                  backgroundColor: "var(--color-border)",
                }}
              >
                <svg
                  width="10"
                  height="48"
                  viewBox="0 0 10 48"
                  fill="none"
                  className="opacity-60 transition-opacity duration-150 group-hover:opacity-100"
                >
                  <line x1="3" y1="1" x2="3" y2="47" stroke="var(--color-muted-foreground)" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="7" y1="1" x2="7" y2="47" stroke="var(--color-muted-foreground)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Scrollable content area */}
            <div className="flex-1 overflow-y-auto">
              <DrawerContent
                project={project}
                onClose={onClose}
                onPrev={onPrev}
                onNext={onNext}
                hasPrev={hasPrev}
                hasNext={hasNext}
                currentIndex={currentIndex}
                totalCount={totalCount}
              />
            </div>
          </motion.div>

          {/* Mobile: slides from bottom */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-0 left-0 right-0 z-50 block max-h-[92vh] overflow-y-auto rounded-t-3xl md:hidden"
            style={{
              backgroundColor: "var(--color-background)",
              borderTop: "1px solid var(--color-border)",
            }}
          >
            <div
              className="sticky top-0 z-10 flex justify-center pb-2 pt-3"
              style={{ backgroundColor: "var(--color-background)" }}
            >
              <div
                className="h-1.5 w-12 rounded-full"
                style={{ backgroundColor: "var(--color-border)" }}
              />
            </div>
            <DrawerContent
              project={project}
              onClose={onClose}
              onPrev={onPrev}
              onNext={onNext}
              hasPrev={hasPrev}
              hasNext={hasNext}
              currentIndex={currentIndex}
              totalCount={totalCount}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function NavButton({
  onClick,
  disabled,
  ariaLabel,
  children,
}: {
  onClick: () => void;
  disabled: boolean;
  ariaLabel: string;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200"
      style={{
        border: "1px solid var(--color-border)",
        color: disabled ? "var(--color-border)" : "var(--color-muted)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.4 : 1,
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.color = "var(--color-foreground)";
          e.currentTarget.style.borderColor = "var(--color-muted)";
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.color = "var(--color-muted)";
          e.currentTarget.style.borderColor = "var(--color-border)";
        }
      }}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

function DrawerContent({
  project,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  currentIndex,
  totalCount,
}: {
  project: Project;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  currentIndex: number;
  totalCount: number;
}) {
  return (
    <div className="relative">
      {/* Header bar */}
      <div
        className="sticky top-0 z-10 flex items-center justify-between px-8 py-6"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        {/* Left: category tag */}
        <span
          className="rounded-full px-3 py-1 text-xs font-medium"
          style={{
            backgroundColor: "var(--color-card)",
            color: "var(--color-muted)",
            border: "1px solid var(--color-border)",
          }}
        >
          {project.category}
        </span>

        {/* Right: nav arrows + counter + close */}
        <div className="flex items-center gap-2">
          <NavButton onClick={onPrev} disabled={!hasPrev} ariaLabel="Previous project">
            <ChevronLeft size={18} />
          </NavButton>

          <span
            className="min-w-[40px] text-center text-xs font-medium tabular-nums"
            style={{ color: "var(--color-muted-foreground)" }}
          >
            {currentIndex + 1} / {totalCount}
          </span>

          <NavButton onClick={onNext} disabled={!hasNext} ariaLabel="Next project">
            <ChevronRight size={18} />
          </NavButton>

          <div
            className="mx-1 h-5"
            style={{
              width: 1,
              backgroundColor: "var(--color-border)",
            }}
          />

          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200"
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
            aria-label="Close drawer"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Header image placeholder */}
      <div className="mx-8 overflow-hidden rounded-2xl">
        <div
          className="aspect-video w-full"
          style={{
            background:
              "linear-gradient(135deg, hsl(220, 15%, 15%), hsl(220, 15%, 22%))",
          }}
        />
      </div>

      {/* Content */}
      <div className="px-8 pb-16 pt-8">
        <motion.h2
          key={project.id + "-title"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="text-3xl font-bold tracking-tight md:text-4xl"
          style={{ color: "var(--color-foreground)" }}
        >
          {project.title}
        </motion.h2>

        <motion.p
          key={project.id + "-subtitle"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="mt-2 text-lg"
          style={{ color: "var(--color-muted)" }}
        >
          {project.subtitle}
        </motion.p>

        {/* Meta info */}
        <motion.div
          key={project.id + "-meta"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-8 grid grid-cols-3 gap-6 rounded-xl p-6"
          style={{
            backgroundColor: "var(--color-card)",
            border: "1px solid var(--color-border)",
          }}
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--color-muted-foreground)" }}>Role</p>
            <p className="mt-1 text-sm font-medium" style={{ color: "var(--color-foreground)" }}>{project.caseStudy.role}</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--color-muted-foreground)" }}>Duration</p>
            <p className="mt-1 text-sm font-medium" style={{ color: "var(--color-foreground)" }}>{project.caseStudy.duration}</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--color-muted-foreground)" }}>Tools</p>
            <p className="mt-1 text-sm font-medium" style={{ color: "var(--color-foreground)" }}>{project.caseStudy.tools.slice(0, 2).join(", ")}</p>
          </div>
        </motion.div>

        {/* Overview */}
        <motion.div
          key={project.id + "-overview"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="mt-10"
        >
          <p className="text-lg leading-relaxed" style={{ color: "var(--color-muted)" }}>
            {project.caseStudy.overview}
          </p>
        </motion.div>

        {/* Sections */}
        <div className="mt-12 space-y-10">
          {project.caseStudy.sections.map((section, i) => (
            <motion.div
              key={project.id + "-" + section.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
            >
              <h3 className="text-lg font-semibold" style={{ color: "var(--color-foreground)" }}>{section.title}</h3>
              <p className="mt-3 leading-relaxed" style={{ color: "var(--color-muted)" }}>{section.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Tools used */}
        <motion.div
          key={project.id + "-tools"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-12"
        >
          <h3 className="text-sm font-medium uppercase tracking-wider" style={{ color: "var(--color-muted-foreground)" }}>
            Tools & Technologies
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.caseStudy.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full px-3 py-1.5 text-sm"
                style={{
                  backgroundColor: "var(--color-card)",
                  color: "var(--color-muted)",
                  border: "1px solid var(--color-border)",
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
