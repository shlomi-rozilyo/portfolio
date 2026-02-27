"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";
import { ProjectCard } from "@/components/project-card";
import { CaseStudyDrawer } from "@/components/case-study-drawer";
import { AboutSection } from "@/components/about-section";
import {
  projects,
  featuredProjects,
  gridProjects,
  type Project,
} from "@/lib/projects";

type Tab = "work" | "about";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("work");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const allProjects = [...featuredProjects, ...gridProjects];
  const currentIndex = selectedProject
    ? allProjects.findIndex((p) => p.id === selectedProject.id)
    : -1;

  const openDrawer = (project: Project) => {
    setSelectedProject(project);
    setDrawerOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    document.body.style.overflow = "";
    setTimeout(() => setSelectedProject(null), 500);
  };

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) {
      setSelectedProject(allProjects[currentIndex - 1]);
    }
  }, [currentIndex, allProjects]);

  const goToNext = useCallback(() => {
    if (currentIndex < allProjects.length - 1) {
      setSelectedProject(allProjects[currentIndex + 1]);
    }
  }, [currentIndex, allProjects]);

  const tabs: { id: Tab; label: string }[] = [
    { id: "work", label: "My Work" },
    { id: "about", label: "About Me" },
  ];

  return (
    <main className="relative min-h-screen">
      <Header />

      {/* Segmented Tab Control */}
      <section className="mx-auto max-w-[975px] px-6 pb-12 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative inline-flex h-9 items-center overflow-hidden rounded-[6px] p-[3px]"
          style={{
            border: "1px solid var(--color-border)",
            backgroundColor: "transparent",
          }}
        >
          {/* Animated active background pill */}
          <motion.div
            className="absolute top-[3px] bottom-[3px] rounded-[4px]"
            style={{ backgroundColor: "var(--color-foreground)" }}
            initial={false}
            animate={{
              left: activeTab === "work" ? 3 : "calc(50% + 1.5px)",
              right: activeTab === "work" ? "calc(50% + 1.5px)" : 3,
            }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          />

          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative z-10 flex items-center justify-center px-5 text-[13px] font-medium transition-colors duration-200"
              style={{
                color:
                  activeTab === tab.id
                    ? "var(--color-background)"
                    : "var(--color-muted)",
                minWidth: 84,
                height: "100%",
              }}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === "work" ? (
          <motion.div
            key="work"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Featured Work — 3 Large Cards */}
            <section className="mx-auto max-w-[975px] px-6">
              <div className="space-y-16">
                {featuredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    variant="featured"
                    onClick={openDrawer}
                  />
                ))}
              </div>
            </section>

            {/* Work Grid — 2x2 */}
            <section className="mx-auto max-w-[975px] px-6 pt-16 md:pt-24">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-12">
                {gridProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    variant="grid"
                    onClick={openDrawer}
                  />
                ))}
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <AboutSection />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="mx-auto max-w-[975px] px-6 py-20 md:py-32">
        <div
          className="border-t pt-8"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p
              className="text-sm"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              &copy; {new Date().getFullYear()} Shlomi Rozilyo. All rights
              reserved.
            </p>
            <p
              className="text-sm"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              Designed & built with care.
            </p>
          </div>
        </div>
      </footer>

      {/* Case Study Drawer */}
      <CaseStudyDrawer
        project={selectedProject}
        isOpen={drawerOpen}
        onClose={closeDrawer}
        onPrev={goToPrev}
        onNext={goToNext}
        hasPrev={currentIndex > 0}
        hasNext={currentIndex < allProjects.length - 1}
        currentIndex={currentIndex}
        totalCount={allProjects.length}
      />
    </main>
  );
}
